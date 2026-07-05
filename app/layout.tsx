import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full font-sans text-[#171717] dark:text-[#f4f4f5] bg-white dark:bg-[#0c0d10] selection:bg-[#cfe7ff] selection:text-black transition-colors duration-200">
        <ThemeProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
