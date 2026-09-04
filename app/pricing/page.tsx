import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "OracleAgentHub pricing for individual agents, Agent Kits, and custom enterprise solutions.",
};

const tiers = [
  {
    name: "Individual Agent",
    description: "Focused single-agent capability",
    price: "TBD",
    priceNote: "Per agent",
    badge: null,
    cta: { label: "Explore Agents", href: "/agents" },
    features: [
      "Single Oracle-focused agent",
      "Oracle native implementation",
      "Configuration files",
      "Deployment documentation",
      "Usage examples",
    ],
    highlight: false,
  },
  {
    name: "Agent Kit",
    description: "Complete multi-agent solution",
    price: "TBD",
    priceNote: "Per kit",
    badge: "Most Popular",
    cta: { label: "Explore Kits", href: "/agent-kits" },
    features: [
      "Multiple Oracle-focused agents",
      "Skills included",
      "Automated workflows",
      "Utilities & scripts",
      "Complete documentation",
      "Test suites",
      "Configuration templates",
      "Example outputs",
    ],
    highlight: true,
  },
  {
    name: "Custom / Enterprise",
    description: "Tailored Oracle agentic solution",
    price: "Contact Us",
    priceNote: "Custom engagement",
    badge: null,
    cta: { label: "Request Custom Kit", href: "/request-custom-kit" },
    features: [
      "Custom agent design",
      "Bespoke workflows",
      "Environment-specific configuration",
      "Priority support",
      "Enterprise licensing",
      "Dedicated consultation",
    ],
    highlight: false,
  },
];

const kitContents = [
  { label: "Agents", desc: "Multiple purpose-built Oracle analysis agents" },
  { label: "Skills", desc: "Modular capabilities agents use to analyze specific Oracle data sources" },
  { label: "Workflows", desc: "Orchestrated multi-step automated analysis sequences" },
  { label: "SQL Scripts", desc: "Oracle-native SQL used by agents for data collection" },
  { label: "Configuration", desc: "Deployment and environment configuration templates" },
  { label: "Documentation", desc: "Installation, configuration, and usage guides" },
  { label: "Tests", desc: "Validation test suites for confirming correct operation" },
  { label: "Examples", desc: "Sample outputs and usage examples" },
];

export default function PricingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container-wide py-12 text-center">
          <h1 className="text-4xl font-bold text-navy-950 mb-3">Pricing</h1>
          <p className="text-navy-600 max-w-xl mx-auto">
            Oracle-focused agentic capabilities at every scale — from individual agents to
            enterprise custom solutions.
          </p>
        </div>
      </div>

      <div className="container-wide py-16">
        {/* Pricing tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border-2 p-8 flex flex-col ${
                tier.highlight
                  ? "border-brand-blue shadow-lg shadow-brand-blue/10 bg-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-xl font-bold text-navy-950 mb-1">{tier.name}</h2>
                <p className="text-navy-500 text-sm">{tier.description}</p>
              </div>

              <div className="mb-6">
                <div className="text-3xl font-bold text-navy-950">{tier.price}</div>
                <div className="text-sm text-navy-400 mt-1">{tier.priceNote}</div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-700">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.cta.href}
                className={`inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg font-semibold text-sm transition-colors ${
                  tier.highlight
                    ? "bg-brand-blue text-white hover:bg-blue-700"
                    : "border-2 border-navy-300 text-navy-700 hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                {tier.cta.label} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-navy-400 mb-16">
          All prices are indicative and subject to confirmation. Contact us to discuss your requirements.
        </p>

        {/* What's in an Agent Kit */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy-950 mb-2 text-center">
            What&apos;s in an Agent Kit?
          </h2>
          <p className="text-navy-500 text-center mb-10">
            Every Agent Kit is a complete deployment package — not just agent definitions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {kitContents.map((item) => (
              <div
                key={item.label}
                className="bg-slate-50 border border-slate-200 rounded-xl p-5"
              >
                <div className="font-semibold text-navy-900 mb-1">{item.label}</div>
                <div className="text-sm text-navy-500">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-navy-600 mb-6">
              Need something tailored to your Oracle environment?
            </p>
            <Link
              href="/request-custom-kit"
              className="inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request a Custom Kit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
