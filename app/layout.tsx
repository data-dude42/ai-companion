import type { Metadata } from "next";

import localFont from "next/font/local";
import { Inter } from "next/font/google";

import {ClerkProvider} from '@clerk/nextjs'
import "./globals.css";

import { Children } from "react";
import { ThemeProvider } from "@/components/theme-provider";

import {cn} from '@/lib/utils';

const inter = Inter({subsets: ['latin']})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className= {cn ("bg-secondary", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}