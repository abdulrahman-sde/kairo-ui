"use client";

import * as motion from "motion/react-client";

const AI_ICON_PATH =
  "M5.71198 0L9.56198 9.982H7.686L6.734 7.336H2.786L1.806 9.982H0L3.85 0H5.71198ZM6.272 6.02L4.788 1.82L3.234 6.02H6.272ZM11.998 0.014V9.982H10.234V0.014H11.998Z";

function AnimatedWords({
  text,
  className,
  delayStart = 0,
  stagger = 0.06,
}: {
  text: string;
  className?: string;
  delayStart?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom leading-[1.05] pb-[0.2em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 1, 0.5, 1],
              delay: delayStart + i * stagger,
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 md:pt-24 text-center">
      <motion.div
        className="inline-flex items-center gap-[10px] rounded-[8px] px-[11px] py-[4px] pr-[11px] pl-[4px] eyebrow-bg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.5 }}
      >
        <span className="inline-flex items-center justify-center w-[28px] h-[22px] rounded-[4px] bg-white">
          <svg
            width="14"
            height="12"
            viewBox="0 0 12 10"
            fill="currentColor"
            className="text-foreground"
          >
            <path d={AI_ICON_PATH} />
          </svg>
        </span>
        <span className="text-[13px] text-foreground">
          Autonomous calls, enrollment &amp; payments
        </span>
      </motion.div>

      <h1 className="mx-auto max-w-[1100px] mt-6 font-medium leading-[1.05] tracking-[-0.035em] text-[56px] md:text-[72px] text-foreground">
        <div>
          <AnimatedWords
            text="AI that converts patients"
            delayStart={1.7}
            stagger={0.05}
          />
        </div>
        <div>
          <AnimatedWords text="for your" delayStart={1.95} stagger={0.05} />
          <span className="inline-flex items-center align-middle mx-2">
            <motion.video
              src="https://qclay.design/lovable/nixole/nurse-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-full object-cover w-[72px] h-[72px] md:w-[88px] md:h-[88px]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 2.15,
              }}
            />
          </span>
          <span className="inline-block overflow-hidden align-bottom leading-[1.05] pb-[0.2em]">
            <motion.span
              className="inline-block"
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.25, 1, 0.5, 1],
                delay: 2.1,
              }}
            >
              {"\u00A0"}
            </motion.span>
          </span>
          <AnimatedWords
            text="medical practice"
            className="text-foreground/25"
            delayStart={2.1}
            stagger={0.05}
          />
        </div>
      </h1>

      <motion.p
        className="mx-auto mt-8 max-w-[640px] text-[16px] leading-[1.5] text-muted-foreground"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 2.5 }}
      >
        Built for how patients actually decide. They Google. They hesitate. They
        miss calls.
        <br />
        Our AI handles every touchpoint — calls, WhatsApp — until they book an
        appointment.
      </motion.p>

      <div className="mt-10 flex items-center justify-center gap-3">
        <motion.a
          href="#"
          className="inline-flex items-center rounded-full border border-border bg-white px-6 py-2.5 text-[14px] font-medium shadow-[0_1px_0_rgba(0,0,0,0.05)] hover:bg-muted transition-colors"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: 2.7,
          }}
        >
          Book a demo
        </motion.a>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: 2.8,
          }}
        >
          <button>
            <a
              href="#"
              className="inline-flex items-center rounded-full px-6 py-2.5 text-[14px] font-semibold text-accent-foreground  bg-blue-300"
            >
              Let&apos;s Talk
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
