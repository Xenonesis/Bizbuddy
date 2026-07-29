export default function WebsitePanel() {
	return (
		<div className="space-y-4 animate-in fade-in duration-300">
			<div className="flex justify-between items-center border-b border-zinc-800 pb-3">
				<span className="text-sm font-semibold">Custom Website Development Engine</span>
				<span className="text-xs text-emerald-400 font-mono">Starting at ₹3,999</span>
			</div>
			<div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 space-y-3">
				<div className="flex justify-between text-xs font-mono text-zinc-400">
					<span>PROJECT: UrbanBites E-Commerce Store</span>
					<span className="text-emerald-400">DEPLOYED IN 5 DAYS</span>
				</div>
				<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
					<div className="h-full bg-emerald-500 w-full" />
				</div>
				<div className="text-xs text-zinc-300">
					Features Loaded: Razorpay Payment Gateway, WhatsApp Order Bot, Google Maps, Mobile Responsive Design, 99.9% Speed Score.
				</div>
			</div>
		</div>
	);
}
