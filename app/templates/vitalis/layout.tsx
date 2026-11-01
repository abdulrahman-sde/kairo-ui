import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/components/templates/vitalis/globals.css";

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

const title = "Vitalis — Health & Longevity Companion App";
const description =
  "Track biomarkers, optimize sleep and recovery, and extend your healthspan with clinically backed insights from Vitalis, the longevity companion app.";

export const metadata: Metadata = {
  title: { default: title, template: "%s | Vitalis" },
  description,
  applicationName: "Vitalis",
  keywords: [
    "longevity app",
    "healthspan",
    "biomarker tracking",
    "sleep optimization",
    "health companion",
  ],
  openGraph: {
    type: "website",
    siteName: "Vitalis",
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
        className={`bg-background text-foreground vitalis-scope antialiased selection:bg-neutral-200`}
      >
        {children}
      </body>
    </html>
  );
}
