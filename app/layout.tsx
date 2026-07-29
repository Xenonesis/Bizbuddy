import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { LayoutWrapper } from "../components/LayoutWrapper";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	display: "swap",
});

const siteUrl = "https://bizbuddy.consulting";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default:
			"BizBuddy — Social Media, Tax Filing & Web Development for Indian Businesses",
		template: "%s | BizBuddy",
	},
	description:
		"BizBuddy handles everything — social media management from ₹1,499/mo, GST & ITR filing, custom websites from ₹3,999, and reel editing. Trusted by 250+ Indian businesses.",
	keywords: [
		"Social Media Management",
		"GST Return Filing",
		"ITR Filing",
		"Website Development",
		"Reel Editing",
		"Digital Marketing India",
		"Affordable SMM",
		"BizBuddy",
	],
	authors: [{ name: "BizBuddy Team" }],
	openGraph: {
		type: "website",
		locale: "en_IN",
		siteName: "BizBuddy",
		title:
			"BizBuddy — Social Media, Tax Filing & Web Development for Indian Businesses",
		description:
			"BizBuddy handles everything — social media management from ₹1,499/mo, GST & ITR filing, custom websites from ₹3,999, and reel editing.",
		url: siteUrl,
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "BizBuddy — All-in-one digital business solutions",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title:
			"BizBuddy — Social Media, Tax Filing & Web Development for Indian Businesses",
		description:
			"BizBuddy handles everything — social media management from ₹1,499/mo, GST & ITR filing, custom websites from ₹3,999, and reel editing.",
	},
	alternates: {
		canonical: siteUrl,
	},
	icons: {
		icon: [
			{ url: "/favicon.ico", sizes: "any" },
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
			{ url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
		],
		apple: "/apple-touch-icon.png",
		other: [{ rel: "manifest", url: "/site.webmanifest" }],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en-IN"
			className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<body className="min-h-full font-sans text-[#171717] dark:text-[#f4f4f5] bg-white dark:bg-[#0c0d10] selection:bg-[#cfe7ff] selection:text-black transition-colors duration-200">
				<ThemeProvider>
					<LayoutWrapper>{children}</LayoutWrapper>
				</ThemeProvider>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "LocalBusiness",
							name: "BizBuddy",
							description:
								"Social media management, tax filing, web development & editing services for Indian businesses.",
							url: "https://bizbuddy.consulting",
							telephone: "+91-120-4725137",
							email: "Bizbuddyconsulting@gmail.com",
							address: {
								"@type": "PostalAddress",
								streetAddress: "A-26, NOIDA SECTOR 3 , NEARBY NOIDA SECTOR 16 METRO STATION",
								addressLocality: "Noida",
								addressRegion: "Uttar Pradesh",
								addressCountry: "IN",
							},
							openingHoursSpecification: [
								{
									"@type": "OpeningHoursSpecification",
									dayOfWeek: "Monday",
									opens: "09:00",
									closes: "19:00",
								},
								{
									"@type": "OpeningHoursSpecification",
									dayOfWeek: "Tuesday",
									opens: "09:00",
									closes: "19:00",
								},
								{
									"@type": "OpeningHoursSpecification",
									dayOfWeek: "Wednesday",
									opens: "09:00",
									closes: "19:00",
								},
								{
									"@type": "OpeningHoursSpecification",
									dayOfWeek: "Thursday",
									opens: "09:00",
									closes: "19:00",
								},
								{
									"@type": "OpeningHoursSpecification",
									dayOfWeek: "Friday",
									opens: "09:00",
									closes: "19:00",
								},
								{
									"@type": "OpeningHoursSpecification",
									dayOfWeek: "Saturday",
									opens: "10:00",
									closes: "16:00",
								},
							],
							sameAs: ["https://wa.me/917838472802"],
							priceRange: "₹299–₹14,999",
							areaServed: "IN",
							founder: { "@type": "Person", name: "BizBuddy Team" },
							foundingDate: "2024",
							numberOfEmployees: { "@type": "QuantitativeValue", value: "10" },
						}),
					}}
				/>
			</body>
		</html>
	);
}
