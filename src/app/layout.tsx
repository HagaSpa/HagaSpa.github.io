import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skill Sheet",
  description: "HagaSpa's Skill Sheet",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={inter.className}>
      <body className="transition-colors duration-300">
        <div className="flex flex-col lg:flex-row min-h-screen text-slate-800">
          <Sidebar />
          <main className="flex-1 p-8 bg-gray-50">{children}</main>
        </div>
      </body>
    </html>
  );
}
