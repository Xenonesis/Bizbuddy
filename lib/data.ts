export interface ServicePlan {
	id: string;
	name: string;
	price: string;
	numericPrice: number;
	period: string;
	badge?: string;
	popular?: boolean;
	features: string[];
	ctaText: string;
}

export interface AccountService {
	id: string;
	title: string;
	shortDesc: string;
	fullDesc: string;
	pricing: string;
	timeline: string;
	documents: string[];
	category: "taxation" | "registration" | "bookkeeping" | "corporate";
}

export interface WebDevPackage {
	id: string;
	name: string;
	startingPrice: string;
	numericPrice: number;
	idealFor: string;
	features: string[];
	deliverables: string;
	turnaround: string;
}

export interface EditingService {
	id: string;
	title: string;
	price: string;
	description: string;
	deliverables: string[];
	tags: string[];
}

export interface FaqItem {
	id: string;
	question: string;
	answer: string;
	category:
		| "General"
		| "Social Media"
		| "Accounts"
		| "Websites"
		| "Editing"
		| "Pricing";
}

export interface PortfolioItem {
	id: string;
	title: string;
	category: "Websites" | "Social Media" | "Branding" | "Accounts";
	client: string;
	impactMetric: string;
	image: string;
	description: string;
	tags: string[];
}

export interface Testimonial {
	id: string;
	name: string;
	role: string;
	company: string;
	avatar: string;
	content: string;
	rating: number;
	serviceUsed: string;
	videoUrl?: string;
}

export const SOCIAL_MEDIA_PLANS: ServicePlan[] = [
	{
		id: "basic",
		name: "Basic Plan",
		price: "₹1,499",
		numericPrice: 1499,
		period: "/month",
		features: [
			"10 High-Quality Posts",
			"2 Custom Edited Reels",
			"1 Free Campaign Ad Run",
			"Sale & Discount Promo Posts",
			"Engaging Captions & Hashtags",
			"30 Days Full Profile Management",
			"Instagram & Facebook Integration",
			"Free Initial Profile Optimization",
		],
		ctaText: "Choose Basic",
	},
	{
		id: "super",
		name: "Super Plan",
		price: "₹1,999",
		numericPrice: 1999,
		period: "/month",
		popular: true,
		badge: "MOST POPULAR",
		features: [
			"15 High-Quality Posts",
			"5 HD Custom Reels",
			"2 Free Campaign Ads Run",
			"Daily Story Uploads & Templates",
			"DM & Comment Active Replies",
			"Complete Ad Setup & Guidance",
			"Free Visiting Card Digital Design",
			"Advanced Profile Modification",
		],
		ctaText: "Choose Super",
	},
	{
		id: "premium",
		name: "Premium Plan",
		price: "₹2,499",
		numericPrice: 2499,
		period: "/month",
		features: [
			"20 Premium Posts",
			"7 Cinematic Reels",
			"3 Free Ads Setup & Optimization",
			"Daily Story & Highlight Management",
			"Custom Highlight Cover Designs",
			"Influencer Collaboration Support",
			"Fun Audience Story Activities",
			"Priority DM & Comment Replies",
			"Free Premium Business Card Design",
		],
		ctaText: "Choose Premium",
	},
];

