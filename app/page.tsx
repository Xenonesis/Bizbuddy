"use client";

import { useState } from "react";
import { DeviceMockupHero } from "../components/DeviceMockupHero";
import { QuoteCalculator } from "../components/QuoteCalculator";
import { useModals } from "../components/LayoutWrapper";
import { PORTFOLIO_ITEMS, TESTIMONIALS } from "../lib/data";

import TrustLogoMarquee from "./sections/trust-logo-marquee";
import ServicesOverview from "./sections/services-overview";
import WhyChooseUs from "./sections/why-choose-us";
import HowWePartner from "./sections/how-we-partner";
import PortfolioShowcase from "./sections/portfolio-showcase";
import TestimonialsGrid from "./sections/testimonials-grid";
import FaqAccordionSection from "./sections/faq-accordion-section";
import PreFooterCtaBand from "./sections/pre-footer-cta-band";

interface PageProps {
	onOpenConsultation?: () => void;
	onOpenLeadModal?: (serviceName?: string, price?: string) => void;
}

export default function Home({ onOpenConsultation, onOpenLeadModal }: PageProps) {
	const modalCtx = useModals();
	const [portfolioCategory, setPortfolioCategory] = useState<string>("All");

	const filteredPortfolio = PORTFOLIO_ITEMS.filter(
		(item) =>
			portfolioCategory === "All" || item.category === portfolioCategory,
	);

	const triggerConsultation = () => {
		(onOpenConsultation ?? modalCtx.onOpenConsultation)();
	};

	const triggerLead = (svc?: string, prc?: string) => {
		(onOpenLeadModal ?? modalCtx.onOpenLeadModal)(svc, prc);
	};

	return (
		<div className="space-y-16 md:space-y-24 pb-20">
			{/* 1. HERO SECTION (Device Mockup + Sky Wash) */}
			<DeviceMockupHero
				onOpenConsultation={triggerConsultation}
				onOpenLeadModal={triggerLead}
			/>

			{/* 2. TRUST LOGO WALL */}
			<TrustLogoMarquee />

			{/* 3. SERVICES OVERVIEW */}
			<ServicesOverview />

			{/* 4. WHY CHOOSE US */}
			<WhyChooseUs />

			{/* 5. HOW WE PARTNER */}
			<HowWePartner />

			{/* 6. INTERACTIVE AI QUOTE CALCULATOR */}
			<section className="max-w-[1280px] mx-auto px-4 sm:px-6">
				<QuoteCalculator onOpenLeadModal={triggerLead} />
			</section>

			{/* 7. PORTFOLIO SHOWCASE */}
			<PortfolioShowcase
				portfolioCategory={portfolioCategory}
				setPortfolioCategory={setPortfolioCategory}
				filteredPortfolio={filteredPortfolio}
			/>

			{/* 8. TESTIMONIALS */}
			<TestimonialsGrid />

			{/* 9. FAQ ACCORDION */}
			<FaqAccordionSection />

			{/* 10. PRE-FOOTER CTA BAND */}
			<PreFooterCtaBand
				onOpenConsultation={triggerConsultation}
				onOpenLeadModal={triggerLead}
			/>
		</div>
	);
}
