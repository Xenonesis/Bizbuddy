import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us — WhatsApp, Phone & Email Support",
	description:
		"Get in touch with BizBuddy. Call +91 120-4725137, email Bizbuddyconsulting@gmail.com, or chat on WhatsApp. Office at A-26, NOIDA SECTOR 3, NEARBY NOIDA SECTOR 16 METRO STATION.",
	openGraph: {
		title: "Contact BizBuddy — We're Here to Help",
		description:
			"Phone, email, WhatsApp and office at A-26, NOIDA SECTOR 3, NEARBY NOIDA SECTOR 16 METRO STATION.",
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
