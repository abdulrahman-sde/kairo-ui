import { Navbar } from "@/components/templates/triggerly/sections/navbar"
import { Hero3DStage } from "@/components/templates/triggerly/sections/hero-3d-stage"
import { LogoCloud } from "@/components/templates/triggerly/sections/logo-cloud"
import { FeatureCardsSection } from "@/components/templates/triggerly/sections/feature-cards-section"
import { AISection } from "@/components/templates/triggerly/sections/ai-section"
import { ProductDirectionSection } from "@/components/templates/triggerly/sections/product-direction-section"
import { WorkflowsSection } from "@/components/templates/triggerly/sections/workflows-section"
import { CTASection } from "@/components/templates/triggerly/sections/cta-section"
import { Footer } from "@/components/templates/triggerly/sections/footer"

export default function TriggerlyPage() {
  return (
    <div className="w-full overflow-x-hidden" style={{ backgroundColor: "#09090B" }}>
      <Navbar />
      <Hero3DStage />
      <LogoCloud />
      <FeatureCardsSection />
      <AISection />
      <ProductDirectionSection />
      <WorkflowsSection />
      <CTASection />
      <Footer />
    </div>
  )
}
