import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vibenvoice.com"),
  title: {
    default: "VibenVoice | Philosophy & Services",
    template: "%s | VibenVoice",
  },
  description:
    "VibenVoice is a modern digital marketing and PR agency platform helping startups, creators, and businesses scale their digital presence.",
  openGraph: {
    title: "VibenVoice",
    description: "Modern digital marketing and PR agency platform.",
    url: "https://vibenvoice.com",
    siteName: "VibenVoice",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable} font-body`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
