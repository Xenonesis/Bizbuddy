"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  TrendingUp,
  Users,
  CheckCircle2,
  DollarSign,
  BarChart3,
  Smartphone,
  Laptop,
  FileText,
  MessageSquare,
  Sparkles,
  Zap,
  ShieldCheck,
  Globe,
  ArrowRight
} from "lucide-react";

import { useTheme } from "./ThemeProvider";
import Grainient from "./Grainient";

interface DeviceMockupHeroProps {
  onOpenConsultation: () => void;
  onOpenLeadModal: (serviceName?: string) => void;
}

export const DeviceMockupHero: React.FC<DeviceMockupHeroProps> = ({
  onOpenConsultation,
  onOpenLeadModal
}) => {
  const [activeTab, setActiveTab] = useState<"dashboard" | "social" | "website" | "tax">("dashboard");
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section className="relative overflow-hidden hero-sky-wash pt-16 pb-20 border-b border-[#dcdee0] dark:border-zinc-800">
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-60 pointer-events-none">
        <Grainient
          color1={isDark ? "#1e1b4b" : "#e0f2fe"}
          color2={isDark ? "#0f172a" : "#bae6fd"}
          color3={isDark ? "#1e293b" : "#7dd3fc"}
          timeSpeed={0.2}
          warpStrength={1.2}
          warpFrequency={4.0}
          warpSpeed={1.5}
          warpAmplitude={40.0}
          blendSoftness={0.1}
          grainAmount={0.08}
          grainScale={2.0}
          grainAnimated={true}
          contrast={1.2}
          zoom={1.0}
        />
      </div>
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Top Eyebrow Badge (Expo Clone) */}
        <div className="flex justify-center mb-6 px-2">
          <a
            href="#recent-updates"
            className="group inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[#dcdee0] dark:border-zinc-800 bg-[#f0f0f3]/80 dark:bg-zinc-800/80 py-1 pr-1.5 sm:pr-2.5 pl-1 backdrop-blur-sm transition duration-300 hover:border-[#171717] dark:hover:border-zinc-500 cursor-pointer max-w-full"
          >
            <span className="inline-flex items-center gap-1.5 rounded-2xl border border-[#dcdee0] dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2 sm:px-2.5 py-1 shadow-sm">
              <span className="relative flex w-2 h-2 shrink-0 items-center justify-center">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-semibold tracking-wide text-[#171717] dark:text-zinc-200">
                What's new?
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 sm:gap-2 pr-px truncate">
              <span className="text-[10px] sm:text-xs font-medium text-[#60646c] dark:text-zinc-400 truncate">
                Managed SEO Services
              </span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#60646c] dark:text-zinc-400 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </a>
        </div>

        {/* Display Mega Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-[1.75rem] sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-[#171717] dark:text-[#f4f4f5] leading-[1.12] sm:leading-[1.08] lg:leading-[1.05]">
            Grow your business with marketing, tax compliance & custom websites.
          </h1>
          <p className="text-base sm:text-lg text-[#60646c] dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            BizBuddy provides startups, local retail, restaurants, and professionals with monthly social media management, tax returns, e-commerce stores, and video editing.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenLeadModal("Hero Primary CTA")}
              className="btn-primary text-base font-medium px-6 py-3 h-12 w-full sm:w-auto"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <button
              onClick={onOpenConsultation}
              className="btn-secondary text-base font-medium px-6 py-3 h-12 w-full sm:w-auto"
            >
              Book 1-on-1 Consultation
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#60646c] dark:text-zinc-400 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Dedicated Account Manager</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Monthly Progress Reports</span>
            </div>
          </div>
        </motion.div>

        {/* DEVICE MOCKUP COMPOSITE (MacBook + iPhone) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-14 max-w-5xl mx-auto"
        >
          {/* Interactive Screen Selector Tabs */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-4 overflow-x-auto py-1 -mx-2 px-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-2.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium font-mono transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 ${
                activeTab === "dashboard"
                  ? "bg-black text-white shadow-xs dark:bg-white dark:text-black"
                  : "bg-white text-[#60646c] border border-[#dcdee0] hover:bg-[#f0f0f3] dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:bg-zinc-800"
              }`}
            >
              <BarChart3 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0d74ce] dark:text-sky-400" /> <span className="hidden xs:inline">Client </span>Analytics
            </button>
            <button
              onClick={() => setActiveTab("social")}
              className={`px-2.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium font-mono transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 ${
                activeTab === "social"
                  ? "bg-black text-white shadow-xs dark:bg-white dark:text-black"
                  : "bg-white text-[#60646c] border border-[#dcdee0] hover:bg-[#f0f0f3] dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:bg-zinc-800"
              }`}
            >
              <Smartphone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0d74ce] dark:text-sky-400" /> <span className="hidden xs:inline">Social </span>Reels
            </button>
            <button
              onClick={() => setActiveTab("website")}
              className={`px-2.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium font-mono transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 ${
                activeTab === "website"
                  ? "bg-black text-white shadow-xs dark:bg-white dark:text-black"
                  : "bg-white text-[#60646c] border border-[#dcdee0] hover:bg-[#f0f0f3] dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:bg-zinc-800"
              }`}
            >
              <Laptop className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0d74ce] dark:text-sky-400" /> Web Builder
            </button>
            <button
              onClick={() => setActiveTab("tax")}
              className={`px-2.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-medium font-mono transition-all flex items-center gap-1 sm:gap-1.5 shrink-0 ${
                activeTab === "tax"
                  ? "bg-black text-white shadow-xs dark:bg-white dark:text-black"
                  : "bg-white text-[#60646c] border border-[#dcdee0] hover:bg-[#f0f0f3] dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 dark:hover:bg-zinc-800"
              }`}
            >
              <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#0d74ce] dark:text-sky-400" /> GST & Tax
            </button>
          </div>

          {/* Composite Surface Container */}
          <div className="relative rounded-2xl border border-[#dcdee0] dark:border-zinc-800 bg-white dark:bg-zinc-900 p-1.5 sm:p-4 shadow-xl">
            {/* Laptop Frame Header */}
            <div className="h-8 bg-[#171717] rounded-t-xl flex items-center justify-between px-4 text-white text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="ml-2 font-mono text-[11px] text-zinc-400">
                  bizbuddy.in/client-portal/{activeTab}
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                LIVE WORKSPACE
              </div>
            </div>

            {/* Laptop Main Display Screen */}
            <div className="bg-[#171717] text-white p-3 sm:p-6 min-h-[280px] sm:min-h-[360px] rounded-b-xl relative overflow-hidden font-sans">
              {activeTab === "dashboard" && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-zinc-800 pb-4">
                    <div>
                      <div className="text-xs text-zinc-400 font-mono">CLIENT PORTAL SUMMARY</div>
                      <div className="text-lg font-semibold">Sharma Retail & Traders</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono">
                        Active Plan: Super ₹1,999/mo
                      </span>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                      <div className="text-xs text-zinc-400">Total Leads Generated</div>
                      <div className="text-2xl font-bold font-mono text-white mt-1">142</div>
                      <div className="text-[10px] text-emerald-400 mt-1">↑ +28% this month</div>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                      <div className="text-xs text-zinc-400">Reels Reach</div>
                      <div className="text-2xl font-bold font-mono text-white mt-1">48.2K</div>
                      <div className="text-[10px] text-emerald-400 mt-1">↑ 5 Viral Reels</div>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                      <div className="text-xs text-zinc-400">GST Return Status</div>
                      <div className="text-base font-semibold text-emerald-400 mt-2 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4" /> Filed (GSTR-3B)
                      </div>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                      <div className="text-xs text-zinc-400">Website Status</div>
                      <div className="text-base font-semibold text-blue-400 mt-2 flex items-center gap-1">
                        <Globe className="w-4 h-4" /> 99.9% Uptime
                      </div>
                    </div>
                  </div>

                  {/* Live Activity Row */}
                  <div className="bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                        WA
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">Latest Lead: Ankit Mehta (Order Query)</div>
                        <div className="text-xs text-zinc-400">Requested website quote for Restaurant QR menu</div>
                      </div>
                    </div>
                    <button
                      onClick={() => onOpenLeadModal("Dashboard Live Lead")}
                      className="btn-primary text-xs h-8 px-4 bg-emerald-600 hover:bg-emerald-700"
                    >
                      Connect on WhatsApp
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "social" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                    <span className="text-sm font-semibold">Social Media Management (Super Plan ₹1,999/mo)</span>
                    <span className="text-xs text-zinc-400 font-mono">15 Posts + 5 Reels Schedule</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                      <div className="text-xs text-amber-400 font-mono">POST #12 - SCHEDULED</div>
                      <div className="text-sm font-medium mt-1">Festival Offer Carousel Graphic</div>
                      <div className="text-xs text-zinc-400 mt-2">Publishing tomorrow 6:00 PM</div>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                      <div className="text-xs text-purple-400 font-mono">REEL #4 - VIRAL EDIT</div>
                      <div className="text-sm font-medium mt-1">Behind-The-Scenes Store Reel</div>
                      <div className="text-xs text-zinc-400 mt-2">Custom Subtitles + Sound FX</div>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                      <div className="text-xs text-emerald-400 font-mono">META ADS RUNNING</div>
                      <div className="text-sm font-medium mt-1">Local Reach Campaign ₹100/day</div>
                      <div className="text-xs text-zinc-400 mt-2">2,400 Impressions today</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "website" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                    <span className="text-sm font-semibold">Custom Website Development Engine</span>
                    <span className="text-xs text-emerald-400 font-mono">Starting at ₹3,999</span>
                  </div>
                  <div className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 space-y-3">
                    <div className="flex justify-between text-xs font-mono text-zinc-400">
                      <span>PROJECT: UrbanBites E-Commerce Store</span>
                      <span className="text-emerald-400">DEPLOYED IN 5 DAYS</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-full" />
                    </div>
                    <div className="text-xs text-zinc-300">
                      Features Loaded: Razorpay Payment Gateway, WhatsApp Order Bot, Google Maps, Mobile Responsive Design, 99.9% Speed Score.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "tax" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                    <span className="text-sm font-semibold">Accounts & Tax Solutions Manager</span>
                    <span className="text-xs text-blue-400 font-mono">CA Verified Reports</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold">GSTR-1 & 3B Monthly Return</div>
                        <div className="text-xs text-zinc-400">ARN: AA09082390182</div>
                      </div>
                      <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono">
                        FILED
                      </span>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold">EPF Return Filing</div>
                        <div className="text-xs text-zinc-400">Challan Generated (14 Staff)</div>
                      </div>
                      <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono">
                        VERIFIED
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Layered iPhone Overlay Mockup */}
              <div className="hidden md:block absolute bottom-4 right-4 w-52 rounded-xl bg-black p-2 border border-zinc-700 shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
                <div className="bg-zinc-900 text-white rounded-lg p-3 space-y-2 text-xs">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
                    <span className="font-bold text-[11px] flex items-center gap-1">
                      <Smartphone className="w-3.5 h-3.5 text-[#0d74ce]" /> BizBuddy Go
                    </span>
                    <span className="text-[9px] font-mono text-emerald-400">ONLINE</span>
                  </div>
                  <div className="bg-zinc-800 p-2 rounded text-[10px] text-zinc-300 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>New lead via WhatsApp: &quot;Need ₹1,999 Social Media Plan for my salon&quot;</span>
                  </div>
                  <button
                    onClick={() => onOpenLeadModal("Mobile Mockup Quick Connect")}
                    className="w-full bg-[#0d74ce] hover:bg-blue-600 text-white text-[10px] py-1 rounded font-medium transition-colors"
                  >
                    Accept Lead Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
