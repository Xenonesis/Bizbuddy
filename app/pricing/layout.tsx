import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pricing Plans — Social Media & Web Dev (₹4,999–₹14,999)",
	description:
		"Transparent monthly pricing for social media management (₹4,999–₹6,999), websites (₹3,999–₹14,999), GST filing & reel editing. No hidden fees, cancel anytime.",
	openGraph: {
		title: "Bizbuddy Consulting Pricing — Social Media, Websites & Tax Plans",
		description:
			"Simple monthly plans from ₹4,999/mo. No long-term commitments.",
	},
};

export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
