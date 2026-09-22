import { ArrowUpRight, Download, MessageCircle } from "lucide-react";
import { useState, type MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonLink } from "@/components/ui/button-link";
import { siteIdentity } from "@/data/site";

type HeroCtaProps = {
  primaryLabel: string;
  secondaryLabel: string;
};

export function HeroCta({ primaryLabel, secondaryLabel }: HeroCtaProps) {
  const cvHref = siteIdentity.cvHref;
  const navigate = useNavigate();
  const [pressedAction, setPressedAction] = useState<"primary" | "secondary" | null>(null);

  const showPressed = (action: "primary" | "secondary") => {
    setPressedAction(action);
  };
  const releasePressed = () => {
    window.setTimeout(() => setPressedAction(null), 120);
  };

  const handlePrimaryClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    event.preventDefault();
    showPressed("primary");
    window.setTimeout(() => navigate("/projects"), 110);
  };

  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
      <ButtonLink
        to="/projects"
        variant="primary"
        size="lg"
        className="group w-full data-[pressed=true]:translate-y-px! data-[pressed=true]:scale-[0.96]! data-[pressed=true]:duration-75! sm:w-auto"
        data-pressed={pressedAction === "primary"}
        data-hero-cta
        onPointerDown={() => showPressed("primary")}
        onPointerUp={releasePressed}
        onPointerCancel={releasePressed}
        onClick={handlePrimaryClick}
      >
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105" />
        {primaryLabel}
      </ButtonLink>

      {cvHref ? (
        <ButtonLink
          href={cvHref}
          download="Randhu-Paksi-Membumi-CV.pdf"
          variant="outline"
          size="lg"
          className="group w-full data-[pressed=true]:translate-y-px! data-[pressed=true]:scale-[0.96]! data-[pressed=true]:duration-75! sm:w-auto"
          data-pressed={pressedAction === "secondary"}
          data-hero-cta
          onPointerDown={() => showPressed("secondary")}
          onPointerUp={releasePressed}
          onPointerCancel={releasePressed}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              showPressed("secondary");
            }
          }}
          onKeyUp={releasePressed}
          onClick={releasePressed}
        >
          <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          {secondaryLabel}
        </ButtonLink>
      ) : (
        <ButtonLink
          to="/contact"
          variant="outline"
          size="lg"
          className="group w-full data-[pressed=true]:translate-y-px! data-[pressed=true]:scale-[0.96]! data-[pressed=true]:duration-75! sm:w-auto"
          data-pressed={pressedAction === "secondary"}
          data-hero-cta
          onPointerDown={() => showPressed("secondary")}
          onPointerUp={releasePressed}
          onPointerCancel={releasePressed}
        >
          <MessageCircle className="size-4 transition-transform duration-300 group-hover:scale-110" />
          Let’s talk
        </ButtonLink>
      )}
    </div>
  );
}
