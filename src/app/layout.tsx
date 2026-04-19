import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import EmberCanvas from "@/components/global/EmberCanvas";
import ForgeCursor from "@/components/global/ForgeCursor";
import KeyboardBurn from "@/components/global/KeyboardBurn";
import AmbientSound from "@/components/global/AmbientSound";
import ScrollProgress from "@/components/global/ScrollProgress";
import SmoothScroller from "@/components/global/SmoothScroller";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manav Kheni | The Forge",
  description: "Personal portfolio of Manav Kheni, AI/ML Engineer and Full-Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative selection:bg-accent-primary selection:text-background">
        <SmoothScroller>
          <EmberCanvas />
          <ForgeCursor />
          <KeyboardBurn />
          <AmbientSound />
          <ScrollProgress />
          <main className="relative z-10 flex-grow">
            {children}
          </main>
        </SmoothScroller>
      </body>
    </html>
  );
}
