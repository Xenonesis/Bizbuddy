export default function SocialPanel() {
	return (
		<div className="space-y-4 animate-in fade-in duration-300">
			<div className="flex justify-between items-center border-b border-zinc-800 pb-3">
				<span className="text-sm font-semibold">Social Media Management (Super Plan ₹5,999/mo)</span>
				<span className="text-xs text-zinc-400 font-mono">15 Posts + 5 Reels Schedule</span>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
				<div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
					<div className="text-xs text-amber-400 font-mono">POST #12 - SCHEDULED</div>
					<div className="text-sm font-medium mt-1">Festival Offer Carousel Graphic</div>
					<div className="text-xs text-zinc-400 mt-2">Publishing tomorrow 6:00 PM</div>
				</div>
				<div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
					<div className="text-xs text-purple-400 font-mono">REEL #4 - VIRAL EDIT</div>
					<div className="text-sm font-medium mt-1">Behind-The-Scenes Store Reel</div>
					<div className="text-xs text-zinc-400 mt-2">Custom Subtitles + Sound FX</div>
				</div>
				<div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
					<div className="text-xs text-emerald-400 font-mono">META ADS RUNNING</div>
					<div className="text-sm font-medium mt-1">Local Reach Campaign ₹100/day</div>
					<div className="text-xs text-zinc-400 mt-2">2,400 Impressions today</div>
				</div>
			</div>
		</div>
	);
}
