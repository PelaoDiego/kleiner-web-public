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
  title: "Kleiner Printing Services | High-Quality Prints in Moalboal",
  description:
    "Your trusted partner for Tarpaulins, Sintra Boards, and professional branding in Cebu.",
  openGraph: {
    title: "Kleiner Printing Services",
    description: "High-quality printing from Moalboal to the Philippines.",
    url: "https://tu-sitio.vercel.app",
    siteName: "Kleiner Printing Services",
    images: [
      {
        url: "/kleiner-logo.png", // Usa tu logo como imagen de previsualización
        width: 800,
        height: 600,
      },
    ],
    locale: "en_PH",
    type: "website",
  },
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
