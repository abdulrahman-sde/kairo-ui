import Link from "next/link";
import { ChevronRight, Star } from "reicon-react";
import { Button } from "@/components/ui/button";
import { REPO_URL } from "@/constants/site";
import { HeroDemo } from "@/app/(main)/(landing)/_components/hero-demo";


export default function HeroSection() {
  return (
    <main>
      <section className="mt-1 mb-12 p-1.5 pb-0 md:mt-2 md:mb-20 md:p-3.5 md:pb-0">
        <div className="hero-frame relative overflow-hidden rounded-xl shadow-xl md:rounded-2xl lg:rounded-3xl">
          <header className="relative z-10 flex min-h-[min(34rem,78svh)] flex-col items-center justify-center px-5 pt-20 pb-10 text-center sm:block sm:min-h-0 sm:px-6 sm:pt-32 sm:pb-16">
            <Link
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 border-foreground/20 hover:bg-foreground/5 mt-4 mb-3 inline-flex h-6 sm:mt-6 sm:mb-4 items-center gap-0.5 rounded-full border px-2.5 text-xs font-medium transition-colors"
            >
              <span>Free &amp; MIT licensed</span>
              <ChevronRight size={12} className="-mr-1.5 opacity-50" />
            </Link>

            <h1 className="mx-auto mb-6 max-w-2xl text-balance font-serif text-[1.75rem] font-medium tracking-tighter leading-9 sm:mb-8 sm:tracking-tight sm:text-4xl sm:leading-10 md:leading-12 xl:text-5xl xl:leading-13">
              Beautiful landing pages, free to copy and ship.
            </h1>

            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <Button className="h-8 px-3.5 text-[13px] sm:h-9 sm:px-4 sm:text-sm" asChild>
                <Link href={REPO_URL} target="_blank" rel="noopener noreferrer">
                  <Star size={16} />
                  <span>Star on GitHub</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                className="h-8 px-3.5 text-[13px] sm:h-9 sm:px-4 sm:text-sm"
                asChild
              >
                <Link href="/templates">Browse templates</Link>
              </Button>
            </div>
          </header>

          <div className="relative z-10 hidden px-4 sm:block md:px-10">
            <HeroDemo repoUrl={REPO_URL} />
          </div>
        </div>
      </section>
    </main>
  );
}
