import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    const variants = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      gold: "btn-gold",
      outline: "border border-gray-200 bg-transparent text-primary hover:bg-gray-50",
      ghost: "bg-transparent text-primary hover:bg-gray-100",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3",
      lg: "px-8 py-4 text-lg",
    };

    const classes = cn(
      "inline-flex items-center justify-center font-medium transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <Link href={href} className={classes} ref={ref as any}>
          {props.children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, cn };

