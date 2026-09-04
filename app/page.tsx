import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/hero/HeroSection";
import { FeatureStrip } from "@/components/hero/FeatureStrip";
import { AgentKitCard } from "@/components/product/AgentKitCard";
import { getFeaturedKits } from "@/data/products/agent-kits";
import { ArrowRight, CheckCircle2, ChevronRight, Mail, Settings2 } from "lucide-react";

export const metadata: Metadata = {
  title: "OracleAgentHub — Agentic Intelligence for Oracle Environments",
  description:
    "Discover tested Oracle-focused AI agents, agentic skills, workflows and deployment-ready Agent Kits for database administration, performance, security, migration and automation.",
};

const whyPoints = [
  {
    title: "Not Generic AI Prompts",
    body: "We package specialized Oracle intelligence into reusable agentic skills, agents, workflows and complete Agent Kits. Every product targets a specific Oracle operational domain.",
    icon: "🎯",
  },
  {
    title: "Tested Before Release",
    body: "Every released kit goes through structured functional, workflow, and Oracle environment testing before distribution. The verification status on each product page reflects current testing state.",
    icon: "✅",
  },
  {
    title: "Deploy In Your Environment",
    body: "Agent Kits are designed to run in your environment — local, on-premise, cloud or hybrid — not on our infrastructure. Your data stays where it belongs.",
    icon: "🏗️",
  },
];

const hierarchy = [
  { label: "SKILL", desc: "Focused modular capability" },
  { label: "AGENT", desc: "Autonomous analysis unit" },
  { label: "WORKFLOW", desc: "Orchestrated multi-step process" },
  { label: "AGENT KIT", desc: "Packaged deployable collection" },
  { label: "ENTERPRISE AUTOMATION", desc: "Full agentic platform" },
];

export default function HomePage() {
  const featuredKits = getFeaturedKits();

  return (
    <>
      <HeroSection />
      <FeatureStrip />

      {/* Featured Agent Kits */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-navy-950 mb-2">Featured Agentic Kits</h2>
              <p className="text-navy-600 max-w-xl">
                Pre-built, tested and ready-to-deploy agentic tools for Oracle environments.
              </p>
            </div>
            <Link
              href="/agent-kits"
              className="hidden sm:flex items-center gap-1.5 text-brand-blue font-medium hover:underline"
            >
              View all kits <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredKits.map((kit) => (
              <AgentKitCard key={kit.id} kit={kit} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/agent-kits"
              className="inline-flex items-center gap-1.5 text-brand-blue font-medium hover:underline"
            >
              View all kits <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why OracleAgentHub */}
      <section className="section-padding bg-navy-950">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">Why OracleAgentHub</h2>
            <p className="text-navy-300 max-w-2xl mx-auto">
              We build specialized Oracle intelligence into
              deployable, verifiable agentic products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyPoints.map((point) => (
              <div
                key={point.title}
                className="bg-navy-900 border border-navy-800 rounded-xl p-8"
              >
                <div className="text-3xl mb-4">{point.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-navy-300 text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Hierarchy */}
      <section className="section-padding bg-slate-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-950 mb-3">The Product Architecture</h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              Everything we build follows a consistent hierarchy — from focused skills to
              enterprise-grade agentic automation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {hierarchy.map((item, i) => (
              <div key={item.label} className="flex flex-col sm:flex-row items-center">
                <div className="flex flex-col items-center text-center w-40">
                  <div
                    className="w-28 h-16 rounded-lg flex items-center justify-center font-bold text-xs tracking-wide border-2"
                    style={{
                      background: i === 3 ? "#1a56db" : i === 4 ? "#0d1e4a" : "white",
                      color: i >= 3 ? "white" : "#0d1e4a",
                      borderColor: i >= 3 ? "transparent" : "#e2e8f0",
                    }}
                  >
                    {item.label}
                  </div>
                  <p className="text-xs text-navy-500 mt-2 leading-tight">{item.desc}</p>
                </div>
                {i < hierarchy.length - 1 && (
                  <ChevronRight className="text-navy-300 w-5 h-5 my-3 sm:my-0 rotate-90 sm:rotate-0 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing & Verification */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full px-3 py-1 text-xs font-medium mb-4">
                Our Commitment
              </div>
              <h2 className="text-3xl font-bold text-navy-950 mb-4">Tested Before Release</h2>
              <p className="text-navy-600 mb-6 leading-relaxed">
                We do not simply generate AI agents and ship them. Every Agent Kit is intended to go
                through structured validation across functional correctness, Oracle environment
                testing, output verification, and edge case handling before being made available.
              </p>
              <p className="text-navy-600 leading-relaxed">
                The verification status on every product page reflects its actual testing state —
                not a marketing claim.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Functional Testing",
                "Workflow Testing",
                "Oracle Environment Testing",
                "Output Verification",
                "Error Handling",
                "Edge Case Testing",
                "Configuration Validation",
                "Documentation Review",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span className="text-sm text-navy-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Kit CTA */}
      <section className="py-14 bg-gradient-to-r from-white to-blue-50 border-t border-slate-100">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold text-navy-950 mb-2">Want a Custom Agent Kit?</h2>
              <p className="text-slate-600 max-w-lg">
                We build custom agentic solutions tailored to your Oracle environment and business needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Contact Us
              </Link>
              <Link
                href="/request-custom-kit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Settings2 className="w-4 h-4" aria-hidden="true" />
                Request Custom Kit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
