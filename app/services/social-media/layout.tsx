import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Social Media Management — Monthly Plans Starting ₹4,999/mo",
	description:
		"Monthly social media plans for Indian businesses — posts, reels, Meta ads & DM replies. Basic ₹4,999, Super ₹5,999, Premium ₹6,999. No contracts.",
	openGraph: {
		title: "Social Media Management — ₹4,999/mo Starting | Bizbuddy Consulting",
		description:
			"High-quality posts, viral reels, and Meta ads for your business. 250+ clients trust us.",
	},
};

export default function SocialMediaLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
