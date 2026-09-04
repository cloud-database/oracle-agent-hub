import { cn } from "@/lib/utils";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-blue-700 border-transparent shadow-sm",
  secondary:
    "bg-navy-900 text-white hover:bg-navy-800 border-transparent shadow-sm",
  outline:
    "bg-transparent text-navy-900 border-navy-200 hover:bg-navy-50",
  ghost:
    "bg-transparent text-navy-700 border-transparent hover:bg-navy-50",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm px-3 py-1.5 rounded-md",
  md: "text-sm px-4 py-2 rounded-lg",
  lg: "text-base px-6 py-3 rounded-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  asChild = false,
  children,
  className,
  ...props
}: ButtonProps) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: cn(
        "inline-flex items-center justify-center gap-2 font-medium border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      ),
    });
  }

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
