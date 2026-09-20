import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE } from "@/config/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.role}`,
  description: "AI engineer building LLM agents, RAG pipelines, and multi-agent systems. Selected projects and links.",
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: "/",
  }
};

import ScrollProvider from "@/components/ScrollProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable} antialiased bg-deepSpace text-stellarWhite`}>
      <body className="overflow-x-hidden font-sans selection:bg-saturnGold/30 selection:text-saturnGold">
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
