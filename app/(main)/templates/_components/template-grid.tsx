import Link from "next/link";
import { MoreFilters } from "@/app/(main)/templates/_components/more-filters";
import { Button } from "@/components/ui/button";
import { TemplateCard } from "@/components/shared/template-card";
import { TEMPLATES, TEMPLATE_SORTS } from "@/constants/templates";
import type { Template } from "@/types/template";
import type { TemplateSort } from "@/constants/templates";

const primarySorts = TEMPLATE_SORTS.filter((s) => !s.secondary);
const secondarySorts = TEMPLATE_SORTS.filter((s) => s.secondary);

function SortChip({
  sort,
  active,
}: {
  sort: (typeof TEMPLATE_SORTS)[number];
  active: boolean;
}) {
  return (
    <Button
      variant={active ? "default" : "ghost"}
      size="sm"
      asChild
      aria-current={active ? "page" : undefined}
      className={active ? "px-4" : "px-4 text-muted-foreground"}
    >
      <Link href={sort.slug === "all" ? "/templates" : `/templates/${sort.slug}`}>
        {sort.label}
      </Link>
    </Button>
  );
}

export default function TemplateGrid({
  templates = TEMPLATES,
  activeSort = "all",
}: {
  templates?: Template[];
  activeSort?: TemplateSort;
}) {
  return (
    <div className="pt-32 pb-28 px-4">
      {/* Page header */}
      <div className="mb-16">
        <h1 className="font-serif text-[2.6rem] font-medium leading-[1.1] tracking-tight">
          All templates
        </h1>
        <p className="text-muted-foreground mt-4 max-w-lg text-sm leading-relaxed text-balance">
          Free, open-source landing page templates built with Next.js and
          Tailwind. Pick one, run a single command, and it drops straight into
          your project.
        </p>

        {/* Sort chips: secondary filters live in a floating menu */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {primarySorts.map((sort) => (
            <SortChip
              key={sort.slug}
              sort={sort}
              active={sort.slug === activeSort}
            />
          ))}
          <MoreFilters sorts={secondarySorts} activeSlug={activeSort} />
        </div>

        <div className="border-border mt-10 h-px w-full" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <TemplateCard key={t.slug} template={t} />
        ))}
      </div>
    </div>
  );
}