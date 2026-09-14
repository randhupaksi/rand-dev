import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { BriefcaseBusiness, CircleUserRound, House, Mail } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";

const primaryNavigation = [
  { label: "Home", href: "/", icon: House },
  { label: "About", href: "/about", icon: CircleUserRound },
  { label: "Projects", href: "/projects", icon: BriefcaseBusiness },
  { label: "Contact", href: "/contact", icon: Mail },
];

const NAVIGATION_VIEWBOX_WIDTH = 400;
const NAVIGATION_VIEWBOX_HEIGHT = 92;
const NAVIGATION_TOP_EDGE = 30;
const NAVIGATION_ACTIVE_NOTCH_DEPTH = 59;
const NAVIGATION_ACTIVE_NOTCH_HALF_WIDTH = 46;
const NAVIGATION_ACTIVE_NOTCH_CONTROL_OFFSET = 18;

function buildNavigationFramePath(activeIndex: number) {
  const activeCenter = activeIndex * 100 + 50;
  const notchStart = activeCenter - NAVIGATION_ACTIVE_NOTCH_HALF_WIDTH;
  const notchEnd = activeCenter + NAVIGATION_ACTIVE_NOTCH_HALF_WIDTH;
  const notchCenter = activeCenter;
  const curveControl = Math.min(26, (notchEnd - notchStart) * 0.34);

  return [
    `M 0 ${NAVIGATION_TOP_EDGE}`,
    `H ${notchStart}`,
    `C ${notchStart + NAVIGATION_ACTIVE_NOTCH_CONTROL_OFFSET} ${NAVIGATION_TOP_EDGE} ${notchCenter - curveControl} ${NAVIGATION_ACTIVE_NOTCH_DEPTH} ${notchCenter} ${NAVIGATION_ACTIVE_NOTCH_DEPTH}`,
    `C ${notchCenter + curveControl} ${NAVIGATION_ACTIVE_NOTCH_DEPTH} ${notchEnd - NAVIGATION_ACTIVE_NOTCH_CONTROL_OFFSET} ${NAVIGATION_TOP_EDGE} ${notchEnd} ${NAVIGATION_TOP_EDGE}`,
    `H ${NAVIGATION_VIEWBOX_WIDTH}`,
    `V ${NAVIGATION_VIEWBOX_HEIGHT}`,
    "H 0 Z",
  ].join(" ");
}

export function MobileBottomNavigation() {
  const navigationRef = useRef<HTMLElement>(null);
  const activeIndicatorRef = useRef<HTMLSpanElement>(null);
  const { pathname } = useLocation();
  const activeIndex = primaryNavigation.findIndex(({ href }) => (
    href === "/" ? pathname === "/" : pathname.startsWith(href)
  ));
  const resolvedActiveIndex = activeIndex === -1 ? 0 : activeIndex;
  const activeNavigation = primaryNavigation[resolvedActiveIndex];
  const ActiveIcon = activeNavigation.icon;
  const navigationFramePath = buildNavigationFramePath(resolvedActiveIndex);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const isCompactViewport = window.matchMedia("(max-width: 767px)").matches;

      gsap.fromTo(
        navigationRef.current,
        { yPercent: 105 },
        {
          yPercent: 0,
          duration: isCompactViewport ? 0.66 : 0.78,
          ease: "power3.out",
          force3D: true,
          clearProps: "willChange",
        },
      );

    }, navigationRef);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const indicator = activeIndicatorRef.current;

    if (!indicator) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(indicator, { xPercent: resolvedActiveIndex * 100, y: "0.1rem" });
      return;
    }

    gsap.to(indicator, {
      xPercent: resolvedActiveIndex * 100,
      y: "0.1rem",
      duration: window.matchMedia("(max-width: 767px)").matches ? 0.42 : 0.56,
      ease: "power3.out",
      force3D: true,
      overwrite: "auto",
    });
  }, [resolvedActiveIndex]);

  return (
    <nav
      ref={navigationRef}
      aria-label="Primary mobile navigation"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 lg:hidden"
    >
      <div className="pointer-events-auto relative h-[5.75rem] overflow-visible">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full overflow-visible text-border-strong"
          viewBox={`0 0 ${NAVIGATION_VIEWBOX_WIDTH} ${NAVIGATION_VIEWBOX_HEIGHT}`}
          preserveAspectRatio="none"
        >
          <path
            d={navigationFramePath}
            fill="var(--surface-2)"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <span
          ref={activeIndicatorRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-20 flex h-full w-1/4 justify-center will-change-transform"
        >
          <span className="grid size-[3.25rem] place-items-center rounded-full border-2 border-primary-700 bg-surface-2 p-1 shadow-[0_8px_16px_rgb(8_6_16/0.32)]">
            <span className="grid size-full place-items-center rounded-full bg-primary-800 text-primary-100 shadow-inner">
              <ActiveIcon
                key={activeNavigation.href}
                size={20}
                strokeWidth={2.35}
                className="animate-[fade-in_180ms_var(--ease-standard)_both]"
              />
            </span>
          </span>
        </span>

        <div className="relative z-10 grid size-full grid-cols-4">
          {primaryNavigation.map(({ label, href, icon: Icon }) => (
            <NavLink
              key={href}
              end={href === "/"}
              to={href}
              className={({ isActive }) => cn(
                "group relative flex min-w-0 touch-manipulation flex-col items-center justify-end gap-1.5 px-0.5 pb-3 text-[10px] font-semibold transition-[color,opacity,transform] duration-300 ease-standard active:scale-[0.91] active:opacity-85 motion-reduce:transition-none",
                isActive
                  ? "z-10 text-brand-muted"
                  : "text-muted-foreground hover:text-brand-soft active:text-brand-muted",
              )}
            >
              {({ isActive }) => (
                <>
                  <Icon
                    aria-hidden="true"
                    size={20}
                    strokeWidth={2.05}
                    className={cn(
                      "will-change-transform transition-[opacity,transform] duration-300 ease-standard group-active:scale-90",
                      isActive ? "scale-75 opacity-0" : "opacity-100",
                    )}
                  />
                  <span className={cn("max-w-full truncate leading-none", isActive && "animate-[fade-in_260ms_var(--ease-standard)_both]")}>{label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
