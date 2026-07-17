"use client";

import * as motion from "motion/react-client";
import { WordsReveal } from "../lib/animations";

const ICONS = "https://qclay.design/lovable/codeba/icons/";
const checkMarkUrl = ICONS + "CheckMark.svg";
const figmaLogoUrl = ICONS + "figma.svg";
const logo2Url = ICONS + "Logo2.svg";
const logo3Url = ICONS + "Logo3.svg";

export function Pricing({ className }: { className?: string }) {
  return (
    <section
      aria-label="Pricing"
      className={`bg-black px-5 py-16 mt-12 ${className ?? ""}`}
    >
      <div className="max-w-6xl mx-auto">
        <WordsReveal
          as="h2"
          className="text-2xl sm:text-3xl lg:text-4xl text-white text-center mb-10"
          text="Plans and Pricing"
          step={0.1}
          duration={0.6}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <PricingCard
            price="$20"
            description="Upgrade to unlock additional features for a more comprehensive and freedom designs"
            features={[
              { label: "Up to 5 Design System LITE" },
              { label: "Standard components" },
              { label: "Animated titles, captions, B-roll" },
              { label: "Custom color palettes" },
              { label: "Basic analytics dashboard" },
              { label: "Community support" },
              { label: "AI Co-Producer™", dim: true },
              { label: "Priority support", dim: true },
              { label: "Team collaboration", dim: true },
            ]}
            cta="Get Started"
            ctaClass="bg-neutral-900 text-white"
          />
          <PricingCard
            price="$59"
            description="Elevate your design game with advanced tools and exclusive features."
            features={[
              { label: "Unlimited Design System LITE" },
              { label: "Pro components" },
              { label: "Animated titles, captions, B-roll" },
              { label: "Custom color palettes" },
              { label: "Advanced analytics dashboard" },
              { label: "Team collaboration" },
              { label: "AI Co-Producer™" },
              { label: "Priority support" },
              { label: "API access" },
            ]}
            cta="Send Message"
            ctaClass="bg-transparent text-stone-950 border border-stone-950/50"
          />
          <PricingCard
            price="$99"
            description="Get everything you need with full access to all premium features and enterprise-grade tools."
            features={[
              { label: "Unlimited Design System LITE" },
              { label: "Pro + Enterprise components" },
              { label: "Animated titles, captions, B-roll" },
              { label: "Custom color palettes" },
              { label: "Enterprise analytics dashboard" },
              { label: "Team collaboration" },
              { label: "AI Co-Producer™" },
              { label: "24/7 Priority support" },
              { label: "Full API access" },
              { label: "Custom integrations" },
              { label: "Dedicated account manager" },
            ]}
            cta="Contact Sales"
            ctaClass="bg-neutral-900 text-white"
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  price,
  description,
  features,
  cta,
  ctaClass,
}: {
  price: string;
  description: string;
  features: { label: string; dim?: boolean }[];
  cta: string;
  ctaClass: string;
}) {
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.article
      className="flex flex-col mt-10 rounded-2xl bg-white p-5 shadow-xl shadow-black/20 border border-white/10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
    >
      <motion.div
        className="flex items-baseline gap-2"
        variants={item}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <span className="text-xl sm:text-2xl font-medium text-stone-950">
          {price}
        </span>
        <span className="text-xs sm:text-sm text-neutral-500">/ Per Month</span>
      </motion.div>
      <motion.p
        className="text-xs sm:text-sm text-neutral-600 mt-2"
        variants={item}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {description}
      </motion.p>
      <motion.div
        className="border-t border-neutral-200 my-3"
        variants={item}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
      <div className="flex flex-col gap-2 flex-1">
        {features.map((f) => (
          <motion.div
            key={f.label}
            className="flex items-center gap-3"
            variants={item}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div
              className={`size-4 bg-stone-950 rounded-full flex justify-center items-center shrink-0 ${f.dim ? "opacity-20" : ""}`}
            >
              <img src={checkMarkUrl} alt="" width={12} height={12} />
            </div>
            <span
              className={`text-xs sm:text-sm ${f.dim ? "text-neutral-400" : "text-stone-950"}`}
            >
              {f.label}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.button
        className={`w-full py-2.5 rounded-xl font-medium mt-5 cursor-pointer text-xs sm:text-sm ${ctaClass}`}
        variants={item}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {cta}
      </motion.button>
    </motion.article>
  );
}
