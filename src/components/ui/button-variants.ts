import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 touch-manipulation items-center justify-center whitespace-nowrap rounded-full border font-medium transition-[transform,background-color,border-color,color,box-shadow,filter,opacity] duration-150 ease-out outline-none select-none hover:-translate-y-px focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px active:scale-[0.96] active:duration-75 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-45 motion-reduce:transform-none motion-reduce:transition-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-(image:--gradient-primary) text-primary-foreground shadow-sm hover:brightness-110 hover:shadow-md active:brightness-95",
        secondary:
          "border-border-default bg-secondary text-secondary-foreground hover:bg-secondary-800 hover:shadow-sm",
        outline:
          "border-border-default bg-surface-subtle text-foreground hover:border-border-strong hover:bg-surface-hover hover:shadow-sm",
        ghost:
          "border-transparent bg-transparent text-muted-foreground hover:bg-surface-hover hover:text-foreground",
      },
      size: {
        sm: "h-(--button-height-sm) gap-2 px-4 text-xs",
        md: "h-(--button-height-md) gap-2 px-5 text-sm",
        lg: "h-(--button-height-lg) gap-2.5 px-6 text-base",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);
