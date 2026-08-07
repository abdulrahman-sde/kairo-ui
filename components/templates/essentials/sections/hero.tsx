import Image from "next/image";
import { ArrowRight } from "reicon-react";
import { TextureButton } from "@/components/templates/essentials/ui/texture-button";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          alt="Seasonal apparel collection"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          src="https://i.postimg.cc/XYx0GKmF/hero.webp"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/10" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="max-w-xl space-y-3">
          <p
            className="animate-rise text-xs font-medium  uppercase tracking-[0.24em] text-white/80"
            style={{ animationDelay: "0.05s" }}
          >
            Curated apparel
          </p>
          <h1
            className="animate-rise text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl -ms-1"
            style={{ animationDelay: "0.15s" }}
          >
            Own the everyday.
          </h1>
          <p
            className="animate-rise max-w-md text-base leading-7 text-white/85 sm:text-lg"
            style={{ animationDelay: "0.25s" }}
          >
            T-shirts, hoodies, and sneakers. Hand-picked for fit, fabric, and
            feel that lasts.
          </p>
          <div
            className="animate-rise pt-2"
            style={{ animationDelay: "0.35s" }}
          >
            <TextureButton className="h-12" nativeButton>
              Shop the collection
              <ArrowRight size={18} />
            </TextureButton>
          </div>
        </div>
      </div>
    </section>
  );
}
