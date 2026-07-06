"use client";

import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import { FAQ_LIST, FaqItem } from "../lib/data";

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string>("faq-1");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "General", "Social Media", "Accounts", "Websites", "Editing", "Pricing"];

  const filteredFaqs = FAQ_LIST.filter((item) => {
    const matchesCat = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Category Pills & Search Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 overflow-x-auto w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-mono transition-all ${
                activeCategory === cat
                  ? "bg-black dark:bg-[#f4f4f5] text-white dark:text-black"
                  : "bg-white dark:bg-[#14161b] text-[#60646c] dark:text-zinc-400 border border-[#dcdee0] dark:border-[#27272a] hover:bg-[#f0f0f3] dark:hover:bg-[#1e2026]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-3 text-[#999999]" />
          <input
            type="text"
            placeholder="Search 20+ FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="text-input w-full pl-9 text-xs"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-10 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl text-[#60646c] dark:text-zinc-400 text-sm">
            No matching questions found for &quot;{searchQuery}&quot;. Try a different term or contact us on WhatsApp.
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl overflow-hidden transition-all hover:border-[#171717] dark:hover:border-zinc-500"
              >
                <button
                  onClick={() => setOpenId(isOpen ? "" : faq.id)}
                  className="w-full px-5 py-4 text-left font-semibold text-base text-[#171717] dark:text-[#f4f4f5] flex items-center justify-between gap-4 hover:bg-[#fafafa] dark:hover:bg-[#1e2026]"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-[#f0f0f3] dark:bg-[#27272a] text-[#0d74ce] dark:text-[#38bdf8] text-xs font-mono flex items-center justify-center shrink-0">
                      ?
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#60646c] dark:text-zinc-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-black dark:text-white" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#60646c] dark:text-zinc-400 leading-relaxed border-t border-[#f0f0f3] dark:border-[#27272a] bg-[#fafafa]/50 dark:bg-[#0c0d10]/50 animate-in fade-in duration-150">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="badge-pill text-[10px]">{faq.category}</span>
                    </div>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
