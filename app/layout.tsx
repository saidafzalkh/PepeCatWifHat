import type { Metadata } from "next";
import { Tilt_Neon } from "next/font/google";
import "./globals.css";
import React from "react";
import {Toaster} from "@/components/ui/sonner";

const tilt = Tilt_Neon({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PepeCatWifHat",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tilt.className}>{children}</body>
    <Toaster />
    </html>
  );
}
