import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Package, Cpu, Workflow, ArrowRight } from "lucide-react";
import { getKitBySlug, agentKits } from "@/data/products/agent-kits";
import { getAgentsByKit } from "@/data/products/agents";
import { VerificationBadge } from "@/components/product/VerificationBadge";
import { CompatibilityBadge } from "@/components/product/CompatibilityBadge";
import { AgentKitCard } from "@/components/product/AgentKitCard";
import { AgentCard } from "@/components/product/AgentCard";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return agentKits.map((kit) => ({ slug: kit.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const kit = getKitBySlug(params.slug);
  if (!kit) return { title: "Kit Not Found" };
  return {
    title: kit.name,
    description: kit.shortDescription,
  };
}

export default function AgentKitDetailPage({ params }: Props) {
  const kit = getKitBySlug(params.slug);
  if (!kit) notFound();

  const kitAgents = getAgentsByKit(kit.id);
  const relatedKits = agentKits.filter((k) => k.id !== kit.id).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container-wide py-4">
          <nav className="flex items-center gap-1.5 text-sm text-navy-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-blue">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/agent-kits" className="hover:text-brand-blue">Agent Kits</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-navy-900 font-medium">{kit.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-slate-50 border-b border-slate-200 pb-12">
        <div className="container-wide pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <span className="inline-block bg-brand-blue/10 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {kit.category}
              </span>
              <h1 className="text-4xl font-bold text-navy-950 mb-3">{kit.name}</h1>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <VerificationBadge status={kit.verificationStatus} />
                {kit.new && (
                  <span className="bg-cyan-50 text-cyan-700 border border-cyan-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    New
                  </span>
                )}
                {kit.popular && (
                  <span className="bg-amber-50 text-amber-700 border border-amber-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="text-navy-600 text-lg leading-relaxed mb-6">{kit.shortDescription}</p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-brand-blue" />
                  <div>
                    <div className="text-xl font-bold text-navy-950">{kit.agentCount}+</div>
                    <div className="text-xs text-navy-500">Agents</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-brand-cyan" />
                  <div>
                    <div className="text-xl font-bold text-navy-950">{kit.skillCount}+</div>
                    <div className="text-xs text-navy-500">Skills</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-indigo-500" />
                  <div>
                    <div className="text-xl font-bold text-navy-950">{kit.workflowCount}+</div>
                    <div className="text-xs text-navy-500">Workflows</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/request-custom-kit"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get the Kit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy-300 text-navy-700 rounded-lg font-semibold hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  Request Access
                </Link>
              </div>
            </div>

            {/* Pricing card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="text-sm text-navy-500 mb-2">Pricing</div>
              <div className="text-3xl font-bold text-navy-950 mb-1">{kit.price.label}</div>
              {kit.price.amount && (
                <div className="text-navy-500 text-sm mb-4">
                  {kit.price.currency} {kit.price.amount}
                </div>
              )}
              <div className="border-t border-slate-100 pt-4 mb-4">
                <div className="text-xs font-semibold text-navy-500 uppercase tracking-wide mb-3">
                  Includes
                </div>
                {kit.whatIsIncluded.slice(0, 5).map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-navy-700 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="block w-full text-center py-3 px-4 border-2 border-brand-blue text-brand-blue rounded-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors text-sm"
              >
                Request Access
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide py-12 space-y-14">
        {/* What It Does */}
        <section>
          <h2 className="text-2xl font-bold text-navy-950 mb-4">What It Does</h2>
          <p className="text-navy-600 leading-relaxed max-w-3xl">{kit.businessProblem}</p>
        </section>

        {/* What's Included */}
        <section>
          <h2 className="text-2xl font-bold text-navy-950 mb-6">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {kit.whatIsIncluded.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3"
              >
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span className="text-sm font-medium text-navy-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section>
          <h2 className="text-2xl font-bold text-navy-950 mb-6">Capabilities</h2>
          <div className="flex flex-wrap gap-2">
            {kit.capabilities.map((cap) => (
              <span
                key={cap}
                className="bg-blue-50 text-brand-blue border border-blue-200 text-sm font-medium px-3 py-1.5 rounded-full"
              >
                {cap}
              </span>
            ))}
          </div>
        </section>

        {/* Compatibility */}
        <section>
          <h2 className="text-2xl font-bold text-navy-950 mb-6">Compatibility</h2>
          <CompatibilityBadge compatibility={kit.compatibility} />
        </section>

        {/* Included Agents */}
        {kitAgents.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-navy-950 mb-2">Included Agents</h2>
            <p className="text-navy-500 text-sm mb-6">
              A sample of the agents included in this kit.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {kitAgents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} compact />
              ))}
            </div>
          </section>
        )}

        {/* Related Kits */}
        {relatedKits.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-navy-950 mb-6">Other Agent Kits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedKits.map((k) => (
                <AgentKitCard key={k.id} kit={k} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
