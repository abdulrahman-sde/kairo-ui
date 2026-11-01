import React from "react";
import Link from "next/link";

export function Cta() {
  return (
    <div id="download" className="mx-auto w-full scroll-mt-16 py-14 pb-0 sm:py-16 xl:py-24 xl:pb-0">
        <div className="mx-auto w-full max-w-(--breakpoint-2xl) px-4 sm:px-6 lg:px-12 xl:px-24">
          <div className="bg-landing-banner rounded-2xl bg-cover bg-center px-6 py-16 text-center sm:px-8 sm:py-24 xl:py-32">
            <div className="mb-8 pt-4 sm:mb-10 sm:pt-8">
              <h2
                data-slot="heading"
                className="font-display! text-primary font-medium xl:text-display-md text-3xl leading-9 sm:text-4xl sm:leading-11 xl:leading-12"
              >
                Accelerate your discoveries.
                <br />
                Launch Aeris today.
              </h2>
            </div>
            <Link
              href="#download"
              data-slot="button"
              className="group/button focus-visible:border-ring focus-visible:ring-ring/50 inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none bg-primary text-primary-foreground hover:bg-primary/80 h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 md:h-11 md:gap-2 md:px-3 md:text-base md:has-data-[icon=inline-end]:pr-2.5 md:has-data-[icon=inline-start]:pl-2.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 md:[&_svg:not([class*='size-'])]:size-4.5"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                aria-hidden="true"
                focusable="false"
                data-icon="inline-start"
              >
                <path
                  d="M3 17V15C3 14.4477 3.44772 14 4 14C4.55228 14 5 14.4477 5 15V17C5 18.1046 5.89542 19 7 19H17C18.1046 19 19 18.1046 19 17V15C19 14.4477 19.4477 14 20 14C20.5523 14 21 14.4477 21 15V17C21 19.2092 19.2092 21 17 21H7C4.79088 21 3 19.2092 3 17ZM11 4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V12.0859L14.793 10.293C15.1835 9.90244 15.8165 9.90244 16.207 10.293C16.5976 10.6835 16.5976 11.3165 16.207 11.707L12.707 15.207C12.3165 15.5976 11.6835 15.5976 11.293 15.207L7.79297 11.707C7.40244 11.3165 7.40244 10.6835 7.79297 10.293C8.18349 9.90244 8.81651 9.90244 9.20703 10.293L11 12.0859V4Z"
                  fill="currentColor"
                />
              </svg>
              Download Aeris for macOS
            </Link>
          </div>
        </div>
      </div>
  );
}
