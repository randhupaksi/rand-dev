import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./globals.css";

import App from "./App.tsx";
import { ErrorBoundary } from "@/components/common/error-boundary";
import { ScrollToTop } from "@/components/common/scroll-to-top";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
