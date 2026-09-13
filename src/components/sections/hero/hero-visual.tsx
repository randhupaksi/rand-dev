import {
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem] overflow-hidden lg:overflow-visible">
      <div
        className="hero-glow-secondary absolute left-1/2 top-[16%] h-32 w-32 -translate-x-1/2 rounded-full blur-3xl sm:h-40 sm:w-40 lg:left-[12%] lg:top-[26%] lg:h-52 lg:w-52 lg:translate-x-0"
      />
      <div
        className="hero-glow-primary absolute left-1/2 top-[4%] h-44 w-44 -translate-x-1/2 rounded-full blur-3xl sm:h-52 sm:w-52 lg:left-auto lg:right-[8%] lg:top-[14%] lg:h-72 lg:w-72 lg:translate-x-0"
      />

      <div className="relative min-h-[11rem] pt-0 sm:min-h-[22rem] lg:min-h-[32rem] lg:pt-0">
        <div
          className="hero-frame relative mx-auto size-60 overflow-hidden rounded-full border sm:size-80 lg:absolute lg:left-[12%] lg:top-[7%] lg:mx-0 lg:size-[25rem]"
          data-hero-ring
        >
          <div className="absolute inset-0 rounded-full border border-border-subtle" />
          <div className="hero-portrait-surface absolute inset-[3%] rounded-full" />
          <div className="hero-portrait-inner absolute inset-[9%] overflow-hidden rounded-full border">
            <img
              src="/images/profile/randhu-no-bg.png"
              alt="Portrait of Randhu Paksi Membumi"
              className="absolute inset-0 h-full w-full scale-[1.08] object-contain object-bottom sm:scale-[1.14] lg:scale-[1.19]"
            />
          </div>
        </div>

        <div className="absolute bottom-[4%] right-[1%] hidden max-w-52 border-l border-border-strong pl-4 lg:block">
          <p className="type-overline">Case study saat ini</p>
          <p className="mt-2 text-sm font-medium leading-6 text-foreground">Absensi CN — workflow manajemen pendidikan.</p>
          <Link
            to="/projects/absensi-cn"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-highlight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Baca case study
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