export const ACCOUNT_SERVICES: AccountService[] = [
	{
		id: "pf-return",
		title: "PF Return Filing",
		shortDesc:
			"Timely and error-free EPF monthly return filings for businesses with employees.",
		fullDesc:
			"Complete monthly Employees' Provident Fund (EPF) returns compliance, challan generation, and audit support to ensure zero penalty for your organization.",
		pricing: "Starting ₹999/month",
		timeline: "2-3 Business Days",
		category: "taxation",
		documents: [
			"Monthly Payroll Sheet",
			"EPF Credential Access",
			"Form 5 & 10 Details",
			"Bank Payment Proofs",
		],
	},
	{
		id: "tds-return",
		title: "TDS Return Filing",
		shortDesc:
			"Quarterly Tax Deducted at Source filing for salaries and commercial contracts.",
		fullDesc:
			"Accurate quarterly TDS computation, Form 24Q, 26Q preparation, and 16/16A certificate generation compliant with IT Department rules.",
		pricing: "Starting ₹1,499/quarter",
		timeline: "3-5 Business Days",
		category: "taxation",
		documents: [
			"PAN Details of Deductees",
			"TDS Payment Challans (ITNS 281)",
			"Salary/Vendor Payment Register",
		],
	},
	{
		id: "income-tax",
		title: "Income Tax Return (ITR)",
		shortDesc:
			"Expert filing for individuals, freelancers, LLPs, and Private Limited companies.",
		fullDesc:
			"Maximize tax savings with professional ITR-1 to ITR-7 filings, financial statement compilation, and notice management.",
		pricing: "Starting ₹1,199/year",
		timeline: "1-2 Business Days",
		category: "taxation",
		documents: [
			"Form 16 / 16A",
			"Bank Statements (12 months)",
			"Investment Proofs 80C/80D",
			"Form 26AS & AIS/TIS",
		],
	},
	{
		id: "bookkeeping",
		title: "Professional Bookkeeping",
		shortDesc:
			"End-to-end cloud bookkeeping in Tally, Zoho Books, or QuickBooks.",
		fullDesc:
			"Daily/weekly transaction categorization, ledger maintenance, bank reconciliation, and monthly Profit & Loss statements.",
		pricing: "Starting ₹2,499/month",
		timeline: "Ongoing Monthly",
		category: "bookkeeping",
		documents: [
			"Sales & Purchase Invoices",
			"Bank Statements",
			"Expense Receipts",
			"Petty Cash Vouchers",
		],
	},
	{
		id: "roc-filing",
		title: "ROC Annual Filing",
		shortDesc:
			"Annual compliance for Private Limited Companies and LLPs with MCA.",
		fullDesc:
			"Preparation and filing of Form AOC-4, MGT-7/7A, DIR-3 KYC, and Board resolutions to maintain clean corporate standing.",
		pricing: "Starting ₹4,999/year",
		timeline: "5-7 Business Days",
		category: "corporate",
		documents: [
			"Audited Financial Statements",
			"Director KYC Details",
			"Digital Signature Certificate (DSC)",
			"Board Meeting Minutes",
		],
	},
	{
		id: "company-reg",
		title: "Company Registration",
		shortDesc:
			"Incorporate Private Limited, OPC, or Partnership firm effortlessly.",
		fullDesc:
			"Complete end-to-end incorporation including Name Approval (RUN/SPICe+), MOA/AOA, PAN, TAN, and Certificate of Incorporation.",
		pricing: "Starting ₹6,999 complete",
		timeline: "7-10 Business Days",
		category: "registration",
		documents: [
			"Director PAN & Aadhaar",
			"Passport Photo",
			"Utility Bill of Registered Office",
			"NOC from Property Owner",
		],
	},
	{
		id: "gst-services",
		title: "GST Registration & Returns",
		shortDesc:
			"GSTIN registration, GSTR-1, GSTR-3B monthly filings & Input Tax Credit matching.",
		fullDesc:
			"Hassle-free GST compliance including new registration, monthly/quarterly filings, E-Way bills, and reconciliation.",
		pricing: "Starting ₹999/month",
		timeline: "1-3 Business Days",
		category: "taxation",
		documents: [
			"PAN Card",
			"Aadhaar Card",
			"Rent Agreement / Ownership Proof",
			"Cancelled Cheque",
		],
	},
];

export const WEBSITE_PACKAGES: WebDevPackage[] = [
	{
		id: "landing-page",
		name: "High-Converting Landing Page",
		startingPrice: "₹3,999",
		numericPrice: 3999,
		idealFor: "Product Launches, Ad Campaigns & Lead Generation",
		features: [
			"1 Custom High-Converting Page",
			"Mobile Responsive & Fast Load",
			"WhatsApp & Lead Form Integration",
			"SEO Meta Setup & Analytics",
			"1 Year Free SSL & Hosting Support",
		],
		deliverables: "Design + Code + Deployment + WhatsApp Lead Bot",
		turnaround: "3 Business Days",
	},
	{
		id: "business-website",
		name: "Corporate Business Website",
		startingPrice: "₹7,999",
		numericPrice: 7999,
		idealFor: "SMEs, Local Businesses, Agencies & Consultants",
		features: [
			"5-7 Custom Styled Pages",
			"Dynamic Services & Portfolio Showcase",
			"Blog / News Section Integration",
			"Google Maps & Contact Forms",
			"Speed Optimized & Schema Markup",
		],
		deliverables: "Complete Multi-page Website + CMS Admin Panel",
		turnaround: "5-7 Business Days",
	},
	{
		id: "ecommerce",
		name: "E-Commerce Web Store",
		startingPrice: "₹14,999",
		numericPrice: 14999,
		idealFor: "Retail Brands, D2C Apparel, Restaurants & Stores",
		features: [
			"Unlimited Products Setup",
			"Payment Gateway Integration (Razorpay/Stripe)",
			"Shopping Cart & Order Management",
			"Customer Dashboard & Order Tracking",
			"Inventory & Coupon Management",
		],
		deliverables: "Full Storefront + Admin Dashboard + Payment Integration",
		turnaround: "7-10 Business Days",
	},
	{
		id: "specialized",
		name: "Custom Industry Solutions",
		startingPrice: "₹9,999",
		numericPrice: 9999,
		idealFor: "Schools, Hospitals, Restaurants & Real Estate",
		features: [
			"Online Appointment / Booking Engine",
			"Property / Menu / Course Catalogue",
			"WhatsApp Instant Booking Integration",
			"Client Testimonials & Gallery",
			"Role-Based Admin Access",
		],
		deliverables: "Industry Tailored Web Portal + Booking System",
		turnaround: "7 Business Days",
	},
];

