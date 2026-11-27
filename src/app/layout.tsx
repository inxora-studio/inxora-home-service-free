import type { ReactNode } from "react";
import localFont from "next/font/local";
import { siteMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";
import "./globals.css";
import "./motion.css";

export const metadata = siteMetadata;

const manrope = localFont({
  src: "../../public/fonts/Manrope-Variable.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={siteConfig.locale}>
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
