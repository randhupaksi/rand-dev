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
            Something went wrong
          </p>
          <h1 className="type-h3">
            This page could not load
          </h1>
          <p className="type-body-sm">
            Something unexpected happened while loading this page. Try reloading;
            if it keeps happening, check the browser console for details.
          </p>
          <div className="flex justify-center">
            <Button
              type="button"
              onClick={this.handleReload}
            >
              Reload page
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
