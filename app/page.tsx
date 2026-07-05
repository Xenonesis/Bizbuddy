"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  TrendingUp,
  FileText,
  Code2,
  Video,
  LayoutGrid,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users,
  Percent,
  BarChart3,
  Star,
  MessageSquare,
  Sparkles,
  Award,
  Globe
} from "lucide-react";

import { DeviceMockupHero } from "../components/DeviceMockupHero";
import { QuoteCalculator } from "../components/QuoteCalculator";
import { FaqAccordion } from "../components/FaqAccordion";
import { PORTFOLIO_ITEMS, TESTIMONIALS, SOCIAL_MEDIA_PLANS } from "../lib/data";

interface PageProps {
  onOpenConsultation?: () => void;
  onOpenLeadModal?: (serviceName?: string, price?: string) => void;
}

export default function Home({ onOpenConsultation, onOpenLeadModal }: PageProps) {
  const [portfolioCategory, setPortfolioCategory] = useState<string>("All");

  const filteredPortfolio = PORTFOLIO_ITEMS.filter(
    (item) => portfolioCategory === "All" || item.category === portfolioCategory
  );

  const triggerConsultation = () => {
    if (onOpenConsultation) onOpenConsultation();
  };

  const triggerLead = (svc?: string, prc?: string) => {
    if (onOpenLeadModal) onOpenLeadModal(svc, prc);
  };

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION (Device Mockup + Sky Wash) */}
      <DeviceMockupHero
        onOpenConsultation={triggerConsultation}
        onOpenLeadModal={triggerLead}
      />

      {/* 2. TRUST LOGO WALL (Expo-Style Marquee) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="text-center mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#60646c]">
            TRUSTED IN PRODUCTION BY 250+ STARTUPS, RESTAURANTS, CLINICS & RETAIL BRANDS
          </span>
        </div>
        <div className="relative w-full overflow-hidden mask-x py-2">
          <div className="animate-marquee flex items-center gap-6">
            {[
              "Dr. Apex Dental",
              "UrbanBites Cafe",
              "FitPulse Gym",
              "Zenith Real Estate",
              "Nova Tech Solutions",
              "Aura Salon & Spa",
              "Sharma Retail",
              "Bloom Botanicals",
              "Dr. Apex Dental",
              "UrbanBites Cafe",
              "FitPulse Gym",
              "Zenith Real Estate",
              "Nova Tech Solutions",
              "Aura Salon & Spa",
              "Sharma Retail",
              "Bloom Botanicals"
            ].map((brand, i) => (
              <div
                key={`${brand}-${i}`}
                className="ecosystem-tile flex items-center justify-center px-5 py-2.5 rounded-lg border border-[#dcdee0] bg-white text-[#171717] font-semibold text-xs tracking-tight shadow-xs hover:border-[#171717] transition-all shrink-0 font-mono"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW (5 Core Categories) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="badge-pill">OUR CORE SERVICES</div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717]">
            Everything your business needs to operate & scale online.
          </h2>
          <p className="text-[#60646c] text-base">
            Eliminate the hassle of hiring multiple agencies. We deliver design, marketing, web engineering, and tax compliance under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Social Media */}
          <div className="card-surface p-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#f0f0f3] text-[#171717] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#171717]">
                Social Media Management
              </h3>
              <p className="text-sm text-[#60646c] leading-relaxed">
                High-converting Instagram & Facebook posts, viral reels editing, daily stories, comment replies, and Meta ads management.
              </p>
              <div className="pt-2 text-xs font-mono text-[#0d74ce] font-semibold">
                Starting ₹1,499/month
              </div>
            </div>
            <div className="pt-6">
              <Link
                href="/services/social-media"
                className="btn-secondary w-full justify-center text-xs"
              >
                View Social Media Plans
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: Accounts & Tax */}
          <div className="card-surface p-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#f0f0f3] text-[#171717] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#171717]">
                Accounts & Tax Solutions
              </h3>
              <p className="text-sm text-[#60646c] leading-relaxed">
                PF return filing, quarterly TDS, Income Tax Return (ITR), cloud bookkeeping, company incorporation, and GST returns.
              </p>
              <div className="pt-2 text-xs font-mono text-[#0d74ce] font-semibold">
                Starting ₹999/month · CA Verified
              </div>
            </div>
            <div className="pt-6">
              <Link
                href="/services/accounts"
                className="btn-secondary w-full justify-center text-xs"
              >
                Explore Tax Services
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Card 3: Website Development */}
          <div className="card-surface p-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#f0f0f3] text-[#171717] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#171717]">
                Website Development
              </h3>
              <p className="text-sm text-[#60646c] leading-relaxed">
                Responsive landing pages, multi-page business websites, e-commerce storefronts, and specialized QR ordering systems.
              </p>
              <div className="pt-2 text-xs font-mono text-[#0d74ce] font-semibold">
                Starting ₹3,999 (Domain & SSL Included)
              </div>
            </div>
            <div className="pt-6">
              <Link
                href="/services/website-development"
                className="btn-secondary w-full justify-center text-xs"
              >
                Build My Website
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* 2-Column Row for Editing & Other Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-surface p-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#f0f0f3] text-[#171717] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#171717]">
                Reels & Graphic Editing Services
              </h3>
              <p className="text-sm text-[#60646c] leading-relaxed">
                Viral subtitles for Reels & Shorts, YouTube thumbnails, banner design, poster design, and AI-generated avatar videos.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/services/editing"
                className="btn-secondary w-full sm:w-auto text-xs"
              >
                View Editing Packs
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          <div className="card-surface p-6 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#f0f0f3] text-[#171717] flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <LayoutGrid className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#171717]">
                Other Business Support Services
              </h3>
              <p className="text-sm text-[#60646c] leading-relaxed">
                Visiting card printing, basic accounting support, customer helpline integration, and growth consulting.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/services/other"
                className="btn-secondary w-full sm:w-auto text-xs"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (4-Column Feature Cards) */}
      <section className="bg-[#fafafa] border-y border-[#dcdee0] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="badge-pill">WHY BIZBUDDY</div>
            <h2 className="text-3xl font-semibold text-[#171717]">
              Built for affordable, measurable business growth.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#dcdee0] space-y-3">
              <div className="w-10 h-10 rounded-md bg-[#cfe7ff] text-[#0d74ce] flex items-center justify-center font-bold">
                <Percent className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-lg text-[#171717]">Affordable Plans</h4>
              <p className="text-xs text-[#60646c] leading-relaxed">
                Transparent pricing starting from ₹1,499/mo with zero hidden setup fees or contracts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#dcdee0] space-y-3">
              <div className="w-10 h-10 rounded-md bg-[#cfe7ff] text-[#0d74ce] flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-lg text-[#171717]">Fast Delivery</h4>
              <p className="text-xs text-[#60646c] leading-relaxed">
                3-day website turnarounds and 24-hour reel edits so your business never waits.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#dcdee0] space-y-3">
              <div className="w-10 h-10 rounded-md bg-[#cfe7ff] text-[#0d74ce] flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-lg text-[#171717]">Dedicated Team</h4>
              <p className="text-xs text-[#60646c] leading-relaxed">
                Personal account manager assigned to your brand for direct WhatsApp support.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#dcdee0] space-y-3">
              <div className="w-10 h-10 rounded-md bg-[#cfe7ff] text-[#0d74ce] flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-lg text-[#171717]">Monthly Reports</h4>
              <p className="text-xs text-[#60646c] leading-relaxed">
                Clear performance metrics, reach analytics, and tax filing receipts delivered every 30 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 4-STEP PROCESS WORKFLOW */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="badge-pill">SIMPLE WORKFLOW</div>
          <h2 className="text-3xl font-semibold text-[#171717]">
            How we partner with your business in 4 simple steps.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Consultation", desc: "Share your business goals, target audience, or tax requirements in a free 15-min call." },
            { step: "02", title: "Custom Strategy", desc: "We create your content calendar, website wireframe, or tax compliance schedule." },
            { step: "03", title: "Execution", desc: "Our team designs posts, edits reels, writes code, and files tax returns seamlessly." },
            { step: "04", title: "Reporting & Scaling", desc: "Review performance reports, track new client leads, and expand monthly budgets." }
          ].map((item) => (
            <div key={item.step} className="card-surface p-6 space-y-3 relative">
              <div className="w-8 h-8 rounded-md bg-[#f0f0f3] text-[#171717] font-mono font-bold text-sm flex items-center justify-center">
                {item.step}
              </div>
              <h4 className="text-lg font-semibold text-[#171717]">{item.title}</h4>
              <p className="text-xs text-[#60646c] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. INTERACTIVE AI QUOTE CALCULATOR */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <QuoteCalculator onOpenLeadModal={triggerLead} />
      </section>

      {/* 7. PORTFOLIO SHOWCASE GRID */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#f0f0f3] pb-6">
          <div>
            <div className="badge-pill mb-2">PORTFOLIO & RESULTS</div>
            <h2 className="text-3xl font-semibold text-[#171717]">
              Real client work & verified growth metrics.
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto">
            {["All", "Social Media", "Websites", "Branding", "Accounts"].map((cat) => (
              <button
                key={cat}
                onClick={() => setPortfolioCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                  portfolioCategory === cat
                    ? "bg-black text-white"
                    : "bg-white text-[#60646c] border border-[#dcdee0] hover:bg-[#f0f0f3]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => (
            <div key={item.id} className="card-surface overflow-hidden group">
              <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-xs text-white text-xs font-mono font-semibold px-2.5 py-1 rounded-md">
                  {item.impactMetric}
                </div>
              </div>
              <div className="p-5 space-y-2">
                <div className="text-xs font-mono text-[#0d74ce]">{item.client}</div>
                <h4 className="font-semibold text-base text-[#171717]">{item.title}</h4>
                <p className="text-xs text-[#60646c] leading-relaxed">{item.description}</p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-[#f0f0f3] text-[#171717] px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="bg-[#fafafa] border-y border-[#dcdee0] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="badge-pill">CLIENT TESTIMONIALS</div>
            <h2 className="text-3xl font-semibold text-[#171717]">
              Loved by business owners across India.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-xl border border-[#dcdee0] space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-[#60646c] leading-relaxed italic">
                    &quot;{item.content}&quot;
                  </p>
                </div>
                <div className="pt-3 border-t border-[#f0f0f3] flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-xs font-semibold text-[#171717]">{item.name}</div>
                    <div className="text-[10px] text-[#60646c]">{item.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION (20+ Items) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="badge-pill">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="text-3xl font-semibold text-[#171717]">
            Got questions? We have answers.
          </h2>
          <p className="text-sm text-[#60646c]">
            Explore answers to 20+ common inquiries about social media, taxes, web dev, and pricing.
          </p>
        </div>

        <FaqAccordion />
      </section>

      {/* 10. PRE-FOOTER CTA BAND */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="bg-[#171717] text-white rounded-2xl p-10 sm:p-16 text-center space-y-6 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Ready to scale your business with BizBuddy?
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Join 250+ growing businesses. Start your monthly social media management, website development, or tax return filing today.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => triggerLead("Homepage Pre-Footer CTA")}
                className="btn-primary bg-white text-black hover:bg-zinc-200 text-base font-semibold px-8 py-3 h-12 w-full sm:w-auto"
              >
                Get Started Now
              </button>
              <button
                onClick={triggerConsultation}
                className="btn-secondary bg-transparent text-white border-zinc-700 hover:bg-zinc-800 text-base font-medium px-8 py-3 h-12 w-full sm:w-auto"
              >
                Schedule Free Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
