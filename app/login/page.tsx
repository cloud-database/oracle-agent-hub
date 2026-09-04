"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative min-h-screen bg-navy-950 flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(to right, rgba(59,130,246,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(26,86,219,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md">
        {/* Logo + heading */}
        <div className="text-center mb-8">
          <Link href="/" aria-label="OracleAgentHub home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.svg"
              alt="OracleAgentHub"
              className="h-8 w-auto mx-auto brightness-200"
            />
          </Link>
          <h1 className="mt-6 text-2xl font-bold text-white">Sign in to OracleAgentHub</h1>
          <p className="mt-2 text-sm text-navy-300">Access your agent kits and deployments</p>
        </div>

        {/* Card */}
        <div className="bg-navy-900 border border-navy-700 rounded-2xl p-8 shadow-2xl shadow-black/40">
          {submitted ? (
            /* Post-submit state */
            <div className="text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center mx-auto">
                <LogIn className="w-6 h-6 text-brand-blue" aria-hidden="true" />
              </div>
              <h2 className="text-lg font-semibold text-white">Authentication Coming Soon</h2>
              <p className="text-sm text-navy-300 leading-relaxed">
                Full authentication is not live in V1. This page is a UI placeholder.
                To get access, request a custom kit or contact us.
              </p>
              <Link
                href="/request-custom-kit"
                className="inline-flex items-center justify-center w-full mt-2 px-6 py-3 rounded-lg bg-brand-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Request Access
              </Link>
              <Link
                href="/"
                className="block text-xs text-navy-400 hover:text-navy-200 transition-colors"
              >
                ← Back to home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-200 mb-1.5">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-navy-500 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="password" className="block text-sm font-medium text-navy-200">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-xs text-brand-blue hover:underline focus:outline-none"
                    tabIndex={-1}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-navy-500 px-4 py-2.5 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute inset-y-0 right-3 flex items-center text-navy-400 hover:text-navy-200 transition-colors focus:outline-none"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword
                      ? <EyeOff className="w-4 h-4" aria-hidden="true" />
                      : <Eye className="w-4 h-4" aria-hidden="true" />
                    }
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-blue text-white text-sm font-semibold px-6 py-3 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 focus:ring-offset-navy-900"
              >
                <LogIn className="w-4 h-4" aria-hidden="true" />
                Sign In
              </button>

              <p className="text-center text-xs text-navy-400 pt-1">
                No account?{" "}
                <Link href="/request-custom-kit" className="text-brand-blue hover:underline">
                  Request access
                </Link>
              </p>
            </form>
          )}
        </div>

        <p className="text-center text-xs text-navy-700 mt-6">
          © 2026 Datacules LLC · OracleAgentHub
        </p>
      </div>
    </div>
  );
}
