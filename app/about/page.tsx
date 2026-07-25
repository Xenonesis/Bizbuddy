import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About BizBuddy — Digital Solutions for Indian Businesses",
  description: "BizBuddy helps 250+ Indian businesses grow with social media management, tax compliance, custom websites & reel editing. Founded to make digital affordable.",
  openGraph: {
    title: "About BizBuddy — Affordable Digital Growth for Indian Businesses",
    description: "250+ clients, 1,200+ reels created, 99.4% on-time tax filing. Meet the team behind BizBuddy."
  }
};

export default function AboutPage() {
	return (
		<div className="space-y-12 md:space-y-16 pb-16 md:pb-20">
			{/* Sub-hero */}
			<section className="hero-sky-wash pt-12 sm:pt-16 pb-10 sm:pb-14 border-b border-[#dcdee0] dark:border-[#27272a]">
				<div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center space-y-4">
					<div className="badge-pill">OUR MISSION & VISION</div>
					<h1 className="text-[1.75rem] sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171717] dark:text-[#f4f4f5]">
						Empowering Indian Businesses to Scale Digitally
					</h1>
					<p className="text-base text-[#60646c] dark:text-zinc-400">
						BizBuddy was founded with a single mission: to provide small
						businesses, local retail, restaurants, and professionals with
						world-class digital marketing, custom websites, and accounting
						services at affordable monthly rates.
					</p>
				</div>
			</section>

			{/* Stats */}
			<section className="max-w-[1280px] mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
					<div className="card-surface p-6 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl">
						<div className="text-3xl sm:text-4xl font-bold font-mono text-black dark:text-[#f4f4f5]">
							250+
						</div>
						<div className="text-xs text-[#60646c] dark:text-zinc-400 font-mono mt-1 uppercase">
							Active Business Clients
						</div>
					</div>

					<div className="card-surface p-6 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl">
						<div className="text-3xl sm:text-4xl font-bold font-mono text-black dark:text-[#f4f4f5]">
							1,200+
						</div>
						<div className="text-xs text-[#60646c] dark:text-zinc-400 font-mono mt-1 uppercase">
							Reels & Posts Created
						</div>
					</div>

					<div className="card-surface p-6 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl">
						<div className="text-3xl sm:text-4xl font-bold font-mono text-black dark:text-[#f4f4f5]">
							99.4%
						</div>
						<div className="text-xs text-[#60646c] dark:text-zinc-400 font-mono mt-1 uppercase">
							On-Time Tax Filing
						</div>
					</div>

					<div className="card-surface p-6 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl">
						<div className="text-3xl sm:text-4xl font-bold font-mono text-black dark:text-[#f4f4f5]">
							4.9/5
						</div>
						<div className="text-xs text-[#60646c] dark:text-zinc-400 font-mono mt-1 uppercase">
							Average Client Rating
						</div>
					</div>
				</div>
			</section>

			{/* Core Values */}
			<section className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
				<div className="text-center max-w-2xl mx-auto space-y-3">
					<h2 className="text-3xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
						Our Core Operating Principles
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="card-surface p-6 space-y-3 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl">
						<div className="w-10 h-10 rounded-md bg-[#f0f0f3] dark:bg-[#27272a] text-[#171717] dark:text-[#f4f4f5] flex items-center justify-center font-bold">
							1
						</div>
						<h4 className="font-semibold text-lg text-[#171717] dark:text-[#f4f4f5]">
							Quiet Confidence
						</h4>
						<p className="text-xs text-[#60646c] dark:text-zinc-400 leading-relaxed">
							We focus on measurable revenue metrics, real lead volume, and tax
							compliance rather than vanity figures.
						</p>
					</div>

					<div className="card-surface p-6 space-y-3 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl">
						<div className="w-10 h-10 rounded-md bg-[#f0f0f3] dark:bg-[#27272a] text-[#171717] dark:text-[#f4f4f5] flex items-center justify-center font-bold">
							2
						</div>
						<h4 className="font-semibold text-lg text-[#171717] dark:text-[#f4f4f5]">
							Zero Friction
						</h4>
						<p className="text-xs text-[#60646c] dark:text-zinc-400 leading-relaxed">
							Direct WhatsApp support, automated reminders, and clear monthly
							reports eliminate administrative headaches.
						</p>
					</div>

					<div className="card-surface p-6 space-y-3 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl">
						<div className="w-10 h-10 rounded-md bg-[#f0f0f3] dark:bg-[#27272a] text-[#171717] dark:text-[#f4f4f5] flex items-center justify-center font-bold">
							3
						</div>
						<h4 className="font-semibold text-lg text-[#171717] dark:text-[#f4f4f5]">
							CA Verified Accuracy
						</h4>
						<p className="text-xs text-[#60646c] dark:text-zinc-400 leading-relaxed">
							Every tax return, EPF filing, and balance sheet is thoroughly
							reviewed by certified financial professionals.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
