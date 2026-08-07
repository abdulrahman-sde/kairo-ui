import Header from "@/components/templates/essentials/sections/header";
import Hero from "@/components/templates/essentials/sections/hero";
import FeaturedProducts from "@/components/templates/essentials/sections/featured-products";
import ShopByCategory from "@/components/templates/essentials/sections/shop-by-category";
import WhyChooseUs from "@/components/templates/essentials/sections/why-choose-us";
import CtaSection from "@/components/templates/essentials/sections/cta-section";
import Footer from "@/components/templates/essentials/sections/footer";

export default function EssentialsLanding() {
  return (
    <>
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
