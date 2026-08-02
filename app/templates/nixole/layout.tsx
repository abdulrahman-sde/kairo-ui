import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "@/components/templates/nixole/globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nixole — AI that converts patients for your medical practice",
  description:
    "Autonomous calls, enrollment & payments. AI that handles every patient touchpoint — calls, WhatsApp — until they book an appointment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
