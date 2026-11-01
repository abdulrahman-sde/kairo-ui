import { cn } from "@/lib/utils";

const CopyIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="12" height="12" rx="2" fill="#6366F1" fillOpacity="0.15" stroke="#6366F1" strokeWidth="1.5" />
    <rect x="4" y="4" width="12" height="12" rx="2" fill="#818CF8" fillOpacity="0.2" stroke="#818CF8" strokeWidth="1.5" />
    <path stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" d="M8 9h4M8 12h6" />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M8 7 3 12l5 5" />
    <path stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" d="M16 7l5 5-5 5" />
    <path stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" d="M14 4 10 20" />
  </svg>
);

const SparkleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill="#F59E0B" d="M12 2 13.5 9.5 21 12l-7.5 2.5L12 22l-1.5-7.5L3 12l7.5-2.5Z" />
    <circle cx="19" cy="5" r="1.5" fill="#FCD34D" />
    <circle cx="5" cy="19" r="1" fill="#FCD34D" />
  </svg>
);

const TABS: { label: string; icon: React.ReactNode }[] = [
  {
    label: "Free Forever",
    icon: (
      <span className="flex size-4 items-center -space-x-2">
        <span className="size-3 shrink-0 rounded-full border border-current" />
        <span className="size-3 shrink-0 rounded-full border border-current" />
      </span>
    ),
  },
  { label: "Copy & Paste Ready", icon: <CopyIcon className="size-4" /> },
  { label: "Developer-first", icon: <CodeIcon className="size-4" /> },
  { label: "Always Growing", icon: <SparkleIcon className="size-4" /> },
];

export default function Features() {
  return (
    <section id="features" className="bg-background @container py-24">
      <div className="@2xl:grid-cols-2 mx-auto grid max-w-3xl gap-6 px-6">
        <div>
          <h2 className="text-balance font-serif text-4xl font-medium tracking-tight">
            Built for developers who ship
          </h2>
          <p className="text-muted-foreground mb-6 mt-4 text-balance">
            No sign-ups, no paywalls. Just templates you can drop into your
            project and customize.
          </p>

          <div className="*:w-full">
            {TABS.map((it, i) => (
              <div
                key={it.label}
                className={cn(
                  "flex items-center gap-3 py-2 text-sm w-full",
                  i === 0 ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {it.icon}
                <span>{it.label}</span>
              </div>
            ))}
          </div>
        </div>

        <FreeForeverIllustration />
      </div>
    </section>
  );
}

/** The original "Free forever" illustration, kept static. */
function FreeForeverIllustration() {
  const rows = [["$0", "Forever"], ["Free", "MIT"], ["No account", "Open"]];
  return (
    <div className="@max-xl:-mx-6 not-dark:bg-linear-to-b not-dark:via-muted relative flex items-center overflow-hidden rounded-3xl *:w-full">
      <div
        aria-hidden
        className="*:bg-linear-to-t *:to-muted mask-y-from-65% absolute inset-0 grid grid-cols-1 grid-rows-12 opacity-50 dark:hidden"
      >
        <div />
        <div />
        <div />
        <div />
      </div>
      <div aria-hidden className="flex h-44 flex-col justify-between pt-8">
        {rows.map((row, i) => (
          <div
            key={i}
            className={cn(
              "relative flex h-4 items-center gap-12 px-6",
              i === 1 && "pl-17 pr-6",
              i === 2 && "px-8 gap-20",
            )}
          >
            <div className="bg-border absolute inset-0 my-auto h-px" />
            {row.map((t) => (
              <div
                key={t}
                className="bg-card shadow-black/5 ring-border relative flex h-5 items-center rounded-md px-3 text-[10px] shadow-sm ring-1"
              >
                {t}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
