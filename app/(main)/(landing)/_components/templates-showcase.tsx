import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TEMPLATES } from "@/constants/templates";
import { TemplateCard } from "@/components/shared/template-card";

export default function TemplatesShowcase() {
  const featured = TEMPLATES.slice(0, 2);
  return (
    <section id="templates" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-4xl font-medium tracking-tight">
              Templates
            </h2>
            <p className="text-muted-foreground mt-3 text-balance">
              Free to use. More added regularly.
            </p>
          </div>
          <Link
            href="/templates"
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm"
          >
            View all <ArrowUpRight className="size-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {featured.map((t) => (
            <TemplateCard
              key={t.slug}
              template={t}
              sizes="(max-width: 640px) 100vw, 480px"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
