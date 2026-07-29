"use client";

import { motion } from "motion/react";
import { TrendingUp, FileText, Code2, Video, LayoutGrid, ArrowRight } from "lucide-react";

import BorderGlow from "../../components/BorderGlow";
import { ExpoBentoCard } from "../../components/ExpoBentoCard";

export default function ServicesOverview() {
	return (
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
									<span className="text-[#38bdf8]">BizbuddyConsulting.LandingPage</span>
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
	);
}
