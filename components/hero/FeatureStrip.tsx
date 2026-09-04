import { Database, Brain, ShieldCheck, Rocket } from "lucide-react";

const features = [
  {
    icon: Database,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Built for Oracle",
    description: "Deeply integrated with Oracle Database, 19c, 21c, 23c, 26 AI.",
  },
  {
    icon: Brain,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    title: "Agentic Workflows",
    description: "AI agents that think, analyze and act.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    title: "Secure & Compliant",
    description: "Enterprise grade security and audit logs.",
  },
  {
    icon: Rocket,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    title: "Deploy Anywhere",
    description: "Local, cloud or hybrid environments.",
  },
];

export function FeatureStrip() {
  return (
    <section className="bg-white border-y border-slate-100 shadow-sm" aria-label="Key features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, iconBg, iconColor, title, description }) => (
            <div key={title} className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${iconColor}`} aria-hidden="true" />
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
