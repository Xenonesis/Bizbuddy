import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LayoutWrapper } from "../components/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "BizBuddy - Digital Marketing, Accounts, Web Dev & Business Growth",
  description: "BizBuddy is an all-in-one digital business solutions platform. Monthly Social Media Management (₹1499+), Tax & EPF Returns, Custom Websites (₹3999+), and Video Editing.",
  keywords: ["BizBuddy", "Social Media Management", "Accounts", "GST Return", "ITR Filing", "Website Development", "Reel Editing", "Digital Marketing"],
  authors: [{ name: "BizBuddy Team" }]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full font-sans text-[#171717] bg-white selection:bg-[#cfe7ff] selection:text-black">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
