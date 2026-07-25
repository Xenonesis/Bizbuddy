import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us — WhatsApp, Phone & Email Support",
	description:
		"Get in touch with BizBuddy. Call +91 98765 43210, email support@bizbuddy.in, or chat on WhatsApp. Office at Tech Tower, Cyber Hub, New Delhi.",
	openGraph: {
		title: "Contact BizBuddy — We're Here to Help",
		description:
			"Phone, email, WhatsApp and office at Tech Tower, Cyber Hub, New Delhi.",
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
