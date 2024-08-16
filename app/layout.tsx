import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loading from "./loading";
import React from "react";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "University College of Engineering, Kariavattom",
  description: "Official website of the University College of Engineering, Kariavattom",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "android-chrome",
      sizes: "192x192",
      url: "/android-chrome-192x192.png",
    },
    {
      rel: "android-chrome",
      sizes: "512x512",
      url: "/android-chrome-512x512.png",
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <Analytics/>
        {children} 
      </body>
    </html>
  );
}
