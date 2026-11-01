"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  Copy,
  Globe,
  Layout,
  Plus,
  Refresh,
  Search,
  Sidebar,
  Star,
} from "reicon-react";
import { TEMPLATES } from "@/constants/templates";

type Cursor = "start" | "c1" | "c2" | "c3" | "copy" | "term";

interface Scene {
  cursor: Cursor;
  hover: number;
  pressed: boolean;
  copied: boolean;
  terminal: boolean;
  pasted: boolean;
  lines: number;
}

const INITIAL: Scene = {
  cursor: "start",
  hover: 0,
  pressed: false,
  copied: false,
  terminal: false,
  pasted: false,
  lines: 0,
};

const FINAL: Scene = {
  cursor: "term",
  hover: 3,
  pressed: false,
  copied: true,
  terminal: true,
  pasted: true,
  lines: 3,
};

const TIMELINE: [number, Partial<Scene>][] = [
  [700, { cursor: "c1", hover: 1 }],
  [2000, { cursor: "c2", hover: 2 }],
  [3300, { cursor: "c3", hover: 3 }],
  [4500, { cursor: "copy" }],
  [5400, { pressed: true, copied: true }],
  [5650, { pressed: false }],
  [6300, { terminal: true, cursor: "term" }],
  [7700, { pasted: true }],
  [8800, { lines: 1 }],
  [9800, { lines: 2 }],
  [10800, { lines: 3 }],
  [13600, INITIAL],
];
const LOOP_MS = 15600;

const SITE = "https://www.kairoui.online";
const POPULAR = ["nova", "glaze", "popcorn", "nexora"];
const NEW_COUNT = 3;
const FILTERS = ["All", "SaaS", "Mobile", "AI"];

const ROW =
  "flex h-8 min-w-0 items-center gap-2.5 rounded-md px-2 text-[13px] font-medium";
const LABEL =
  "text-muted-foreground flex h-7 items-center px-2 text-xs font-medium";

const bySlug = (slug: string) => TEMPLATES.find((t) => t.slug === slug);
// Newest templates first; the third card is the one the demo installs.
const GRID = TEMPLATES.slice(0, 6);
const SELECTED = GRID[2].slug;

