import { Database, Cpu, ShieldCheck, Server } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Built for Oracle",
    description: "Deeply focused on Oracle database technologies and workflows.",
  },
  {
    icon: Cpu,
    title: "Agentic Workflows",
    description:
      "Agents that can analyze, reason, orchestrate and produce actionable results.",
  },
  {
    icon: ShieldCheck,
    title: "Tested & Verified",
    description:
      "Every released kit is intended to be validated through controlled testing before distribution.",
  },
  {
    icon: Server,
    title: "Deploy Where You Need",
    description:
      "Designed with local, on-premise, cloud and hybrid deployment scenarios in mind.",
  },
];

export function FeatureStrip() {
  return (
    <section className="bg-white border-y border-slate-100" aria-label="Key features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand-blue" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy-950 mb-1">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
