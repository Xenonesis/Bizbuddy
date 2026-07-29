import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Client Testimonials & Reviews — Rated 4.9/5",
	description:
		"See why 250+ Indian businesses trust Bizbuddy Consulting for social media management, tax filing, web development & reel editing. Rated 4.9/5 by clients.",
	openGraph: {
		title: "Client Testimonials — Bizbuddy Consulting | Rated 4.9/5",
		description:
			"Real reviews from Indian business owners who use Bizbuddy Consulting for digital growth.",
	},
};

export default function TestimonialsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