export function HeroDemo({ repoUrl }: { repoUrl: string }) {
  const [scene, setScene] = useState<Scene>(INITIAL);

  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = [];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timers = [setTimeout(() => setScene(FINAL), 0)];
      return () => timers.forEach(clearTimeout);
    }
    const run = () => {
      setScene(INITIAL);
      timers = TIMELINE.map(([at, patch]) =>
        setTimeout(() => setScene((s) => ({ ...s, ...patch })), at),
      );
      timers.push(setTimeout(run, LOOP_MS));
    };
    run();
    return () => timers.forEach(clearTimeout);
  }, []);

  const popular = POPULAR.map(bySlug).filter((t) => t !== undefined);

  return (
    <div className="hero-stage">
      <div className="hero-win">
        {/* Sidebar */}
        <div className="flex h-full w-52 shrink-0 flex-col">
          <div className="flex h-[42px] shrink-0 items-center justify-between pr-3 pl-4">
            <div className="flex gap-2" aria-hidden>
              <span className="hero-dot-close size-3 rounded-full" />
              <span className="hero-dot-min size-3 rounded-full" />
              <span className="hero-dot-max size-3 rounded-full" />
            </div>
            <Sidebar size={18} className="text-muted-foreground" aria-hidden />
          </div>

          <nav
            aria-label="Popular templates"
            className="flex shrink-0 flex-col gap-0.5 p-2 pt-3"
          >
            <div className={LABEL}>Popular</div>
            {popular.map((t) => (
              <Link
                key={t.slug}
                href={`/template/${t.slug}`}
                className={`${ROW} hover:bg-foreground/5 transition-colors`}
              >
                <span className="hero-mini relative size-4 shrink-0 overflow-hidden rounded-[4px]">
                  {t.thumbnail && (
                    <Image
                      src={t.thumbnail}
                      alt=""
                      fill
                      sizes="16px"
                      className="object-cover object-top-left"
                    />
                  )}
                </span>
                <span className="truncate">{t.title}</span>
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 flex-col gap-0.5 px-2 pb-2">
            <div className={LABEL}>Resources</div>
            <Link
              href="/templates"
              className={`${ROW} text-muted-foreground hover:bg-foreground/5 transition-colors`}
            >
              <Layout size={16} className="shrink-0" aria-hidden />
              <span className="truncate">All templates</span>
              <ChevronRight size={12} className="ml-auto opacity-50" aria-hidden />
            </Link>
            <Link
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ROW} text-muted-foreground hover:bg-foreground/5 transition-colors`}
            >
              <Star size={16} className="shrink-0" aria-hidden />
              <span className="truncate">Star on GitHub</span>
              <ChevronRight size={12} className="ml-auto opacity-50" aria-hidden />
            </Link>
          </div>

          <div
            aria-hidden
            className="hero-hairline mx-2 flex min-h-0 flex-1 flex-col gap-0.5 pt-3"
          >
            <div className={LABEL}>Tabs</div>
            <div className={`${ROW} text-muted-foreground`}>
              <Plus size={16} className="shrink-0" />
              <span className="truncate">New Tab</span>
            </div>
            <div className={`${ROW} hero-tab-selected rounded-lg`}>
              <Layout size={16} className="shrink-0" />
              <span className="truncate">Templates · Kairo UI</span>
            </div>
            <div className={`${ROW} text-muted-foreground`}>
              <Globe size={16} className="shrink-0" />
              <span className="truncate">my-app · localhost</span>
              <span
                className={`hero-fade ml-auto ${scene.lines === 3 ? "is-on" : ""}`}
              >
                <span className="block size-2 rounded-full bg-sky-500" />
              </span>
            </div>
          </div>
        </div>

        {/* Browser content */}
        <div
          aria-hidden
          className="hero-panel relative flex min-w-0 flex-1 flex-col overflow-hidden"
        >
          <div className="text-muted-foreground flex h-[42px] shrink-0 items-center gap-1 px-3">
            <ChevronLeft size={16} />
            <ChevronRight size={16} className="opacity-40" />
            <Refresh size={13} className="mx-1.5" />
            <div className="ml-1 flex h-7 min-w-0 flex-1 items-center gap-2.5">
              <Search size={13} className="shrink-0" />
              <span className="bg-foreground/15 h-3.5 w-px" />
              <span className="text-foreground/80 truncate text-xs font-medium">
                kairoui.online/templates
              </span>
            </div>
            <Star size={14} />
          </div>

          <div className="mx-auto w-[680px] pt-9">
            <div className="mb-5 flex items-end justify-between px-1">
              <div>
                <p className="text-foreground font-serif text-lg leading-6 font-medium">
                  Templates
                </p>
                <p className="text-muted-foreground text-[11px] font-medium">
                  Free to browse and fork
                </p>
              </div>
              <div className="hero-segment text-muted-foreground flex h-7 rounded-lg p-0.5 text-[11px] font-medium">
                {FILTERS.map((f, i) => (
                  <span
                    key={f}
                    className={`flex items-center rounded-md px-2.5 ${i === 0 ? "hero-segment-on text-foreground" : ""}`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-x-2.5 gap-y-3">
              {GRID.map((t, i) => {
                const selected = t.slug === SELECTED && scene.hover === 3;
                const hovered = scene.hover === i + 1;
                return (
                  <div
                    key={t.slug}
                    className={`hero-card overflow-hidden rounded-xl ${selected ? "is-selected" : ""} ${hovered ? "is-hover" : ""}`}
                  >
                    <div className="hero-shot relative aspect-16/10">
                      {t.thumbnail && (
                        <Image
                          src={t.thumbnail}
                          alt=""
                          fill
                          sizes="221px"
                          className="object-cover object-top"
                        />
                      )}
                    </div>
                    <div className="flex h-10 items-center justify-between px-3">
                      <span className="text-foreground text-[13px] font-semibold">
                        {t.title}
                      </span>
                      {t.slug === SELECTED ? (
                        <span
                          className={`hero-copy ${selected ? "is-on" : ""} ${scene.copied ? "is-copied" : ""} ${scene.pressed ? "is-pressed" : ""}`}
                        >
                          <span className="hero-copy-idle inline-flex items-center gap-1">
                            <Copy size={11} />
                            Copy
                          </span>
                          <span className="hero-copy-done inline-flex items-center gap-1">
                            <Check size={11} />
                            Copied
                          </span>
                        </span>
                      ) : (
                        <span
                          className={`text-[11px] font-medium ${i < NEW_COUNT ? "text-primary" : "text-muted-foreground"}`}
                        >
                          {i < NEW_COUNT ? "New" : "Free"}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Terminal */}
        <div aria-hidden className={`hero-term ${scene.terminal ? "is-on" : ""}`}>
          <div className="flex items-center gap-1.5 px-3 py-2">
            <span className="hero-dot-close size-2.5 rounded-full" />
            <span className="hero-dot-min size-2.5 rounded-full" />
            <span className="hero-dot-max size-2.5 rounded-full" />
            <span className="ml-2 font-mono text-[11px] opacity-60">my-app · zsh</span>
          </div>
          <div className="space-y-1 px-3.5 pt-1 pb-3 font-mono text-[11px] leading-relaxed">
            <p className="break-all">
              <span className="hero-term-accent">➜</span>{" "}
              <span className="hero-term-dir">my-app</span>{" "}
              {scene.pasted ? (
                <span>
                  npx shadcn@latest add {SITE}/r/{SELECTED}.json
                </span>
              ) : (
                <span className="hero-caret" />
              )}
              <span className={`hero-paste-chip ${scene.pasted ? "is-flash" : ""}`}>
                <Command size={10} />V
              </span>
            </p>
            <p className={`hero-fade ${scene.lines >= 1 ? "is-on" : ""}`}>
              <span className="hero-term-accent">✔</span> Checking registry.
            </p>
            <p className={`hero-fade ${scene.lines >= 2 ? "is-on" : ""}`}>
              <span className="hero-term-accent">✔</span> Installing dependencies.
            </p>
            <p className={`hero-fade ${scene.lines >= 3 ? "is-on" : ""}`}>
              <span className="hero-term-accent">✔</span> Added components/templates/
              {SELECTED}
            </p>
          </div>
        </div>

        {/* Cursor */}
        <div
          aria-hidden
          className={`hero-cursor ${scene.pressed ? "is-pressed" : ""}`}
          data-pos={scene.cursor}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M5.5 3.2 19 11.4l-6.2 1.6-2.9 6-4.4-15.8Z"
              className="fill-white stroke-black"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
