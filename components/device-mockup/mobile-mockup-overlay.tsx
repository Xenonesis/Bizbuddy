"use client";

import { Smartphone, MessageSquare } from "lucide-react";

interface MobileMockupOverlayProps {
	onOpenLeadModal: (serviceName?: string) => void;
}

export default function MobileMockupOverlay({ onOpenLeadModal }: MobileMockupOverlayProps) {
	return (
		<div className="hidden md:block absolute bottom-4 right-4 w-52 rounded-xl bg-black p-2 border border-zinc-700 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
			<div className="bg-zinc-900 text-white rounded-lg p-3 space-y-2 text-xs">
				<div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
					<span className="font-bold text-[11px] flex items-center gap-1">
						<Smartphone className="w-3.5 h-3.5 text-[#0d74ce]" /> Bizbuddy Go
					</span>
					<span className="text-[9px] font-mono text-emerald-400">ONLINE</span>
				</div>
				<div className="bg-zinc-800 p-2 rounded text-[10px] text-zinc-300 flex items-center gap-1.5">
					<MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
					<span>New lead via WhatsApp: &quot;Need ₹5,999 Social Media Plan for my salon&quot;</span>
				</div>
				<button
					onClick={() => onOpenLeadModal("Mobile Mockup Quick Connect")}
					className="w-full bg-[#0d74ce] hover:bg-blue-600 text-white text-[10px] py-1 rounded font-medium transition-colors"
				>
					Accept Lead Now
				</button>
			</div>
		</div>
	);
}
