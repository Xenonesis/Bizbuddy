"use client";

import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface HeroContentProps {
	onOpenConsultation: () => void;
	onOpenLeadModal: (serviceName?: string) => void;
}

export default function HeroContent({ onOpenConsultation, onOpenLeadModal }: HeroContentProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="text-center max-w-4xl mx-auto space-y-6"
		>
			<div className="flex justify-center">
				<span className="inline-flex items-center gap-2 rounded-full border border-[#0d74ce]/20 dark:border-[#38bdf8]/20 bg-[#0d74ce]/5 dark:bg-[#38bdf8]/5 px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-[#0d74ce] dark:text-[#38bdf8] font-mono uppercase">
					<span className="w-1.5 h-1.5 rounded-full bg-[#0d74ce] dark:bg-[#38bdf8]" />
					Grow Smarter Scale Faster
				</span>
			</div>
			<h1 className="text-[1.75rem] sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-[#171717] dark:text-[#f4f4f5] leading-[1.12] sm:leading-[1.08] lg:leading-[1.05]">
				Grow your business with marketing, tax compliance & custom websites.
			</h1>
			<p className="text-base sm:text-lg text-[#60646c] dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
				Bizbuddy Consulting provides startups, local retail, restaurants, and professionals with monthly social media management, tax returns, e-commerce stores, and video editing.
			</p>

			{/* CTAs */}
			<div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
				<button
					onClick={() => onOpenLeadModal("Hero Primary CTA")}
					className="btn-primary text-base font-medium px-6 py-3 h-12 w-full sm:w-auto"
				>
					Get Started Now
					<ArrowRight className="w-4 h-4 ml-2" />
				</button>
				<button
					onClick={onOpenConsultation}
					className="btn-secondary text-base font-medium px-6 py-3 h-12 w-full sm:w-auto"
				>
					Book 1-on-1 Consultation
				</button>
			</div>

			{/* Micro Trust Indicators */}
			<div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#60646c] dark:text-zinc-400 font-mono">
				<div className="flex items-center gap-1.5">
					<CheckCircle2 className="w-4 h-4 text-emerald-600" />
					<span>No Hidden Charges</span>
				</div>
				<div className="flex items-center gap-1.5">
					<CheckCircle2 className="w-4 h-4 text-emerald-600" />
					<span>Dedicated Account Manager</span>
				</div>
				<div className="flex items-center gap-1.5">
					<CheckCircle2 className="w-4 h-4 text-emerald-600" />
					<span>Monthly Progress Reports</span>
				</div>
			</div>
		</motion.div>
	);
}
