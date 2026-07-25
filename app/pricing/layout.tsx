import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pricing Plans — Social Media & Web Dev (₹1,499–₹14,999)",
	description:
		"Transparent monthly pricing for social media management (₹1,499–₹2,499), websites (₹3,999–₹14,999), GST filing & reel editing. No hidden fees, cancel anytime.",
	openGraph: {
		title: "BizBuddy Pricing — Social Media, Websites & Tax Plans",
		description:
			"Simple monthly plans from ₹1,499/mo. No long-term commitments.",
	},
};

export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
