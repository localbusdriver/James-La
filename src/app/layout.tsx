import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "James La Portfolio",
  description: "Portfolio for James La, recent graduate from the Te Herenga Waka, Victoria University of Wellington. Pursuing a career in software development. Actively looking for work in the tech industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
