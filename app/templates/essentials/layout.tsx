import type { Metadata } from "next";
import { Inter, Lora, Roboto_Mono } from "next/font/google";
import "@/components/templates/essentials/globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Essentials — Curated Apparel Store",
  description:
    "Curated apparel and everyday essentials. T-shirts, hoodies, and sneakers hand-picked for fit, fabric, and feel that lasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}