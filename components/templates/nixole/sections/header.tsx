"use client";

import * as motion from "motion/react-client";
import { ChevronDown } from "reicon-react";

const LETTERS = "Nixole".split("");

const navLinks = [
  { label: "Home", active: true },
  { label: "How it works", active: false },
  { label: "Company", active: false, chevron: true },
  { label: "Case Studies", active: false },
];

export default function Header() {
  return (
    <header className="pt-6 md:pt-8 px-6 md:px-10 mx-auto max-w-[1400px]">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-[9.23px]">
          <motion.img
            src="https://qclay.design/lovable/nixole/main-logo.svg"
            alt="Nixole"
            width={38}
            height={38}
            className="w-[38px] h-[38px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
          <span className="flex text-[24px] font-semibold text-[#000] overflow-hidden">
            {LETTERS.map((letter, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 1, 0.5, 1],
                    delay: 0.5 + i * 0.06,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              </span>
            ))}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href="#"
              className={`text-[14px] font-medium ${
                link.active
                  ? "text-foreground underline underline-offset-[6px] decoration-[1.5px]"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: 1.0 + i * 0.08,
              }}
            >
              <span className="inline-flex items-center gap-1">
                {link.label}
                {link.chevron && <ChevronDown size={12} weight="Outline" />}
              </span>
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="#"
          className="rounded-full border border-border bg-white px-5 py-2 text-[13px] font-medium shadow-[0_1px_0_rgba(0,0,0,0.05)] hover:bg-muted transition-colors"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: 1.3,
          }}
        >
          Book a demo
        </motion.a>
      </div>
    </header>
  );
}
