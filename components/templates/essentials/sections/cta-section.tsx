import Image from "next/image";
import { ArrowRight } from "reicon-react";
import { TextureButton } from "@/components/templates/essentials/ui/texture-button";

export default function CtaSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-label="Sell your apparel"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          fill
          priority
          sizes="100vw"
          src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1920&q=80"
          alt="Curated apparel collection"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-foreground/95 via-foreground/75 to-foreground/20" />

        <div className="relative px-6 py-20 sm:px-12 sm:py-24 lg:px-16 lg:py-28">
          <div className="max-w-xl space-y-5">
            <p className="text-xs font-medium tracking-[0.18em] text-background/80 uppercase">
              The Essentials edit
            </p>
            <h2 className="text-4xl font-medium leading-[1.08] tracking-tight text-background sm:text-5xl">
              Curated pieces, made for the everyday.
            </h2>
            <p className="max-w-md text-base leading-7 text-background/80 sm:text-lg">
              Every piece in our collection is hand-picked for fit, fabric, and
              feel that lasts from wardrobe basics to statement fits.
            </p>
            <div className="pt-2">
              <TextureButton variant="inverse" nativeButton>
                Sell your apparel
                <ArrowRight size={18} />
              </TextureButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
