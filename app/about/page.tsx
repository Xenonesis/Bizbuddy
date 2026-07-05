"use client";

import React from "react";
import { ShieldCheck, Target, Users, Award, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Sub-hero */}
      <section className="hero-sky-wash pt-16 pb-14 border-b border-[#dcdee0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-pill">OUR MISSION & VISION</div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171717]">
            Empowering Indian Businesses to Scale Digitally
          </h1>
          <p className="text-base text-[#60646c]">
            BizBuddy was founded with a single mission: to provide small businesses, local retail, restaurants, and professionals with world-class digital marketing, custom websites, and accounting services at affordable monthly rates.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="card-surface p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-black">250+</div>
            <div className="text-xs text-[#60646c] font-mono mt-1 uppercase">Active Business Clients</div>
          </div>

          <div className="card-surface p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-black">1,200+</div>
            <div className="text-xs text-[#60646c] font-mono mt-1 uppercase">Reels & Posts Created</div>
          </div>

          <div className="card-surface p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-black">99.4%</div>
            <div className="text-xs text-[#60646c] font-mono mt-1 uppercase">On-Time Tax Filing</div>
          </div>

          <div className="card-surface p-6">
            <div className="text-3xl sm:text-4xl font-bold font-mono text-black">4.9/5</div>
            <div className="text-xs text-[#60646c] font-mono mt-1 uppercase">Average Client Rating</div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-semibold text-[#171717]">
            Our Core Operating Principles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-surface p-6 space-y-3">
            <div className="w-10 h-10 rounded-md bg-[#f0f0f3] text-[#171717] flex items-center justify-center font-bold">
              1
            </div>
            <h4 className="font-semibold text-lg text-[#171717]">Quiet Confidence</h4>
            <p className="text-xs text-[#60646c] leading-relaxed">
              We focus on measurable revenue metrics, real lead volume, and tax compliance rather than vanity figures.
            </p>
          </div>

          <div className="card-surface p-6 space-y-3">
            <div className="w-10 h-10 rounded-md bg-[#f0f0f3] text-[#171717] flex items-center justify-center font-bold">
              2
            </div>
            <h4 className="font-semibold text-lg text-[#171717]">Zero Friction</h4>
            <p className="text-xs text-[#60646c] leading-relaxed">
              Direct WhatsApp support, automated reminders, and clear monthly reports eliminate administrative headaches.
            </p>
          </div>

          <div className="card-surface p-6 space-y-3">
            <div className="w-10 h-10 rounded-md bg-[#f0f0f3] text-[#171717] flex items-center justify-center font-bold">
              3
            </div>
            <h4 className="font-semibold text-lg text-[#171717]">CA Verified Accuracy</h4>
            <p className="text-xs text-[#60646c] leading-relaxed">
              Every tax return, EPF filing, and balance sheet is thoroughly reviewed by certified financial professionals.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
