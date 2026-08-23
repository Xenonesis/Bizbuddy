import { Check, ArrowRight, Crown } from "lucide-react";

interface Plan {
	id: string;
	name: string;
	price: string;
	period?: string;
	popular?: boolean;
	badge?: string;
	features: string[];
}

interface PricingPlanCardProps {
	plan: Plan;
	onSelectPlan: (name: string, price: string) => void;
}

export default function PricingPlanCard({ plan, onSelectPlan }: PricingPlanCardProps) {
	return (
		<div
			className={`relative p-6 sm:p-8 rounded-xl flex flex-col justify-between transition-all ${
				plan.popular
					? "card-dark border-2 border-emerald-400/70 shadow-[0_0_50px_rgba(16,185,129,0.25)] md:scale-[1.05] md:-translate-y-3 z-10"
					: "card-surface bg-white dark:bg-[#14161b] border-[#dcdee0] dark:border-[#27272a]"
			}`}
		>
			{plan.popular && plan.badge && (
				<div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
					<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-black shadow-lg">
						<Crown className="w-3.5 h-3.5 fill-black" />
						{plan.badge}
					</span>
				</div>
			)}
			<div className="space-y-6">
				<div>
					<div className="flex items-center gap-2">
						<h3
							className={`text-xl font-semibold ${plan.popular ? "text-white" : "text-[#171717] dark:text-[#f4f4f5]"}`}
						>
							{plan.name}
						</h3>
						{plan.popular && (
							<Crown className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
						)}
					</div>
					<div className="mt-3 font-mono">
						<span
							className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-[#171717] dark:text-[#f4f4f5]"}`}
						>
							{plan.price}
						</span>
						{plan.period && (
							<span
								className={`block mt-1 text-[11px] ${plan.popular ? "text-zinc-400" : "text-[#60646c] dark:text-zinc-400"}`}
							>
								{plan.period}
							</span>
						)}
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
					onClick={() => onSelectPlan(plan.name, plan.price)}
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
	);
}
