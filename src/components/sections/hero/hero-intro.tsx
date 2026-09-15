import type { ReactNode } from "react";

type HeroIntroProps = {
  eyebrow: string;
  name: string;
  rolePrefix: string;
  roleHighlight: string;
  description: string;
  mobileSocials?: ReactNode;
  mobileVisual?: ReactNode;
  mobileBadge?: ReactNode;
};

export function HeroIntro({
  eyebrow,
  name,
  rolePrefix,
  roleHighlight,
  description,
  mobileSocials,
  mobileVisual,
  mobileBadge,
}: HeroIntroProps) {
  const [firstName, ...restNameParts] = name.split(" ");
  const restName = restNameParts.join(" ");

  return (
    <div className="content-stack-md">
      <div className="content-stack-xs">
        <p data-hero-eyebrow className="type-h3 leading-none">
          {eyebrow}
        </p>
        <h1 className="type-h1 max-w-2xl">
          <span data-hero-name-line className="text-gradient-brand block">
            {firstName}
          </span>
          <span data-hero-name-line className="block text-foreground">{restName}</span>
        </h1>

        <p data-hero-role className="type-h3">
          {rolePrefix}{" "}
          <span className="text-gradient-brand">
            {roleHighlight}
          </span>
        </p>
      </div>

      {mobileSocials ? <div className="lg:hidden">{mobileSocials}</div> : null}

      <p data-hero-description className="type-body max-w-2xl">
        {description}
      </p>

      {mobileVisual ? <div className="mt-2 lg:hidden">{mobileVisual}</div> : null}
      {mobileBadge ? (
        <div data-hero-mobile-badge className="mt-1 flex justify-center lg:hidden">{mobileBadge}</div>
      ) : null}
    </div>
  );
}
