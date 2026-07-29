"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import Grainient from "./Grainient";
import HeroContent from "./device-mockup/hero-content";
import DeviceMockupTabSystem from "./device-mockup/device-mockup-tabs";

interface DeviceMockupHeroProps {
	onOpenConsultation: () => void;
	onOpenLeadModal: (serviceName?: string) => void;
}

export function DeviceMockupHero({ onOpenConsultation, onOpenLeadModal }: DeviceMockupHeroProps) {
	const { resolvedTheme } = useTheme();
	const isDark = resolvedTheme === "dark";

	return (
		<section className="relative overflow-hidden hero-sky-wash pt-16 pb-20 border-b border-[#dcdee0] dark:border-zinc-800">
			<div className="absolute inset-0 z-0 opacity-40 dark:opacity-60 pointer-events-none">
				<Grainient
					color1={isDark ? "#1e1b4b" : "#e0f2fe"}
					color2={isDark ? "#0f172a" : "#bae6fd"}
					color3={isDark ? "#1e293b" : "#7dd3fc"}
					timeSpeed={0.2}
					warpStrength={1.2}
					warpFrequency={4.0}
					warpSpeed={1.5}
					warpAmplitude={40.0}
					blendSoftness={0.1}
					grainAmount={0.08}
					grainScale={2.0}
					grainAnimated={true}
					contrast={1.2}
					zoom={1.0}
				/>
			</div>
			<div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6">
				{/* Top Eyebrow Badge */}
				<div className="flex justify-center mb-6 px-2">
					<a
						href="#recent-updates"
						className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#dcdee0] dark:border-zinc-800 bg-[#f0f0f3]/80 dark:bg-zinc-800/80 py-1 pr-1.5 sm:pr-2.5 pl-1 backdrop-blur-sm transition duration-300 hover:border-[#171717] dark:hover:border-zinc-500 cursor-pointer max-w-full"
					>
						<span className="inline-flex items-center gap-1.5 rounded-2xl border border-[#dcdee0] dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2 sm:px-2.5 py-1 shadow-sm">
							<span className="relative flex w-2 h-2 shrink-0 items-center justify-center">
								<span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
								<span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
							</span>
							<span className="text-[11px] font-semibold tracking-wide text-[#171717] dark:text-zinc-200">
								What's new?
							</span>
						</span>
						<span className="inline-flex items-center gap-1.5 sm:gap-2 pr-px truncate">
							<span className="text-[10px] sm:text-xs font-medium text-[#60646c] dark:text-zinc-400 truncate">
								Managed SEO Services
							</span>
							<ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#60646c] dark:text-zinc-400 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
						</span>
					</a>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<HeroContent onOpenConsultation={onOpenConsultation} onOpenLeadModal={onOpenLeadModal} />
				</motion.div>

				<DeviceMockupTabSystem onOpenLeadModal={onOpenLeadModal} />
			</div>
		</section>
	);
}
