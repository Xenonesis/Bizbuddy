import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Custom Websites & E-Commerce — Starting ₹3,999",
	description:
		"Next.js websites for Indian businesses — landing pages ₹3,999, business sites ₹7,999, e-commerce ₹14,999. Mobile-first, SEO-ready, WhatsApp integration.",
	openGraph: {
		title: "Website Development — Starting ₹3,999 | Bizbuddy Consulting",
		description:
			"Custom Next.js websites with WhatsApp bots, Razorpay, and 90+ PageSpeed scores.",
	},
};

export default function WebDevLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
