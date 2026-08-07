"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Heart } from "reicon-react";
import { cn } from "@/lib/utils";
import {
  FEATURED_PRODUCTS,
  formatPrice,
  type StoreProduct,
} from "@/components/templates/essentials/data";

function ProductCard({ product }: { product: StoreProduct }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group flex min-w-0 flex-col gap-3">
      <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-muted">
        <Image
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          src={product.image}
          alt={product.name}
        />
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLiked((v) => !v);
          }}
          aria-label={liked ? "Remove from favourites" : "Add to favourites"}
          aria-pressed={liked}
          className="absolute right-3 top-3 grid size-7 place-items-center rounded-full bg-background/80 shadow-sm backdrop-blur-sm transition-all hover:scale-110"
        >
          <Heart
            size={15}
            className={cn(
              "transition-colors",
              liked ? "fill-red-500 text-red-500" : "text-foreground",
            )}
          />
        </button>
        {product.stock === 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
            Sold out
          </span>
        )}
      </div>
      <div className="flex items-start justify-between gap-2">
        <div className="flex min-w-0 flex-col">
          <h3 className="truncate text-sm font-medium text-foreground">
            {product.name}
          </h3>
          <p className="truncate text-sm text-muted-foreground">
            {product.type ?? product.category}
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </article>
  );
}

function Grid() {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category");
  const products =
    activeCategory === null
      ? FEATURED_PRODUCTS
      : FEATURED_PRODUCTS.filter(
          (p) => (p.type ?? p.category) === activeCategory,
        );

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function FeaturedProducts() {
  return (
    <section
      id="featured"
      className="mx-auto max-w-7xl scroll-mt-24 space-y-8 px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-[clamp(1.5rem,1.2rem+1vw,2rem)] font-medium tracking-tight text-foreground">
            Featured this week
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            This week&apos;s most-wanted pieces, picked by our team.
          </p>
        </div>
      </div>

      <Suspense>
        <Grid />
      </Suspense>
    </section>
  );
}
