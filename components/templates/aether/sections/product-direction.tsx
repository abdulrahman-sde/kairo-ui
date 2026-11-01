import React from "react";

export function ProductDirection() {
  return (
    <section id="benchmarks" className="@container scroll-mt-14 py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="relative">
          <div className="max-w-xl">
            <span className="text-primary font-mono text-sm uppercase">Telemetry & Control</span>
            <h2 className="text-foreground mb-4 mt-8 text-4xl font-medium md:text-5xl">Total observability over global workloads</h2>
            <p className="text-muted-foreground text-balance">
              Stream real-time flamegraphs, distributed spans, and kernel execution traces across your entire multi-region deployment.
            </p>
          </div>
          <div className="py-16 max-lg:-mx-6 max-lg:overflow-hidden max-lg:pl-6">
            <div className="bg-card min-w-3xl ring-foreground/10 overflow-hidden rounded-2xl p-1 shadow-2xl shadow-indigo-900/35 ring-1 backdrop-blur">
              <div className="border-card relative aspect-video origin-top rounded-xl border-l-4">
                <img alt="Aether console showing multi-region state sync" loading="lazy" width="2880" height="1920" decoding="async" className="object-top-left size-full object-cover" sizes="(max-width: 640px) 768px, (max-width: 768px) 1024px, (max-width: 1024px) 1280px, 1280px" srcSet="/aether/circle_un3f39.png 32w, /aether/circle_un3f39.png 48w, /aether/circle_un3f39.png 64w, /aether/circle_un3f39.png 96w, /aether/circle_un3f39.png 128w, /aether/circle_un3f39.png 256w, /aether/circle_un3f39.png 384w, /aether/circle_un3f39.png 640w, /aether/circle_un3f39.png 750w, /aether/circle_un3f39.png 828w, /aether/circle_un3f39.png 1080w, /aether/circle_un3f39.png 1200w, /aether/circle_un3f39.png 1920w, /aether/circle_un3f39.png 2048w, /aether/circle_un3f39.png 3840w" src="/aether/circle_un3f39.png"/>
              </div>
            </div>
          </div>
          <div className="@4xl:gap-12 @4xl:grid-cols-3 relative grid grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock2 fill-foreground/10 size-4">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 10" />
              </svg>
              <h3 className="mt-3 font-medium">Sub-Millisecond Profiling</h3>
              <p className="text-muted-foreground line-clamp-2 text-sm">Continuous eBPF profiling samples CPU and memory events with less than 0.5% overhead across edge nodes.</p>
            </div>
            <div className="space-y-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap fill-foreground/10 size-4">
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
              <h3 className="mt-3 font-medium">Instant Edge Propagation</h3>
              <p className="text-muted-foreground line-clamp-2 text-sm">Route updates, configuration shifts, and DNS failover rules to 300+ edge locations in under 100 milliseconds.</p>
            </div>
            <div className="space-y-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days fill-foreground/10 size-4">
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              <h3 className="mt-3 font-medium">Automated Health Checks</h3>
              <p className="text-muted-foreground line-clamp-2 text-sm">Synthetic health probes continuously verify runtime readiness and reroute traffic around degraded cloud regions.</p>
            </div>
            <div className="space-y-1.5 md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days fill-foreground/10 size-4">
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              <h3 className="mt-3 font-medium">Zero-Downtime Rollouts</h3>
              <p className="text-muted-foreground line-clamp-2 text-sm">Atomic Blue-Green traffic migrations with automated rollbacks on anomalous error-rate spikes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
