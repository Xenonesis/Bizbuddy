"use client";

import { useState } from "react";
import { submitLead } from "../../lib/supabase";
import ContactHero from "./contact-hero";
import InquiryForm from "./inquiry-form";
import ContactInfoCard from "./contact-info-card";
import WhatsAppCtaCard from "./whatsapp-cta-card";

export default function ContactPage() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [service, setService] = useState("Social Media Management");
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!name || !phone) return;

		setIsSubmitting(true);
		await submitLead({ name, phone, email, service, message });
		setIsSubmitting(false);
		setIsSubmitted(true);
	};

	const handleWhatsApp = () => {
		const text = encodeURIComponent(
			`Hi Bizbuddy Consulting!\nI submitted an inquiry for *${service}*.\nName: ${name || "Client"}\nPhone: ${phone}`,
		);
		window.open(`https://wa.me/917838472802?text=${text}`, "_blank");
	};

	return (
		<div className="space-y-12 md:space-y-16 pb-16 md:pb-20">
			<ContactHero />

			<section className="max-w-[1280px] mx-auto px-4 sm:px-6">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
					<InquiryForm
						name={name}
						phone={phone}
						email={email}
						service={service}
						message={message}
						isSubmitting={isSubmitting}
						isSubmitted={isSubmitted}
						onNameChange={setName}
						onPhoneChange={setPhone}
						onEmailChange={setEmail}
						onServiceChange={setService}
						onMessageChange={setMessage}
						onSubmit={handleSubmit}
						onWhatsApp={handleWhatsApp}
					/>
					<div className="space-y-8">
						<ContactInfoCard />
						<WhatsAppCtaCard />
					</div>
				</div>
			</section>
		</div>
	);
}
