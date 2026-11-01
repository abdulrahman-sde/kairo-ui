import { Navbar } from "@/components/templates/vitalis/sections/navbar";
import { Hero } from "@/components/templates/vitalis/sections/hero";
import { Brands } from "@/components/templates/vitalis/sections/brands";
import { Numbers } from "@/components/templates/vitalis/sections/numbers";
import { FeatureOne } from "@/components/templates/vitalis/sections/feature-one";
import { FeatureTabs } from "@/components/templates/vitalis/sections/feature-tabs";
import { Features } from "@/components/templates/vitalis/sections/features";
import { KeyBenefits } from "@/components/templates/vitalis/sections/key-benefits";
import { SmartTools } from "@/components/templates/vitalis/sections/smart-tools";
import { Integration } from "@/components/templates/vitalis/sections/integration";
import { Pricing } from "@/components/templates/vitalis/sections/pricing";
import { Testimonials } from "@/components/templates/vitalis/sections/testimonials";
import { Cta } from "@/components/templates/vitalis/sections/cta";
import { Footer } from "@/components/templates/vitalis/sections/footer";

export default function VitalisPage() {
  return (
    <div className="vitalis-scope bg-background text-foreground overflow-x-clip">
      <div className="section-wrapper">
        <a
          href="#main"
          className="bg-background text-foreground focus:ring-ring sr-only z-[60] rounded-md px-3 py-2 text-sm focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:ring-2"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Brands />
          <Numbers />
          <FeatureOne />
          <FeatureTabs />
          <Features />
          <KeyBenefits />
          <SmartTools />
          <Integration />
          <Pricing />
          <Testimonials />
          <Cta />
        </main>
        <Footer />
      </div>
    </div>
  );
}
