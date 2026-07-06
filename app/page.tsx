"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
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
import { ExpoBentoCard } from "../components/ExpoBentoCard";
import { QuoteCalculator } from "../components/QuoteCalculator";
import { FaqAccordion } from "../components/FaqAccordion";
import BorderGlow from "../components/BorderGlow";
import LineWaves from "../components/LineWaves";
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
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1280px] mx-auto px-4 sm:px-6 overflow-hidden">
        <div className="text-center mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#60646c] dark:text-zinc-400">
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
                className="ecosystem-tile flex items-center justify-center px-5 py-2.5 rounded-lg border border-[#dcdee0] dark:border-[#27272a] bg-white dark:bg-[#14161b] text-[#171717] dark:text-[#f4f4f5] font-semibold text-xs tracking-tight shadow-xs hover:border-[#171717] dark:hover:border-zinc-500 transition-all shrink-0 font-mono"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. SERVICES OVERVIEW (5 Core Categories) */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="badge-pill">OUR CORE SERVICES</div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#171717] dark:text-[#f4f4f5]">
            Everything your business needs to operate & scale online.
          </h2>
          <p className="text-[#60646c] dark:text-zinc-400 text-base">
            Eliminate the hassle of hiring multiple agencies. We deliver design, marketing, web engineering, and tax compliance under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Massive Card (Dark Inversion) spans 2 columns */}
          <div className="lg:col-span-2">
            <BorderGlow className="h-full w-full" backgroundColor="#171717" borderColor="#262626" borderRadius={12}>
              <ExpoBentoCard
                theme="dark"
                title="Web Development & Systems"
                description="Responsive landing pages, multi-page business websites, e-commerce storefronts, and specialized QR ordering systems with zero-hassle cloud deployment."
                icon={Code2}
                href="/services/website-development"
                className="min-h-[420px] !bg-transparent !border-transparent"
              >
                {/* Expo Style Code Mockup Panel inside the card */}
                <div className="mt-6 border border-[#262626] bg-[#0c0d10] rounded-xl overflow-hidden shadow-2xl flex flex-col w-full opacity-90 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center px-4 py-3 bg-[#121418] border-b border-[#262626] gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#3f3f46]"></div>
                    </div>
                    <div className="text-[11px] font-mono text-[#a1a1aa] ml-2">app/page.tsx</div>
                  </div>
                  <div className="p-5 font-mono text-xs md:text-sm text-[#e4e4e7] overflow-hidden whitespace-pre-wrap leading-relaxed">
                    <span className="text-[#818cf8]">export default function</span> <span className="text-[#38bdf8]">BusinessSite</span>() {"{"}<br/>
                    {"  "}return (<br/>
                    {"    "}&lt;<span className="text-[#38bdf8]">BizBuddy.LandingPage</span><br/>
                    {"      "}theme=<span className="text-[#16a34a]">"premium"</span><br/>
                    {"      "}seoOptimized=<span className="text-[#38bdf8]">{"{true}"}</span><br/>
                    {"      "}mobileResponsive=<span className="text-[#38bdf8]">{"{true}"}</span><br/>
                    {"    "}/&gt;<br/>
                    {"  "});<br/>
                    {"}"}
                  </div>
                </div>
              </ExpoBentoCard>
            </BorderGlow>
          </div>

          {/* Secondary Stack (1 column) */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <BorderGlow className="flex-1 w-full" backgroundColor="var(--surface-card)" borderColor="var(--hairline-strong)" glowBlendMode="var(--glow-blend)" glowColor="210 100 50" borderRadius={12}>
              <ExpoBentoCard
                theme="light"
                title="Social Media Management"
                description="High-converting Instagram & Facebook posts, viral reels editing, and Meta ads."
                icon={TrendingUp}
                href="/services/social-media"
                className="flex-1 !bg-transparent !border-transparent"
              >
                <div className="flex items-center gap-2 mt-4 text-[#0d74ce] dark:text-[#38bdf8] text-sm font-medium group-hover:underline">
                  View Plans <ArrowRight className="w-4 h-4" />
                </div>
              </ExpoBentoCard>
            </BorderGlow>

            <BorderGlow className="flex-1 w-full" backgroundColor="var(--surface-card)" borderColor="var(--hairline-strong)" glowBlendMode="var(--glow-blend)" glowColor="210 100 50" borderRadius={12}>
              <ExpoBentoCard
                theme="light"
                title="Accounts & Tax"
                description="PF returns, TDS, ITR filing, and GST returns handled by verified CAs."
                icon={FileText}
                href="/services/accounts"
                className="flex-1 !bg-transparent !border-transparent"
              >
                <div className="flex items-center gap-2 mt-4 text-[#0d74ce] dark:text-[#38bdf8] text-sm font-medium group-hover:underline">
                  Explore Tax Services <ArrowRight className="w-4 h-4" />
                </div>
              </ExpoBentoCard>
            </BorderGlow>
          </div>
        </div>

        {/* 2-Column Standard Row for Editing & Other Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BorderGlow className="w-full" backgroundColor="var(--surface-card)" borderColor="var(--hairline-strong)" glowBlendMode="var(--glow-blend)" glowColor="210 100 50" borderRadius={12}>
            <ExpoBentoCard
              theme="light"
              title="Reels & Graphic Editing Services"
              description="Viral subtitles for Reels & Shorts, YouTube thumbnails, banner design, and AI-generated avatar videos."
              icon={Video}
              href="/services/editing"
              className="!bg-transparent !border-transparent h-full"
            >
               <div className="flex items-center gap-2 mt-4 text-[#0d74ce] dark:text-[#38bdf8] text-sm font-medium group-hover:underline">
                  View Editing Packs <ArrowRight className="w-4 h-4" />
                </div>
            </ExpoBentoCard>
          </BorderGlow>

          <BorderGlow className="w-full" backgroundColor="var(--surface-card)" borderColor="var(--hairline-strong)" glowBlendMode="var(--glow-blend)" glowColor="210 100 50" borderRadius={12}>
            <ExpoBentoCard
              theme="light"
              title="Other Business Support"
              description="Visiting card printing, basic accounting support, customer helpline integration, and growth consulting."
              icon={LayoutGrid}
              href="/services/other"
              className="!bg-transparent !border-transparent h-full"
            >
               <div className="flex items-center gap-2 mt-4 text-[#0d74ce] dark:text-[#38bdf8] text-sm font-medium group-hover:underline">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
            </ExpoBentoCard>
          </BorderGlow>
        </div>
      </motion.section>

      {/* 4. WHY CHOOSE US (Expo Workflow Layout) */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#fafafa] dark:bg-[#0c0d10] border-y border-[#dcdee0] dark:border-[#27272a] py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text & Features */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="badge-pill border border-[#dcdee0] dark:border-zinc-800">
                  DEVELOP & GROW
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter text-[#171717] dark:text-[#f4f4f5] leading-[1.1]">
                  Built for affordable, measurable business growth.
                </h2>
                <p className="text-base sm:text-lg text-[#60646c] dark:text-zinc-400 max-w-lg leading-relaxed">
                  Transparent pricing starting from ₹1,499/mo with zero hidden setup fees or contracts. Your dedicated account manager scales with you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-md bg-[#f0f0f3] dark:bg-[#27272a] text-[#0d74ce] dark:text-blue-400 flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-lg text-[#171717] dark:text-[#f4f4f5]">Fast Delivery</h4>
                  <p className="text-sm text-[#60646c] dark:text-zinc-400 leading-relaxed">
                    3-day website turnarounds and 24-hour reel edits so your business never waits.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-md bg-[#f0f0f3] dark:bg-[#27272a] text-[#0d74ce] dark:text-blue-400 flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-lg text-[#171717] dark:text-[#f4f4f5]">Monthly Reports</h4>
                  <p className="text-sm text-[#60646c] dark:text-zinc-400 leading-relaxed">
                    Clear performance metrics, reach analytics, and tax filing receipts delivered every 30 days.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Large Mockup Panel */}
            <div className="relative">
              <div className="rounded-2xl border border-[#dcdee0] dark:border-[#27272a] bg-white dark:bg-[#14161b] p-2 shadow-2xl overflow-hidden group">
                <div className="aspect-[4/3] rounded-xl border border-[#f0f0f3] dark:border-[#27272a] bg-[#fafafa] dark:bg-[#0c0d10] flex items-center justify-center overflow-hidden relative">
                   <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(207,231,255,0.4)_0%,rgba(255,255,255,0)_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,41,59,0.5)_0%,rgba(12,13,16,0)_70%)]"></div>
                   
                   {/* Abstract Dashboard Mockup */}
                   <div className="w-3/4 bg-white dark:bg-[#171717] border border-[#dcdee0] dark:border-[#262626] rounded-lg shadow-lg flex flex-col overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
                     <div className="h-8 border-b border-[#f0f0f3] dark:border-[#262626] bg-[#fafafa] dark:bg-[#14161b] flex items-center px-3 gap-1.5">
                       <div className="w-2 h-2 rounded-full bg-[#dcdee0] dark:bg-[#3f3f46]"></div>
                       <div className="w-2 h-2 rounded-full bg-[#dcdee0] dark:bg-[#3f3f46]"></div>
                       <div className="w-2 h-2 rounded-full bg-[#dcdee0] dark:bg-[#3f3f46]"></div>
                     </div>
                     <div className="p-4 space-y-4">
                       <div className="flex gap-4">
                         <div className="flex-1 space-y-2">
                           <div className="h-3 w-1/3 bg-[#f0f0f3] dark:bg-[#27272a] rounded"></div>
                           <div className="h-6 w-2/3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded flex items-center px-2 text-[10px] font-mono">
                             +125% Conversion Rate
                           </div>
                         </div>
                         <div className="w-10 h-10 rounded-full border-2 border-[#cfe7ff] dark:border-blue-900/50 flex items-center justify-center">
                           <Users className="w-4 h-4 text-[#0d74ce] dark:text-blue-400" />
                         </div>
                       </div>
                       <div className="space-y-2 pt-2 border-t border-[#f0f0f3] dark:border-[#262626]">
                         <div className="h-2 w-full bg-[#f0f0f3] dark:bg-[#27272a] rounded"></div>
                         <div className="h-2 w-5/6 bg-[#f0f0f3] dark:bg-[#27272a] rounded"></div>
                         <div className="h-2 w-4/6 bg-[#f0f0f3] dark:bg-[#27272a] rounded"></div>
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 5. 4-STEP PROCESS (Expo IDE / Terminal Mockup Layout) */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1024px] mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="badge-pill border border-[#dcdee0] dark:border-zinc-800">
            SIMPLE WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-[#171717] dark:text-[#f4f4f5]">
            How we partner with your business.
          </h2>
        </div>

        <div className="rounded-xl border border-[#262626] bg-[#0c0d10] shadow-2xl overflow-hidden font-mono text-sm">
          {/* Terminal Header */}
          <div className="h-10 border-b border-[#262626] bg-[#121418] flex items-center px-4 gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
              <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
            </div>
            <div className="text-xs text-[#a1a1aa] flex-1 text-center pr-12 flex items-center justify-center gap-2">
              <Globe className="w-3.5 h-3.5" /> bizbuddy-workflow ~ /process
            </div>
          </div>
          
          {/* Terminal Body */}
          <div className="p-6 sm:p-8 space-y-6 text-[#a1a1aa] overflow-x-auto">
            <div className="flex items-start gap-4">
              <div className="text-[#38bdf8] shrink-0">➜</div>
              <div>
                <span className="text-[#e4e4e7]">npx bizbuddy@latest init --step=1</span>
                <div className="mt-2 text-[#10b981]">✔ Consultation & Discovery</div>
                <div className="text-xs mt-1 text-[#60646c] dark:text-zinc-400">Analyzing business goals, target audience, and tax requirements in a free 15-min call.</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#38bdf8] shrink-0">➜</div>
              <div>
                <span className="text-[#e4e4e7]">npm run generate:strategy</span>
                <div className="mt-2 text-[#10b981]">✔ Custom Strategy Blueprint</div>
                <div className="text-xs mt-1 text-[#60646c] dark:text-zinc-400">Compiling content calendar, website wireframes, and tax compliance schedule... done.</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#38bdf8] shrink-0">➜</div>
              <div>
                <span className="text-[#e4e4e7]">bizbuddy build & deploy</span>
                <div className="mt-2 text-[#10b981]">✔ Execution Phase Active</div>
                <div className="text-xs mt-1 text-[#60646c] dark:text-zinc-400">[1/3] Designing social media posts... <br/> [2/3] Writing website code... <br/> [3/3] Filing GST returns seamlessly...</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#38bdf8] shrink-0 animate-pulse">_</div>
              <div>
                <span className="text-[#e4e4e7]">bizbuddy scale --monthly</span>
                <div className="mt-2 text-[#818cf8]">⧗ Reporting & Scaling (In Progress)</div>
                <div className="text-xs mt-1 text-[#60646c] dark:text-zinc-400">Reviewing performance metrics. Generating next month's targets.</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 6. INTERACTIVE AI QUOTE CALCULATOR */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <QuoteCalculator onOpenLeadModal={triggerLead} />
      </motion.section>

      {/* 7. PORTFOLIO SHOWCASE GRID */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-[#f0f0f3] pb-6">
          <div>
            <div className="badge-pill mb-2">PORTFOLIO & RESULTS</div>
            <h2 className="text-3xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
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
                    ? "bg-black dark:bg-[#f4f4f5] text-white dark:text-black"
                    : "bg-white dark:bg-[#14161b] text-[#60646c] dark:text-zinc-400 border border-[#dcdee0] dark:border-[#27272a] hover:bg-[#f0f0f3] dark:hover:bg-[#1e2026]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPortfolio.map((item) => (
            <div key={item.id} className="card-surface bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl overflow-hidden group">
              <div className="relative h-48 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
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
                <div className="text-xs font-mono text-[#0d74ce] dark:text-[#38bdf8]">{item.client}</div>
                <h4 className="font-semibold text-base text-[#171717] dark:text-[#f4f4f5]">{item.title}</h4>
                <p className="text-xs text-[#60646c] dark:text-zinc-400 leading-relaxed">{item.description}</p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-[#f0f0f3] dark:bg-[#27272a] text-[#171717] dark:text-[#f4f4f5] px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 8. TESTIMONIALS */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-[#fafafa] dark:bg-[#0c0d10] border-y border-[#dcdee0] dark:border-[#27272a] py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="badge-pill">CLIENT TESTIMONIALS</div>
            <h2 className="text-3xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
              Loved by business owners across India.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="bg-white dark:bg-[#14161b] p-6 rounded-xl border border-[#dcdee0] dark:border-[#27272a] space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs text-[#60646c] dark:text-zinc-400 leading-relaxed italic">
                    &quot;{item.content}&quot;
                  </p>
                </div>
                <div className="pt-3 border-t border-[#f0f0f3] dark:border-[#27272a] flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-xs font-semibold text-[#171717] dark:text-[#f4f4f5]">{item.name}</div>
                    <div className="text-[10px] text-[#60646c] dark:text-zinc-400">{item.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 9. FAQ ACCORDION (20+ Items) */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="badge-pill">FREQUENTLY ASKED QUESTIONS</div>
          <h2 className="text-3xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
            Got questions? We have answers.
          </h2>
          <p className="text-sm text-[#60646c] dark:text-zinc-400">
            Explore answers to 20+ common inquiries about social media, taxes, web dev, and pricing.
          </p>
        </div>

        <FaqAccordion />
      </motion.section>

      {/* 10. PRE-FOOTER CTA BAND */}
      <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="bg-[#171717] text-white rounded-2xl p-10 sm:p-16 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <LineWaves
              speed={0.15}
              innerLineCount={20}
              outerLineCount={24}
              warpIntensity={1.5}
              rotation={-45}
              edgeFadeWidth={0.2}
              colorCycleSpeed={0.5}
              brightness={0.4}
              color1="#38bdf8"
              color2="#818cf8"
              color3="#c084fc"
              enableMouseInteraction={true}
              mouseInfluence={2.0}
            />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white drop-shadow-md">
              Ready to scale your business with BizBuddy?
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 drop-shadow-sm font-medium">
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
      </motion.section>
    </div>
  );
}
