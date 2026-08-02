"use client";

import * as motion from "motion/react-client";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 mesh-cta overflow-hidden">
      <div className="px-6 md:px-10 mx-auto max-w-[1400px] text-center">
        <motion.p
          className="text-[12px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Stop losing patients to silence
        </motion.p>
        <motion.h2
          className="text-[36px] md:text-[60px] font-medium tracking-[-0.03em] leading-[1.08] text-foreground max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Ready to convert every
          <br />
          <span className="text-foreground/25">
            patient that calls?
          </span>
        </motion.h2>

        <motion.div
          className="mt-8 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
          }}
        >
          <a
            href="#"
            className="inline-flex items-center rounded-full border border-border bg-white px-5 py-2 text-[14px] font-medium text-foreground shadow-[0_1px_0_rgba(0,0,0,0.05)] hover:bg-muted transition-colors"
          >
            Book a demo
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-full px-5 py-2 text-[14px] font-semibold text-accent-foreground bg-accent hover:scale-[1.02] transition-transform"
          >
            Let&apos;s Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
