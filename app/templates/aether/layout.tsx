import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Sans } from "next/font/google";
import "@/components/templates/aether/globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const title = "Aether — Cloud Runtime for Modern Distributed Scale";
const description =
  "Run serverless microVMs globally, sync multi-region state, and stream live telemetry with 0ms cold starts. Aether is the cloud runtime for high-velocity engineering teams.";

export const metadata: Metadata = {
  title: { default: title, template: "%s | Aether" },
  description,
  applicationName: "Aether",
  keywords: [
    "cloud runtime",
    "serverless microVMs",
    "edge computing",
    "multi-region",
    "developer infrastructure",
    "zero cold start",
  ],
  openGraph: {
    type: "website",
    siteName: "Aether",
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f4f4f5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${instrumentSans.variable}`}>
      <body
        className={`min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
