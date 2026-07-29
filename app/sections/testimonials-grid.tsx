"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

import { SpotlightCard } from "../../components/SpotlightCard";
import { TESTIMONIALS } from "../../lib/data";

export default function TestimonialsGrid() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="bg-[#fafafa] dark:bg-[#0c0d10] border-y border-[#dcdee0] dark:border-[#27272a] py-12 md:py-16"
		>
			<div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-10">
				<div className="text-center max-w-2xl mx-auto space-y-3">
					<div className="badge-pill">CLIENT TESTIMONIALS</div>
					<h2 className="text-2xl sm:text-3xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
						Loved by business owners across India.
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{TESTIMONIALS.map((item) => (
						<SpotlightCard
							key={item.id}
							className="p-6 space-y-4 flex flex-col justify-between"
						>
							<div className="space-y-3">
								<div className="flex items-center gap-1 text-amber-500">
									{[...Array(item.rating)].map((_, i) => (
										<Star key={i} className="w-4 h-4 fill-amber-500" />
									))}
								</div>
								<p className="text-xs text-[#60646c] dark:text-zinc-400 leading-relaxed italic">
									&quot;{item.content}&quot;
								</p>
							</div>
							<div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-3">
								<img
									src={item.avatar}
									alt={item.name}
									className="w-10 h-10 rounded-full object-cover"
								/>
								<div>
									<div className="text-xs font-semibold text-[#171717] dark:text-[#f4f4f5]">
										{item.name}
									</div>
									<div className="text-[10px] text-[#60646c] dark:text-zinc-400">
										{item.company}
									</div>
								</div>
							</div>
						</SpotlightCard>
					))}
				</div>
			</div>
		</motion.section>
	);
}
