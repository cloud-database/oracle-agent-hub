"use client";

import Link from "next/link";
import { Play, CheckCircle2, ChevronRight, Zap } from "lucide-react";

const trustItems = [
  "Well Tested",
  "Production Ready",
  "Oracle 26 AI Compatible",
];

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #0d1e4a 35%, #1a2f6e 65%, #0f2356 100%)",
      }}
      aria-label="Hero"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.07) 1px, transparent 1px), linear-gradient(to right, rgba(59,130,246,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* "Automate. Optimize. Gain Insights." — upper right */}
      <div
        className="absolute top-8 right-8 text-right hidden xl:block pointer-events-none select-none"
        aria-hidden="true"
      >
        <p className="text-white font-bold text-xl leading-snug">
          Automate.
          <span className="ml-2 inline-block w-2 h-2 rounded-full bg-blue-400 align-middle" />
        </p>
        <p className="text-white font-bold text-xl leading-snug">
          Optimize.
          <span className="ml-2 inline-block w-2 h-2 rounded-full bg-cyan-400 align-middle" />
        </p>
        <p className="text-white font-bold text-xl leading-snug">
          Gain Insights.
          <span className="ml-2 inline-block w-2 h-2 rounded-full bg-indigo-400 align-middle" />
        </p>
        <p className="text-blue-300 text-sm mt-1">With Agentic AI.</p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-blue-950/60 backdrop-blur-sm px-4 py-1.5">
              <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 flex-shrink-0" aria-hidden="true" />
              <span className="text-xs font-semibold text-blue-200 tracking-wide">
                AI-Powered • Oracle Native • Production Ready
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Smart Agents for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Smarter Oracle
              </span>{" "}
              Systems
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-blue-200 leading-relaxed max-w-xl">
              Discover, deploy and use ready-to-use agentic kits and tools engineered
              for Oracle database environments.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-blue-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/agent-kits"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-blue text-white font-semibold text-base px-7 py-3.5 hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                Explore Agent Kits
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/agent-lab"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold text-base px-7 py-3.5 hover:bg-white/20 hover:border-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
              >
                <Play className="w-4 h-4 fill-white" aria-hidden="true" />
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Right: hero visualization */}
          <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-visual.png"
              alt="Oracle 26 AI agentic visualization"
              className="w-full max-w-[500px] rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

