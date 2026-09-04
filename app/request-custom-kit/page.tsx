"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const capabilities = [
  "Database Administration",
  "Performance Optimization",
  "Security & Compliance",
  "Monitoring & Alerting",
  "Migration",
  "Schema Documentation",
  "Reporting",
  "Oracle AI Features",
  "Other",
];

const oracleVersions = ["Oracle Database 19c", "Oracle Database 21c", "Oracle Database 23ai", "Oracle AI Database 26 AI", "Other"];
const deploymentTypes = ["Local", "On-Premise", "Cloud", "Hybrid"];
const dbSizes = ["Small (<100 GB)", "Medium (100 GB – 1 TB)", "Large (>1 TB)"];
const timelines = ["ASAP", "Within 1 month", "Within 3 months", "Flexible"];

export default function RequestCustomKitPage() {
  const [selectedCaps, setSelectedCaps] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    oracleVersion: oracleVersions[0], deploymentType: deploymentTypes[0], dbSize: dbSizes[0],
    challenge: "", outcome: "", timeline: timelines[3],
  });

  function toggleCap(cap: string) {
    setSelectedCaps((prev) =>
      prev.includes(cap) ? prev.filter((c) => c !== cap) : [...prev, cap]
    );
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSubmitted(true); }, 1000);
  }

  if (submitted) {
    return (
      <div className="bg-white min-h-screen flex flex-col items-center justify-center py-24 text-center px-4">
        <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-5" />
        <h1 className="text-3xl font-bold text-navy-950 mb-3">Request Received</h1>
        <p className="text-navy-500 max-w-md">
          Thank you for your custom kit request. We&apos;ll review your requirements and be in touch.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container-wide py-12">
          <h1 className="text-4xl font-bold text-navy-950 mb-3">Need a Custom Oracle Agent Kit?</h1>
          <p className="text-navy-600 max-w-2xl">
            Tell us what you want to automate. We can design a specialized combination of
            Oracle-focused agents, skills and workflows around your environment and requirements.
          </p>
        </div>
      </div>

      <div className="container-wide py-12">
        <form onSubmit={handleSubmit} className="max-w-3xl space-y-10">
          {/* Section 1: Contact */}
          <section>
            <h2 className="text-lg font-semibold text-navy-950 mb-5 pb-2 border-b border-slate-200">
              1. Contact Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input name="name" type="text" required value={form.name} onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">Company</label>
                <input name="company" type="text" value={form.company} onChange={handleChange}
                  placeholder="Your company"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input name="email" type="email" required value={form.email} onChange={handleChange}
                  placeholder="you@company.com"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">Phone (optional)</label>
                <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent" />
              </div>
            </div>
          </section>

          {/* Section 2: Oracle Environment */}
          <section>
            <h2 className="text-lg font-semibold text-navy-950 mb-5 pb-2 border-b border-slate-200">
              2. Oracle Environment
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { label: "Oracle Version", name: "oracleVersion", options: oracleVersions },
                { label: "Deployment Type", name: "deploymentType", options: deploymentTypes },
                { label: "Database Size", name: "dbSize", options: dbSizes },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">{field.label}</label>
                  <select
                    name={field.name}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                  >
                    {field.options.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Capabilities */}
          <section>
            <h2 className="text-lg font-semibold text-navy-950 mb-5 pb-2 border-b border-slate-200">
              3. Required Capabilities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {capabilities.map((cap) => (
                <label key={cap} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedCaps.includes(cap)}
                    onChange={() => toggleCap(cap)}
                    className="w-4 h-4 rounded border-slate-300 text-brand-blue focus:ring-brand-blue"
                  />
                  <span className="text-sm text-navy-700 group-hover:text-navy-900">{cap}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Section 4: Details */}
          <section>
            <h2 className="text-lg font-semibold text-navy-950 mb-5 pb-2 border-b border-slate-200">
              4. Requirements Detail
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">Current Challenge</label>
                <textarea
                  name="challenge" rows={4} value={form.challenge} onChange={handleChange}
                  placeholder="Describe the Oracle automation problem you're trying to solve..."
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">Expected Outcome</label>
                <textarea
                  name="outcome" rows={4} value={form.outcome} onChange={handleChange}
                  placeholder="What would success look like? What output or automation do you need?"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-700 mb-1.5">Timeline</label>
                <select
                  name="timeline" value={form.timeline} onChange={handleChange}
                  className="w-full sm:w-64 px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                >
                  {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
          </section>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {submitting ? "Submitting..." : "Request Custom Kit"}
            {!submitting && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </div>
  );
}
