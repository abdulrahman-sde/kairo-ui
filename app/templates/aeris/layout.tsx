import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/components/templates/aeris/globals.css";

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

const title = "Aeris — The Autonomous AI Research Workspace";
const description =
  "Aeris is an autonomous AI workspace for deep research: it reads papers, datasets and filings, synthesizes across documents, and cites every claim with verified evidence.";

export const metadata: Metadata = {
  title: { default: title, template: "%s | Aeris" },
  description,
  applicationName: "Aeris",
  keywords: [
    "AI research assistant",
    "research workspace",
    "document synthesis",
    "citation verification",
    "zero-knowledge vault",
  ],
  openGraph: {
    type: "website",
    siteName: "Aeris",
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
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body
        className={`min-h-screen antialiased selection:bg-neutral-200`}
      >
        {children}
      </body>
    </html>
  );
}
