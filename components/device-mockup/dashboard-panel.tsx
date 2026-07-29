"use client";

import { CheckCircle2, Globe } from "lucide-react";

interface DashboardPanelProps {
	onOpenLeadModal: (serviceName?: string) => void;
}

export default function DashboardPanel({ onOpenLeadModal }: DashboardPanelProps) {
	return (
		<div className="space-y-6 animate-in fade-in duration-300">
			<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-zinc-800 pb-4">
				<div>
					<div className="text-xs text-zinc-400 font-mono">CLIENT PORTAL SUMMARY</div>
					<div className="text-lg font-semibold">Sharma Retail & Traders</div>
				</div>
				<div className="flex items-center gap-2">
					<span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono">
						Active Plan: Super ₹1,999/mo
					</span>
				</div>
			</div>

			{/* Metrics Grid */}
			<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
				<div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
					<div className="text-xs text-zinc-400">Total Leads Generated</div>
					<div className="text-2xl font-bold font-mono text-white mt-1">142</div>
					<div className="text-[10px] text-emerald-400 mt-1">↑ +28% this month</div>
				</div>
				<div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
					<div className="text-xs text-zinc-400">Reels Reach</div>
					<div className="text-2xl font-bold font-mono text-white mt-1">48.2K</div>
					<div className="text-[10px] text-emerald-400 mt-1">↑ 5 Viral Reels</div>
				</div>
				<div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
					<div className="text-xs text-zinc-400">GST Return Status</div>
					<div className="text-base font-semibold text-emerald-400 mt-2 flex items-center gap-1">
						<CheckCircle2 className="w-4 h-4" /> Filed (GSTR-3B)
					</div>
				</div>
				<div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
					<div className="text-xs text-zinc-400">Website Status</div>
					<div className="text-base font-semibold text-blue-400 mt-2 flex items-center gap-1">
						<Globe className="w-4 h-4" /> 99.9% Uptime
					</div>
				</div>
			</div>

			{/* Live Activity Row */}
			<div className="bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-3">
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
						WA
					</div>
					<div>
						<div className="text-sm font-semibold text-white">Latest Lead: Ankit Mehta (Order Query)</div>
						<div className="text-xs text-zinc-400">Requested website quote for Restaurant QR menu</div>
					</div>
				</div>
				<button
					onClick={() => onOpenLeadModal("Dashboard Live Lead")}
					className="btn-primary text-xs h-8 px-4 bg-emerald-600 hover:bg-emerald-700"
				>
					Connect on WhatsApp
				</button>
			</div>
		</div>
	);
}
