type PortfolioLoaderProps = {
  fullScreen?: boolean
}

export function PortfolioLoader({ fullScreen = false }: PortfolioLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-label="Preparing Randhu Paksi Membumi's portfolio"
      className={`portfolio-loader-shell ${fullScreen ? 'portfolio-loader-shell--screen' : 'portfolio-loader-shell--route'}`}
    >
      <div className="portfolio-loader-frame">
        <p className="portfolio-loader-eyebrow">Randhu Paksi Membumi</p>
        <p className="portfolio-loader-title">
          Preparing the <span>portfolio</span>
        </p>
        <p className="portfolio-loader-description">Loading selected work and product stories.</p>
        <div className="portfolio-loader-progress">
          <div className="portfolio-loader-progress-labels" aria-hidden="true">
            <span>Setting the page</span>
            <span>Please wait</span>
          </div>
          <div className="portfolio-loader-track" aria-hidden="true">
            <span className="portfolio-loader-progress-indicator"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