export const EDITING_SERVICES: EditingService[] = [
	{
		id: "reels-shorts",
		title: "Viral Reels & Shorts Editing",
		price: "Starting ₹299/reel",
		description:
			"Engaging captions, kinetic text effects, sound design, and viral pacing for Instagram, YouTube & TikTok.",
		deliverables: [
			"1080x1920 HD Export",
			"Dynamic Auto Subtitles",
			"Sound FX & Soundtracks",
			"Hook Color Grading",
		],
		tags: ["Reels", "Shorts", "Subtitles", "Viral"],
	},
	{
		id: "post-design",
		title: "Social Media Banner & Post Design",
		price: "Starting ₹149/post",
		description:
			"Custom visual graphics, offer banners, product ads, and promotional carousels designed to convert.",
		deliverables: [
			"High-Res PNG/JPG",
			"Canva / PSD Source Files",
			"Multiple Aspect Ratios",
		],
		tags: ["Banners", "Carousels", "Ad Creatives"],
	},
	{
		id: "thumbnails",
		title: "High CTR YouTube Thumbnails",
		price: "Starting ₹199/thumbnail",
		description:
			"Eye-catching facial cutouts, high-contrast typography, and curious framing that boosts click-through rate.",
		deliverables: [
			"Ultra HD 4K Render",
			"2 Color Variants",
			"CTR Optimized Typography",
		],
		tags: ["YouTube", "CTR", "Thumbnails"],
	},
	{
		id: "ai-videos",
		title: "AI Video & Voiceover Generation",
		price: "Starting ₹499/video",
		description:
			"Cutting-edge AI avatar narration, script-to-video generation, and realistic multi-lingual voiceovers.",
		deliverables: [
			"AI Voiceover in Any Language",
			"HD Avatar Video",
			"Custom Background Music",
		],
		tags: ["AI Video", "Avatars", "Voiceovers"],
	},
];

