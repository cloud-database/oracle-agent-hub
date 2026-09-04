"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";

const subjects = [
  "General Inquiry",
  "Agent Kit Question",
  "Custom Kit Request",
  "Technical Support",
  "Other",
];

interface FormState {
  name: string;
  company: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    subject: subjects[0],
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container-wide py-12">
          <h1 className="text-4xl font-bold text-navy-950 mb-2">Contact</h1>
          <p className="text-navy-600">Get in touch with the OracleAgentHub team.</p>
        </div>
      </div>

      <div className="container-wide py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-navy-950 mb-4">Get In Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-blue mt-0.5" />
                  <div>
                    <div className="text-sm font-medium text-navy-900">Email</div>
                    <div className="text-sm text-navy-500">contact@oracleagenthub.com</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <h3 className="font-semibold text-navy-900 mb-2 text-sm">Custom Agent Kit?</h3>
              <p className="text-sm text-navy-600 mb-3">
                If you need a custom Oracle agentic solution, use our dedicated request form.
              </p>
              <a
                href="/request-custom-kit"
                className="inline-flex items-center gap-1.5 text-brand-blue text-sm font-medium hover:underline"
              >
                Request Custom Kit <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mb-4" />
                <h2 className="text-2xl font-bold text-navy-950 mb-2">Message Received</h2>
                <p className="text-navy-500 max-w-sm">
                  Thank you — we&apos;ll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text"
                      value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-2.5 border rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent ${errors.name ? "border-red-400" : "border-slate-300"}`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-1.5">
                      Company
                    </label>
                    <input
                      id="company" name="company" type="text"
                      value={form.company} onChange={handleChange}
                      placeholder="Your company"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email" name="email" type="email"
                    value={form.email} onChange={handleChange}
                    placeholder="you@company.com"
                    className={`w-full px-4 py-2.5 border rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent ${errors.email ? "border-red-400" : "border-slate-300"}`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Subject
                  </label>
                  <select
                    id="subject" name="subject"
                    value={form.subject} onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message" name="message"
                    rows={5} value={form.message} onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className={`w-full px-4 py-2.5 border rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none ${errors.message ? "border-red-400" : "border-slate-300"}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  {!submitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
