import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/features/navigation/sidebar";
import { BottomNav } from "@/components/features/navigation/bottom-nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MySys",
  description: "A professional social platform clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.variable, "font-sans")}
    >
      <body className="min-h-full bg-background text-foreground">
        <Sidebar />
        <main className="md:pl-64 pb-16 md:pb-0 min-h-screen">
          <div className="mx-auto max-w-2xl px-4 md:px-8 py-6">
            {children}
          </div>
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
