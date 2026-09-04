import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "About OracleAgentHub — a specialized technology platform for agentic automation in Oracle environments.",
};

const hierarchy = [
  { label: "SKILL", desc: "A focused, reusable capability targeting a specific Oracle data source or operation." },
  { label: "AGENT", desc: "An autonomous unit that composes multiple skills to complete a complex Oracle analysis task." },
  { label: "WORKFLOW", desc: "An orchestrated sequence of agent actions that produces structured analytical output." },
  { label: "AGENT KIT", desc: "A packaged, deployable collection of agents, skills, workflows, scripts, and documentation." },
  { label: "ENTERPRISE AUTOMATION", desc: "Full agentic coverage of Oracle operational domains across an enterprise environment." },
];

const testingCategories = [
  "Functional Testing — verifying agent logic produces correct outputs",
  "Workflow Testing — validating multi-step orchestration sequences",
  "Oracle Environment Testing — confirming correct Oracle SQL and view references",
  "Output Verification — validating report structure and accuracy",
  "Error Handling — confirming graceful handling of edge cases",
  "Configuration Validation — verifying deployment configuration correctness",
];

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container-wide py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-navy-950 mb-4">About OracleAgentHub</h1>
            <p className="text-xl text-navy-600 leading-relaxed">
              A specialized technology platform focused on practical agentic automation for Oracle
              environments.
            </p>
          </div>
        </div>
      </div>

      <div className="container-wide py-16 space-y-20">
        {/* Mission */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-950 mb-4">Our Mission</h2>
          <p className="text-navy-600 leading-relaxed mb-4">
            OracleAgentHub exists to make Oracle intelligence agentic, deployable, and reusable.
            We package deep Oracle database expertise — built through direct experience with Oracle
            administration, performance tuning, security, and schema management — into tested
            agentic products that can be deployed directly in your environment.
          </p>
          <p className="text-navy-600 leading-relaxed">
            We do not sell generic AI prompts. We do not provide a hosted service where your
            Oracle data leaves your environment. We build specialized Agent Kits that encode Oracle
            expertise into autonomous agents, deployable where you need them, operating against your
            Oracle databases under your control.
          </p>
        </section>

        {/* What we build */}
        <section>
          <h2 className="text-2xl font-bold text-navy-950 mb-8">What We Build</h2>
          <div className="space-y-4 max-w-3xl">
            {hierarchy.map((item, i) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      i === 3
                        ? "bg-brand-blue text-white"
                        : i === 4
                        ? "bg-navy-950 text-white"
                        : "bg-slate-100 text-navy-700"
                    }`}
                  >
                    {i + 1}
                  </div>
                  {i < hierarchy.length - 1 && (
                    <div className="w-0.5 h-8 bg-slate-200 mt-1" />
                  )}
                </div>
                <div className="pt-1">
                  <div className="font-semibold text-navy-900 text-sm tracking-wide">{item.label}</div>
                  <div className="text-navy-500 text-sm mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section>
          <h2 className="text-2xl font-bold text-navy-950 mb-4">Our Approach: Build, Test, Verify</h2>
          <p className="text-navy-600 leading-relaxed mb-6 max-w-3xl">
            Every product in our catalog is intended to go through structured validation before
            being made available. The verification status on each product page reflects the actual
            testing state — not a marketing claim. We clearly distinguish between products under
            development, those in testing, and those that have been verified for release.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
            {testingCategories.map((item) => (
              <div
                key={item}
                className="flex items-start gap-2.5 bg-slate-50 border border-slate-200 rounded-lg p-4"
              >
                <ChevronRight className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-sm text-navy-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technology */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold text-navy-950 mb-4">Technology Foundation</h2>
          <p className="text-navy-600 leading-relaxed mb-4">
            Our Agent Kits are engineered with Oracle AI Database 26 AI as the primary target
            environment, with full backward compatibility for Oracle Database 19c, 21c, and 23ai.
            Agents are built using agentic AI frameworks and target Oracle data dictionary views,
            performance views, and metadata APIs directly — not generic database abstractions.
          </p>
          <p className="text-navy-600 leading-relaxed">
            The platform is designed for deployment flexibility: Agent Kits can run locally on a
            development machine, on-premise within an enterprise network, in cloud environments,
            or in hybrid configurations where some components are local and others are cloud-hosted.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-slate-50 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold text-navy-950 mb-3">
            Ready to explore our Agent Kits?
          </h2>
          <p className="text-navy-500 mb-6">
            Browse our catalog of Oracle-focused agentic products.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/agent-kits"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Agent Kits <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-navy-700 rounded-lg font-semibold hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
