import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Kleiner Printing Services | High-Quality Prints in Moalboal, Cebu",
  description:
    "Professional Tarpaulin printing, Sintra boards, personalized shirts, and branding materials. Nationwide shipping from Moalboal, Cebu, Philippines.",
  keywords: [
    "Printing Services Moalboal",
    "Cebu Printing",
    "Tarpaulin Printing Philippines",
    "Sintra Board Menu",
    "Kleiner Printing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
