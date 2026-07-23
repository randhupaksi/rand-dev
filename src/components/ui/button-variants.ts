import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full border font-medium transition-all duration-200 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-[image:var(--gradient-primary)] text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] active:translate-y-px",
        secondary:
          "border-border-default bg-secondary text-secondary-foreground hover:-translate-y-0.5 hover:bg-secondary-800 active:translate-y-px",
        outline:
          "border-border-default bg-surface-subtle text-foreground hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-hover active:translate-y-px",
        ghost:
          "border-transparent bg-transparent text-muted-foreground hover:bg-surface-hover hover:text-foreground",
      },
      size: {
        sm: "h-[var(--button-height-sm)] gap-2 px-4 text-xs",
        md: "h-[var(--button-height-md)] gap-2 px-5 text-sm",
        lg: "h-[var(--button-height-lg)] gap-2.5 px-6 text-base",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
