import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled render error:", error, info.componentStack);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="content-stack-md max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-muted)]">
            Terjadi kesalahan
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Halaman gagal dimuat
          </h1>
          <p className="text-sm leading-7 text-muted-foreground">
            Ada error tak terduga saat merender halaman ini. Coba muat ulang —
            jika masih terjadi, periksa console browser untuk detailnya.
          </p>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={this.handleReload}
              className="inline-flex h-11 items-center justify-center rounded-full border border-[rgb(211_196_255/0.18)] bg-[linear-gradient(135deg,#8f63ff_0%,#7c5cfa_60%,#6b49ef_100%)] px-6 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              Muat ulang halaman
            </button>
          </div>
        </div>
      </div>
    );
  }
}
