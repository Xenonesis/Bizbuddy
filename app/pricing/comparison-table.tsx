import { Check, X } from "lucide-react";

interface FeatureRow {
	name: string;
	basic: string | boolean;
	super: string | boolean;
	premium: string | boolean;
}

interface ComparisonTableProps {
	features: FeatureRow[];
}

export default function ComparisonTable({ features }: ComparisonTableProps) {
	return (
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
						{features.map((row) => (
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
	);
}
