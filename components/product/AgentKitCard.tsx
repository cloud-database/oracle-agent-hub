import Link from "next/link";
import {
  Database,
  Zap,
  Shield,
  GitBranch,
  ArrowRightLeft,
  BrainCircuit,
  BarChart2,
  Users,
  Layers,
  ShoppingCart,
} from "lucide-react";
import type { AgentKit } from "@/types";
import { VerificationBadge } from "./VerificationBadge";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Database,
  Zap,
  Shield,
  GitBranch,
  ArrowRightLeft,
  BrainCircuit,
  BarChart2,
};

const categoryColors: Record<string, string> = {
  "Database Administration": "bg-blue-50 text-blue-700",
  Performance: "bg-orange-50 text-orange-700",
  Security: "bg-red-50 text-red-700",
  "Schema & Documentation": "bg-purple-50 text-purple-700",
  Migration: "bg-teal-50 text-teal-700",
  "Oracle AI Database": "bg-cyan-50 text-cyan-700",
  "Business Intelligence": "bg-blue-50 text-blue-700",
};

const iconCircleColors: Record<string, { bg: string; color: string }> = {
  "Database Administration": { bg: "bg-emerald-100", color: "text-emerald-600" },
  Performance:               { bg: "bg-purple-100",  color: "text-purple-600"  },
  Security:                  { bg: "bg-orange-100",  color: "text-orange-500"  },
  "Schema & Documentation":  { bg: "bg-teal-100",    color: "text-teal-600"    },
  Migration:                 { bg: "bg-rose-100",    color: "text-rose-500"    },
  "Business Intelligence":   { bg: "bg-blue-100",    color: "text-blue-600"    },
  "Oracle AI Database":      { bg: "bg-cyan-100",    color: "text-cyan-600"    },
};

interface AgentKitCardProps {
  kit: AgentKit;
  featured?: boolean;
}

export function AgentKitCard({ kit, featured = false }: AgentKitCardProps) {
  const Icon = iconMap[kit.icon] ?? Database;
  const categoryColor = categoryColors[kit.category] ?? "bg-slate-50 text-slate-700";
  const circleColor = iconCircleColors[kit.category] ?? { bg: "bg-slate-100", color: "text-slate-600" };

  return (
    <div
      className={cn(
        "relative flex flex-col bg-white rounded-xl border shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden",
        featured ? "border-brand-blue/30" : "border-slate-200"
      )}
    >
      {/* Top badges */}
      {(kit.popular || kit.new) && (
        <div className="absolute top-3 right-3 z-10">
          {kit.popular && (
            <span className="inline-flex items-center rounded-full bg-emerald-500 text-white text-xs font-semibold px-2.5 py-0.5">
              Most Popular
            </span>
          )}
          {kit.new && !kit.popular && (
            <span className="inline-flex items-center rounded-full bg-brand-cyan text-white text-xs font-semibold px-2.5 py-0.5">
              New
            </span>
          )}
        </div>
      )}

      <div className="p-6 flex-1 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-12 h-12 rounded-full ${circleColor.bg} flex items-center justify-center`}>
            <Icon className={`w-6 h-6 ${circleColor.color}`} aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <span
              className={cn(
                "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium mb-1",
                categoryColor
              )}
            >
              {kit.category}
            </span>
            <h3 className="font-bold text-navy-950 text-base leading-tight">{kit.name}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 line-clamp-2">{kit.shortDescription}</p>

        {/* Stats */}
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Users className="w-3.5 h-3.5 text-brand-blue" aria-hidden="true" />
            <span className="font-semibold text-navy-900">{kit.agentCount}+</span>
            <span>Agents</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <Layers className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
            <span className="font-semibold text-navy-900">{kit.skillCount}+</span>
            <span>Skills</span>
          </div>
        </div>

        {/* Capabilities */}
        <ul className="space-y-1">
          {kit.capabilities.slice(0, 4).map((cap) => (
            <li key={cap} className="flex items-center gap-2 text-xs text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan flex-shrink-0" aria-hidden="true" />
              {cap}
            </li>
          ))}
        </ul>

        {/* Verification */}
        <VerificationBadge status={kit.verificationStatus} />
      </div>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between gap-3 bg-slate-50/50">
        <span className="text-lg font-bold text-navy-950">
          {kit.price.amount !== null ? `$${kit.price.amount}` : kit.price.label}
        </span>
        <Link
          href={`/agent-kits/${kit.slug}`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand-blue text-white text-sm font-medium px-4 py-2 hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
        >
          <ShoppingCart className="w-3.5 h-3.5" aria-hidden="true" />
          View Details
        </Link>
      </div>
    </div>
  );
}
