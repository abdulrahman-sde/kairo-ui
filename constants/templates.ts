import type { Template, TemplateTag } from "@/types/template";
import nexoraThumbnail from "@/public/thumbnails/nexora.webp";
import novaThumbnail from "@/public/thumbnails/nova.webp";
import popcornThumbnail from "@/public/thumbnails/popcorn.webp";
import glazeThumbnail from "@/public/thumbnails/glaze.webp";
import orbitThumbnail from "@/public/thumbnails/orbit.webp";
import xeroThumbnail from "@/public/thumbnails/xero.png";
import auroraThumbnail from "@/public/thumbnails/aurora.png";
import luminaThumbnail from "@/public/thumbnails/lumina.png";
import nextoThumbnail from "@/public/thumbnails/nexto.png";
import triggerlyThumbnail from "@/public/thumbnails/triggerly.png";
import endlessThumbnail from "@/public/thumbnails/endless.png";
import nixoleThumbnail from "@/public/thumbnails/nixole.png";
import essentialsThumbnail from "@/public/thumbnails/essentials.png";
import aetherThumbnail from "@/public/thumbnails/aether.png";
import aerisThumbnail from "@/public/thumbnails/aeris.png";
import vitalisThumbnail from "@/public/thumbnails/vitalis.png";
export const TEMPLATES: Template[] = [
  {
    slug: "aether",
    title: "Aether Cloud",
    description:
      "A high-performance cloud runtime & developer infrastructure landing featuring animated SVG beam curves, 4 interactive Bento cards, IDE code blocks, customer testimonials, and sleek responsive footer.",
    color: "indigo",
    tags: ["saas"],
    accent: "hsl(243 75% 59%)",
    thumbnail: aetherThumbnail,
    publishedAt: "2026-10-31",
  },
  {
    slug: "aeris",
    title: "Aeris Workspace",
    description:
      "An autonomous AI research & synthesis workspace landing page featuring interactive hero workspace illustration, multi-hop benchmark charts, Rive card animations, and 3D icons grid.",
    color: "zinc",
    tags: ["ai", "saas"],
    accent: "hsl(0 0% 100%)",
    thumbnail: aerisThumbnail,
    publishedAt: "2026-10-31",
  },
  {
    slug: "vitalis",
    title: "Vitalis Health",
    description:
      "A health span & longevity companion app landing page featuring interactive feature tabs, dynamic monthly/yearly pricing switcher, 6-card testimonial slider, and 14 complete sections.",
    color: "green",
    tags: ["health", "mobile"],
    accent: "hsl(142 76% 36%)",
    thumbnail: vitalisThumbnail,
    publishedAt: "2026-10-31",
  },
  {
    slug: "endless",
    title: "Endless",
    description:
      "A dark AI design tool landing page with macbook dashboard, feature cards, pricing, and code showcase.",
    color: "zinc",
    tags: ["ai", "saas"],
    accent: "hsl(0 0% 100%)",
    thumbnail: endlessThumbnail,
    publishedAt: "2026-08-01",
  },
  {
    slug: "triggerly",
    title: "Triggerly",
    description:
      "A Linear-inspired dark landing page with 3D dashboard mockup, AI agents integration showcase, project timeline visualization, workflow carousel, and feature cards. Built with Motion and Tailwind CSS v4.",
    color: "zinc",
    tags: ["saas"],
    accent: "hsl(0 0% 100%)",
    thumbnail: triggerlyThumbnail,
    publishedAt: "2026-07-20",
  },
  {
    slug: "xero",
    title: "Xero",
    description:
      "A dark SaaS landing page for a data encryption platform with animated beam hero, features, showcase, pricing, FAQ, and testimonials.",
    color: "purple",
    tags: ["saas"],
    accent: "hsl(290 40% 72%)",
    thumbnail: xeroThumbnail,
    publishedAt: "2026-07-02",
  },
  {
    slug: "essentials",
    title: "Essentials",
    description:
      "A light e-commerce landing page for an apparel store with full-screen hero, featured products, shop-by-category grid, and CTA.",
    color: "amber",
    tags: ["ecommerce"],
    accent: "hsl(0 0% 8%)",
    thumbnail: essentialsThumbnail,
    publishedAt: "2026-08-07",
  },

  {
    slug: "nova",
    title: "Nova",
    description:
      "A premium SaaS landing page with hero, features, content, pricing, and FAQ sections.",
    color: "amber",
    tags: ["saas"],
    accent: "hsl(38.6 92.1% 50.2%)",
    thumbnail: novaThumbnail,
    publishedAt: "2026-06-20",
  },
  {
    title: "Orbit",
    slug: "orbit",
    description:
      "Modern SaaS landing page template with global reach visualization.",
    color: "slate",
    tags: ["saas"],
    accent: "neutral",
    thumbnail: orbitThumbnail,
    publishedAt: "2026-06-10",
  },

  {
    slug: "popcorn",
    title: "Popcorn",
    description:
      "A clean, modern landing page for global services with coverage map, features, and testimonials.",
    color: "amber",
    tags: ["saas"],
    accent: "hsl(45 93% 47%)",
    thumbnail: popcornThumbnail,
    publishedAt: "2026-05-15",
  },

  {
    slug: "lumina",
    title: "Lumina",
    description:
      "A white + indigo SaaS automation landing page with frosted-glass dashboard preview, logo marquee, features grid, agent feed, stats, testimonials, pricing, FAQ, and footer.",
    color: "indigo",
    tags: ["saas", "ai"],
    accent: "hsl(239 84% 67%)",
    thumbnail: luminaThumbnail,
    publishedAt: "2026-05-10",
  },
  {
    slug: "nixole",
    title: "Nixole",
    description:
      "An AI healthcare landing page with mesh gradient hero, animated showcase card, and floating glass sections for patient conversion.",
    color: "amber",
    tags: ["ai", "health"],
    accent: "hsl(38.6 92.1% 50.2%)",
    thumbnail: nixoleThumbnail,
    publishedAt: "2026-07-28",
  },
  {
    slug: "aurora",
    title: "Aurora",
    description:
      "A premium dark-mode SaaS landing page with video hero, marquee logo cloud, feature grid, how-it-works steps, studio showcase, testimonials, and pricing.",
    color: "zinc",
    tags: ["saas"],
    accent: "hsl(0 0% 100%)",
    thumbnail: auroraThumbnail,
    publishedAt: "2026-04-22",
  },
  {
    slug: "glaze",
    title: "Glaze",
    description:
      "A sleek, dark-themed landing page with glassmorphism effects.",
    color: "zinc",
    tags: ["saas"],
    accent: "hsl(0 0% 100%)",
    thumbnail: glazeThumbnail,
    publishedAt: "2026-04-02",
  },
  {
    slug: "nexto",
    title: "Nexto",
    description:
      "A studio agency landing page with hero, logos strip, services grid, showcase, stats, process steps, testimonial, CTA, and footer.",
    color: "purple",
    tags: ["agency"],
    accent: "hsl(248 82% 69%)",
    thumbnail: nextoThumbnail,
    publishedAt: "2026-03-18",
  },

  {
    slug: "nexora",
    title: "Nexora",
    description:
      "An AI image generation landing page with hero, core features, how it works, pricing, and footer sections.",
    color: "mint",
    tags: ["ai"],
    accent: "hsl(142.1 70.6% 45.3%)",
    thumbnail: nexoraThumbnail,
    publishedAt: "2026-03-02",
  },
];

export type TemplateSort = "all" | "new" | TemplateTag;

export const TEMPLATE_SORTS: {
  slug: TemplateSort;
  label: string;
  title: string;
  /** Hidden behind the "More" disclosure on the gallery. */
  secondary?: boolean;
}[] = [
  { slug: "all", label: "All", title: "All templates" },
  { slug: "new", label: "New", title: "Newest templates" },
  { slug: "saas", label: "SaaS", title: "SaaS templates" },
  { slug: "ai", label: "AI", title: "AI templates" },
  { slug: "health", label: "Health", title: "Health templates", secondary: true },
  { slug: "mobile", label: "Mobile", title: "Mobile app templates", secondary: true },
  { slug: "ecommerce", label: "E-commerce", title: "E-commerce templates", secondary: true },
  { slug: "agency", label: "Agency", title: "Agency templates", secondary: true },
];

export function sortTemplates(
  templates: Template[],
  sort: TemplateSort,
): Template[] {
  if (sort === "new") {
    return [...templates].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
  }
  if (sort === "all") return templates;
  return templates.filter((t) => t.tags.includes(sort));
}
