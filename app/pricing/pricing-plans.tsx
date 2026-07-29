import { ArrowRight } from "lucide-react";
import PricingPlanCard from "./pricing-plan-card";
import { SOCIAL_MEDIA_PLANS } from "../../lib/data";

interface PricingPlansProps {
	onSelectPlan: (name: string, price: string) => void;
}

export default function PricingPlans({ onSelectPlan }: PricingPlansProps) {
	return (
		<section className="max-w-[1280px] mx-auto px-4 sm:px-6">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{SOCIAL_MEDIA_PLANS.map((plan) => (
					<PricingPlanCard key={plan.id} plan={plan} onSelectPlan={onSelectPlan} />
				))}
			</div>
		</section>
	);
}