export const FAQ_LIST: FaqItem[] = [
	{
		id: "faq-1",
		question: "What is BizBuddy and how does it help my business grow?",
		category: "General",
		answer:
			"BizBuddy is an all-in-one digital business platform. We handle everything your business needs to scale — from digital marketing, social media reels, and high-converting websites to tax return filing, GST compliance, and accounting.",
	},
	{
		id: "faq-2",
		question: "How do I get started with a monthly Social Media plan?",
		category: "Social Media",
		answer:
			"Simply choose a plan (Basic ₹1499, Super ₹1999, or Premium ₹2499) on our website or click the WhatsApp CTA. Our team will contact you within 2 hours to collect your brand logo, business details, and preferences.",
	},
	{
		id: "faq-3",
		question: "Are ad budgets included in the Social Media plans?",
		category: "Social Media",
		answer:
			"The plan includes full ad strategy, creative graphic design, setup, targeting, and management. Actual ad spend paid to Meta/Google is paid directly by the client, though free ad setup support is included.",
	},
	{
		id: "faq-4",
		question: "How long does website development take starting at ₹3,999?",
		category: "Websites",
		answer:
			"A single landing page takes 3 business days. Multi-page business websites take 5-7 days, and full E-commerce web stores take 7-10 days.",
	},
	{
		id: "faq-5",
		question: "Is domain name and web hosting included in the website price?",
		category: "Websites",
		answer:
			"We provide 1 year of free SSL certificate and cloud deployment support. Domain and primary server hosting costs can either be integrated or registered directly under your business name.",
	},
	{
		id: "faq-6",
		question: "What documents are required for GST Registration?",
		category: "Accounts",
		answer:
			"You will need: Owner's PAN Card, Aadhaar Card, Passport Photo, Proof of Business Address (Rent Agreement / Electricity Bill), and a Cancelled Cheque.",
	},
	{
		id: "faq-7",
		question:
			"Can BizBuddy file monthly GST returns and EPF filings for our staff?",
		category: "Accounts",
		answer:
			"Yes! We handle regular monthly GSTR-1, GSTR-3B filings, quarterly TDS, and monthly Employees' Provident Fund (EPF) returns with zero hassle.",
	},
	{
		id: "faq-8",
		question: "Can I get a custom bundled quote for both Web Dev & Accounting?",
		category: "Pricing",
		answer:
			"Absolutely! Use our interactive AI Quote Calculator on the homepage to bundle services and get a customized discounted package rate.",
	},
	{
		id: "faq-9",
		question: "What editing tools do you use for Reels and Post editing?",
		category: "Editing",
		answer:
			"We use professional suites including Adobe Premiere Pro, After Effects, Photoshop, Illustrator, and cutting-edge AI generation tools.",
	},
	{
		id: "faq-10",
		question: "Do you provide revisions on designs and video edits?",
		category: "Editing",
		answer:
			"Yes, we offer up to 3 rounds of free revisions on all creative design posts, video edits, and website mockups until you are 100% satisfied.",
	},
	{
		id: "faq-11",
		question: "How does the WhatsApp inquiry system work?",
		category: "General",
		answer:
			"When you click any WhatsApp CTA or submit a quote, our system pre-fills a formatted message detailing your chosen plan so you can connect with an expert agent immediately.",
	},
	{
		id: "faq-12",
		question: "What payment methods do you accept?",
		category: "Pricing",
		answer:
			"We accept all major payment methods including UPI (Google Pay, PhonePe, Paytm), NetBanking, Credit/Debit Cards via Razorpay and Stripe.",
	},
	{
		id: "faq-13",
		question: "Can you manage social media accounts in regional languages?",
		category: "Social Media",
		answer:
			"Yes, we create posts, captions, and reels in English, Hindi, and regional Indian languages tailored to your target audience.",
	},
	{
		id: "faq-14",
		question: "Do I get monthly reports for my social media performance?",
		category: "Social Media",
		answer:
			"Yes! All plans include a monthly performance breakdown showing reach, engagement rates, follower growth, and campaign analytics.",
	},
	{
		id: "faq-15",
		question: "What is included in the ROC Annual Compliance package?",
		category: "Accounts",
		answer:
			"It includes filing of MCA forms AOC-4 (Financials), MGT-7/7A (Annual Return), Director KYC (DIR-3 KYC), and drafting of Annual Board Resolutions.",
	},
	{
		id: "faq-16",
		question: "Will my website be mobile-friendly and fast?",
		category: "Websites",
		answer:
			"100% yes! All our websites are mobile-first, responsive across all screen sizes, and optimized to achieve 90+ scores on Google PageSpeed.",
	},
	{
		id: "faq-17",
		question: "Can I edit text on my website after it is built?",
		category: "Websites",
		answer:
			"Yes, we build all sites with easy-to-use CMS admin panels or provide straightforward documentation so you can update text and images effortlessly.",
	},
	{
		id: "faq-18",
		question:
			"What is your turnaround time for Income Tax Return (ITR) filing?",
		category: "Accounts",
		answer:
			"Once all required documents (Form 16/26AS/Bank Statements) are uploaded, our chartered accountants file your ITR within 24 to 48 hours.",
	},
	{
		id: "faq-19",
		question: "Can you create AI-generated video avatars for my brand?",
		category: "Editing",
		answer:
			"Yes! Our AI Editing service creates realistic digital avatars with natural voiceover scripts ideal for product demos and explainer videos.",
	},
	{
		id: "faq-20",
		question: "Is there a money-back guarantee or cancellation policy?",
		category: "Pricing",
		answer:
			"We offer hassle-free monthly subscriptions with no long-term lock-in contracts. You can pause or cancel your subscription at any time with 7 days notice.",
	},
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
	{
		id: "port-1",
		title: "Dr. Apex Dental Clinic - Digital Growth",
		category: "Social Media",
		client: "Dr. Apex Healthcare",
		impactMetric: "+340% Patient Appointments",
		image: "/images/port-dental.jpg",
		description:
			"Complete Instagram profile revamp, weekly educational reels, and localized Meta ad campaign driving qualified local patient leads.",
		tags: ["Reels", "Meta Ads", "Healthcare", "Lead Gen"],
	},
	{
		id: "port-2",
		title: "UrbanBites Gourmet Restaurant",
		category: "Websites",
		client: "UrbanBites Hospitality",
		impactMetric: "₹2.4L Monthly Online Orders",
		image: "/images/port-restaurant.jpg",
		description:
			"High-converting digital menu & QR ordering website built with instant WhatsApp delivery notifications.",
		tags: ["Next.js", "QR Ordering", "Restaurant", "WhatsApp Bot"],
	},
	{
		id: "port-3",
		title: "Zenith Real Estate Group",
		category: "Branding",
		client: "Zenith Builders",
		impactMetric: "120+ Property Inquiries",
		image: "/images/port-realestate.jpg",
		description:
			"Luxury property showcase landing page, brochure design, and video walkthrough editing for premium residential apartments.",
		tags: ["Real Estate", "Landing Page", "Video Editing"],
	},
	{
		id: "port-4",
		title: "FitPulse Gym & Fitness Studio",
		category: "Social Media",
		client: "FitPulse Gym",
		impactMetric: "+150 New Memberships",
		image: "/images/port-gym.jpg",
		description:
			"High-energy workout reels, transformations showcase, and monthly membership sales funnels.",
		tags: ["Fitness", "Reels Editing", "Member Growth"],
	},
	{
		id: "port-5",
		title: "Nova Tech Solutions - GST & ROC Setup",
		category: "Accounts",
		client: "Nova Tech Pvt Ltd",
		impactMetric: "100% Tax Compliant & ₹1.8L Tax Saved",
		image: "/images/port-accounts.jpg",
		description:
			"Complete Private Limited company incorporation, GST registration, quarterly TDS filings, and annual ROC compliance.",
		tags: ["Company Incorporation", "GST Filing", "Tax Audit"],
	},
	{
		id: "port-6",
		title: "Aura Salon & Spa Branding",
		category: "Branding",
		client: "Aura Beauty Spa",
		impactMetric: "+220% Weekend Bookings",
		image: "/images/port-salon.jpg",
		description:
			"Elegant visual brand identity, visiting cards, promotional banners, and social media aesthetic grid.",
		tags: ["Branding", "Salon", "Social Grid", "Print Design"],
	},
];

