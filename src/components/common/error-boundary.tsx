import { Component, type ErrorInfo, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

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
          <p className="type-overline">
            Terjadi kesalahan
          </p>
          <h1 className="type-h3">
            Halaman gagal dimuat
          </h1>
          <p className="type-body-sm">
            Ada error tak terduga saat merender halaman ini. Coba muat ulang —
            jika masih terjadi, periksa console browser untuk detailnya.
          </p>
          <div className="flex justify-center">
            <Button
              type="button"
              onClick={this.handleReload}
            >
              Muat ulang halaman
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
