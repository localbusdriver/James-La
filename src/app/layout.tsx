import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";

import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

import { sanFranciscoPro } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: "James' Portfolio",
  description: "James' Portfolio, created using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>나</text></svg>"
        />
      </head>
      <body
        className={cn(
          sanFranciscoPro.className,
          "flex min-h-screen flex-col px-4 font-sans lg:px-0"
        )}
      >
        <Analytics />
        {children}
        <Toaster className="border-gray-500 text-muted" />
      </body>
    </html>
  );
}
