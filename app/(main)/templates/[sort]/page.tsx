import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import TemplateGrid from "@/app/(main)/templates/_components/template-grid";
import { JsonLd } from "@/components/shared/json-ld";
import {
  TEMPLATES,
  TEMPLATE_SORTS,
  sortTemplates,
} from "@/constants/templates";
import type { TemplateSort } from "@/constants/templates";

export function generateStaticParams() {
  return TEMPLATE_SORTS.filter((sort) => sort.slug !== "all").map((sort) => ({
    sort: sort.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sort: string }>;
}): Promise<Metadata> {
  const { sort } = await params;
  const option = TEMPLATE_SORTS.find((s) => s.slug === sort);
  const label = option?.title ?? "All templates";

  return {
    title: `Free Next.js Landing Page Templates — ${label}`,
    description:
      "Browse free, MIT-licensed Next.js landing page templates built with Tailwind CSS v4. Install any template in one command via shadcn.",
    alternates: {
      canonical: `https://www.kairoui.online/templates/${option?.slug === "all" ? "" : option?.slug}`,
    },
    openGraph: {
      title: `Free Next.js Landing Page Templates | Kairo UI — ${label}`,
      description:
        "Free, MIT-licensed Next.js templates for SaaS, AI products, mobile apps, and more.",
      url: `https://www.kairoui.online/templates/${option?.slug === "all" ? "" : option?.slug}`,
      siteName: "Kairo UI",
    },
  };
}

export default async function TemplatesSortPage({
  params,
}: {
  params: Promise<{ sort: string }>;
}) {
  const { sort } = await params;

  if (sort === "all") redirect("/templates");

  const option = TEMPLATE_SORTS.find((s) => s.slug === sort);
  if (!option) notFound();

  const templates = sortTemplates(TEMPLATES, sort as TemplateSort);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Free Next.js Landing Page Templates — ${option.title}`,
    description:
      "Free, MIT-licensed Next.js 16 landing page templates built with Tailwind CSS v4.",
    url: `https://www.kairoui.online/templates/${option.slug}`,
    numberOfItems: templates.length,
    hasPart: templates.map((t) => ({
      "@type": "CreativeWork",
      name: t.title,
      url: `https://www.kairoui.online/template/${t.slug}`,
      description: t.description,
      license: "https://opensource.org/licenses/MIT",
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <div className="bg-background min-h-screen">
        <div className="max-w-5xl mx-auto">
          <TemplateGrid templates={templates} activeSort={sort as TemplateSort} />
        </div>
      </div>
    </>
  );
}