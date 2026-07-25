import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Portfolio & Client Case Studies",
	description:
		"Real client results — social media growth for Dr. Apex Dental (+340% appointments), e-commerce for UrbanBites (₹2.4L monthly orders), and more.",
	openGraph: {
		title: "Portfolio — BizBuddy Client Results & Case Studies",
		description:
			"See real metrics from 250+ Indian businesses: +340% appointments, ₹2.4L monthly orders, 100% tax compliance.",
	},
};

export default function PortfolioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
