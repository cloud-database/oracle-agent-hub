import Link from "next/link";
import { Cpu, Layers, ChevronRight } from "lucide-react";
import type { Agent } from "@/types";
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

interface AgentCardProps {
  agent: Agent;
  className?: string;
  compact?: boolean;
}

export function AgentCard({ agent, className, compact = false }: AgentCardProps) {
  void compact; // reserved for future compact layout variant
  const categoryColor = categoryColors[agent.category] ?? "bg-slate-50 text-slate-700";

  return (
    <div
      className={cn(
        "flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm p-5 gap-3 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
          <Cpu className="w-5 h-5 text-brand-blue" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <span className={cn("inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium mb-1", categoryColor)}>
            {agent.category}
          </span>
          <h3 className="font-semibold text-navy-950 text-sm leading-snug">{agent.name}</h3>
        </div>
      </div>

      <p className="text-xs text-slate-600 line-clamp-3">{agent.description}</p>

      <div className="flex items-center gap-1.5 text-xs text-slate-500">
        <Layers className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
        <span>{agent.skills.length} Skills</span>
      </div>

      <div className="flex items-center justify-between">
        <VerificationBadge status={agent.verificationStatus} />
        <Link
          href={`/agents/${agent.slug}`}
          className="inline-flex items-center gap-1 text-xs font-medium text-brand-blue hover:text-blue-700 transition-colors"
          aria-label={`View ${agent.name}`}
        >
          View Agent
          <ChevronRight className="w-3 h-3" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
