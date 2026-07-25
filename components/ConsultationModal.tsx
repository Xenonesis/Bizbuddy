"use client";

import React, { useState } from "react";
import {
	X,
	Calendar,
	Clock,
	Building2,
	User,
	Phone,
	CheckCircle2,
	MessageSquare,
	ArrowRight,
} from "lucide-react";
import { submitLead } from "../lib/supabase";

interface ConsultationModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
	isOpen,
	onClose,
}) => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		businessType: "Small Business",
		date: new Date().toISOString().split("T")[0],
		timeSlot: "11:00 AM - 12:00 PM",
		notes: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	if (!isOpen) return null;

	const businessCategories = [
		"Small Business",
		"Restaurant / Cafe",
		"Salon / Spa",
		"Gym / Fitness",
		"Doctor / Clinic",
		"School / Coaching",
		"Real Estate Agency",
		"Retail Store",
		"Startup / Freelancer",
		"Other",
	];

	const timeSlots = [
		"10:00 AM - 11:00 AM",
		"11:00 AM - 12:00 PM",
		"02:00 PM - 03:00 PM",
		"04:00 PM - 05:00 PM",
		"06:00 PM - 07:00 PM",
	];

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formData.name || !formData.phone) return;

		setIsSubmitting(true);
		await submitLead({
			name: formData.name,
			phone: formData.phone,
			service: `Consultation Booking: ${formData.businessType}`,
			message: `Date: ${formData.date}, Slot: ${formData.timeSlot}. Notes: ${formData.notes}`,
		});

		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	const openWhatsApp = () => {
		const text = encodeURIComponent(
			`Hi BizBuddy! I booked a consultation session.\nName: ${formData.name}\nPhone: ${formData.phone}\nBusiness: ${formData.businessType}\nDate: ${formData.date}\nTime: ${formData.timeSlot}`,
		);
		window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
		onClose();
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
			<div className="bg-white dark:bg-[#14161b] rounded-xl border border-[#dcdee0] dark:border-[#27272a] w-full max-w-lg shadow-2xl overflow-hidden relative">
				{/* Header */}
				<div className="px-6 py-4 border-b border-[#f0f0f3] dark:border-[#27272a] flex items-center justify-between bg-[#fafafa] dark:bg-[#0c0d10]">
					<div className="flex items-center gap-2">
						<div className="w-2.5 h-2.5 rounded-full bg-[#0d74ce]" />
						<h3 className="font-semibold text-base text-[#171717] dark:text-[#f4f4f5]">
							Book 1-on-1 Strategy Consultation
						</h3>
					</div>
					<button
						onClick={onClose}
						className="p-1 text-[#60646c] dark:text-zinc-400 hover:text-black dark:hover:text-white rounded-md hover:bg-[#f0f0f3] dark:hover:bg-[#27272a]"
					>
						<X className="w-5 h-5" />
					</button>
				</div>

				{/* Body */}
				<div className="p-6">
					{isSubmitted ? (
						<div className="text-center py-6 space-y-4">
							<div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
								<CheckCircle2 className="w-7 h-7" />
							</div>
							<h4 className="text-xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
								Consultation Reserved!
							</h4>
							<p className="text-sm text-[#60646c]">
								Thank you{" "}
								<span className="font-medium text-black">{formData.name}</span>!
								Our senior strategy advisor will call you at{" "}
								<span className="font-medium text-black">{formData.phone}</span>{" "}
								on {formData.date} during the selected time slot.
							</p>
							<div className="pt-2 flex flex-col gap-2">
								<button
									onClick={openWhatsApp}
									className="w-full bg-[#25D366] text-white py-2.5 rounded-md font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#20bd5a]"
								>
									<MessageSquare className="w-4 h-4 fill-white" />
									Confirm Instant Session on WhatsApp
								</button>
								<button onClick={onClose} className="btn-secondary w-full">
									Done
								</button>
							</div>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
									Full Name *
								</label>
								<div className="relative">
									<User className="w-4 h-4 absolute left-3 top-3 text-[#999999]" />
									<input
										type="text"
										required
										placeholder="Enter your name"
										value={formData.name}
										onChange={(e) =>
											setFormData({ ...formData, name: e.target.value })
										}
										className="text-input w-full pl-9"
									/>
								</div>
							</div>

							<div>
								<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
									WhatsApp Phone Number *
								</label>
								<div className="relative">
									<Phone className="w-4 h-4 absolute left-3 top-3 text-[#999999]" />
									<input
										type="tel"
										required
										placeholder="e.g. 9876543210"
										value={formData.phone}
										onChange={(e) =>
											setFormData({ ...formData, phone: e.target.value })
										}
										className="text-input w-full pl-9"
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
								<div>
									<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
										Business Category
									</label>
									<select
										value={formData.businessType}
										onChange={(e) =>
											setFormData({ ...formData, businessType: e.target.value })
										}
										className="text-input w-full bg-white dark:bg-[#14161b]"
									>
										{businessCategories.map((cat) => (
											<option key={cat} value={cat}>
												{cat}
											</option>
										))}
									</select>
								</div>

								<div>
									<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
										Preferred Date
									</label>
									<input
										type="date"
										value={formData.date}
										onChange={(e) =>
											setFormData({ ...formData, date: e.target.value })
										}
										className="text-input w-full bg-white dark:bg-[#14161b]"
									/>
								</div>
							</div>

							<div>
								<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
									Select Time Slot
								</label>
								<select
									value={formData.timeSlot}
									onChange={(e) =>
										setFormData({ ...formData, timeSlot: e.target.value })
									}
									className="text-input w-full bg-white dark:bg-[#14161b]"
								>
									{timeSlots.map((slot) => (
										<option key={slot} value={slot}>
											{slot}
										</option>
									))}
								</select>
							</div>

							<div>
								<label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
									Specific Requirements / Notes (Optional)
								</label>
								<textarea
									rows={2}
									placeholder="Tell us what you want to achieve..."
									value={formData.notes}
									onChange={(e) =>
										setFormData({ ...formData, notes: e.target.value })
									}
									className="w-full rounded-md border border-[#dcdee0] dark:border-[#27272a] bg-white dark:bg-[#14161b] text-black dark:text-[#f4f4f5] p-2.5 text-sm outline-none focus:border-black dark:focus:border-white"
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className="btn-primary w-full justify-center mt-2"
							>
								{isSubmitting
									? "Confirming..."
									: "Confirm Free Consultation Session"}
								<ArrowRight className="w-4 h-4 ml-1.5" />
							</button>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};
