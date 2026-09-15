import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import type { VariantProps } from "class-variance-authority";

import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

type ButtonLinkProps = VariantProps<typeof buttonVariants> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href" | "children"> & {
    children: ReactNode;
    className?: string;
    href?: string;
    to?: string;
  };

function ButtonLink({
  children,
  className,
  href,
  to,
  variant = "primary",
  size = "md",
  ...props
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}

export { ButtonLink };
