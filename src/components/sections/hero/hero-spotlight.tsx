export function HeroSpotlight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-glow-primary absolute left-[8%] top-12 h-56 w-56 rounded-full blur-3xl" />
      <div className="hero-glow-soft absolute right-[10%] top-[18%] h-72 w-72 rounded-full blur-3xl" />
    </div>
  );
}
