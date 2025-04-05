import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from 'next/link';

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
  title: "CopePilot",
  description: "An AI CBT Companion",
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
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          <nav style={{ width: 200, background: '#333', color: 'white', padding: 20 }}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/chat">Chat</Link></li>
              <li><Link href="/insights">Insights</Link></li>
            </ul>
          </nav>
          <main style={{ flex: 1, padding: 20 }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
