"use client";

import { motion } from "motion/react";
import { Users } from "lucide-react";

import { AnimatedCounter } from "../../components/AnimatedCounter";

export default function WhyChooseUs() {
	return (
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
								Transparent pricing starting from ₹4,999/mo with zero hidden
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
									₹<AnimatedCounter to={4999} />
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
	);
}
