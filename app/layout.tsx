import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Providers from "./providers";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Shop",
  description: "Ecommerce built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {/* NAVBAR (global) */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main style={{ minHeight: "100vh" }}>{children}</main>

          {/* FOOTER (global) */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
