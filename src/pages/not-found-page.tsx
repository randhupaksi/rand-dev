import { ArrowRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button-variants";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function NotFoundPage() {
  usePageMeta("Page not found - Randhu Paksi Membumi");

  return (
    <section className="flex min-h-[65vh] items-center section-shell-compact">
      <div className="content-stack-md mx-auto max-w-xl text-center">
        <p className="text-gradient-brand font-mono text-6xl font-semibold leading-none tracking-tight sm:text-8xl">
          404
        </p>
        <h1 className="type-h3">
          This page is nowhere to be found
        </h1>
        <p className="type-body-sm">
          The link may be broken, moved, or not built yet. Head home or take a look
          at the work instead.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            to="/"
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            <Home className="size-4" aria-hidden="true" />
            Back home
          </Link>
          <Link
            to="/projects"
            className={buttonVariants({ variant: "outline", size: "md" })}
          >
            See the work
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
