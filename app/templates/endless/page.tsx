import { Navbar } from "@/components/templates/endless/sections/navbar";
import { Hero } from "@/components/templates/endless/sections/hero";
import { Features } from "@/components/templates/endless/sections/features";
import { Stats } from "@/components/templates/endless/sections/stats";
import { Pills } from "@/components/templates/endless/sections/pills";
import { MadForDesigner } from "@/components/templates/endless/sections/mad-for-designer";
import { Pricing } from "@/components/templates/endless/sections/pricing";
import { Updates } from "@/components/templates/endless/sections/updates";
import { Footer } from "@/components/templates/endless/sections/footer";

export default function EndlessPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Pills />
      <MadForDesigner />
      <Pricing />
      <Updates />
      <Footer />
    </main>
  );
}
