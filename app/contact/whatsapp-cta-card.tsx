import { MessageSquare } from "lucide-react";

export default function WhatsAppCtaCard() {
	return (
		<div className="bg-[#25D366]/10 border border-[#25D366]/30 p-6 rounded-xl space-y-3">
			<h4 className="font-semibold text-base text-[#171717] dark:text-[#f4f4f5] flex items-center gap-2">
				<MessageSquare className="w-5 h-5 text-[#25D366]" />
				Prefer Instant WhatsApp Chat?
			</h4>
			<p className="text-xs text-[#60646c] dark:text-zinc-400">
				Skip waiting for email callbacks. Click below to start an instant live
				chat with an account representative.
			</p>
			<a
				href="https://wa.me/917838472802?text=Hi%20Bizbuddy%20Consulting,%20I%20have%20a%20business%20inquiry!"
				target="_blank"
				rel="noopener noreferrer"
				className="btn-primary bg-[#25D366] hover:bg-[#20bd5a] border-none inline-flex text-xs px-4 py-2"
			>
				Chat on WhatsApp Now
			</a>
		</div>
	);
}
