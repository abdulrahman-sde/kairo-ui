"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { TEMPLATE_SORTS } from "@/constants/templates";

type Sort = (typeof TEMPLATE_SORTS)[number];

export function MoreFilters({
  sorts,
  activeSlug,
}: {
  sorts: Sort[];
  activeSlug: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = sorts.find((s) => s.slug === activeSlug);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <Button
        variant={active ? "default" : "ghost"}
        size="sm"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn("gap-1 px-4", !active && "text-muted-foreground")}
      >
        {active ? active.label : "More"}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </Button>

      <div
        role="menu"
        aria-hidden={!open}
        className={cn(
          "bg-muted text-foreground ring-foreground/15 absolute top-full right-0 z-30 mt-2 w-44 origin-top-right sm:right-auto sm:left-0 sm:origin-top-left rounded-xl p-1 shadow-xl ring-1 transition duration-150 ease-out",
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-1 scale-95 opacity-0",
        )}
      >
        {sorts.map((sort) => (
          <Link
            key={sort.slug}
            href={`/templates/${sort.slug}`}
            role="menuitem"
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="hover:bg-foreground/5 flex h-8 items-center justify-between rounded-lg px-3 text-sm transition-colors"
          >
            {sort.label}
            {sort.slug === activeSlug && <Check className="size-3.5" />}
          </Link>
        ))}
      </div>
    </div>
  );
}
