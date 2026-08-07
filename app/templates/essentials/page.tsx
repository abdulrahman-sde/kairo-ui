import Header from "@/components/templates/essentials/sections/header";
import Hero from "@/components/templates/essentials/sections/hero";
import FeaturedProducts from "@/components/templates/essentials/sections/featured-products";
import ShopByCategory from "@/components/templates/essentials/sections/shop-by-category";
import WhyChooseUs from "@/components/templates/essentials/sections/why-choose-us";
import CtaSection from "@/components/templates/essentials/sections/cta-section";
import Footer from "@/components/templates/essentials/sections/footer";
import { JsonLd } from "@/components/shared/json-ld";

function jsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Essentials",
    description:
      "Curated apparel and everyday essentials — t-shirts, hoodies, sneakers, and more.",
    url: "https://this-template.example",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://essentials.example/products?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  return schema;
}

export default function EssentialsLanding() {
  return (
    <>
      <JsonLd data={jsonLd()} />
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <ShopByCategory />
        <WhyChooseUs />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}