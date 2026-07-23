export function HeroSpotlight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute left-[8%] top-12 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,92,250,0.18),transparent_68%)] blur-3xl" />
      <div className="absolute right-[10%] top-[18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(191,167,255,0.1),transparent_70%)] blur-3xl" />
    </div>
  );
}
