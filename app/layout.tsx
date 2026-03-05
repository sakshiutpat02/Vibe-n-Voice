import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import type { ReactNode } from "react";

import { Navbar } from "@/components/Navbar";
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
        <footer className="border-t border-slate-200/70 py-5 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
          © VibenVoice, 2026
        </footer>
      </body>
    </html>
  );
}
