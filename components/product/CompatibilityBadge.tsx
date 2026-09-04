import type { Compatibility } from "@/types";
import { cn } from "@/lib/utils";

interface CompatibilityBadgeProps {
  compatibility: Compatibility;
  className?: string;
}

export function CompatibilityBadge({ compatibility, className }: CompatibilityBadgeProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <div>
        <p className="text-xs font-semibold text-navy-500 uppercase tracking-wide mb-2">
          Oracle Database
        </p>
        <div className="flex flex-wrap gap-1.5">
          {compatibility.databases.map((db) => (
            <span
              key={db}
              className="inline-flex items-center rounded-md bg-navy-50 border border-navy-100 px-2 py-0.5 text-xs font-medium text-navy-700"
            >
              {db}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-navy-500 uppercase tracking-wide mb-2">
          Deployment
        </p>
        <div className="flex flex-wrap gap-1.5">
          {compatibility.deploymentOptions.map((opt) => (
            <span
              key={opt}
              className="inline-flex items-center rounded-md bg-brand-blue/5 border border-brand-blue/20 px-2 py-0.5 text-xs font-medium text-brand-blue"
            >
              {opt}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
