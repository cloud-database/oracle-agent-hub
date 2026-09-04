"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-1",
            selected === cat
              ? "bg-brand-blue text-white border-brand-blue"
              : "bg-white text-navy-700 border-slate-200 hover:border-brand-blue hover:text-brand-blue"
          )}
          aria-pressed={selected === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
