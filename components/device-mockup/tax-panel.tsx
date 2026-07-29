export default function TaxPanel() {
	return (
		<div className="space-y-4 animate-in fade-in duration-300">
			<div className="flex justify-between items-center border-b border-zinc-800 pb-3">
				<span className="text-sm font-semibold">Accounts & Tax Solutions Manager</span>
				<span className="text-xs text-blue-400 font-mono">CA Verified Reports</span>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
				<div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 flex items-center justify-between">
					<div>
						<div className="text-sm font-semibold">GSTR-1 & 3B Monthly Return</div>
						<div className="text-xs text-zinc-400">ARN: AA09082390182</div>
					</div>
					<span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono">
						FILED
					</span>
				</div>
				<div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 flex items-center justify-between">
					<div>
						<div className="text-sm font-semibold">EPF Return Filing</div>
						<div className="text-xs text-zinc-400">Challan Generated (14 Staff)</div>
					</div>
					<span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono">
						VERIFIED
					</span>
				</div>
			</div>
		</div>
	);
}
