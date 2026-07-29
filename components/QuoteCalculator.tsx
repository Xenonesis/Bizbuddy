"use client";

import React, { useState } from "react";
import { Calculator, Check, MessageSquare, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

interface QuoteCalculatorProps {
  onOpenLeadModal: (serviceName?: string, price?: string) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onOpenLeadModal }) => {
  const [socialPlan, setSocialPlan] = useState<number>(1999);
  const [webPackage, setWebPackage] = useState<number>(3999);
  const [selectedAccounts, setSelectedAccounts] = useState<string[]>(["gst"]);
  const [editingPack, setEditingPack] = useState<number>(0);

  const accountPrices: Record<string, { label: string; price: number }> = {
    gst: { label: "GST Filing & Support", price: 999 },
    itr: { label: "Income Tax Return (ITR)", price: 1199 },
    pf: { label: "EPF Return Filing", price: 999 },
    bookkeeping: { label: "Monthly Bookkeeping", price: 2499 }
  };

  const toggleAccountService = (key: string) => {
    if (selectedAccounts.includes(key)) {
      setSelectedAccounts(selectedAccounts.filter((k) => k !== key));
    } else {
      setSelectedAccounts([...selectedAccounts, key]);
    }
  };

  const accountsTotal = selectedAccounts.reduce(
    (sum, key) => sum + (accountPrices[key]?.price || 0),
    0
  );

  const rawTotal = socialPlan + webPackage + accountsTotal + editingPack;
  const categoriesCount =
    (socialPlan > 0 ? 1 : 0) +
    (webPackage > 0 ? 1 : 0) +
    (accountsTotal > 0 ? 1 : 0) +
    (editingPack > 0 ? 1 : 0);

  const discountRate = categoriesCount >= 3 ? 0.15 : categoriesCount >= 2 ? 0.10 : 0;
  const discountAmount = Math.round(rawTotal * discountRate);
  const finalTotal = rawTotal - discountAmount;

  const handleWhatsAppQuote = () => {
    const quoteText = encodeURIComponent(
      `Hello BizBuddy!\nI calculated a custom bundle quote:\n` +
        `- Social Media: ₹${socialPlan}\n` +
        `- Website Package: ₹${webPackage}\n` +
        `- Accounts Services: ₹${accountsTotal}\n` +
        `- Editing Pack: ₹${editingPack}\n` +
        `Total Estimated Price: *₹${finalTotal}* (Includes ${discountRate * 100}% Bundle Discount)\n` +
        `Please confirm availability.`
    );
    window.open(`https://wa.me/917838472802?text=${quoteText}`, "_blank");
  };

  return (
    <div className="card-surface p-6 sm:p-8 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl shadow-xs">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#f0f0f3] dark:border-[#27272a] pb-6 mb-6">
        <div>
          <div className="badge-pill mb-2">INSTANT ESTIMATOR</div>
          <h3 className="text-2xl font-semibold text-[#171717] dark:text-[#f4f4f5] tracking-tight flex items-center gap-2">
            <Calculator className="w-6 h-6 text-[#0d74ce] dark:text-[#38bdf8]" />
            AI Business Quote Generator
          </h3>
          <p className="text-sm text-[#60646c] dark:text-zinc-400">
            Select services below to build your custom bundled quote with automatic volume discounts.
          </p>
        </div>

        {discountRate > 0 && (
          <div className="bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs px-3.5 py-2 rounded-lg flex items-center gap-2 font-mono">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 animate-bounce" />
            <span>{discountRate * 100}% BUNDLE DISCOUNT APPLIED</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Controls */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section 1: Social Media */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#171717] dark:text-[#f4f4f5] font-mono mb-2">
              1. Social Media Management Plan
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              {[
                { label: "None", val: 0 },
                { label: "Basic (₹1,499)", val: 1499 },
                { label: "Super (₹1,999)", val: 1999 },
                { label: "Premium (₹2,499)", val: 2499 }
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setSocialPlan(item.val)}
                  className={`p-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                    socialPlan === item.val
                      ? "bg-black dark:bg-[#f4f4f5] text-white dark:text-black border-black dark:border-[#f4f4f5] font-semibold"
                      : "bg-white dark:bg-[#14161b] text-[#171717] dark:text-[#f4f4f5] border-[#dcdee0] dark:border-[#27272a] hover:bg-[#f0f0f3] dark:hover:bg-[#1e2026]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Website Package */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#171717] dark:text-[#f4f4f5] font-mono mb-2">
              2. Website Development Package
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              {[
                { label: "None", val: 0 },
                { label: "Landing Page (₹3,999)", val: 3999 },
                { label: "Business Site (₹7,999)", val: 7999 },
                { label: "E-Commerce (₹14,999)", val: 14999 }
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setWebPackage(item.val)}
                  className={`p-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                    webPackage === item.val
                      ? "bg-black dark:bg-[#f4f4f5] text-white dark:text-black border-black dark:border-[#f4f4f5] font-semibold"
                      : "bg-white dark:bg-[#14161b] text-[#171717] dark:text-[#f4f4f5] border-[#dcdee0] dark:border-[#27272a] hover:bg-[#f0f0f3] dark:hover:bg-[#1e2026]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Accounts & Tax */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#171717] dark:text-[#f4f4f5] font-mono mb-2">
              3. Accounts & Compliance Services
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(accountPrices).map(([key, item]) => {
                const isSelected = selectedAccounts.includes(key);
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleAccountService(key)}
                    className={`p-3 rounded-lg text-xs font-medium border flex items-center justify-between transition-all ${
                      isSelected
                        ? "bg-[#171717] dark:bg-[#f4f4f5] text-white dark:text-black border-[#171717] dark:border-[#f4f4f5]"
                        : "bg-white dark:bg-[#14161b] text-[#171717] dark:text-[#f4f4f5] border-[#dcdee0] dark:border-[#27272a] hover:bg-[#f0f0f3] dark:hover:bg-[#1e2026]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono font-semibold">
                      ₹{item.price} {isSelected && <Check className="w-3.5 h-3.5 inline ml-1" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 4: Video Editing */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#171717] dark:text-[#f4f4f5] font-mono mb-2">
              4. Reels & Video Editing Packs
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { label: "None", val: 0 },
                { label: "5 Reels Pack (₹1,299)", val: 1299 },
                { label: "10 Reels Pack (₹2,299)", val: 2299 }
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setEditingPack(item.val)}
                  className={`p-2.5 rounded-lg text-xs font-medium border text-center transition-all ${
                    editingPack === item.val
                      ? "bg-black dark:bg-[#f4f4f5] text-white dark:text-black border-black dark:border-[#f4f4f5] font-semibold"
                      : "bg-white dark:bg-[#14161b] text-[#171717] dark:text-[#f4f4f5] border-[#dcdee0] dark:border-[#27272a] hover:bg-[#f0f0f3] dark:hover:bg-[#1e2026]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: Summary Card */}
        <div className="bg-[#171717] text-white p-6 rounded-xl border border-zinc-800 flex flex-col justify-between space-y-6">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 border-b border-zinc-800 pb-3 mb-4">
              Estimated Pricing Breakdown
            </div>

            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex justify-between">
                <span>Social Media Management:</span>
                <span className="font-mono text-white font-semibold">₹{socialPlan}</span>
              </div>
              <div className="flex justify-between">
                <span>Website Development:</span>
                <span className="font-mono text-white font-semibold">₹{webPackage}</span>
              </div>
              <div className="flex justify-between">
                <span>Accounts & Tax Services:</span>
                <span className="font-mono text-white font-semibold">₹{accountsTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Video Editing Pack:</span>
                <span className="font-mono text-white font-semibold">₹{editingPack}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-400 pt-2 border-t border-zinc-800 font-mono">
                  <span>Bundle Savings ({discountRate * 100}%):</span>
                  <span>- ₹{discountAmount}</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-zinc-800">
            <div>
              <div className="text-xs text-zinc-400 font-mono">TOTAL ESTIMATED INVESTMENT</div>
              <div className="text-3xl font-bold font-mono text-white mt-1">
                ₹{finalTotal.toLocaleString("en-IN")}
              </div>
              <div className="text-[10px] text-zinc-400 mt-1">
                Prices include complete setup, design, & CA verification.
              </div>
            </div>

            <div className="space-y-2">
              <button
                type="button"
                onClick={() =>
                  onOpenLeadModal(
                    "Custom Bundled Quote",
                    `₹${finalTotal.toLocaleString("en-IN")}`
                  )
                }
                className="w-full bg-white dark:bg-[#f4f4f5] text-black hover:bg-zinc-200 dark:hover:bg-white font-semibold py-3 rounded-md text-sm transition-colors flex items-center justify-center gap-2"
              >
                Request Official Callback
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full bg-[#25D366] text-white py-2.5 rounded-md font-medium text-xs flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Send Quote to WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
