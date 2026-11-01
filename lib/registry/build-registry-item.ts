import fs from "fs";
import path from "path";
import type {
  RegistryFile,
  RegistryItem,
  RegistryItemType,
  TemplateMeta,
} from "@/types/registry";

const ROOT = process.cwd();
const SCHEMA = "https://ui.shadcn.com/schema/registry-item.json";

const METAS: Record<string, TemplateMeta> = {
  aether: {
    name: "aether",
    title: "Aether Cloud",
    description:
      "A high-performance cloud runtime & developer infrastructure landing featuring animated SVG beam curves, 4 interactive Bento cards, IDE code blocks, customer testimonials, and sleek responsive footer.",
    dependencies: ["lucide-react", "tw-animate-css"],
  },
  aeris: {
    name: "aeris",
    title: "Aeris Workspace",
    description:
      "An autonomous AI research & synthesis workspace landing page featuring interactive hero workspace illustration, multi-hop benchmark charts, Rive card animations, and 3D icons grid.",
    dependencies: [
      "@rive-app/react-canvas",
      "clsx",
      "motion",
      "tailwind-merge",
      "tw-animate-css",
    ],
  },
  vitalis: {
    name: "vitalis",
    title: "Vitalis Health",
    description:
      "A health span & longevity companion app landing page featuring interactive feature tabs, dynamic monthly/yearly pricing switcher, 6-card testimonial slider, and 14 complete sections.",
    dependencies: ["tw-animate-css"],
  },
  essentials: {
    name: "essentials",
    title: "Essentials",
    description:
      "A light e-commerce landing page for an apparel store with full-screen hero, featured products, shop-by-category grid, and CTA. Built with React, Shadcn/ui and Tailwind CSS v4.",
    dependencies: [
      "reicon-react",
      "@base-ui/react",
      "clsx",
      "tailwind-merge",
      "class-variance-authority",
    ],
    registryDependencies: [],
  },
  orbit: {
    name: "orbit",
    title: "Orbit",
    description:
      "A modern SaaS landing page template with global reach visualization.",
    dependencies: ["lucide-react", "motion", "cobe"],
    registryDependencies: ["accordion", "button", "card"],
  },
  nova: {
    name: "nova",
    title: "Nova",
    description:
      "A premium SaaS landing page with hero, features, content, pricing, FAQ, testimonials, and footer sections. Built with React, Shadcn/ui and Tailwind.",
    dependencies: [
      "lucide-react",
      "clsx",
      "tailwind-merge",
      "motion",
      "tw-animate-css",
    ],
    registryDependencies: ["accordion", "button", "card"],
  },
  nexora: {
    name: "nexora",
    title: "Nexora",
    description:
      "A full landing page template with hero, logos, feature grid, stats, pricing, FAQ, CTA, and footer. Built with React, Shadcn/ui and Tailwind.",
  },
  glaze: {
    name: "glaze",
    title: "Glaze",
    description:
      "A sleek, dark-themed landing page template with glassmorphism effects.",
    dependencies: ["lucide-react"],
    registryDependencies: ["accordion", "button"],
  },
  popcorn: {
    name: "popcorn",
    title: "Popcorn",
    description:
      "A clean, modern landing page for global services with coverage map, features, and testimonials.",
    dependencies: ["lucide-react"],
    registryDependencies: ["accordion", "button"],
  },
  nexto: {
    name: "nexto",
    title: "Nexto",
    description:
      "A studio agency landing page with hero, logos strip, services grid, showcase, stats, process steps, testimonial, CTA, and footer.",
    dependencies: [],
  },
  lumina: {
    name: "lumina",
    title: "Lumina",
    description:
      "A white + indigo SaaS automation landing page with frosted-glass dashboard preview, logo marquee, features grid, agent activity feed, stats, testimonials, pricing, FAQ, CTA, and footer.",
    dependencies: ["lucide-react"],
  },
  aurora: {
    name: "aurora",
    title: "Aurora",
    description:
      "A premium dark-mode SaaS landing page with video hero, marquee logo cloud, feature grid, how-it-works steps, studio showcase, testimonials, and pricing.",
    dependencies: ["lucide-react", "motion"],
  },
  triggerly: {
    name: "triggerly",
    title: "Triggerly",
    description:
      "A Linear-inspired dark landing page with 3D dashboard mockup, AI agents integration showcase, project timeline visualization, workflow carousel, and feature cards. Built with Motion and Tailwind CSS v4.",
    dependencies: ["lucide-react", "motion"],
    registryDependencies: ["button"],
  },
  xero: {
    name: "xero",
    title: "Xero",
    description:
      "A dark SaaS landing page for a data encryption platform with animated beam hero, features grid, code showcase, metrics, testimonials, pricing, FAQ, CTA, and footer.",
    dependencies: ["lucide-react", "motion"],
  },
  endless: {
    name: "endless",
    title: "Endless",
    description:
      "A dark AI design tool landing page with macbook dashboard, feature cards, pricing, and code showcase. Built with Motion and Tailwind CSS v4.",
    dependencies: ["motion"],
  },
  nixole: {
    name: "nixole",
    title: "Nixole",
    description:
      "An AI healthcare landing page with mesh gradient hero, animated showcase card, and floating glass sections for patient conversion. Built with Motion and Tailwind CSS v4.",
    dependencies: ["lucide-react", "motion"],
  },
};

