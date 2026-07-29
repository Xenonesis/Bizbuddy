"use client";

import { motion } from "motion/react";

const BRANDS = [
	"Dr. Apex Dental",
	"UrbanBites Cafe",
	"FitPulse Gym",
	"Zenith Real Estate",
	"Nova Tech Solutions",
	"Aura Salon & Spa",
	"Sharma Retail",
	"Bloom Botanicals",
];

export default function TrustLogoMarquee() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="max-w-[1280px] mx-auto px-4 sm:px-6 overflow-hidden"
		>
			<div className="text-center mb-6">
				<span className="text-xs font-mono uppercase tracking-widest text-[#60646c] dark:text-zinc-400">
					TRUSTED IN PRODUCTION BY 250+ STARTUPS, RESTAURANTS, CLINICS &
					RETAIL BRANDS
				</span>
			</div>
			<div className="relative w-full overflow-hidden mask-x py-2">
				<div className="animate-marquee flex items-center gap-6">
					{[...BRANDS, ...BRANDS].map((brand, i) => (
						<div
							key={`${brand}-${i}`}
							className="ecosystem-tile flex items-center justify-center px-5 py-2.5 rounded-lg border border-[#dcdee0] dark:border-[#27272a] bg-white dark:bg-[#14161b] text-[#171717] dark:text-[#f4f4f5] font-semibold text-xs tracking-tight shadow-xs hover:border-[#171717] dark:hover:border-zinc-500 transition-all shrink-0 font-mono"
						>
							{brand}
						</div>
					))}
				</div>
			</div>
		</motion.section>
	);
}
