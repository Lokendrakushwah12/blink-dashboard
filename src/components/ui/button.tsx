import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.20),inset_0px_6px_12px_0px_rgba(255,255,255,0.12),0px_1px_2px_0px_rgba(8,8,8,0.05),0px_4px_4px_0px_rgba(8,8,8,0.01)] dark:shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.20),inset_0px_6px_12px_0px_rgba(255,255,255,0.12),0px_1px_2px_0px_rgba(8,8,8,0.20),0px_4px_4px_0px_rgba(8,8,8,0.08)] dark:border-border border-transparent text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border shadow-[inset_0px_1px_1px_0px_rgba(35,197,98,0.01),inset_0px_6px_12px_0px_rgba(35,197,98,0.05),0px_1px_2px_0px_rgba(8,8,8,0.01),0px_4px_4px_0px_rgba(8,8,8,0.01)] dark:shadow-[inset_0px_1px_1px_0px_rgba(255,255,255,0.03),inset_0px_6px_12px_0px_rgba(255,255,255,0.08),0px_1px_2px_0px_rgba(8,8,8,0.20),0px_4px_4px_0px_rgba(8,8,8,0.08)] border-input bg-background hover:bg-accent/30 hover:text-accent-foreground/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent border hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
