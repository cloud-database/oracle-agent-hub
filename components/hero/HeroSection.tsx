"use client";

import Link from "next/link";
import { Play, CheckCircle2, ChevronRight } from "lucide-react";

const trustItems = [
  "Well Tested",
  "Production Ready",
  "Oracle 26 AI Compatible",
];

const capabilityNodes = [
  { label: "Monitor",   x: 90,  y: 45,  color: "#3b82f6" },
  { label: "Analyze",   x: 30,  y: 155, color: "#818cf8" },
  { label: "Optimize",  x: 290, y: 65,  color: "#06b6d4" },
  { label: "Secure",    x: 325, y: 195, color: "#3b82f6" },
  { label: "Document",  x: 35,  y: 285, color: "#818cf8" },
  { label: "Report",    x: 285, y: 315, color: "#06b6d4" },
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
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true" />
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
      <svg
        viewBox="0 0 420 420"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="cubeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="cubeTopFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="cubeRightFace" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.28" />
          </linearGradient>
          <linearGradient id="cubeLeftFace" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#172554" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Ambient glow behind cube */}
        <ellipse cx="210" cy="215" rx="110" ry="65" fill="url(#cubeGlow)" />

        {/* Outer rings */}
        <circle cx="210" cy="210" r="165" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.12" />
        <circle cx="210" cy="210" r="142" fill="none" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.18" />
        <circle cx="210" cy="210" r="118" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.1" />

        {/* Isometric cube faces */}
        <polygon points="210,270 150,237 150,165 210,198" fill="url(#cubeLeftFace)" />
        <polygon points="210,270 270,237 270,165 210,198" fill="url(#cubeRightFace)" />
        <polygon points="210,198 150,165 210,132 270,165" fill="url(#cubeTopFace)" />

        {/* Cube edges — neon glow */}
        <polyline
          points="150,165 210,132 270,165 270,237 210,270 150,237 150,165"
          fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.95"
          filter="url(#glow)"
        />
        <line x1="210" y1="132" x2="210" y2="198" stroke="#60a5fa" strokeWidth="1.5" opacity="0.8" filter="url(#glow)" />
        <line x1="150" y1="165" x2="210" y2="198" stroke="#60a5fa" strokeWidth="1.5" opacity="0.8" filter="url(#glow)" />
        <line x1="270" y1="165" x2="210" y2="198" stroke="#60a5fa" strokeWidth="1.5" opacity="0.8" filter="url(#glow)" />
        <line x1="210" y1="198" x2="210" y2="270" stroke="#60a5fa" strokeWidth="0.75" opacity="0.25" strokeDasharray="3 3" />

        {/* "26 AI / ORACLE" text */}
        <text x="210" y="163" textAnchor="middle" fontSize="13" fontWeight="800" fill="#bfdbfe" filter="url(#glow)">26 AI</text>
        <text x="210" y="179" textAnchor="middle" fontSize="9" fontWeight="600" fill="#93c5fd" opacity="0.9">ORACLE</text>

        {/* Connector lines */}
        {capabilityNodes.map((node, i) => (
          <line
            key={i}
            x1="210" y1="210"
            x2={node.x + 38} y2={node.y + 14}
            stroke={node.color}
            strokeWidth="0.75"
            strokeDasharray="3 3"
            opacity="0.5"
          />
        ))}

        {/* Capability node cards */}
        {capabilityNodes.map((node) => (
          <g key={node.label} transform={`translate(${node.x}, ${node.y})`}>
            <rect x="0" y="0" width="76" height="28" rx="6"
              fill="rgba(10,22,40,0.88)" stroke={node.color} strokeWidth="1.5"
              filter="url(#glow)"
            />
            <rect x="0" y="0" width="76" height="3.5" rx="3" fill={node.color} opacity="0.85" />
            <text x="38" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="white">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
