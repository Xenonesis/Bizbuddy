"use client";

import { Check, ArrowRight } from "lucide-react";
import { SOCIAL_MEDIA_PLANS } from "../../../lib/data";
import { useModals } from "../../../components/LayoutWrapper";

interface Props {
	onOpenLeadModal?: (serviceName?: string, price?: string) => void;
}

export default function SocialMediaPage({ onOpenLeadModal }: Props) {
	const modalCtx = useModals();

	const triggerLead = (planName: string, price: string) => {
		(onOpenLeadModal ?? modalCtx.onOpenLeadModal)(
			`Social Media - ${planName}`,
			price,
		);
	};

	return (
		<div className="space-y-12 md:space-y-16 pb-16 md:pb-20">
			{/* Sub-hero */}
			<section className="hero-sky-wash pt-12 sm:pt-16 pb-10 sm:pb-14 border-b border-[#dcdee0] dark:border-[#27272a]">
				<div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center space-y-4">
					<div className="badge-pill">MONTHLY SUBSCRIPTION PLANS</div>
					<h1 className="text-[1.75rem] sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171717] dark:text-[#f4f4f5]">
						Social Media Management & Viral Reels Editing
					</h1>
					<p className="text-base text-[#60646c] dark:text-zinc-400">
						Turn your Instagram & Facebook profiles into lead-generating
						machines. High-quality posts, custom reels, active DM replies, and
						targeted Meta ads.
					</p>
				</div>
			</section>

			{/* Pricing Cards */}
			<section className="max-w-[1280px] mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{SOCIAL_MEDIA_PLANS.map((plan) => (
						<div
							key={plan.id}
							className={`p-6 sm:p-8 rounded-xl border flex flex-col justify-between transition-all relative ${
								plan.popular
									? "card-dark border-black shadow-xl scale-[1.02]"
									: "card-surface bg-white dark:bg-[#14161b] border-[#dcdee0] dark:border-[#27272a]"
							}`}
						>
							{plan.badge && (
								<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0d74ce] text-white text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full">
									{plan.badge}
								</div>
							)}

							<div className="space-y-6">
								<div>
									<h3
										className={`text-xl font-semibold ${plan.popular ? "text-white" : "text-[#171717] dark:text-[#f4f4f5]"}`}
									>
										{plan.name}
									</h3>
									<div className="mt-3 flex items-baseline gap-1 font-mono">
										<span
											className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-[#171717] dark:text-[#f4f4f5]"}`}
										>
											{plan.price}
										</span>
										<span
											className={`text-xs ${plan.popular ? "text-zinc-400" : "text-[#60646c] dark:text-zinc-400"}`}
										>
											{plan.period}
										</span>
									</div>
								</div>

								<div className="border-t border-[#dcdee0]/20 pt-4 space-y-3">
									<div
										className={`text-xs font-mono uppercase tracking-wider ${plan.popular ? "text-zinc-400" : "text-[#60646c] dark:text-zinc-400"}`}
									>
										Included Deliverables:
									</div>
									<ul className="space-y-2.5 text-sm">
										{plan.features.map((feat) => (
											<li key={feat} className="flex items-start gap-2.5">
												<Check
													className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? "text-emerald-400" : "text-emerald-600"}`}
												/>
												<span
													className={
														plan.popular
															? "text-zinc-200"
															: "text-[#171717] dark:text-[#f4f4f5]"
													}
												>
													{feat}
												</span>
											</li>
										))}
									</ul>
								</div>
							</div>

							<div className="pt-8 space-y-2">
								<button
									onClick={() => triggerLead(plan.name, plan.price)}
									className={`w-full py-3 px-4 rounded-md font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
										plan.popular
											? "bg-white dark:bg-[#f4f4f5] text-black hover:bg-zinc-200 dark:hover:bg-white"
											: "btn-primary"
									}`}
								>
									{plan.ctaText}
									<ArrowRight className="w-4 h-4" />
								</button>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Feature Breakdown List */}
			<section className="max-w-[1280px] mx-auto px-4 sm:px-6 bg-[#fafafa] dark:bg-[#0c0d10] border border-[#dcdee0] dark:border-[#27272a] rounded-2xl p-8 sm:p-12">
				<div className="max-w-2xl mx-auto text-center space-y-3 mb-8">
					<h3 className="text-2xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
						What happens after you subscribe?
					</h3>
					<p className="text-sm text-[#60646c] dark:text-zinc-400">
						We assign a dedicated social media content team to your business
						within 2 hours of sign-up.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
					<div className="space-y-2">
						<div className="w-10 h-10 rounded-full bg-[#cfe7ff] dark:bg-[#002f5e] text-[#0d74ce] dark:text-[#38bdf8] font-mono font-bold flex items-center justify-center mx-auto">
							1
						</div>
						<h4 className="font-semibold text-base text-[#171717] dark:text-[#f4f4f5]">
							Content Calendar Approval
						</h4>
						<p className="text-xs text-[#60646c] dark:text-zinc-400">
							We write captions, design graphics, and edit reels for your review
							7 days in advance.
						</p>
					</div>

					<div className="space-y-2">
						<div className="w-10 h-10 rounded-full bg-[#cfe7ff] dark:bg-[#002f5e] text-[#0d74ce] dark:text-[#38bdf8] font-mono font-bold flex items-center justify-center mx-auto">
							2
						</div>
						<h4 className="font-semibold text-base text-[#171717] dark:text-[#f4f4f5]">
							Automated Posting & Reels
						</h4>
						<p className="text-xs text-[#60646c] dark:text-zinc-400">
							We schedule posts, upload high-energy reels, manage story
							highlights, and run ads.
						</p>
					</div>

					<div className="space-y-2">
						<div className="w-10 h-10 rounded-full bg-[#cfe7ff] dark:bg-[#002f5e] text-[#0d74ce] dark:text-[#38bdf8] font-mono font-bold flex items-center justify-center mx-auto">
							3
						</div>
						<h4 className="font-semibold text-base text-[#171717] dark:text-[#f4f4f5]">
							Engagement & Monthly Report
						</h4>
						<p className="text-xs text-[#60646c] dark:text-zinc-400">
							We actively reply to DMs, comments, and deliver a full growth
							breakdown every 30 days.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
