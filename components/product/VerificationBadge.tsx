import type { VerificationStatus } from "@/types";
import { cn } from "@/lib/utils";

interface VerificationBadgeProps {
  status: VerificationStatus;
  className?: string;
}

const config: Record<
  VerificationStatus,
  { label: string; icon: string; classes: string }
> = {
  Development: {
    label: "In Development",
    icon: "●",
    classes: "bg-amber-50 text-amber-700 border-amber-200",
  },
  Testing: {
    label: "In Testing",
    icon: "●",
    classes: "bg-blue-50 text-blue-700 border-blue-200",
  },
  Verified: {
    label: "Verified",
    icon: "✓",
    classes: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  "Production Ready": {
    label: "Production Ready",
    icon: "✓",
    classes: "bg-green-50 text-green-700 border-green-200",
  },
  "Coming Soon": {
    label: "Coming Soon",
    icon: "○",
    classes: "bg-slate-50 text-slate-500 border-slate-200",
  },
};

export function VerificationBadge({ status, className }: VerificationBadgeProps) {
  const { label, icon, classes } = config[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium",
        classes,
        className
      )}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </span>
  );
}
