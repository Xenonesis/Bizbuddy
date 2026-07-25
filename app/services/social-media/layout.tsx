import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management — Monthly Plans Starting ₹1,499/mo",
  description: "Monthly social media plans for Indian businesses — posts, reels, Meta ads & DM replies. Basic ₹1,499, Super ₹1,999, Premium ₹2,499. No contracts.",
  openGraph: {
    title: "Social Media Management — ₹1,499/mo Starting | BizBuddy",
    description: "High-quality posts, viral reels, and Meta ads for your business. 250+ clients trust us."
  }
};

export default function SocialMediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
