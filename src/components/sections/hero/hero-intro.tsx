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
        <p className="type-h3 leading-none">
          {eyebrow}
        </p>
        <h1 className="type-h1 max-w-2xl">
          <span className="text-gradient-brand block">
            {firstName}
          </span>
          <span className="block text-foreground">{restName}</span>
        </h1>

        <p className="type-h3">
          {rolePrefix}{" "}
          <span className="text-gradient-brand">
            {roleHighlight}
          </span>
        </p>
      </div>

      <p className="type-body max-w-2xl">
        {description}
      </p>

      {mobileVisual ? <div className="mt-2 lg:hidden">{mobileVisual}</div> : null}
      {mobileBadge ? (
        <div className="mt-1 flex justify-center lg:hidden">{mobileBadge}</div>
      ) : null}
    </div>
  );
}
