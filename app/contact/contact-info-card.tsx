import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfoCard() {
	return (
		<div className="card-surface p-8 space-y-6 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl">
			<h3 className="text-xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
				Office & Contact Details
			</h3>

			<div className="space-y-4 text-sm text-[#171717] dark:text-[#f4f4f5]">
				<div className="flex items-center gap-3">
					<div className="w-10 h-10 rounded-lg bg-[#f0f0f3] dark:bg-[#27272a] flex items-center justify-center text-[#0d74ce] dark:text-[#38bdf8]">
						<Phone className="w-5 h-5" />
					</div>
					<div>
						<div className="text-xs text-[#60646c] dark:text-zinc-400">
							Phone & WhatsApp Helpline
						</div>
						<div className="font-semibold">+91 120-4725137</div>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<div className="w-10 h-10 rounded-lg bg-[#f0f0f3] dark:bg-[#27272a] flex items-center justify-center text-[#0d74ce] dark:text-[#38bdf8]">
						<Mail className="w-5 h-5" />
					</div>
					<div>
						<div className="text-xs text-[#60646c] dark:text-zinc-400">
							Email Support
						</div>
						<div className="font-semibold">Bizbuddyconsulting@gmail.com</div>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<div className="w-10 h-10 rounded-lg bg-[#f0f0f3] dark:bg-[#27272a] flex items-center justify-center text-[#0d74ce] dark:text-[#38bdf8]">
						<MapPin className="w-5 h-5" />
					</div>
					<div>
						<div className="text-xs text-[#60646c] dark:text-zinc-400">
							Corporate Head Office
						</div>
						<div className="font-semibold">
							A-26, NOIDA SECTOR 3 , NEARBY NOIDA SECTOR 16 METRO STATION
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