function walkDir(dir: string, base: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relPath = path.relative(base, fullPath);
    if (entry.isDirectory()) {
      files.push(...walkDir(fullPath, base));
    } else if (entry.isFile() && !entry.name.startsWith(".")) {
      files.push(relPath);
    }
  }
  return files;
}

function fileType(targetPath: string): RegistryItemType {
  if (targetPath === "app/page.tsx") return "registry:page";
  if (targetPath === "app/layout.tsx") return "registry:file";
  if (targetPath === "app/globals.css") return "registry:file";
  if (targetPath.startsWith("hooks/")) return "registry:hook";
  if (targetPath.startsWith("lib/")) return "registry:lib";
  return "registry:component";
}

function rewriteCloudAssets(content: string): string {
  return content
    .replace(/(["'])\/(aether|aeris|vitalis)\//g, "$1https://www.kairoui.online/$2/")
    .replace(/url\(\/(aether|aeris|vitalis)\//g, "url(https://www.kairoui.online/$1/")
    .replace(/(["'])\/hero-illustration\//g, "$1https://www.kairoui.online/aeris/hero-illustration/");
}

export async function buildRegistryItem(slug: string): Promise<RegistryItem> {
  const meta = METAS[slug] ?? { name: slug, title: slug };

  const componentsDir = path.join(ROOT, "components", "templates", slug);
  const routeDir = path.join(ROOT, "app", "templates", slug);

  const files: RegistryFile[] = [];

  // Ship every file under components/templates/<slug>/ (sections, ui, globals.css, …)
  for (const rel of walkDir(componentsDir, componentsDir)) {
    const target =
      path.basename(rel) === "globals.css"
        ? "app/globals.css"
        : `components/templates/${slug}/${rel}`;
    const rawContent = fs.readFileSync(path.join(componentsDir, rel), "utf-8");
    files.push({
      path: `components/templates/${slug}/${rel}`,
      type: fileType(target),
      target,
      content: rewriteCloudAssets(rawContent),
    });
  }

  // Ship the route's page.tsx + layout.tsx so install matches preview exactly.
  // Rewrite the dev-side globals.css import so it resolves once installed
  // at app/globals.css (the install target).
  for (const rel of walkDir(routeDir, routeDir)) {
    const basename = path.basename(rel);
    if (basename !== "page.tsx" && basename !== "layout.tsx") continue;
    const target = `app/${basename}`;
    let content = fs.readFileSync(path.join(routeDir, rel), "utf-8");
    if (basename === "layout.tsx") {
      content = content.replace(
        new RegExp(
          `(["'])@/components/templates/${slug}/globals\\.css\\1`,
          "g",
        ),
        `"./globals.css"`,
      );
    }
    files.push({
      path: `app/templates/${slug}/${rel}`,
      type: fileType(target),
      target,
      content: rewriteCloudAssets(content),
    });
  }

  return {
    $schema: SCHEMA,
    name: meta.name,
    type: "registry:block",
    title: meta.title,
    description: meta.description,
    dependencies: meta.dependencies,
    registryDependencies: meta.registryDependencies,
    files,
    cssVars: meta.cssVars,
  };
}
