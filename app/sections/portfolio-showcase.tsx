"use client";

import { motion, AnimatePresence } from "motion/react";
import { SpotlightCard } from "../../components/SpotlightCard";
import { PORTFOLIO_ITEMS } from "../../lib/data";

interface PortfolioShowcaseProps {
	portfolioCategory: string;
	setPortfolioCategory: (cat: string) => void;
	filteredPortfolio: typeof PORTFOLIO_ITEMS;
}

export default function PortfolioShowcase({
	portfolioCategory,
	setPortfolioCategory,
	filteredPortfolio,
}: PortfolioShowcaseProps) {
	return (
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
										alt={`${item.client}: ${item.title} — Bizbuddy Consulting Portfolio Case Study`}
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
	);
}
