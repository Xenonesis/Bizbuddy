"use client";

import React from "react";
import { Code2, Check, ArrowRight, Smartphone, Globe, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { WEBSITE_PACKAGES } from "../../../lib/data";

interface Props {
  onOpenLeadModal?: (serviceName?: string, price?: string) => void;
}

export default function WebsiteDevPage({ onOpenLeadModal }: Props) {
  const triggerLead = (pkgName: string, price: string) => {
    if (onOpenLeadModal) {
      onOpenLeadModal(`Web Dev: ${pkgName}`, price);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Sub-hero */}
      <section className="hero-sky-wash pt-16 pb-14 border-b border-[#dcdee0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-pill">NEXT.JS 16 & REACT 19 WEB ENGINEERING</div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171717] dark:text-[#f4f4f5]">
            Fast, Responsive Websites That Convert Visitors into Clients
          </h1>
          <p className="text-base text-[#60646c]">
            Starting at ₹3,999. Custom designed landing pages, business websites, and e-commerce stores integrated with WhatsApp lead bots & Razorpay.
          </p>
        </div>
      </section>

      {/* Website Packages */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WEBSITE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="card-surface bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl p-8 flex flex-col justify-between hover:border-[#171717] dark:hover:border-zinc-500 transition-all"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start border-b border-[#f0f0f3] dark:border-[#27272a] pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0d74ce] dark:text-[#38bdf8] font-semibold block">
                      IDEAL FOR: {pkg.idealFor}
                    </span>
                    <h3 className="text-2xl font-semibold text-[#171717] dark:text-[#f4f4f5] mt-1">
                      {pkg.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono text-[#60646c] dark:text-zinc-400">STARTING AT</div>
                    <div className="text-2xl font-bold text-[#171717] dark:text-[#f4f4f5] font-mono">
                      {pkg.startingPrice}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono uppercase text-[#60646c] dark:text-zinc-400 font-semibold">
                    Package Deliverables & Specs:
                  </div>
                  <ul className="space-y-2.5 text-sm">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-[#171717] dark:text-[#f4f4f5]">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#fafafa] dark:bg-[#0c0d10] p-3 rounded-lg border border-[#f0f0f3] dark:border-[#27272a] flex justify-between items-center text-xs font-mono">
                  <span>Turnaround Time:</span>
                  <span className="font-semibold text-[#171717] dark:text-[#f4f4f5]">{pkg.turnaround}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#f0f0f3] dark:border-[#27272a] mt-6">
                <button
                  onClick={() => triggerLead(pkg.name, pkg.startingPrice)}
                  className="btn-primary w-full justify-center"
                >
                  Order {pkg.name} Package
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Guarantee */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 bg-[#171717] dark:bg-[#000000] text-white rounded-2xl p-8 sm:p-12 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="text-xs font-mono uppercase tracking-widest text-emerald-400">
            ENGINEERED FOR SPEED & SEO
          </div>
          <h3 className="text-3xl font-semibold">
            Built with modern technology, not sluggish website templates.
          </h3>
          <p className="text-sm text-zinc-400">
            Every site we build achieves 90+ Google PageSpeed scores, runs on secure SSL cloud hosting, and includes mobile-first responsive layouts.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center pt-4">
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
            <div className="text-lg font-bold text-white">Next.js 16</div>
            <div className="text-xs text-zinc-400 mt-1">Server Components</div>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
            <div className="text-lg font-bold text-white">99.9% Uptime</div>
            <div className="text-xs text-zinc-400 mt-1">Free SSL Included</div>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
            <div className="text-lg font-bold text-white">WhatsApp Bot</div>
            <div className="text-xs text-zinc-400 mt-1">Instant Lead Push</div>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
            <div className="text-lg font-bold text-white">Razorpay</div>
            <div className="text-xs text-zinc-400 mt-1">UPI & Card Gateway</div>
          </div>
        </div>
      </section>
    </div>
  );
}
