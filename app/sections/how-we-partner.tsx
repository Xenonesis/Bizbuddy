"use client";

import { motion } from "motion/react";
import { Globe } from "lucide-react";

export default function HowWePartner() {
	return (
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
	);
}
