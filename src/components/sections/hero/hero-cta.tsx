import { ArrowUpRight, Download, MessageCircle } from "lucide-react";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { siteIdentity } from "@/data/site";

type HeroCtaProps = {
  primaryLabel: string;
  secondaryLabel: string;
};

export function HeroCta({ primaryLabel, secondaryLabel }: HeroCtaProps) {
  const cvHref = siteIdentity.cvHref;
  const [isCvPressed, setIsCvPressed] = useState(false);

  const showCvPressed = () => setIsCvPressed(true);
  const releaseCvPressed = () => {
    window.setTimeout(() => setIsCvPressed(false), 120);
  };

  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:flex sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
      <ButtonLink
        to="/projects"
        variant="primary"
        size="lg"
        className="group w-full sm:w-auto"
        data-hero-cta
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
          className="group w-full data-[pressed=true]:translate-y-px data-[pressed=true]:scale-[0.96] data-[pressed=true]:duration-75 sm:w-auto"
          data-pressed={isCvPressed}
          data-hero-cta
          onPointerDown={showCvPressed}
          onPointerUp={releaseCvPressed}
          onPointerCancel={releaseCvPressed}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              showCvPressed();
            }
          }}
          onKeyUp={releaseCvPressed}
          onClick={releaseCvPressed}
        >
          <Download className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          {secondaryLabel}
        </ButtonLink>
      ) : (
        <ButtonLink
          to="/contact"
          variant="outline"
          size="lg"
          className="group w-full sm:w-auto"
          data-hero-cta
        >
          <MessageCircle className="size-4 transition-transform duration-300 group-hover:scale-110" />
          Let’s talk
        </ButtonLink>
      )}
    </div>
  );
}
