import type { Metadata } from "next";
import { Inter } from 'next/font/google';

import "./globals.css";
import AppShell from "./components/AppShell";

export const metadata: Metadata = {
  title: "CopePilot",
  description: "An AI CBT Companion",
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning={true}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
