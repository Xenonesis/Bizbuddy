"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { BarChart3, Smartphone, Laptop, FileText } from "lucide-react";

import DashboardPanel from "./dashboard-panel";
import SocialPanel from "./social-panel";
import WebsitePanel from "./website-panel";
import TaxPanel from "./tax-panel";
import MobileMockupOverlay from "./mobile-mockup-overlay";

interface DeviceMockupTabSystemProps {
	onOpenLeadModal: (serviceName?: string) => void;
}

export default function DeviceMockupTabSystem({ onOpenLeadModal }: DeviceMockupTabSystemProps) {
	const [activeTab, setActiveTab] = useState<"dashboard" | "social" | "website" | "tax">("dashboard");

	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: 0.2 }}
			className="mt-14 max-w-5xl mx-auto"
		>
			{/* Interactive Screen Selector Tabs */}
			<div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-4 overflow-x-auto py-1 -mx-2 px-2">
				<button
					onClick={() => setActiveTab("dashboard")}
					className={`px-2.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium font-mono transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 ${
						activeTab === "dashboard"
							? "bg-black text-white shadow-xs dark:bg-white dark:text-black"
							: "bg-white text-[#60646c] border border-[#dcdee0] hover:bg-[#f0f0f3] dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:bg-zinc-800"
					}`}
				>
					<BarChart3 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0d74ce] dark:text-sky-400" /> <span className="hidden xs:inline">Client </span>Analytics
				</button>
				<button
					onClick={() => setActiveTab("social")}
					className={`px-2.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium font-mono transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 ${
						activeTab === "social"
							? "bg-black text-white shadow-xs dark:bg-white dark:text-black"
							: "bg-white text-[#60646c] border border-[#dcdee0] hover:bg-[#f0f0f3] dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:bg-zinc-800"
					}`}
				>
					<Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0d74ce] dark:text-sky-400" /> <span className="hidden xs:inline">Social </span>Reels
				</button>
				<button
					onClick={() => setActiveTab("website")}
					className={`px-2.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium font-mono transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 ${
						activeTab === "website"
							? "bg-black text-white shadow-xs dark:bg-white dark:text-black"
							: "bg-white text-[#60646c] border border-[#dcdee0] hover:bg-[#f0f0f3] dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:bg-zinc-800"
					}`}
				>
					<Laptop className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0d74ce] dark:text-sky-400" /> Web Builder
				</button>
				<button
					onClick={() => setActiveTab("tax")}
					className={`px-2.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium font-mono transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 ${
						activeTab === "tax"
							? "bg-black text-white shadow-xs dark:bg-white dark:text-black"
							: "bg-white text-[#60646c] border border-[#dcdee0] hover:bg-[#f0f0f3] dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:bg-zinc-800"
					}`}
				>
					<FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0d74ce] dark:text-sky-400" /> GST & Tax
				</button>
			</div>

			{/* Composite Surface Container */}
			<div className="relative rounded-2xl border border-[#dcdee0] dark:border-zinc-800 bg-white dark:bg-zinc-900 p-1.5 sm:p-4 shadow-xl">
				{/* Laptop Frame Header */}
				<div className="h-8 bg-[#171717] rounded-t-xl flex items-center justify-between px-4 text-white text-xs">
					<div className="flex items-center gap-1.5">
						<div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
						<div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
						<div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
						<span className="ml-2 font-mono text-[11px] text-zinc-400">
							bizbuddy.consulting/client-portal/{activeTab}
						</span>
					</div>
					<div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-zinc-400">
						<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
						LIVE WORKSPACE
					</div>
				</div>

				{/* Laptop Main Display Screen */}
				<div className="bg-[#171717] text-white p-3 sm:p-6 min-h-[280px] sm:min-h-[360px] rounded-b-xl relative overflow-hidden font-sans">
					{activeTab === "dashboard" && <DashboardPanel onOpenLeadModal={onOpenLeadModal} />}
					{activeTab === "social" && <SocialPanel />}
					{activeTab === "website" && <WebsitePanel />}
					{activeTab === "tax" && <TaxPanel />}

					<MobileMockupOverlay onOpenLeadModal={onOpenLeadModal} />
				</div>
			</div>
		</motion.div>
	);
}
