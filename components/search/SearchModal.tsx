"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { agentKits } from "@/data/products/agent-kits";
import { agents } from "@/data/products/agents";
import { skills } from "@/data/products/skills";
import { ProductBadge } from "@/components/product/ProductBadge";
import type { SearchResult } from "@/types";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function buildIndex(): SearchResult[] {
  const results: SearchResult[] = [];
  for (const kit of agentKits) {
    results.push({
      id: kit.id,
      name: kit.name,
      type: "Agent Kit",
      category: kit.category,
      description: kit.shortDescription,
      slug: kit.slug,
      href: `/agent-kits/${kit.slug}`,
    });
  }
  for (const agent of agents) {
    results.push({
      id: agent.id,
      name: agent.name,
      type: "Agent",
      category: agent.category,
      description: agent.description,
      slug: agent.slug,
      href: `/agents/${agent.slug}`,
    });
  }
  for (const skill of skills) {
    results.push({
      id: skill.id,
      name: skill.name,
      type: "Skill",
      category: skill.category,
      description: skill.description,
      href: `/skills`,
    });
  }
  return results;
}

const searchIndex = buildIndex();

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const search = useCallback((q: string) => {
    if (!q.trim()) {
      setResults([]);
      return;
    }
    const lower = q.toLowerCase();
    const matched = searchIndex.filter(
      (r) =>
        r.name.toLowerCase().includes(lower) ||
        r.category.toLowerCase().includes(lower) ||
        r.description.toLowerCase().includes(lower)
    );
    setResults(matched.slice(0, 12));
  }, []);

  useEffect(() => {
    search(query);
  }, [query, search]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults([]);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && results.length > 0) {
      router.push(results[0].href);
      onClose();
    }
  };

  if (!isOpen) return null;

  const grouped: Record<string, SearchResult[]> = {};
  for (const r of results) {
    if (!grouped[r.type]) grouped[r.type] = [];
    grouped[r.type].push(r);
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleEnter}
            placeholder="Search agent kits, agents, skills..."
            className="flex-1 bg-transparent text-navy-950 text-base placeholder:text-slate-400 focus:outline-none"
            aria-label="Search"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            aria-label="Close search"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[420px] overflow-y-auto">
          {query && results.length === 0 ? (
            <div className="px-5 py-10 text-center text-slate-500 text-sm">
              No results for &ldquo;{query}&rdquo;
            </div>
          ) : query ? (
            <div className="py-2">
              {(["Agent Kit", "Agent", "Skill"] as const).map((type) => {
                const group = grouped[type];
                if (!group?.length) return null;
                return (
                  <div key={type} className="mb-2">
                    <p className="px-5 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      {type}s
                    </p>
                    {group.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => { router.push(r.href); onClose(); }}
                        className="w-full flex items-start gap-3 px-5 py-3 hover:bg-slate-50 transition-colors text-left"
                      >
                        <ProductBadge type={r.type as "Agent Kit" | "Agent" | "Skill"} className="mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-navy-950">{r.name}</p>
                          <p className="text-xs text-slate-500 truncate">{r.description}</p>
                        </div>
                        <span className="text-xs text-slate-400 flex-shrink-0">{r.category}</span>
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="px-5 py-8 text-center text-slate-400 text-sm">
              Start typing to search across agent kits, agents, and skills.
            </div>
          )}
        </div>

        <div className="px-5 py-2.5 border-t border-slate-100 text-xs text-slate-400 flex gap-4">
          <span><kbd className="font-sans bg-slate-100 px-1.5 py-0.5 rounded">↵</kbd> to select</span>
          <span><kbd className="font-sans bg-slate-100 px-1.5 py-0.5 rounded">esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
}
