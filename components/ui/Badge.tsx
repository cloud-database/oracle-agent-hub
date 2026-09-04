import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline" | "success" | "warning" | "info" | "new";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-navy-100 text-navy-700 border-navy-200",
  outline: "bg-transparent text-brand-blue border-brand-blue",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  info: "bg-blue-50 text-blue-700 border-blue-200",
  new: "bg-cyan-50 text-cyan-700 border-cyan-200",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-2.5 py-1",
};

export function Badge({ variant = "default", size = "sm", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border font-medium",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  );
}
