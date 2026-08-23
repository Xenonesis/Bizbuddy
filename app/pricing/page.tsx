"use client";

import PricingHero from "./pricing-hero";
import PricingPlans from "./pricing-plans";
import ComparisonTable from "./comparison-table";
import ConsultationCta from "./consultation-cta";
import { useModals } from "../../components/LayoutWrapper";

const comparisonFeatures = [
	{ name: "Monthly Social Posts", basic: "10 Posts", super: "15 Posts", premium: "20 Posts" },
	{ name: "Custom HD Reels", basic: "3 Reels", super: "5 Reels", premium: "7 Reels" },
	{ name: "Custom Post Design", basic: true, super: false, premium: true },
	{ name: "Sale & Discount Posts", basic: false, super: true, premium: true },
	{ name: "Festival Posts Free", basic: true, super: true, premium: true },
	{ name: "Caption on Every Post", basic: true, super: true, premium: true },
	{ name: "Story Support", basic: "5 Uploads", super: "Unlimited", premium: "Unlimited" },
	{ name: "DM & Comment Replies", basic: false, super: false, premium: true },
	{ name: "Ad Running Support", basic: false, super: true, premium: true },
	{ name: "Highlight Management", basic: false, super: false, premium: true },
	{ name: "Premium Highlight Covers", basic: false, super: false, premium: true },
	{ name: "Collaboration Support", basic: false, super: false, premium: true },
	{ name: "Fun Story Activities", basic: false, super: false, premium: true },
	{ name: "30 Days Profile Management", basic: true, super: true, premium: true },
	{ name: "Complete Profile Setup", basic: true, super: true, premium: false },
	{ name: "Includes 2 Social Media Handles", basic: true, super: true, premium: false },
];

interface Props {
	onOpenConsultation?: () => void;
	onOpenLeadModal?: (serviceName?: string, price?: string) => void;
}

export default function PricingPage({ onOpenConsultation, onOpenLeadModal }: Props) {
	const modalCtx = useModals();

	const handleSelectPlan = (name: string, price: string) => {
		(onOpenLeadModal ?? modalCtx.onOpenLeadModal)(name, price);
	};

	const handleOpenConsultation = onOpenConsultation ?? modalCtx.onOpenConsultation;

	const whatsappHref =
		"https://wa.me/917838472802?text=Hi%20Bizbuddy%20Consulting,%20I%20want%20a%20custom%20pricing%20quote!";

	return (
		<div className="space-y-12 md:space-y-16 pb-16 md:pb-20">
			<PricingHero />
			<PricingPlans onSelectPlan={handleSelectPlan} />
			<ComparisonTable features={comparisonFeatures} />
			<ConsultationCta
				onOpenConsultation={handleOpenConsultation}
				whatsappHref={whatsappHref}
			/>
		</div>
	);
}
