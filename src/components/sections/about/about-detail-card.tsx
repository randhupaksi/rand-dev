import {
  GraduationCap,
  LayoutTemplate,
  ScanSearch,
} from "lucide-react";

import type { AboutCard, AboutCardIconKey } from "@/types/home";
import { Card } from "@/components/ui/card";

type AboutDetailCardProps = {
  card: AboutCard;
  iconKey: AboutCardIconKey;
};

const iconMap = {
  "graduation-cap": GraduationCap,
  "layout-template": LayoutTemplate,
  "scan-search": ScanSearch,
} satisfies Record<AboutCardIconKey, typeof GraduationCap>;

export function AboutDetailCard({
  card,
  iconKey,
}: AboutDetailCardProps) {
  const Icon = iconMap[iconKey];

  return (
    <Card as="article" interactive className="group h-full p-5">
      <div className="flex items-start gap-3">
        <div className="ds-icon-control size-10 text-accent transition-transform duration-300 group-hover:scale-105">
          <Icon className="size-4" />
        </div>

        <div className="min-w-0 content-stack-xs">
          <p className="type-overline">
            {card.label}
          </p>
          <h3 className="type-h4 text-base transition-colors duration-300">
            {card.title}
          </h3>
          <p className="type-body-sm">
            {card.description}
          </p>
        </div>
      </div>
    </Card>
  );
}
