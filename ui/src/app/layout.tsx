import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppWalletProvider from "../providers/WalletProvider";
import Header from "../components/layout/Header";
import { AppSetup } from "@/components/layout/AppSetup";
import { QueryProvider } from "@/providers/QueryProvider";
import { TooltipProvider } from "@/components/ui";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DriftUI - Solana Perps Trading",
  description:
    "Beautiful Solana perpetuals trading interface built with Drift Protocol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white min-h-screen`}
      >
        <QueryProvider>
          <AppWalletProvider>
            <TooltipProvider>
              <AppSetup />
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">{children}</main>
              </div>
              <Toaster position="bottom-right" theme="dark" richColors />
            </TooltipProvider>
          </AppWalletProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
