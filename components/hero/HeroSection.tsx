"use client";

import Link from "next/link";
import { Play, CheckCircle2, ChevronRight } from "lucide-react";

const trustItems = [
  "Well Tested",
  "Verified",
  "Oracle Focused",
  "Modular",
  "Deployment Ready",
];

const capabilityNodes = [
  { label: "Monitor", x: 120, y: 60, color: "#1a56db" },
  { label: "Analyze", x: 60, y: 160, color: "#4f46e5" },
  { label: "Optimize", x: 300, y: 80, color: "#06b6d4" },
  { label: "Secure", x: 340, y: 210, color: "#1a56db" },
  { label: "Document", x: 70, y: 290, color: "#4f46e5" },
  { label: "Report", x: 300, y: 320, color: "#06b6d4" },
];

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 40%, #f0f9ff 100%)",
      }}
      aria-label="Hero"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,86,219,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(26,86,219,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/30 bg-white/80 backdrop-blur-sm px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" aria-hidden="true" />
              <span className="text-xs font-semibold text-brand-blue tracking-wide">
                AI-Powered • Oracle Native • Production Ready
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 leading-tight tracking-tight">
              Smart Agents for{" "}
              <span className="bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                Smarter Oracle
              </span>{" "}
              Systems
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
              Discover, deploy and use ready-to-use agentic kits and tools engineered
              for Oracle database environments.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/agent-kits"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-blue text-white font-semibold text-base px-7 py-3.5 hover:bg-blue-700 transition-colors shadow-md shadow-brand-blue/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                Explore Agent Kits
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="/agent-lab"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-navy-200 bg-white/70 backdrop-blur-sm text-navy-900 font-semibold text-base px-7 py-3.5 hover:bg-white hover:border-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                <Play className="w-4 h-4 text-brand-blue fill-brand-blue" aria-hidden="true" />
                Explore Agent Lab
              </Link>
            </div>
          </div>

          {/* Right: technical visualization */}
          <div className="hidden lg:flex items-center justify-center" aria-hidden="true">
            <OracleVisualization />
          </div>
        </div>
      </div>
    </section>
  );
}

function OracleVisualization() {
  return (
    <div className="relative w-[420px] h-[420px]">
      {/* Central Oracle cube */}
      <svg
        viewBox="0 0 420 420"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Glow ring */}
        <circle cx="210" cy="210" r="140" fill="none" stroke="#1a56db" strokeWidth="1" opacity="0.15" />
        <circle cx="210" cy="210" r="110" fill="none" stroke="#06b6d4" strokeWidth="0.5" opacity="0.2" />
        <circle cx="210" cy="210" r="170" fill="none" stroke="#4f46e5" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.15" />

        {/* Isometric cube face - bottom */}
        <polygon
          points="210,270 150,237 150,165 210,198"
          fill="#1a56db"
          opacity="0.15"
        />
        {/* Isometric cube face - right */}
        <polygon
          points="210,270 270,237 270,165 210,198"
          fill="#1a56db"
          opacity="0.25"
        />
        {/* Isometric cube face - top */}
        <polygon
          points="210,198 150,165 210,132 270,165"
          fill="#1a56db"
          opacity="0.4"
        />
        {/* Cube border */}
        <polyline points="150,165 210,132 270,165 270,237 210,270 150,237 150,165" fill="none" stroke="#1a56db" strokeWidth="1.5" opacity="0.6" />
        <line x1="210" y1="132" x2="210" y2="198" stroke="#1a56db" strokeWidth="1" opacity="0.4" />
        <line x1="150" y1="165" x2="210" y2="198" stroke="#1a56db" strokeWidth="1" opacity="0.4" />
        <line x1="270" y1="165" x2="210" y2="198" stroke="#1a56db" strokeWidth="1" opacity="0.4" />

        {/* Center text on cube top face */}
        <text x="210" y="168" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1a56db" opacity="0.9">26 AI</text>
        <text x="210" y="182" textAnchor="middle" fontSize="9" fontWeight="600" fill="#1a56db" opacity="0.7">ORACLE</text>

        {/* Connector lines to nodes */}
        {capabilityNodes.map((node, i) => (
          <line
            key={i}
            x1="210"
            y1="210"
            x2={node.x + 35}
            y2={node.y + 14}
            stroke={node.color}
            strokeWidth="0.75"
            strokeDasharray="3 3"
            opacity="0.4"
          />
        ))}

        {/* Capability node cards */}
        {capabilityNodes.map((node) => (
          <g key={node.label} transform={`translate(${node.x}, ${node.y})`}>
            <rect x="0" y="0" width="70" height="28" rx="6" fill="white" stroke={node.color} strokeWidth="1" opacity="0.9" />
            <rect x="0" y="0" width="70" height="4" rx="6" fill={node.color} opacity="0.7" />
            <text x="35" y="20" textAnchor="middle" fontSize="10" fontWeight="600" fill="#0d1e4a">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
