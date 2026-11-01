import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-14 sm:py-16 xl:py-24" data-table-of-contents-boundary="true">
      <div className="mx-auto w-full pb-12 sm:pb-16 xl:pb-20">
        <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 xl:flex xl:flex-wrap xl:gap-x-3 xl:gap-y-6">
            <li className="min-w-0 space-y-3 text-sm font-medium xl:max-w-60 xl:min-w-40 xl:shrink-0 xl:grow xl:last:grow-0">
              <p className="text-muted-foreground/80">Features</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#synthesis"
                  >
                    Synthesis Engine
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#vault"
                  >
                    Private Knowledge Vault
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#benchmarks"
                  >
                    Reasoning Benchmarks
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#privacy"
                  >
                    Local Architecture
                  </Link>
                </li>
              </ul>
            </li>

            <li className="min-w-0 space-y-3 text-sm font-medium xl:max-w-60 xl:min-w-40 xl:shrink-0 xl:grow xl:last:grow-0">
              <p className="text-muted-foreground/80">Use cases</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#research"
                  >
                    Scientific Research
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#biotech"
                  >
                    Biotech & Pharma
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#finance"
                  >
                    Financial Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#legal"
                  >
                    Legal & Regulatory
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#engineering"
                  >
                    Deep Engineering
                  </Link>
                </li>
              </ul>
            </li>

            <li className="min-w-0 space-y-3 text-sm font-medium xl:max-w-60 xl:min-w-40 xl:shrink-0 xl:grow xl:last:grow-0">
              <p className="text-muted-foreground/80">Resources</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#download"
                  >
                    Download Aeris
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#benchmarks"
                  >
                    Benchmarks
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#docs"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#changelog"
                  >
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#community"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </li>

            <li className="min-w-0 space-y-3 text-sm font-medium xl:max-w-60 xl:min-w-40 xl:shrink-0 xl:grow xl:last:grow-0">
              <p className="text-muted-foreground/80">Company</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#about"
                  >
                    About Aeris
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#privacy"
                  >
                    Security & Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#careers"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </li>

            <li className="min-w-0 space-y-3 text-sm font-medium xl:max-w-60 xl:min-w-40 xl:shrink-0 xl:grow xl:last:grow-0">
              <ul className="space-y-3">
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#pricing"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#terms"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="decoration-muted-foreground hover:text-muted-foreground decoration-dotted underline-offset-2 hover:underline"
                    href="#security"
                  >
                    Trust Center
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto w-full py-6">
        <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
          <hr className="text-neutral-50" />
        </div>
      </div>

      <div className="mx-auto w-full">
        <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-muted-foreground/80 text-sm">
            © 2026 Aeris Technologies Inc.
          </p>
          <ul className="text-muted-foreground [&_a]:hover:text-primary inline-flex items-center gap-3 [&_svg]:size-5">
            <li>
              <a
                aria-label="Follow Aeris on X"
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <path
                    d="M17.5652 3.25H20.5319L14.0505 10.6628L21.6753 20.75H15.7052L11.0291 14.6322L5.67867 20.75H2.71018L9.64264 12.8212L2.32812 3.25H8.44986L12.6766 8.84192L17.5652 3.25ZM16.524 18.9731H18.1679L7.55663 4.93359H5.79257L16.524 18.9731Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                aria-label="Aeris GitHub"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2C6.477 2 2 6.484 2 12.017C2 16.444 4.865 20.198 8.84 21.527C9.34 21.62 9.52 21.31 9.52 21.045C9.52 20.81 9.51 20.035 9.51 19.215C6.73 19.82 6.14 18.005 6.14 18.005C5.68 16.84 5.03 16.53 5.03 16.53C4.12 15.91 5.1 15.925 5.1 15.925C6.1 15.995 6.63 16.96 6.63 16.96C7.52 18.49 8.97 18.045 9.54 17.79C9.63 17.145 9.89 16.705 10.17 16.455C7.95 16.205 5.62 15.345 5.62 11.5C5.62 10.405 6.01 9.505 6.65 8.8C6.55 8.545 6.2 7.525 6.75 6.155C6.75 6.155 7.59 5.885 9.5 7.18C10.3 6.96 11.15 6.85 12 6.845C12.85 6.85 13.7 6.96 14.5 7.18C16.41 5.885 17.25 6.155 17.25 6.155C17.8 7.525 17.45 8.545 17.35 8.8C17.99 9.505 18.38 10.405 18.38 11.5C18.38 15.355 16.04 16.2 13.81 16.45C14.17 16.76 14.49 17.37 14.49 18.31C14.49 19.655 14.48 20.735 14.48 21.045C14.48 21.315 14.66 21.625 15.17 21.525C19.14 20.19 22 16.44 22 12.017C22 6.484 17.523 2 12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}