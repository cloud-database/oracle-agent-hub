"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { AgentKitCard } from "@/components/product/AgentKitCard";
import { CategoryFilter } from "@/components/product/CategoryFilter";
import { agentKits } from "@/data/products/agent-kits";

const categories = [
  "All",
  "Database Administration",
  "Performance",
  "Security",
  "Schema & Documentation",
  "Migration",
  "Oracle AI Database",
];

export default function AgentKitsPage() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All" ? agentKits : agentKits.filter((k) => k.category === selected);

  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container-wide py-12">
          <h1 className="text-4xl font-bold text-navy-950 mb-2">Agent Kits</h1>
          <p className="text-navy-600 max-w-2xl">
            Pre-built, tested and ready-to-deploy agentic capabilities for Oracle environments.
          </p>
        </div>
      </div>

      <div className="container-wide py-10">
        {/* Filters */}
        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            selected={selected}
            onChange={setSelected}
          />
        </div>

        {/* Count */}
        <p className="text-sm text-navy-500 mb-6">
          Showing <span className="font-semibold text-navy-900">{filtered.length}</span> Agent Kit
          {filtered.length !== 1 ? "s" : ""}
          {selected !== "All" && (
            <span>
              {" "}in <span className="font-semibold text-brand-blue">{selected}</span>
            </span>
          )}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((kit) => (
              <AgentKitCard key={kit.id} kit={kit} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-navy-400">
            <p className="text-lg font-medium">No kits found</p>
            <p className="text-sm mt-1">Try selecting a different category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
