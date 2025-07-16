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
  title: "SunHacks 2025 - India's Most Energetic Student Hackathon",
  description: "Join 1500+ hackers, creators, and dreamers for 36 hours of non-stop innovation at Sandip University, Nashik. Free registration, accommodation, and meals provided.",
  icons: {
    icon: [
      {
        url: '/tracking.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/tracking.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    apple: '/tracking.png',
  },
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
        {children}
      </body>
    </html>
  );
}
