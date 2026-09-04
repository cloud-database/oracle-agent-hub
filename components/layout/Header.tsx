"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchModal } from "@/components/search/SearchModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Agent Kits", href: "/agent-kits" },
  { label: "Agents", href: "/agents" },
  { label: "Skills", href: "/skills" },
  { label: "Agent Lab", href: "/agent-lab" },
  { label: "Documentation", href: "/documentation" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on keyboard shortcut for search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm transition-all duration-200",
          scrolled ? "shadow-sm border-b border-slate-100 py-2" : "py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md"
              aria-label="OracleAgentHub home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="OracleAgentHub" height={32} width={180} className="h-8 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-slate-700 hover:text-brand-blue rounded-md hover:bg-blue-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop right actions */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                aria-label="Search (Ctrl+K)"
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-md text-slate-600 hover:text-brand-blue hover:bg-blue-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
              </button>
              <Link
                href="/login"
                className="text-sm font-medium text-slate-700 hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-md px-2 py-1"
              >
                Login
              </Link>
              <Link
                href="/agent-kits"
                className="inline-flex items-center gap-1.5 rounded-lg bg-brand-blue text-white text-sm font-semibold px-4 py-2 hover:bg-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                Get Started
                <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile: search + hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-md text-slate-700 hover:text-brand-blue hover:bg-blue-50 transition-colors"
              >
                <Search className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                className="p-2 rounded-md text-slate-700 hover:text-brand-blue hover:bg-blue-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="lg:hidden mt-3 pb-3 border-t border-slate-100">
              <nav className="flex flex-col gap-1 pt-3" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-brand-blue hover:bg-blue-50 rounded-md transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex gap-3 mt-3 pt-3 border-t border-slate-100">
                  <Link
                    href="/login"
                    className="flex-1 text-center text-sm font-medium text-slate-700 border border-slate-200 rounded-lg py-2 hover:bg-slate-50 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/agent-kits"
                    className="flex-1 text-center rounded-lg bg-brand-blue text-white text-sm font-semibold py-2 hover:bg-blue-700 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
