import { useId } from "react";
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <LogoIcon className="size-6 mt-0.5" />
      <span className="font-semibold tracking-tight text-foreground  mt-1">
        Kairo
        <span className="opacity-45"> Ui</span>
      </span>
    </span>
  );
};

export const LogoIcon = ({ className }: { className?: string }) => {
  const uid = useId().replace(/:/g, "");
  const clip = `logo-clip-${uid}`;
  const paint0 = `logo-paint0-${uid}`;
  const paint1 = `logo-paint1-${uid}`;
  const paint2 = `logo-paint2-${uid}`;
  return (
    <svg
      className={cn("size-6", className)}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kairo UI icon"
    >
      <rect width="48" height="48" rx="12" fill="#2563EB" />
      <g clipPath={`url(#${clip})`}>
        <rect
          width="48"
          height="48"
          fill={`url(#${paint0})`}
          clipPath={`url(#${clip})`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 39C32.2843 39 39 32.2843 39 24C39 15.7157 32.2843 9 24 9C15.7157 9 9 15.7157 9 24C9 32.2843 15.7157 39 24 39ZM28.6795 15.9876C28.9073 15.1785 28.1221 14.7001 27.405 15.211L17.3948 22.3422C16.6172 22.8962 16.7395 24 17.5786 24H20.2145V23.9796H25.3519L21.1659 25.4566L19.3205 32.0124C19.0928 32.8215 19.8779 33.2999 20.595 32.789L30.6052 25.6579C31.3829 25.1038 31.2605 24 30.4214 24H26.4241L28.6795 15.9876Z"
          fill={`url(#${paint1})`}
        />
      </g>
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="11"
        stroke={`url(#${paint2})`}
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id={paint0}
          x1="24"
          y1="5.96047e-07"
          x2="26"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient
          id={paint1}
          x1="24"
          y1="9"
          x2="24"
          y2="39"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.8" />
          <stop offset="1" stopColor="white" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient
          id={paint2}
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.12" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <clipPath id={clip}>
          <rect width="48" height="48" rx="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
