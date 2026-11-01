import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/components/templates/nexora/globals.css";

// Inter is a variable font: omit `weight` so next/font loads one variable
// file per subset instead of a separate static file for each weight.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ui.abdulrahmanasif.dev"),
  title: "Nexora — AI-Powered Image Generation",
  description:
    "Create stunning visuals with AI-powered precision. From concept to creation in seconds.",
};

export default function NexoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
        className="font-sans antialiased bg-white text-[#0f172a]"
      >
        {children}
      </body>
    </html>
  );
}
