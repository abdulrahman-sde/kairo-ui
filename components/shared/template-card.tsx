import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
  TemplateMock,
  colorToVariant,
} from "@/components/shared/template-mock";
import type { Template } from "@/types/template";

export function TemplateCard({
  template: t,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 330px",
  priority = false,
}: {
  template: Template;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/template/${t.slug}`}
      className="group tpl-card-surface flex flex-col rounded-2xl p-1.5"
    >
      <div className="tpl-card-panel bg-card relative aspect-16/10 overflow-hidden rounded-xl">
        {t.thumbnail ? (
          <Image
            src={t.thumbnail}
            alt={t.title}
            fill
            placeholder="blur"
            priority={priority}
            className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.03]"
            sizes={sizes}
          />
        ) : (
          <div className="absolute inset-0 origin-center scale-[1.15] transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.2]">
            <TemplateMock accent={t.accent} variant={colorToVariant(t.color)} />
          </div>
        )}
      </div>

      <div className="text-muted-foreground flex items-center justify-between px-2.5 pt-2 pb-1 text-xs font-medium">
        <span className="text-foreground/80 truncate">{t.title}</span>
        <ArrowUpRight className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