export const TESTIMONIALS: Testimonial[] = [
	{
		id: "test-1",
		name: "Rajesh Sharma",
		role: "Founder & CEO",
		company: "Sharma Traders & Retail",
		avatar: "/images/avatar-1.jpg",
		content:
			"BizBuddy transformed our local store's online presence! Their ₹1999 Super Social Media plan got us over 50 new walk-in customers in the very first month. Highly recommended!",
		rating: 5,
		serviceUsed: "Social Media Management (Super Plan)",
	},
	{
		id: "test-2",
		name: "Ananya Roy",
		role: "Co-Founder",
		company: "Bloom Botanicals D2C",
		avatar: "/images/avatar-2.jpg",
		content:
			"We hired BizBuddy for website development and GST registration. They built our e-commerce store in just 7 days! Sales have been flowing smoothly ever since.",
		rating: 5,
		serviceUsed: "E-Commerce Web Dev & GST Setup",
	},
	{
		id: "test-3",
		name: "Dr. Vikram Sethi",
		role: "Lead Surgeon",
		company: "Sethi Dental Care",
		avatar: "/images/avatar-3.jpg",
		content:
			"Their video reels editing and Google Map SEO service doubled our clinic consultation appointments. The team is super responsive and professional.",
		rating: 5,
		serviceUsed: "Reel Editing & Local Marketing",
	},
	{
		id: "test-4",
		name: "Pooja Verma",
		role: "Managing Director",
		company: "Verma Logistics LLP",
		avatar: "/images/avatar-4.jpg",
		content:
			"Filing PF returns and quarterly TDS was always a headache until we onboarded BizBuddy. They handle all accounting compliance seamlessly so we can focus on our business.",
		rating: 5,
		serviceUsed: "Accounts & PF Return Filing",
	},
];
