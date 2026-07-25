"use client";

import React, { useState } from "react";
import { PORTFOLIO_ITEMS } from "../../lib/data";

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filtered = PORTFOLIO_ITEMS.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="space-y-12 md:space-y-16 pb-16 md:pb-20">
      {/* Sub-hero */}
      <section className="hero-sky-wash pt-12 sm:pt-16 pb-10 sm:pb-14 border-b border-[#dcdee0] dark:border-[#27272a]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="badge-pill">CASE STUDIES & WORK</div>
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#171717] dark:text-[#f4f4f5]">
            Proven Growth Stories for Real Businesses
          </h1>
          <p className="text-base text-[#60646c] dark:text-zinc-400">
            Explore how we help clinics, restaurants, real estate agencies, and D2C brands scale revenue.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto">
          {["All", "Social Media", "Websites", "Branding", "Accounts"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-black dark:bg-[#f4f4f5] text-white dark:text-black font-semibold"
                  : "bg-white dark:bg-[#14161b] text-[#60646c] dark:text-zinc-400 border border-[#dcdee0] dark:border-[#27272a] hover:bg-[#f0f0f3] dark:hover:bg-[#1e2026]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="card-surface bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl overflow-hidden group">
              <div className="relative h-56 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-black/90 text-white text-xs font-mono font-semibold px-3 py-1 rounded-md">
                  {item.impactMetric}
                </div>
              </div>
              <div className="p-6 space-y-3">
                <div className="text-xs font-mono text-[#0d74ce] dark:text-[#38bdf8] font-semibold">{item.client}</div>
                <h3 className="font-semibold text-lg text-[#171717] dark:text-[#f4f4f5]">{item.title}</h3>
                <p className="text-xs text-[#60646c] dark:text-zinc-400 leading-relaxed">{item.description}</p>
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-[#f0f0f3] dark:bg-[#27272a] text-[#171717] dark:text-[#f4f4f5] px-2 py-0.5 rounded font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
