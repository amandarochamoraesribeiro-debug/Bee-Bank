import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-gold-500 text-forest-950",
        secondary: "border-transparent bg-forest-100 text-forest-800 dark:bg-forest-800 dark:text-forest-200",
        outline: "border-forest-300 text-forest-700 dark:border-forest-700 dark:text-forest-300",
        success: "border-transparent bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
        destructive: "border-transparent bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300",
        warning: "border-transparent bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
        area: "border-transparent bg-forest-600/15 text-forest-700 dark:bg-forest-400/20 dark:text-forest-200",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
