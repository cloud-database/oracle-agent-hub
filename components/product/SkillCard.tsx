import type { Skill } from "@/types";
import { VerificationBadge } from "./VerificationBadge";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  "Database Administration": "bg-blue-50 text-blue-700",
  Performance: "bg-orange-50 text-orange-700",
  Security: "bg-red-50 text-red-700",
  "Schema & Documentation": "bg-purple-50 text-purple-700",
  Migration: "bg-teal-50 text-teal-700",
  "Oracle AI Database": "bg-cyan-50 text-cyan-700",
};

interface SkillCardProps {
  skill: Skill;
  className?: string;
}

export function SkillCard({ skill, className }: SkillCardProps) {
  const categoryColor = categoryColors[skill.category] ?? "bg-slate-50 text-slate-700";
  const displayedUsedBy = skill.usedBy.slice(0, 2);
  const extraCount = skill.usedBy.length - 2;

  return (
    <div
      className={cn(
        "flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm p-5 gap-3 transition-all duration-200 hover:shadow-md",
        className
      )}
    >
      <div>
        <span className={cn("inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium mb-2", categoryColor)}>
          {skill.category}
        </span>
        <h3 className="font-semibold text-navy-950 text-sm">{skill.name}</h3>
      </div>

      <p className="text-xs text-slate-600 leading-relaxed">{skill.description}</p>

      {skill.usedBy.length > 0 && (
        <div>
          <p className="text-xs font-medium text-slate-500 mb-1.5">Used by</p>
          <div className="flex flex-wrap gap-1">
            {displayedUsedBy.map((agent) => (
              <span
                key={agent}
                className="inline-flex items-center rounded-md bg-slate-50 border border-slate-100 px-2 py-0.5 text-xs text-slate-600"
              >
                {agent}
              </span>
            ))}
            {extraCount > 0 && (
              <span className="inline-flex items-center rounded-md bg-slate-50 border border-slate-100 px-2 py-0.5 text-xs text-slate-500">
                +{extraCount} more
              </span>
            )}
          </div>
        </div>
      )}

      <VerificationBadge status={skill.verificationStatus} />
    </div>
  );
}
