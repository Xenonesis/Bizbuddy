import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Reel & Video Editing Services — Starting ₹299",
	description:
		"Professional reel editing (₹299/reel), social media banners (₹149/post), YouTube thumbnails, and AI avatar videos. 24-hour turnaround available.",
	openGraph: {
		title: "Reel & Video Editing Services — Starting ₹299 | BizBuddy",
		description:
			"Viral reel editing, graphic design, and AI avatar videos for Indian businesses.",
	},
};

export default function EditingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
