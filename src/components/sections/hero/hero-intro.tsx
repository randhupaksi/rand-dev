import type { ReactNode } from "react";

type HeroIntroProps = {
  eyebrow: string;
  name: string;
  rolePrefix: string;
  roleHighlight: string;
  description: string;
  mobileVisual?: ReactNode;
  mobileBadge?: ReactNode;
};

export function HeroIntro({
  eyebrow,
  name,
  rolePrefix,
  roleHighlight,
  description,
  mobileVisual,
  mobileBadge,
}: HeroIntroProps) {
  const [firstName, ...restNameParts] = name.split(" ");
  const restName = restNameParts.join(" ");

  return (
    <div className="content-stack-md">
      <div className="content-stack-xs">
        <p className="text-[2rem] font-semibold leading-none text-foreground sm:text-[2.1rem]">
          {eyebrow}
        </p>
        <h1 className="max-w-[30rem] text-[2.7rem] font-semibold leading-[0.92] tracking-[var(--tracking-title)] text-foreground sm:text-[4.35rem]">
          <span className="block bg-gradient-to-r from-[#f1d3ff] via-[var(--accent)] to-[#c24aff] bg-clip-text text-transparent">
            {firstName}
          </span>
          <span className="block text-foreground">{restName}</span>
        </h1>

        <p className="text-[1.65rem] font-semibold leading-[1.15] text-foreground sm:text-[1.75rem]">
          {rolePrefix}{" "}
          <span className="bg-gradient-to-r from-[#f1d3ff] via-[var(--accent)] to-[#c24aff] bg-clip-text text-transparent">
            {roleHighlight}
          </span>
        </p>
      </div>

      <p className="max-w-[34rem] text-[1rem] leading-7 text-muted-foreground">
        {description}
      </p>

      {mobileVisual ? <div className="mt-2 lg:hidden">{mobileVisual}</div> : null}
      {mobileBadge ? (
        <div className="mt-1 flex justify-center lg:hidden">{mobileBadge}</div>
      ) : null}
    </div>
  );
}
