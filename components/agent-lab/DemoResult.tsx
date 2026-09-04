import { AlertCircle, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";

interface ResultItem {
  label: string;
  value: string;
  variant: "success" | "warning" | "error" | "neutral";
}

interface DemoResultData {
  title: string;
  status: string;
  items: ResultItem[];
  recommendation: string;
}

interface DemoResultProps {
  result?: DemoResultData;
}

function ItemIcon({ variant }: { variant: ResultItem["variant"] }) {
  if (variant === "success") return <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" aria-hidden="true" />;
  if (variant === "warning") return <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" aria-hidden="true" />;
  if (variant === "error") return <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" aria-hidden="true" />;
  return <AlertCircle className="w-4 h-4 text-blue-400 flex-shrink-0" aria-hidden="true" />;
}

const defaultResult: DemoResultData = {
  title: "DATABASE HEALTH SUMMARY",
  status: "Healthy",
  items: [
    { label: "Overall Status", value: "Healthy", variant: "success" },
    { label: "Tablespace Utilization", value: "Normal", variant: "success" },
    { label: "Invalid Objects", value: "2", variant: "warning" },
    { label: "Long Running Sessions", value: "1", variant: "warning" },
    { label: "Potential Issues", value: "3", variant: "warning" },
  ],
  recommendation:
    "Review identified invalid objects. Monitor USERS tablespace growth.",
};

export function DemoResult({ result = defaultResult }: DemoResultProps) {
  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden">
      {/* Terminal header bar */}
      <div className="bg-navy-950 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" aria-hidden="true" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" aria-hidden="true" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" aria-hidden="true" />
          </div>
          <span className="text-xs text-slate-400 font-mono ml-2">oracle_agent_output.txt</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 px-2.5 py-0.5 text-xs font-semibold text-amber-400">
          DEMO ENVIRONMENT
        </span>
      </div>

      {/* Report body */}
      <div className="bg-slate-950 p-6 font-mono text-sm space-y-5">
        {/* Header */}
        <div className="space-y-1">
          <p className="text-emerald-400 font-bold tracking-wider">{result.title}</p>
          <p className="text-slate-500 text-xs">── Sample Output / Demo Environment ──</p>
        </div>

        {/* Metrics */}
        <div className="space-y-2 border-l-2 border-brand-blue/40 pl-4">
          {result.items.map(({ label, value, variant }) => (
            <div key={label} className="flex items-center gap-3">
              <ItemIcon variant={variant} />
              <span className="text-slate-400 text-xs w-44">{label}</span>
              <span
                className={
                  variant === "success"
                    ? "text-emerald-400 text-xs font-semibold"
                    : variant === "error"
                    ? "text-red-400 text-xs font-semibold"
                    : variant === "warning"
                    ? "text-amber-400 text-xs font-semibold"
                    : "text-slate-300 text-xs"
                }
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <div className="border-t border-slate-800 pt-4">
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">Recommendation</p>
          <p className="text-slate-300 text-xs leading-relaxed">{result.recommendation}</p>
        </div>

        {/* Disclaimer */}
        <div className="border border-amber-500/20 rounded-lg p-3 bg-amber-500/5">
          <p className="text-amber-400/80 text-xs">
            ⚠ This is simulated demo output — not from a live database connection. Results are for demonstration purposes only.
          </p>
        </div>
      </div>
    </div>
  );
}
