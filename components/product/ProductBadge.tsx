import { cn } from "@/lib/utils";

interface ProductBadgeProps {
  type: "Agent Kit" | "Agent" | "Skill";
  className?: string;
}

const typeConfig: Record<"Agent Kit" | "Agent" | "Skill", string> = {
  "Agent Kit": "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
  Agent: "bg-brand-indigo/10 text-brand-indigo border-brand-indigo/20",
  Skill: "bg-brand-cyan/10 text-cyan-700 border-brand-cyan/20",
};

export function ProductBadge({ type, className }: ProductBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold",
        typeConfig[type],
        className
      )}
    >
      {type}
    </span>
  );
}
