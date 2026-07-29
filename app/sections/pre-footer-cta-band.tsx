"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import Grainient from "../../components/Grainient";
import { ShimmerButton } from "../../components/ShimmerButton";

interface PreFooterCtaBandProps {
	onOpenConsultation: () => void;
	onOpenLeadModal: (serviceName?: string) => void;
}

export default function PreFooterCtaBand({ onOpenConsultation, onOpenLeadModal }: PreFooterCtaBandProps) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="max-w-[1280px] mx-auto px-4 sm:px-6"
		>
			<div className="bg-[#171717] text-white rounded-2xl p-6 sm:p-10 lg:p-16 text-center space-y-6 relative overflow-hidden">
				<div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
					<Grainient
						color1="#38bdf8"
						color2="#5227FF"
						color3="#0f172a"
						timeSpeed={0.25}
						warpStrength={1.2}
						warpFrequency={5.0}
						warpSpeed={2.0}
						warpAmplitude={50.0}
						grainAmount={0.1}
						grainScale={2.0}
						grainAnimated={true}
						contrast={1.4}
						zoom={0.95}
					/>
				</div>
				<div className="relative z-10 max-w-2xl mx-auto space-y-4">
					<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
						Ready to scale your business with Bizbuddy Consulting?
					</h2>
					<p className="text-sm sm:text-base text-zinc-300 drop-shadow-sm font-medium">
						Join 250+ growing businesses. Start your monthly social media
						management, website development, or tax return filing today.
					</p>
					<div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
						<ShimmerButton
							onClick={() => onOpenLeadModal("Homepage Pre-Footer CTA")}
							variant="primary"
							className="w-full sm:w-auto px-8 py-3.5 h-12 text-sm font-semibold"
						>
							Get Started Now
							<ArrowRight className="w-4 h-4 ml-1.5" />
						</ShimmerButton>

						<ShimmerButton
							onClick={onOpenConsultation}
							variant="secondary"
							className="w-full sm:w-auto px-8 py-3.5 h-12 text-sm font-medium"
						>
							Schedule Free Call
						</ShimmerButton>
					</div>
				</div>
			</div>
		</motion.section>
	);
}
