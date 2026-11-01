import { Navbar } from "@/components/templates/aether/sections/navbar";
import { Hero } from "@/components/templates/aether/sections/hero";
import { Integrations } from "@/components/templates/aether/sections/integrations";
import { Bento } from "@/components/templates/aether/sections/bento";
import { ProductDirection } from "@/components/templates/aether/sections/product-direction";
import { SmarterBlocks } from "@/components/templates/aether/sections/smarter-blocks";
import { Testimonials } from "@/components/templates/aether/sections/testimonials";
import { Cta } from "@/components/templates/aether/sections/cta";
import { Footer } from "@/components/templates/aether/sections/footer";

export default function AetherPage() {
  return (
    <>
      <a
        href="#main"
        className="bg-background text-foreground focus:ring-ring sr-only z-[60] rounded-md px-3 py-2 text-sm focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:ring-2"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Integrations />
        <Bento />
        <ProductDirection />
        <SmarterBlocks />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
