"use client";

import * as motion from "motion/react-client";

export default function Outcomes() {
  return (
    <section className="py-24 md:py-28 px-6 md:px-10 mx-auto max-w-[1400px] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="text-center text-[12px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Real results
        </motion.p>
      </div>

      <motion.div
        className="mt-8 md:mt-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <p className="text-[36px] md:text-[60px] font-medium tracking-[-0.03em] leading-[1.08] text-foreground">
          Practices using Nixole convert{" "}
          <span className="text-accent">40% more leads</span>
          {" "}in under{" "}
          <span className="text-accent">90 seconds</span>
          {" "}with{" "}
          <span className="text-accent">24/7</span>
          {" "}coverage and{" "}
          <span className="text-accent">2,000+</span>
          {" "}payers verified.
        </p>

        <motion.p
          className="mt-6 text-[16px] leading-relaxed text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          No missed calls. No paperwork backlogs. No patients lost to silence.
          Just a full pipeline from first touch to paid appointment.
        </motion.p>
      </motion.div>
    </section>
  );
}
