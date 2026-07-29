"use client";

import { useState } from "react";
import { CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import { submitLead } from "../../lib/supabase";

interface InquiryFormProps {
	name: string;
	phone: string;
	email: string;
	service: string;
	message: string;
	isSubmitting: boolean;
	isSubmitted: boolean;
	onNameChange: (v: string) => void;
	onPhoneChange: (v: string) => void;
	onEmailChange: (v: string) => void;
	onServiceChange: (v: string) => void;
	onMessageChange: (v: string) => void;
	onSubmit: React.FormEventHandler<HTMLFormElement>;
	onWhatsApp: () => void;
}

export default function InquiryForm({
	name,
	phone,
	email,
	service,
	message,
	isSubmitting,
	isSubmitted,
	onNameChange,
	onPhoneChange,
	onEmailChange,
	onServiceChange,
	onMessageChange,
	onSubmit,
	onWhatsApp,
}: InquiryFormProps) {
	return (
		<div className="card-surface p-6 sm:p-8 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl space-y-6">
			<h3 className="text-xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
				Send Us a Message
			</h3>

			{isSubmitted ? (
				<div className="text-center py-8 space-y-4">
					<CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
					<h4 className="text-xl font-semibold dark:text-[#f4f4f5]">
						Message Received!
					</h4>
					<p className="text-sm text-[#60646c] dark:text-zinc-400">
						Thank you{" "}
						<span className="font-semibold text-black dark:text-white">
							{name}
						</span>
						. Our team will call you back at{" "}
						<span className="font-semibold text-black dark:text-white">
							{phone}
						</span>{" "}
						within 2 hours.
					</p>
					<button
						onClick={onWhatsApp}
						className="btn-primary bg-[#25D366] hover:bg-[#20bd5a] border-none w-full justify-center"
					>
						<MessageSquare className="w-4 h-4 fill-white" />
						Connect Instantly on WhatsApp
					</button>
				</div>
			) : (
				<form onSubmit={onSubmit} className="space-y-4">
					<div>
						<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
							Your Name *
						</label>
						<input
							type="text"
							required
							placeholder="Enter your name"
							value={name}
							onChange={(e) => onNameChange(e.target.value)}
							className="text-input w-full"
						/>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<div>
							<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
								WhatsApp Phone *
							</label>
							<input
								type="tel"
								required
								placeholder="e.g. 9876543210"
								value={phone}
								onChange={(e) => onPhoneChange(e.target.value)}
								className="text-input w-full"
							/>
						</div>

						<div>
							<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
								Email Address
							</label>
							<input
								type="email"
								placeholder="you@company.com"
								value={email}
								onChange={(e) => onEmailChange(e.target.value)}
								className="text-input w-full"
							/>
						</div>
					</div>

					<div>
						<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
							Service Required
						</label>
						<select
							value={service}
							onChange={(e) => onServiceChange(e.target.value)}
							className="text-input w-full bg-white dark:bg-[#14161b]"
						>
							<option value="Social Media Management">
								Social Media Management
							</option>
							<option value="Accounts & Tax Filing">
								Accounts & Tax Filing
							</option>
							<option value="Website Development">
								Website Development
							</option>
							<option value="Reel & Video Editing">
								Reel & Video Editing
							</option>
							<option value="Printing & Other Services">
								Printing & Other Services
							</option>
						</select>
					</div>

					<div>
						<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
							Message / Business Details
						</label>
						<textarea
							rows={4}
							placeholder="Tell us about your business..."
							value={message}
							onChange={(e) => onMessageChange(e.target.value)}
							className="w-full rounded-md border border-[#dcdee0] dark:border-[#27272a] bg-white dark:bg-[#14161b] text-black dark:text-[#f4f4f5] p-2.5 text-sm outline-none focus:border-black dark:focus:border-white"
						/>
					</div>

					<button
						type="submit"
						disabled={isSubmitting}
						className="btn-primary w-full justify-center"
					>
						{isSubmitting ? "Sending..." : "Submit Inquiry"}
						<ArrowRight className="w-4 h-4 ml-1.5" />
					</button>
				</form>
			)}
		</div>
	);
}
