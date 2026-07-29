import { MessageSquare } from "lucide-react";

interface ConsultationCtaProps {
	onOpenConsultation: () => void;
	whatsappHref: string;
}

export default function ConsultationCta({ onOpenConsultation, whatsappHref }: ConsultationCtaProps) {
	return (
		<section className="max-w-[1280px] mx-auto px-4 sm:px-6 bg-[#fafafa] dark:bg-[#0c0d10] border border-[#dcdee0] dark:border-[#27272a] rounded-2xl p-8 text-center space-y-4">
			<h3 className="text-xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
				Need a custom enterprise package or multi-store plan?
			</h3>
			<p className="text-sm text-[#60646c] dark:text-zinc-400 max-w-xl mx-auto">
				We offer custom retainers for multi-location franchises, schools,
				hospitals, and real estate agencies.
			</p>
			<div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
				<button onClick={onOpenConsultation} className="btn-secondary">
					Book Free Consultation
				</button>
				<a
					href={whatsappHref}
					target="_blank"
					rel="noopener noreferrer"
					className="btn-primary bg-[#25D366] hover:bg-[#20bd5a] border-none"
				>
					<MessageSquare className="w-4 h-4 fill-white" />
					Chat on WhatsApp
				</a>
			</div>
		</section>
	);
}
