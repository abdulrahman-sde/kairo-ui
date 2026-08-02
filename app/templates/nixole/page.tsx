import Header from "@/components/templates/nixole/sections/header";
import Hero from "@/components/templates/nixole/sections/hero";
import Showcase from "@/components/templates/nixole/sections/showcase";
import HowItWorks from "@/components/templates/nixole/sections/how-it-works";
import Intelligence from "@/components/templates/nixole/sections/intelligence";
import Outcomes from "@/components/templates/nixole/sections/outcomes";
import Testimonials from "@/components/templates/nixole/sections/testimonials";
import CTA from "@/components/templates/nixole/sections/cta";

export default function NixolePage() {
  return (
    <>
      <Header />
      <Hero />
      <Showcase />
      <HowItWorks />
      <Intelligence />
      <Outcomes />
      <Testimonials />
      <CTA />
    </>
  );
}
