"use client";

import { Check, X, MessageSquare, ArrowRight } from "lucide-react";
import { SOCIAL_MEDIA_PLANS } from "../../lib/data";

interface Props {
	onOpenConsultation?: () => void;
	onOpenLeadModal?: (serviceName?: string, price?: string) => void;
}

export default function PricingPage({
	onOpenConsultation,
	onOpenLeadModal,
}: Props) {
	const triggerConsultation = () => {
		if (onOpenConsultation) onOpenConsultation();
	};

	const triggerLead = (planName: string, price: string) => {
		if (onOpenLeadModal) onOpenLeadModal(planName, price);
	};

	const comparisonFeatures = [
		{
			name: "Monthly Social Posts",
			basic: "10 Posts",
			super: "15 Posts",
			premium: "20 Posts",
		},
		{
			name: "Custom HD Reels",
			basic: "2 Reels",
			super: "5 Reels",
			premium: "7 Reels",
		},
		{
			name: "Free Campaign Ads Run",
			basic: "1 Ad",
			super: "2 Ads",
			premium: "3 Ads",
		},
		{ name: "Daily Story Uploads", basic: false, super: true, premium: true },
		{
			name: "DM & Comment Active Replies",
			basic: false,
			super: true,
			premium: true,
		},
		{
			name: "Visiting Card Digital Design",
			basic: false,
			super: true,
			premium: true,
		},
		{
			name: "Custom Highlight Covers",
			basic: false,
			super: false,
			premium: true,
		},
		{
			name: "Influencer Collaboration Support",
			basic: false,
			super: false,
			premium: true,
		},
		{
			name: "Dedicated Account Manager",
			basic: true,
			super: true,
			premium: true,
		},
		{ name: "Monthly Growth Report", basic: true, super: true, premium: true },
	];

	return (
		<div className="space-y-12 md:space-y-16 pb-16 md:pb-20">
			{/* Sub-hero */}
			<section className="hero-sky-wash pt-12 sm:pt-16 pb-10 sm:pb-14 border-b border-[#dcdee0] dark:border-[#27272a]">
				<div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center space-y-4">
					<div className="badge-pill">TRANSPARENT MONTHLY PRICING</div>
					<h1 className="text-[1.75rem] sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171717] dark:text-[#f4f4f5]">
						Simple plans for every stage of your business.
					</h1>
					<p className="text-base text-[#60646c] dark:text-zinc-400">
						No long-term commitments. Pause or cancel anytime with 7 days
						notice.
					</p>
				</div>
			</section>

			{/* Monthly Plans */}
			<section className="max-w-[1280px] mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{SOCIAL_MEDIA_PLANS.map((plan) => (
						<div
							key={plan.id}
							className={`p-6 sm:p-8 rounded-xl border flex flex-col justify-between transition-all ${
								plan.popular
									? "card-dark border-black shadow-xl"
									: "card-surface bg-white dark:bg-[#14161b] border-[#dcdee0] dark:border-[#27272a]"
							}`}
						>
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
											/month
										</span>
									</div>
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

							<div className="pt-8 space-y-2">
								<button
									onClick={() => triggerLead(plan.name, plan.price)}
									className={`w-full py-3 px-4 rounded-md font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
										plan.popular
											? "bg-white dark:bg-[#f4f4f5] text-black hover:bg-zinc-200 dark:hover:bg-white"
											: "btn-primary"
									}`}
								>
									Buy Plan Now
									<ArrowRight className="w-4 h-4" />
								</button>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Comparison Table */}
			<section className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-6">
				<div className="text-center max-w-xl mx-auto">
					<h2 className="text-2xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
						Feature Comparison Matrix
					</h2>
				</div>

				<div className="card-surface bg-white dark:bg-[#14161b] overflow-x-auto rounded-xl border border-[#dcdee0] dark:border-[#27272a]">
					<table className="w-full text-left border-collapse min-w-[600px]">
						<thead>
							<tr className="bg-[#fafafa] dark:bg-[#0c0d10] border-b border-[#dcdee0] dark:border-[#27272a] text-xs font-mono uppercase text-[#60646c] dark:text-zinc-400">
								<th className="p-4">Feature / Deliverable</th>
								<th className="p-4">Basic (₹1,499)</th>
								<th className="p-4 bg-zinc-100 dark:bg-zinc-800 font-bold text-black dark:text-white">
									Super (₹1,999)
								</th>
								<th className="p-4">Premium (₹2,499)</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-[#f0f0f3] dark:divide-[#27272a] text-sm">
							{comparisonFeatures.map((row) => (
								<tr
									key={row.name}
									className="hover:bg-[#fafafa] dark:hover:bg-[#1e2026]"
								>
									<td className="p-4 font-medium text-[#171717] dark:text-[#f4f4f5]">
										{row.name}
									</td>
									<td className="p-4 text-[#60646c] dark:text-zinc-400">
										{typeof row.basic === "boolean" ? (
											row.basic ? (
												<Check className="w-4 h-4 text-emerald-600" />
											) : (
												<X className="w-4 h-4 text-zinc-300" />
											)
										) : (
											row.basic
										)}
									</td>
									<td className="p-4 bg-zinc-50 dark:bg-zinc-900/50 font-semibold text-[#171717] dark:text-[#f4f4f5]">
										{typeof row.super === "boolean" ? (
											row.super ? (
												<Check className="w-4 h-4 text-emerald-600" />
											) : (
												<X className="w-4 h-4 text-zinc-300" />
											)
										) : (
											row.super
										)}
									</td>
									<td className="p-4 text-[#171717] dark:text-[#f4f4f5]">
										{typeof row.premium === "boolean" ? (
											row.premium ? (
												<Check className="w-4 h-4 text-emerald-600" />
											) : (
												<X className="w-4 h-4 text-zinc-300" />
											)
										) : (
											row.premium
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>

			{/* WhatsApp & Consultation Action */}
			<section className="max-w-[1280px] mx-auto px-4 sm:px-6 bg-[#fafafa] dark:bg-[#0c0d10] border border-[#dcdee0] dark:border-[#27272a] rounded-2xl p-8 text-center space-y-4">
				<h3 className="text-xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
					Need a custom enterprise package or multi-store plan?
				</h3>
				<p className="text-sm text-[#60646c] dark:text-zinc-400 max-w-xl mx-auto">
					We offer custom retainers for multi-location franchises, schools,
					hospitals, and real estate agencies.
				</p>
				<div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
					<button onClick={triggerConsultation} className="btn-secondary">
						Book Free Consultation
					</button>
					<a
						href="https://wa.me/919876543210?text=Hi%20BizBuddy,%20I%20want%20a%20custom%20pricing%20quote!"
						target="_blank"
						rel="noopener noreferrer"
						className="btn-primary bg-[#25D366] hover:bg-[#20bd5a] border-none"
					>
						<MessageSquare className="w-4 h-4 fill-white" />
						Chat on WhatsApp
					</a>
				</div>
			</section>
		</div>
	);
}
