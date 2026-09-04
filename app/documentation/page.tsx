"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { ChevronRight, BookOpen } from "lucide-react";
import Link from "next/link";

const categories = [
  "Getting Started",
  "Agent Kits",
  "Agents",
  "Skills",
  "Deployment",
  "Configuration",
  "Oracle Compatibility",
  "Troubleshooting",
  "FAQ",
];

type DocContent = {
  title: string;
  body: React.ReactNode;
};

const docs: Record<string, DocContent> = {
  "Getting Started": {
    title: "Getting Started with OracleAgentHub",
    body: (
      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-navy-950 mb-3">What is OracleAgentHub?</h2>
          <p className="text-navy-600 leading-relaxed">
            OracleAgentHub is a marketplace for tested, Oracle-focused agentic skills, AI agents,
            workflows, and complete Agent Kits. Our products are designed to be deployed in your
            Oracle environment — not hosted services.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-navy-950 mb-3">Product Hierarchy</h2>
          <div className="space-y-3">
            {[
              ["SKILL", "A focused, reusable capability targeting a specific Oracle data source."],
              ["AGENT", "An autonomous unit composing multiple skills for complex analysis."],
              ["WORKFLOW", "An orchestrated sequence of agent actions producing structured output."],
              ["AGENT KIT", "A packaged deployable collection of agents, skills, and workflows."],
              ["ENTERPRISE AUTOMATION", "Full agentic coverage across Oracle operational domains."],
            ].map(([label, desc]) => (
              <div key={label} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-lg p-4">
                <span className="text-xs font-bold text-brand-blue bg-blue-50 px-2 py-1 rounded font-mono flex-shrink-0 mt-0.5">{label}</span>
                <span className="text-sm text-navy-600">{desc}</span>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-navy-950 mb-3">Prerequisites</h2>
          <ul className="space-y-2 text-navy-600 text-sm">
            {[
              "Oracle Database access (19c, 21c, 23ai, or Oracle AI Database 26 AI)",
              "Deployment environment (local machine, server, or cloud compute)",
              "Network connectivity from deployment environment to Oracle listener",
              "Oracle user with appropriate read-only privileges (varies by kit)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-navy-950 mb-3">Quick Start</h2>
          <ol className="space-y-3">
            {[
              ["Choose an Agent Kit", "Browse the Agent Kits catalog and select the kit that matches your requirements."],
              ["Review Compatibility", "Check the Compatibility section on the product page to verify Oracle version and deployment support."],
              ["Request Access", "Use the 'Request Access' or 'Get the Kit' button to contact us and receive the kit package."],
              ["Deploy to Your Environment", "Follow the deployment documentation included in the kit to set up in your environment."],
              ["Configure Connection", "Configure the Oracle connection using the provided configuration templates and your credentials."],
              ["Run Your First Agent", "Execute the first agent as described in the kit's getting started guide."],
            ].map(([step, desc], i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <div className="font-semibold text-navy-900 text-sm">{step}</div>
                  <div className="text-navy-500 text-sm">{desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-navy-950 mb-3">Next Steps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { label: "Browse Agent Kits", href: "/agent-kits" },
              { label: "Explore Individual Agents", href: "/agents" },
              { label: "View All Skills", href: "/skills" },
              { label: "Try the Agent Lab", href: "/agent-lab" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 bg-blue-50 text-brand-blue border border-blue-200 rounded-lg px-4 py-3 text-sm font-medium hover:bg-blue-100 transition-colors"
              >
                {link.label} <ChevronRight className="w-4 h-4 ml-auto" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    ),
  },
  "Agent Kits": {
    title: "Agent Kits",
    body: (
      <div className="space-y-6">
        <p className="text-navy-600 leading-relaxed">
          Agent Kits are packaged collections of Oracle-focused agents, skills, workflows, scripts,
          configuration files, documentation, and tests designed for deployment in Oracle environments.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-800">
            Detailed per-kit documentation is provided within each kit package upon delivery.
            This section will be updated with comprehensive Agent Kit documentation as kits are verified and released.
          </p>
        </div>
        <Link href="/agent-kits" className="inline-flex items-center gap-2 text-brand-blue font-medium hover:underline text-sm">
          Browse Agent Kits <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    ),
  },
  "Agents": {
    title: "Agents",
    body: (
      <div className="space-y-6">
        <p className="text-navy-600 leading-relaxed">
          Agents are autonomous analysis units that compose multiple skills to complete complex Oracle analysis tasks.
          Each agent has defined inputs, outputs, and a set of skills it uses to gather and analyze Oracle data.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="text-sm text-blue-800">
            Per-agent documentation is included in the Agent Kit package. This section will be updated with
            comprehensive agent reference documentation as kits are verified and released.
          </p>
        </div>
        <Link href="/agents" className="inline-flex items-center gap-2 text-brand-blue font-medium hover:underline text-sm">
          Browse Agents <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    ),
  },
  "Skills": {
    title: "Skills",
    body: (
      <div className="space-y-6">
        <p className="text-navy-600 leading-relaxed">
          Skills are modular capabilities that agents compose to complete analysis tasks. Each skill targets
          a specific Oracle data source or operation — for example, querying V$SESSION for session analysis,
          or using DBMS_METADATA to extract DDL.
        </p>
        <Link href="/skills" className="inline-flex items-center gap-2 text-brand-blue font-medium hover:underline text-sm">
          Browse Skills <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    ),
  },
  "Deployment": {
    title: "Deployment",
    body: (
      <div className="space-y-6">
        <p className="text-navy-600 leading-relaxed">
          Agent Kits are designed to be deployed in your environment. Supported deployment modes include
          local workstation, on-premise server, cloud compute instance, and hybrid configurations.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-sm text-amber-800">
            Detailed deployment guides are included in each Agent Kit package. General deployment documentation
            will be published here as kits are released.
          </p>
        </div>
      </div>
    ),
  },
  "Configuration": {
    title: "Configuration",
    body: (
      <div className="space-y-6">
        <p className="text-navy-600 leading-relaxed">
          Each Agent Kit includes configuration templates for Oracle database connection settings,
          agent behavior thresholds, output formats, and deployment environment specifics.
          All sensitive configuration such as database credentials must be managed via environment
          variables — never committed to source control.
        </p>
      </div>
    ),
  },
  "Oracle Compatibility": {
    title: "Oracle Compatibility",
    body: (
      <div className="space-y-6">
        <p className="text-navy-600 leading-relaxed">
          Agent Kits target Oracle Database 19c, 21c, 23ai, and Oracle AI Database 26 AI.
          The specific version compatibility for each kit is displayed on the product page.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {["Oracle Database 19c", "Oracle Database 21c", "Oracle Database 23ai", "Oracle AI Database 26 AI"].map((v) => (
            <div key={v} className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-700">
              {v}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  "Troubleshooting": {
    title: "Troubleshooting",
    body: (
      <div className="space-y-6">
        <p className="text-navy-600">Common troubleshooting guidance for Agent Kit deployment and execution.</p>
        <div className="space-y-4">
          {[
            ["Connection refused", "Verify the Oracle listener is running and the connection string hostname, port, and service name are correct."],
            ["Insufficient privileges", "Review the privilege requirements documented in the kit and grant the necessary read-only access to the agent user."],
            ["Agent produces no output", "Check that the Oracle user has SELECT access to the required data dictionary views. Review the kit's prerequisites."],
            ["Configuration error", "Verify all required environment variables are set. Use the .env.example file as a reference."],
          ].map(([issue, resolution]) => (
            <div key={issue} className="bg-slate-50 border border-slate-200 rounded-xl p-5">
              <div className="font-semibold text-navy-900 text-sm mb-1">{issue}</div>
              <div className="text-navy-500 text-sm">{resolution}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-navy-500">
          Need further help?{" "}
          <Link href="/contact" className="text-brand-blue hover:underline">Contact us</Link>.
        </p>
      </div>
    ),
  },
  "FAQ": {
    title: "FAQ",
    body: (
      <div className="space-y-4">
        <p className="text-navy-600">
          See the <Link href="/faq" className="text-brand-blue hover:underline">FAQ page</Link> for
          answers to common questions about OracleAgentHub and our products.
        </p>
      </div>
    ),
  },
};

export default function DocumentationPage() {
  const [activeCategory, setActiveCategory] = useState("Getting Started");
  const doc = docs[activeCategory] ?? docs["Getting Started"];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container-wide py-12">
          <div className="flex items-center gap-3">
            <BookOpen className="w-7 h-7 text-brand-blue" />
            <h1 className="text-4xl font-bold text-navy-950">Documentation</h1>
          </div>
        </div>
      </div>

      <div className="container-wide py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <nav aria-label="Documentation navigation">
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        activeCategory === cat
                          ? "bg-brand-blue text-white"
                          : "text-navy-600 hover:bg-slate-100 hover:text-navy-900"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold text-navy-950 mb-8">{doc.title}</h1>
            {doc.body}
          </main>
        </div>
      </div>
    </div>
  );
}
