"use client";

import { motion } from "motion/react";
import { FaqAccordion } from "../../components/FaqAccordion";

export default function FaqAccordionSection() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8"
		>
			<div className="text-center max-w-2xl mx-auto space-y-3">
				<div className="badge-pill">FREQUENTLY ASKED QUESTIONS</div>
				<h2 className="text-2xl sm:text-3xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
					Got questions? We have answers.
				</h2>
				<p className="text-sm text-[#60646c] dark:text-zinc-400">
					Explore answers to 20+ common inquiries about social media, taxes,
					web dev, and pricing.
				</p>
			</div>

			{/* FAQPage JSON-LD Structured Data */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: [
							{
								"@type": "Question",
								name: "What is Bizbuddy Consulting and how does it help my business grow?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Bizbuddy Consulting is an all-in-one digital business platform handling everything from social media marketing and websites to tax return filing, GST compliance, and accounting.",
								},
							},
							{
								"@type": "Question",
								name: "How do I get started with a monthly Social Media plan?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Choose a plan (Basic ₹1,499, Super ₹1,999, or Premium ₹2,499) and our team will contact you within 2 hours to collect your brand details and preferences.",
								},
							},
							{
								"@type": "Question",
								name: "How long does website development take starting at ₹3,999?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "A single landing page takes 3 business days. Multi-page business websites take 5-7 days, and full E-commerce web stores take 7-10 days.",
								},
							},
							{
								"@type": "Question",
								name: "What documents are required for GST Registration?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "You will need your PAN Card, Aadhaar Card, Passport Photo, Proof of Business Address (Rent Agreement or Electricity Bill), and a Cancelled Cheque.",
								},
							},
							{
								"@type": "Question",
								name: "What payment methods do you accept?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "We accept UPI (Google Pay, PhonePe, Paytm), NetBanking, Credit/Debit Cards via Razorpay and Stripe.",
								},
							},
							{
								"@type": "Question",
								name: "Is there a money-back guarantee or cancellation policy?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Yes, we offer hassle-free monthly subscriptions with no long-term lock-in contracts. You can pause or cancel at any time with 7 days notice.",
								},
							},
							{
								"@type": "Question",
								name: "Does Bizbuddy Consulting file monthly GST returns and EPF filings?",
								acceptedAnswer: {
									"@type": "Answer",
									text: "Yes, we handle monthly GSTR-1, GSTR-3B filings, quarterly TDS, and monthly Employees' Provident Fund (EPF) returns.",
								},
							},
						],
					}),
				}}
			/>
			<FaqAccordion />
		</motion.section>
	);
}
