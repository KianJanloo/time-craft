import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Toast from "@/components/common/Toast";
import Header from "@/components/common/headers/Header";
import Footer from "@/components/common/footers/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TimeCraft - Premium Watches & Timepieces",
  description: "Discover our exquisite collection of handcrafted watches, wall clocks, pocket watches, and timepieces. Premium quality, timeless design, and exceptional craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Toast />
      </body>
    </html>
  );
}
