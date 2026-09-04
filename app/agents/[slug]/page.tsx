import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { agents } from "@/data/products/agents";
import { agentKits } from "@/data/products/agent-kits";
import { VerificationBadge } from "@/components/product/VerificationBadge";

export function generateStaticParams() {
  return agents.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const agent = agents.find((a) => a.slug === params.slug);
  if (!agent) return {};
  return {
    title: agent.name,
    description: agent.description,
  };
}

export default function AgentDetailPage({ params }: { params: { slug: string } }) {
  const agent = agents.find((a) => a.slug === params.slug);
  if (!agent) notFound();

  const kits = agentKits.filter((k) => agent.supportedKits.includes(k.id));

  const categoryColors: Record<string, string> = {
    "Database Administration": "bg-blue-50 text-blue-700 border-blue-200",
    "Performance": "bg-amber-50 text-amber-700 border-amber-200",
    "Security": "bg-red-50 text-red-700 border-red-200",
    "Schema & Documentation": "bg-violet-50 text-violet-700 border-violet-200",
    "Migration": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Oracle AI Database": "bg-cyan-50 text-cyan-700 border-cyan-200",
  };
  const catClass = categoryColors[agent.category] ?? "bg-slate-50 text-slate-700 border-slate-200";

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container-wide py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/agents" className="hover:text-brand-blue transition-colors">Agents</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 font-medium">{agent.name}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container-wide py-12">
          <Link
            href="/agents"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-brand-blue transition-colors mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Agents
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${catClass}`}>
                  {agent.category}
                </span>
                <VerificationBadge status={agent.verificationStatus} />
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-navy-950">{agent.name}</h1>
              <p className="text-navy-600 text-lg max-w-2xl leading-relaxed">{agent.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Purpose */}
            <section>
              <h2 className="text-xl font-bold text-navy-950 mb-4">What This Agent Does</h2>
              <p className="text-navy-600 leading-relaxed">{agent.purpose}</p>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-xl font-bold text-navy-950 mb-4">Skills Used</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {agent.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-navy-900 text-sm">{skill.name}</p>
                      {skill.description && (
                        <p className="text-navy-500 text-xs mt-0.5">{skill.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Inputs */}
            {agent.inputs.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-navy-950 mb-4">Inputs</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200">
                        <th className="text-left px-4 py-3 font-semibold text-navy-700">Name</th>
                        <th className="text-left px-4 py-3 font-semibold text-navy-700">Type</th>
                        <th className="text-left px-4 py-3 font-semibold text-navy-700">Description</th>
                        <th className="text-left px-4 py-3 font-semibold text-navy-700">Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agent.inputs.map((input, i) => (
                        <tr
                          key={input.name}
                          className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                        >
                          <td className="px-4 py-3 font-mono text-xs text-navy-800">{input.name}</td>
                          <td className="px-4 py-3 font-mono text-xs text-brand-blue">{input.type}</td>
                          <td className="px-4 py-3 text-navy-600">{input.description}</td>
                          <td className="px-4 py-3">
                            {input.required ? (
                              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">Required</span>
                            ) : (
                              <span className="text-xs text-slate-400">Optional</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* Outputs */}
            {agent.outputs.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-navy-950 mb-4">Outputs</h2>
                <div className="space-y-3">
                  {agent.outputs.map((output) => (
                    <div
                      key={output.name}
                      className="flex items-start gap-4 p-4 border border-slate-200 rounded-xl"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-cyan mt-2 flex-shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-navy-900 text-sm">{output.name}</span>
                          <span className="font-mono text-xs text-brand-blue bg-blue-50 border border-blue-100 rounded px-1.5 py-0.5">{output.type}</span>
                        </div>
                        <p className="text-navy-500 text-sm">{output.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Status */}
            <div className="border border-slate-200 rounded-2xl p-6 space-y-4">
              <h3 className="font-semibold text-navy-950 text-sm">Agent Status</h3>
              <VerificationBadge status={agent.verificationStatus} />
              <p className="text-xs text-navy-500 leading-relaxed">
                Verification status reflects the current testing and validation state of this agent.
              </p>
            </div>

            {/* Included In */}
            {kits.length > 0 && (
              <div className="border border-slate-200 rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-navy-950 text-sm">Included In</h3>
                <ul className="space-y-3">
                  {kits.map((kit) => (
                    <li key={kit.id}>
                      <Link
                        href={`/agent-kits/${kit.slug}`}
                        className="flex items-center justify-between group"
                      >
                        <div>
                          <p className="text-sm font-medium text-navy-900 group-hover:text-brand-blue transition-colors">
                            {kit.name}
                          </p>
                          <p className="text-xs text-navy-500">{kit.category}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand-blue transition-colors flex-shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="bg-navy-950 rounded-2xl p-6 space-y-3">
              <h3 className="font-semibold text-white text-sm">Get This Agent</h3>
              <p className="text-navy-300 text-xs leading-relaxed">
                This agent is available as part of an Agent Kit. Explore the included kits or request custom access.
              </p>
              {kits[0] && (
                <Link
                  href={`/agent-kits/${kits[0].slug}`}
                  className="block w-full text-center rounded-lg bg-brand-blue text-white text-sm font-semibold px-4 py-2.5 hover:bg-blue-700 transition-colors"
                >
                  View Agent Kit
                </Link>
              )}
              <Link
                href="/request-custom-kit"
                className="block w-full text-center rounded-lg border border-navy-700 text-navy-300 text-sm font-medium px-4 py-2.5 hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                Request Custom Kit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
