// Import PostHogProvider for analytics. It's commented out because it works only in USA/Canada/EU/ If you want to use it, you must switch on VPN
// import { PostHogProvider } from "@/components/vendor/ph-provider";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expenses tracker",
  description: "Track your expenses with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-200`}
      >
        {/* <PostHogProvider> */}
        {children}
        {/* </PostHogProvider> */}
      </body>
    </html>
  );
}
