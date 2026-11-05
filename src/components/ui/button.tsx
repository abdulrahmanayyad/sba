import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-body text-sm font-semibold cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "!bg-brand-green !text-white hover:!bg-brand-orange hover:!text-white shadow-sm transition-all duration-300",
        primary: "!bg-brand-green !text-white hover:!bg-brand-orange hover:!text-white shadow-sm transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all duration-300",
        outline: "!bg-brand-green !text-white hover:!bg-brand-orange hover:!text-white border border-transparent shadow-sm transition-all duration-300",
        secondary: "!bg-brand-green !text-white hover:!bg-brand-orange hover:!text-white shadow-sm transition-all duration-300",
        ghost: "hover:bg-brand-green/10 hover:text-brand-green transition-all duration-300",
        link: "text-brand-green underline-offset-4 hover:underline hover:text-brand-orange transition-all duration-300",
        nav: "text-foreground hover:text-brand-orange transition-all duration-300",
        language: "text-muted-foreground hover:text-foreground transition-all duration-300",
        icon: "border border-border bg-white/70 backdrop-blur-md text-foreground hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6",
        icon: "h-9 w-9",
        bare: "h-auto p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };


