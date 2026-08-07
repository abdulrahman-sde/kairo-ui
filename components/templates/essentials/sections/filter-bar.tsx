"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/components/templates/essentials/data";

function PillRow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");

  const select = (category: string | null) => {
    const next = category
      ? `/?category=${encodeURIComponent(category)}`
      : "/";
    router.replace(next);
  };

  return (
    <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={() => select(null)}
        className={cn(
          "shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
          activeCategory === null
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-background text-foreground hover:border-primary/60",
        )}
      >
        All
      </button>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.name}
          type="button"
          onClick={() => select(cat.name)}
          className={cn(
            "shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
            activeCategory === cat.name
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-foreground hover:border-primary/60",
          )}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}

export default function FilterBar() {
  return (
    <Suspense>
      <PillRow />
    </Suspense>
  );
}