type PortfolioLoaderProps = {
  fullScreen?: boolean;
};

export function PortfolioLoader({ fullScreen = false }: PortfolioLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Preparing Randhu Paksi Membumi's portfolio"
      className={`portfolio-loader-shell flex items-center justify-center px-6 ${fullScreen ? "min-h-screen" : "min-h-[55vh]"}`}
    >
      <div className="relative z-10 flex w-full max-w-xs flex-col items-center text-center">
        <p className="type-overline">Randhu Paksi Membumi</p>
        <p className="mt-4 text-lg font-semibold tracking-tight text-foreground">
          ENTERPRISE INTERFACES · CLEAN SYSTEMS · INTERACTIVE FLOWS the portfolio
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Loading selected work and product stories.
        </p>
        <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-primary-surface" aria-hidden="true">
          <span className="portfolio-loader-progress block h-full w-[42%] rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
}
