import { Check, ArrowRight } from "lucide-react";

interface Plan {
	id: string;
	name: string;
	price: string;
	popular?: boolean;
	features: string[];
}

interface PricingPlanCardProps {
	plan: Plan;
	onSelectPlan: (name: string, price: string) => void;
}

export default function PricingPlanCard({ plan, onSelectPlan }: PricingPlanCardProps) {
	return (
		<div
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
