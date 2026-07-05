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
                  ? "bg-black text-white"
                  : "bg-white text-[#60646c] border border-[#dcdee0] hover:bg-[#f0f0f3]"
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
          <div className="text-center py-10 bg-white border border-[#dcdee0] rounded-xl text-[#60646c] text-sm">
            No matching questions found for &quot;{searchQuery}&quot;. Try a different term or contact us on WhatsApp.
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#dcdee0] rounded-xl overflow-hidden transition-all hover:border-[#171717]"
              >
                <button
                  onClick={() => setOpenId(isOpen ? "" : faq.id)}
                  className="w-full px-5 py-4 text-left font-semibold text-base text-[#171717] flex items-center justify-between gap-4 hover:bg-[#fafafa]"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-[#f0f0f3] text-[#0d74ce] text-xs font-mono flex items-center justify-center shrink-0">
                      ?
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#60646c] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-black" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#60646c] leading-relaxed border-t border-[#f0f0f3] bg-[#fafafa]/50 animate-in fade-in duration-150">
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
