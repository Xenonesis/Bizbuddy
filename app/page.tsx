"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
	TrendingUp,
	FileText,
	Code2,
	Video,
	LayoutGrid,
	CheckCircle2,
	ArrowRight,
	ShieldCheck,
	Zap,
	Users,
	Percent,
	BarChart3,
	Star,
	MessageSquare,
	Sparkles,
	Award,
	Globe,
} from "lucide-react";

import { DeviceMockupHero } from "../components/DeviceMockupHero";
import { ExpoBentoCard } from "../components/ExpoBentoCard";
import { QuoteCalculator } from "../components/QuoteCalculator";
import { FaqAccordion } from "../components/FaqAccordion";
import { SpotlightCard } from "../components/SpotlightCard";
import { AnimatedCounter } from "../components/AnimatedCounter";
import { ShimmerButton } from "../components/ShimmerButton";
import BorderGlow from "../components/BorderGlow";
import Grainient from "../components/Grainient";
import { PORTFOLIO_ITEMS, TESTIMONIALS, SOCIAL_MEDIA_PLANS } from "../lib/data";

interface PageProps {
	onOpenConsultation?: () => void;
	onOpenLeadModal?: (serviceName?: string, price?: string) => void;
}

export default function Home({
	onOpenConsultation,
	onOpenLeadModal,
}: PageProps) {
	const [portfolioCategory, setPortfolioCategory] = useState<string>("All");

	const filteredPortfolio = PORTFOLIO_ITEMS.filter(
		(item) =>
			portfolioCategory === "All" || item.category === portfolioCategory,
	);

	const triggerConsultation = () => {
		if (onOpenConsultation) onOpenConsultation();
	};

	const triggerLead = (svc?: string, prc?: string) => {
		if (onOpenLeadModal) onOpenLeadModal(svc, prc);
	};

	return (
		<div className="space-y-16 md:space-y-24 pb-20">
			{/* 1. HERO SECTION (Device Mockup + Sky Wash) */}
			<DeviceMockupHero
				onOpenConsultation={triggerConsultation}
				onOpenLeadModal={triggerLead}
			/>

			{/* 2. TRUST LOGO WALL (Expo-Style Marquee) */}
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
						{[
							"Dr. Apex Dental",
							"UrbanBites Cafe",
							"FitPulse Gym",
							"Zenith Real Estate",
							"Nova Tech Solutions",
							"Aura Salon & Spa",
							"Sharma Retail",
							"Bloom Botanicals",
							"Dr. Apex Dental",
							"UrbanBites Cafe",
							"FitPulse Gym",
							"Zenith Real Estate",
							"Nova Tech Solutions",
							"Aura Salon & Spa",
							"Sharma Retail",
							"Bloom Botanicals",
						].map((brand, i) => (
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

			{/* 3. SERVICES OVERVIEW (5 Core Categories) */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-10"
			>
				<div className="text-center max-w-3xl mx-auto space-y-3">
					<div className="badge-pill">OUR CORE SERVICES</div>
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#171717] dark:text-[#f4f4f5]">
						Everything your business needs to operate & scale online.
					</h2>
					<p className="text-[#60646c] dark:text-zinc-400 text-base">
						Eliminate the hassle of hiring multiple agencies. We deliver design,
						marketing, web engineering, and tax compliance under one roof.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					{/* Main Massive Card (Dark Inversion) spans 2 columns */}
					<div className="lg:col-span-2">
						<BorderGlow
							className="h-full w-full"
							backgroundColor="#171717"
							borderColor="#262626"
							borderRadius={12}
						>
							<ExpoBentoCard
								theme="dark"
								title="Web Development & Systems"
								description="Responsive landing pages, multi-page business websites, e-commerce storefronts, and specialized QR ordering systems with zero-hassle cloud deployment."
								icon={Code2}
								href="/services/website-development"
								className="min-h-[280px] md:min-h-[420px] !bg-transparent !border-transparent"
							>
								{/* Expo Style Code Mockup Panel inside the card */}
								<div className="mt-6 border border-[#262626] bg-[#0c0d10] rounded-xl overflow-hidden shadow-2xl flex flex-col w-full opacity-90 group-hover:opacity-100 transition-opacity">
									<div className="flex items-center px-4 py-3 bg-[#121418] border-b border-[#262626] gap-2">
										<div className="flex gap-1.5">
											<div className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]"></div>
											<div className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]"></div>
											<div className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]"></div>
										</div>
										<div className="text-[11px] font-mono text-[#a1a1aa] ml-2">
											app/page.tsx
										</div>
									</div>
									<div className="p-5 font-mono text-xs md:text-sm text-[#e4e4e7] overflow-hidden whitespace-pre-wrap leading-relaxed">
										<span className="text-[#818cf8]">
											export default function
										</span>{" "}
										<span className="text-[#38bdf8]">BusinessSite</span>() {"{"}
										<br />
										{"  "}return (<br />
										{"    "}&lt;
										<span className="text-[#38bdf8]">BizBuddy.LandingPage</span>
										<br />
										{"      "}theme=
										<span className="text-[#16a34a]">"premium"</span>
										<br />
										{"      "}seoOptimized=
										<span className="text-[#38bdf8]">{"{true}"}</span>
										<br />
										{"      "}mobileResponsive=
										<span className="text-[#38bdf8]">{"{true}"}</span>
										<br />
										{"    "}/&gt;
										<br />
										{"  "});
										<br />
										{"}"}
									</div>
								</div>
							</ExpoBentoCard>
						</BorderGlow>
					</div>

					{/* Secondary Stack (1 column) */}
					<div className="flex flex-col gap-6 lg:col-span-1">
						<BorderGlow
							className="flex-1 w-full"
							backgroundColor="var(--surface-card)"
							borderColor="var(--hairline-strong)"
							glowBlendMode="var(--glow-blend)"
							glowColor="210 100 50"
							borderRadius={12}
						>
							<ExpoBentoCard
								theme="light"
								title="Social Media Management"
								description="High-converting Instagram & Facebook posts, viral reels editing, and Meta ads."
								icon={TrendingUp}
								href="/services/social-media"
								className="flex-1 !bg-transparent !border-transparent"
							>
								<div className="flex items-center gap-2 mt-4 text-[#0d74ce] dark:text-[#38bdf8] text-sm font-medium group-hover:underline">
									View Plans <ArrowRight className="w-4 h-4" />
								</div>
							</ExpoBentoCard>
						</BorderGlow>

						<BorderGlow
							className="flex-1 w-full"
							backgroundColor="var(--surface-card)"
							borderColor="var(--hairline-strong)"
							glowBlendMode="var(--glow-blend)"
							glowColor="210 100 50"
							borderRadius={12}
						>
							<ExpoBentoCard
								theme="light"
								title="Accounts & Tax"
								description="PF returns, TDS, ITR filing, and GST returns handled by verified CAs."
								icon={FileText}
								href="/services/accounts"
								className="flex-1 !bg-transparent !border-transparent"
							>
								<div className="flex items-center gap-2 mt-4 text-[#0d74ce] dark:text-[#38bdf8] text-sm font-medium group-hover:underline">
									Explore Tax Services <ArrowRight className="w-4 h-4" />
								</div>
							</ExpoBentoCard>
						</BorderGlow>
					</div>
				</div>

				{/* 2-Column Standard Row for Editing & Other Services */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<BorderGlow
						className="w-full"
						backgroundColor="var(--surface-card)"
						borderColor="var(--hairline-strong)"
						glowBlendMode="var(--glow-blend)"
						glowColor="210 100 50"
						borderRadius={12}
					>
						<ExpoBentoCard
							theme="light"
							title="Reels & Graphic Editing Services"
							description="Viral subtitles for Reels & Shorts, YouTube thumbnails, banner design, and AI-generated avatar videos."
							icon={Video}
							href="/services/editing"
							className="!bg-transparent !border-transparent h-full"
						>
							<div className="flex items-center gap-2 mt-4 text-[#0d74ce] dark:text-[#38bdf8] text-sm font-medium group-hover:underline">
								View Editing Packs <ArrowRight className="w-4 h-4" />
							</div>
						</ExpoBentoCard>
					</BorderGlow>

					<BorderGlow
						className="w-full"
						backgroundColor="var(--surface-card)"
						borderColor="var(--hairline-strong)"
						glowBlendMode="var(--glow-blend)"
						glowColor="210 100 50"
						borderRadius={12}
					>
						<ExpoBentoCard
							theme="light"
							title="Other Business Support"
							description="Visiting card printing, basic accounting support, customer helpline integration, and growth consulting."
							icon={LayoutGrid}
							href="/services/other"
							className="!bg-transparent !border-transparent h-full"
						>
							<div className="flex items-center gap-2 mt-4 text-[#0d74ce] dark:text-[#38bdf8] text-sm font-medium group-hover:underline">
								Learn More <ArrowRight className="w-4 h-4" />
							</div>
						</ExpoBentoCard>
					</BorderGlow>
				</div>
			</motion.section>

			{/* 4. WHY CHOOSE US (21st.dev Animated Metric Grid) */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="bg-[#fafafa] dark:bg-[#0c0d10] border-y border-[#dcdee0] dark:border-[#27272a] py-16 md:py-24"
			>
				<div className="max-w-[1280px] mx-auto px-4 sm:px-6">
					<div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
						{/* Left: Text & Features */}
						<div className="space-y-8">
							<div className="space-y-4">
								<div className="badge-pill border border-[#dcdee0] dark:border-zinc-800">
									DEVELOP & GROW
								</div>
								<h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold tracking-tighter text-[#171717] dark:text-[#f4f4f5] leading-[1.1]">
									Built for affordable, measurable business growth.
								</h2>
								<p className="text-base sm:text-lg text-[#60646c] dark:text-zinc-400 max-w-lg leading-relaxed">
									Transparent pricing starting from ₹1,499/mo with zero hidden
									setup fees or contracts. Your dedicated account manager scales
									with you.
								</p>
							</div>

							{/* 21st.dev Metric Counters */}
							<div className="grid grid-cols-2 gap-4 pt-2">
								<div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#14161b] space-y-1">
									<div className="text-2xl sm:text-3xl font-bold font-mono text-[#0d74ce] dark:text-[#38bdf8]">
										<AnimatedCounter to={250} suffix="+" />
									</div>
									<div className="text-xs text-[#60646c] dark:text-zinc-400 font-medium">
										Active Business Clients
									</div>
								</div>

								<div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#14161b] space-y-1">
									<div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
										<AnimatedCounter to={99} suffix=".4%" />
									</div>
									<div className="text-xs text-[#60646c] dark:text-zinc-400 font-medium">
										On-Time Tax Compliance
									</div>
								</div>

								<div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#14161b] space-y-1">
									<div className="text-2xl sm:text-3xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
										<AnimatedCounter to={3} suffix="-Day" />
									</div>
									<div className="text-xs text-[#60646c] dark:text-zinc-400 font-medium">
										Average Web Delivery
									</div>
								</div>

								<div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#14161b] space-y-1">
									<div className="text-2xl sm:text-3xl font-bold font-mono text-[#171717] dark:text-white">
										₹<AnimatedCounter to={1499} />
									</div>
									<div className="text-xs text-[#60646c] dark:text-zinc-400 font-medium">
										Monthly Starter Price
									</div>
								</div>
							</div>
						</div>

						{/* Right: Large Mockup Panel */}
						<div className="relative">
							<div className="rounded-2xl border border-[#dcdee0] dark:border-[#27272a] bg-white dark:bg-[#14161b] p-2 shadow-2xl overflow-hidden group">
								<div className="aspect-[4/3] rounded-xl border border-[#f0f0f3] dark:border-[#27272a] bg-[#fafafa] dark:bg-[#0c0d10] flex items-center justify-center overflow-hidden relative">
									<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(207,231,255,0.4)_0%,rgba(255,255,255,0)_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,41,59,0.5)_0%,rgba(12,13,16,0)_70%)]"></div>

									{/* Abstract Dashboard Mockup */}
									<div className="w-3/4 bg-white dark:bg-[#171717] border border-[#dcdee0] dark:border-[#262626] rounded-lg shadow-lg flex flex-col overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
										<div className="h-8 border-b border-[#f0f0f3] dark:border-[#262626] bg-[#fafafa] dark:bg-[#14161b] flex items-center px-3 gap-1.5">
											<div className="w-2 h-2 rounded-full bg-[#dcdee0] dark:bg-[#3f3f46]"></div>
											<div className="w-2 h-2 rounded-full bg-[#dcdee0] dark:bg-[#3f3f46]"></div>
											<div className="w-2 h-2 rounded-full bg-[#dcdee0] dark:bg-[#3f3f46]"></div>
										</div>
										<div className="p-4 space-y-4">
											<div className="flex gap-4">
												<div className="flex-1 space-y-2">
													<div className="h-3 w-1/3 bg-[#f0f0f3] dark:bg-[#27272a] rounded"></div>
													<div className="h-6 w-2/3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded flex items-center px-2 text-[10px] font-mono">
														+125% Conversion Rate
													</div>
												</div>
												<div className="w-10 h-10 rounded-full border-2 border-[#cfe7ff] dark:border-blue-900/50 flex items-center justify-center">
													<Users className="w-4 h-4 text-[#0d74ce] dark:text-blue-400" />
												</div>
											</div>
											<div className="space-y-2 pt-2 border-t border-[#f0f0f3] dark:border-[#262626]">
												<div className="h-2 w-full bg-[#f0f0f3] dark:bg-[#27272a] rounded"></div>
												<div className="h-2 w-5/6 bg-[#f0f0f3] dark:bg-[#27272a] rounded"></div>
												<div className="h-2 w-4/6 bg-[#f0f0f3] dark:bg-[#27272a] rounded"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			{/* 5. 4-STEP PROCESS (Expo IDE / Terminal Mockup Layout) */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="max-w-[1024px] mx-auto px-4 sm:px-6 space-y-8"
			>
				<div className="text-center max-w-2xl mx-auto space-y-4">
					<div className="badge-pill border border-[#dcdee0] dark:border-zinc-800">
						SIMPLE WORKFLOW
					</div>
					<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-[#171717] dark:text-[#f4f4f5]">
						How we partner with your business.
					</h2>
				</div>

				<div className="rounded-xl border border-[#262626] bg-[#0c0d10] shadow-2xl overflow-hidden font-mono text-sm">
					{/* Terminal Header */}
					<div className="h-10 border-b border-[#262626] bg-[#121418] flex items-center px-4 gap-4">
						<div className="flex gap-1.5">
							<div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
							<div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
							<div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
						</div>
						<div className="text-xs text-[#a1a1aa] flex-1 text-center pr-12 flex items-center justify-center gap-2">
							<Globe className="w-3.5 h-3.5" /> bizbuddy-workflow ~ /process
						</div>
					</div>

					{/* Terminal Body */}
					<div className="p-6 sm:p-8 space-y-6 text-[#a1a1aa] overflow-x-auto">
						<div className="flex items-start gap-4">
							<div className="text-[#38bdf8] shrink-0">➜</div>
							<div>
								<span className="text-[#e4e4e7]">
									npx bizbuddy@latest init --step=1
								</span>
								<div className="mt-2 text-[#10b981]">
									✔ Consultation & Discovery
								</div>
								<div className="text-xs mt-1 text-[#60646c] dark:text-zinc-400">
									Analyzing business goals, target audience, and tax
									requirements in a free 15-min call.
								</div>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="text-[#38bdf8] shrink-0">➜</div>
							<div>
								<span className="text-[#e4e4e7]">
									npm run generate:strategy
								</span>
								<div className="mt-2 text-[#10b981]">
									✔ Custom Strategy Blueprint
								</div>
								<div className="text-xs mt-1 text-[#60646c] dark:text-zinc-400">
									Compiling content calendar, website wireframes, and tax
									compliance schedule... done.
								</div>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="text-[#38bdf8] shrink-0">➜</div>
							<div>
								<span className="text-[#e4e4e7]">bizbuddy build & deploy</span>
								<div className="mt-2 text-[#10b981]">
									✔ Execution Phase Active
								</div>
								<div className="text-xs mt-1 text-[#60646c] dark:text-zinc-400">
									[1/3] Designing social media posts... <br /> [2/3] Writing
									website code... <br /> [3/3] Filing GST returns seamlessly...
								</div>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="text-[#38bdf8] shrink-0 animate-pulse">_</div>
							<div>
								<span className="text-[#e4e4e7]">bizbuddy scale --monthly</span>
								<div className="mt-2 text-[#818cf8]">
									⧗ Reporting & Scaling (In Progress)
								</div>
								<div className="text-xs mt-1 text-[#60646c] dark:text-zinc-400">
									Reviewing performance metrics. Generating next month's
									targets.
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			{/* 6. INTERACTIVE AI QUOTE CALCULATOR */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="max-w-[1280px] mx-auto px-4 sm:px-6"
			>
				<QuoteCalculator onOpenLeadModal={triggerLead} />
			</motion.section>

			{/* 7. PORTFOLIO SHOWCASE GRID (With 21st.dev Animated Tabs & Spotlight Cards) */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8"
			>
				<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#f0f0f3] dark:border-[#27272a] pb-6">
					<div>
						<div className="badge-pill mb-2">PORTFOLIO & RESULTS</div>
						<h2 className="text-2xl sm:text-3xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
							Real client work & verified growth metrics.
						</h2>
					</div>

					{/* 21st.dev Animated Sliding Filter Tabs */}
					<div className="flex items-center gap-1.5 p-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-full border border-zinc-200/80 dark:border-zinc-700/80 overflow-x-auto">
						{["All", "Social Media", "Websites", "Branding", "Accounts"].map(
							(cat) => {
								const isSelected = portfolioCategory === cat;
								return (
									<button
										key={cat}
										onClick={() => setPortfolioCategory(cat)}
										className="relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors shrink-0"
									>
										{isSelected && (
											<motion.div
												layoutId="portfolioCategoryTab"
												className="absolute inset-0 bg-black dark:bg-white rounded-full shadow-xs"
												transition={{
													type: "spring",
													stiffness: 400,
													damping: 30,
												}}
											/>
										)}
										<span
											className={`relative z-10 transition-colors ${isSelected ? "text-white dark:text-black font-semibold" : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"}`}
										>
											{cat}
										</span>
									</button>
								);
							},
						)}
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<AnimatePresence mode="popLayout">
						{filteredPortfolio.map((item) => (
							<motion.div
								key={item.id}
								layout
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.95 }}
								transition={{ duration: 0.25 }}
							>
								<SpotlightCard className="h-full group">
									<div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
										<img
											src={item.image}
											alt={`${item.client}: ${item.title} — BizBuddy Portfolio Case Study`}
											className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute top-3 right-3 bg-black/80 backdrop-blur-xs text-white text-xs font-mono font-semibold px-2.5 py-1 rounded-md shadow-xs">
											{item.impactMetric}
										</div>
									</div>
									<div className="p-5 space-y-2">
										<div className="text-xs font-mono text-[#0d74ce] dark:text-[#38bdf8] font-medium">
											{item.client}
										</div>
										<h4 className="font-semibold text-base text-[#171717] dark:text-[#f4f4f5]">
											{item.title}
										</h4>
										<p className="text-xs text-[#60646c] dark:text-zinc-400 leading-relaxed">
											{item.description}
										</p>
										<div className="pt-2 flex flex-wrap gap-1.5">
											{item.tags.map((tag) => (
												<span
													key={tag}
													className="text-[10px] bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded font-mono"
												>
													#{tag}
												</span>
											))}
										</div>
									</div>
								</SpotlightCard>
							</motion.div>
						))}
					</AnimatePresence>
				</div>
			</motion.section>

			{/* 8. TESTIMONIALS */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="bg-[#fafafa] dark:bg-[#0c0d10] border-y border-[#dcdee0] dark:border-[#27272a] py-12 md:py-16"
			>
				<div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-10">
					<div className="text-center max-w-2xl mx-auto space-y-3">
						<div className="badge-pill">CLIENT TESTIMONIALS</div>
						<h2 className="text-2xl sm:text-3xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
							Loved by business owners across India.
						</h2>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{TESTIMONIALS.map((item) => (
							<SpotlightCard
								key={item.id}
								className="p-6 space-y-4 flex flex-col justify-between"
							>
								<div className="space-y-3">
									<div className="flex items-center gap-1 text-amber-500">
										{[...Array(item.rating)].map((_, i) => (
											<Star key={i} className="w-4 h-4 fill-amber-500" />
										))}
									</div>
									<p className="text-xs text-[#60646c] dark:text-zinc-400 leading-relaxed italic">
										&quot;{item.content}&quot;
									</p>
								</div>
								<div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
									<img
										src={item.avatar}
										alt={item.name}
										className="w-10 h-10 rounded-full object-cover"
									/>
									<div>
										<div className="text-xs font-semibold text-[#171717] dark:text-[#f4f4f5]">
											{item.name}
										</div>
										<div className="text-[10px] text-[#60646c] dark:text-zinc-400">
											{item.company}
										</div>
									</div>
								</div>
							</SpotlightCard>
						))}
					</div>
				</div>
			</motion.section>

			{/* 9. FAQ ACCORDION */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8"
			>
				<div className="text-center max-w-2xl mx-auto space-y-3">
					<div className="badge-pill">FREQUENTLY ASKED QUESTIONS</div>
					<h2 className="text-2xl sm:text-3xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
						Got questions? We have answers.
					</h2>
					<p className="text-sm text-[#60646c] dark:text-zinc-400">
						Explore answers to 20+ common inquiries about social media, taxes,
						web dev, and pricing.
					</p>
				</div>

				{/* FAQPage JSON-LD Structured Data */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "FAQPage",
							mainEntity: [
								{
									"@type": "Question",
									name: "What is BizBuddy and how does it help my business grow?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "BizBuddy is an all-in-one digital business platform handling everything from social media marketing and websites to tax return filing, GST compliance, and accounting.",
									},
								},
								{
									"@type": "Question",
									name: "How do I get started with a monthly Social Media plan?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Choose a plan (Basic ₹1,499, Super ₹1,999, or Premium ₹2,499) and our team will contact you within 2 hours to collect your brand details and preferences.",
									},
								},
								{
									"@type": "Question",
									name: "How long does website development take starting at ₹3,999?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "A single landing page takes 3 business days. Multi-page business websites take 5-7 days, and full E-commerce web stores take 7-10 days.",
									},
								},
								{
									"@type": "Question",
									name: "What documents are required for GST Registration?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "You will need your PAN Card, Aadhaar Card, Passport Photo, Proof of Business Address (Rent Agreement or Electricity Bill), and a Cancelled Cheque.",
									},
								},
								{
									"@type": "Question",
									name: "What payment methods do you accept?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "We accept UPI (Google Pay, PhonePe, Paytm), NetBanking, Credit/Debit Cards via Razorpay and Stripe.",
									},
								},
								{
									"@type": "Question",
									name: "Is there a money-back guarantee or cancellation policy?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Yes, we offer hassle-free monthly subscriptions with no long-term lock-in contracts. You can pause or cancel at any time with 7 days notice.",
									},
								},
								{
									"@type": "Question",
									name: "Does BizBuddy file monthly GST returns and EPF filings?",
									acceptedAnswer: {
										"@type": "Answer",
										text: "Yes, we handle monthly GSTR-1, GSTR-3B filings, quarterly TDS, and monthly Employees' Provident Fund (EPF) returns.",
									},
								},
							],
						}),
					}}
				/>
				<FaqAccordion />
			</motion.section>

			{/* 10. PRE-FOOTER CTA BAND (With 21st.dev Shimmer Button) */}
			<motion.section
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
				className="max-w-[1280px] mx-auto px-4 sm:px-6"
			>
				<div className="bg-[#171717] text-white rounded-2xl p-6 sm:p-10 lg:p-16 text-center space-y-6 relative overflow-hidden">
					<div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
						<Grainient
							color1="#38bdf8"
							color2="#5227FF"
							color3="#0f172a"
							timeSpeed={0.25}
							warpStrength={1.2}
							warpFrequency={5.0}
							warpSpeed={2.0}
							warpAmplitude={50.0}
							grainAmount={0.1}
							grainScale={2.0}
							grainAnimated={true}
							contrast={1.4}
							zoom={0.95}
						/>
					</div>
					<div className="relative z-10 max-w-2xl mx-auto space-y-4">
						<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
							Ready to scale your business with BizBuddy?
						</h2>
						<p className="text-sm sm:text-base text-zinc-300 drop-shadow-sm font-medium">
							Join 250+ growing businesses. Start your monthly social media
							management, website development, or tax return filing today.
						</p>
						<div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
							<ShimmerButton
								onClick={() => triggerLead("Homepage Pre-Footer CTA")}
								variant="primary"
								className="w-full sm:w-auto px-8 py-3.5 h-12 text-sm font-semibold"
							>
								Get Started Now
								<ArrowRight className="w-4 h-4 ml-1.5" />
							</ShimmerButton>

							<ShimmerButton
								onClick={triggerConsultation}
								variant="secondary"
								className="w-full sm:w-auto px-8 py-3.5 h-12 text-sm font-medium"
							>
								Schedule Free Call
							</ShimmerButton>
						</div>
					</div>
				</div>
			</motion.section>
		</div>
	);
}
