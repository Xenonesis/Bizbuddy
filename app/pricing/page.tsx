"use client";

import PricingHero from "./pricing-hero";
import PricingPlans from "./pricing-plans";
import ComparisonTable from "./comparison-table";
import ConsultationCta from "./consultation-cta";

const comparisonFeatures = [
	{ name: "Monthly Social Posts", basic: "10 Posts", super: "15 Posts", premium: "20 Posts" },
	{ name: "Custom HD Reels", basic: "2 Reels", super: "5 Reels", premium: "7 Reels" },
	{ name: "Free Campaign Ads Run", basic: "1 Ad", super: "2 Ads", premium: "3 Ads" },
	{ name: "Daily Story Uploads", basic: false, super: true, premium: true },
	{ name: "DM & Comment Active Replies", basic: false, super: true, premium: true },
	{ name: "Visiting Card Digital Design", basic: false, super: true, premium: true },
	{ name: "Custom Highlight Covers", basic: false, super: false, premium: true },
	{ name: "Influencer Collaboration Support", basic: false, super: false, premium: true },
	{ name: "Dedicated Account Manager", basic: true, super: true, premium: true },
	{ name: "Monthly Growth Report", basic: true, super: true, premium: true },
];

interface Props {
	onOpenConsultation?: () => void;
	onOpenLeadModal?: (serviceName?: string, price?: string) => void;
}

export default function PricingPage({ onOpenConsultation, onOpenLeadModal }: Props) {
	const handleSelectPlan = (name: string, price: string) => {
		onOpenLeadModal?.(name, price);
	};

	const whatsappHref =
		"https://wa.me/917838472802?text=Hi%20Bizbuddy%20Consulting,%20I%20want%20a%20custom%20pricing%20quote!";

	return (
		<div className="space-y-12 md:space-y-16 pb-16 md:pb-20">
			<PricingHero />
			<PricingPlans onSelectPlan={handleSelectPlan} />
			<ComparisonTable features={comparisonFeatures} />
			<ConsultationCta
				onOpenConsultation={onOpenConsultation ?? (() => {})}
				whatsappHref={whatsappHref}
			/>
		</div>
	);
}
