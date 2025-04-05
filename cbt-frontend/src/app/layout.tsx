import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google';
import Link from 'next/link';

import "./globals.css";

export const metadata: Metadata = {
  title: "CopePilot",
  description: "An AI CBT Companion",
};

const openSans = Open_Sans({
    subsets: ['latin'],
    variable: '--font-sans', // maps to your `@theme inline` setup
    display: 'swap',
})

const navItems = [
    { label: 'Home', href: '/', icon: '🏠' },
    { label: 'Chat', href: '/chat', icon: '💬' },
    { label: 'Insights', href: '/insights', icon: '📊' },
];


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${openSans.variable} font-sans`} suppressHydrationWarning={true}>
        <div className="flex min-h-screen">
          <nav className="bg-white text-[var(--color-foreground)] px-6 py-4 shadow-md w-3xs">
            <div className="flex items-center gap-2 text-lg font-bold mb-6">
                {/* <span className="text-2xl"></span> */} 
                <span>Copepilot</span>
                </div>
            <ul className="flex flex-col gap-6">
              <li><Link href="/" className="w-full px-3 py-2 rounded-md hover:bg-[var(--color-sky-teal)] transition-colors" >Home</Link></li>
              <li><Link href="/chat" className="w-full px-3 py-2 rounded-md hover:bg-[var(--color-sky-teal)] transition-colors" >Chat</Link></li>
              <li><Link href="/insights" className="w-full px-3 py-2 rounded-md hover:bg-[var(--color-sky-teal)] transition-colors">Insights</Link></li>
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
