import type { Metadata } from "next";
import "@/components/templates/endless/globals.css";

export const metadata: Metadata = {
  title: "E-Endless — Design Without Limits",
  description:
    "An infinite canvas for designers and developers. AI-powered design tools, collaboration, and export workflows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
