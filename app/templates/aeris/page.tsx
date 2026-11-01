import { Hero } from "@/components/templates/aeris/sections/hero";
import { Introduction } from "@/components/templates/aeris/sections/introduction";
import { Capabilities } from "@/components/templates/aeris/sections/capabilities";
import { Vault } from "@/components/templates/aeris/sections/vault";
import { Privacy } from "@/components/templates/aeris/sections/privacy";
import { Cta } from "@/components/templates/aeris/sections/cta";
import { Footer } from "@/components/templates/aeris/sections/footer";

export default function AerisPage() {
  return (
    <>
      <a
        href="#main"
        className="bg-background text-foreground focus:ring-ring sr-only z-[60] rounded-md px-3 py-2 text-sm focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:ring-2"
      >
        Skip to content
      </a>
      <main id="main">
        <Hero />
        <Introduction />
        <Capabilities />
        <Vault />
        <Privacy />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
