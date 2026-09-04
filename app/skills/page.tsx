"use client";

export const dynamic = "force-dynamic";

import { useState, useMemo } from "react";
import { Search, Layers } from "lucide-react";
import { SkillCard } from "@/components/product/SkillCard";
import { CategoryFilter } from "@/components/product/CategoryFilter";
import { skills, skillCategories } from "@/data/products/skills";

export default function SkillsPage() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return skills.filter((s) => {
      const matchCat = category === "All" || s.category === category;
      const q = query.toLowerCase();
      const matchQ =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });
  }, [category, query]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="container-wide py-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mt-1">
              <Layers className="w-6 h-6 text-brand-blue" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-navy-950 mb-2">Skills</h1>
              <p className="text-navy-600 max-w-2xl">
                Skills are the modular capabilities that power our agents. Each skill encapsulates
                a specific Oracle analysis capability that agents compose to complete complex tasks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide py-10">
        {/* Info banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Skills are building blocks.</span> Agents compose
            multiple skills to complete analysis tasks. Agent Kits package multiple agents and their
            skills into a deployable collection.
          </p>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-400" />
            <input
              type="text"
              placeholder="Search skills..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-slate-300 rounded-lg text-sm text-navy-900 placeholder-navy-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
            />
          </div>
        </div>

        <div className="mb-6">
          <CategoryFilter
            categories={skillCategories}
            selected={category}
            onChange={setCategory}
          />
        </div>

        <p className="text-sm text-navy-500 mb-6">
          Showing <span className="font-semibold text-navy-900">{filtered.length}</span> skill
          {filtered.length !== 1 ? "s" : ""}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-navy-400">
            <p className="text-lg font-medium">No skills found</p>
            <p className="text-sm mt-1">Try a different search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
