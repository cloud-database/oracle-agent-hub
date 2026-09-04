"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    q: "What is an Agent Kit?",
    a: "An Agent Kit is a packaged collection of Oracle-focused agents, skills, workflows, utilities, documentation, and tests designed to be deployed in your own environment. It is a complete deployment package — not a hosted service or a single script.",
  },
  {
    q: "How are Agent Kits delivered?",
    a: "Agent Kits are distributed as deployment packages. You deploy and run them in your own Oracle environment — they are not hosted services. Your Oracle database connection credentials and data never leave your infrastructure.",
  },
  {
    q: "What Oracle versions are supported?",
    a: "Our Agent Kits are designed to support Oracle Database 19c, 21c, 23ai, and Oracle AI Database 26 AI. Specific compatibility is listed on each product page. Some kits may have narrower version requirements — always check the Compatibility section.",
  },
  {
    q: "Are these tested before release?",
    a: "Every Agent Kit is intended to go through structured functional, workflow, and Oracle environment testing before being made available. The verification status displayed on each product page reflects its current testing state. We clearly distinguish between Development, Testing, Verified, and Production Ready states.",
  },
  {
    q: "Can I get a custom Agent Kit?",
    a: "Yes. Contact us or use the Request Custom Kit form to describe your Oracle environment and automation requirements. We can design a specialized combination of agents, skills, and workflows targeted at your specific operational needs.",
  },
  {
    q: "What is the difference between a Skill, an Agent, and an Agent Kit?",
    a: "A Skill is a focused, modular capability — for example, analyzing Oracle tablespace utilization. An Agent uses multiple skills to complete a more complex analysis task autonomously — for example, a Database Health Agent that collects and analyzes multiple dimensions of database state. An Agent Kit is a packaged collection of related agents, skills, workflows, and supporting files targeting a specific Oracle domain.",
  },
  {
    q: "Do these agents require access to our production database?",
    a: "Agent Kits are designed to work with read-only Oracle access for analysis tasks. They do not require DBA privileges for monitoring and analysis use cases. Specific privilege requirements are documented per kit. We recommend always starting with a test or development environment.",
  },
  {
    q: "What is Oracle AI Database 26 AI?",
    a: "Oracle AI Database 26 AI is Oracle's AI-native database platform. Our Oracle AI Database Kit is specifically designed to leverage its capabilities for AI-assisted database analysis, natural language database intelligence, and intelligent agentic workflows.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing varies by product type. Individual agents, Agent Kits, and Custom Enterprise solutions are priced differently. Current pricing is available on the Pricing page. Contact us to discuss your specific requirements.",
  },
  {
    q: "Is there a trial or demo?",
    a: "The Agent Lab on this website demonstrates how agentic workflows operate using simulated data — no real Oracle database is required. Contact us to discuss evaluation options for specific Agent Kits.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-slate-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-navy-900 text-sm pr-4">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-navy-400 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-navy-400 flex-shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-navy-600 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container-wide py-12">
          <h1 className="text-4xl font-bold text-navy-950 mb-2">Frequently Asked Questions</h1>
          <p className="text-navy-600">Answers to common questions about OracleAgentHub and our products.</p>
        </div>
      </div>

      <div className="container-wide py-12">
        <div className="max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div className="mt-12 max-w-3xl bg-slate-50 border border-slate-200 rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-navy-950 mb-2">Still have questions?</h2>
          <p className="text-navy-600 text-sm mb-4">
            If you didn&apos;t find the answer you were looking for, get in touch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-blue text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/documentation"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-300 text-navy-700 rounded-lg text-sm font-semibold hover:border-brand-blue hover:text-brand-blue transition-colors"
            >
              Read the Docs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
