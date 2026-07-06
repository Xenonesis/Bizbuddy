"use client";

import React, { useState } from "react";
import { X, ShieldCheck, CreditCard, MessageSquare, Check, ArrowRight } from "lucide-react";
import { submitLead } from "../lib/supabase";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
  price?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  serviceName = "General Business Service",
  price
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPaidSuccess, setIsPaidSuccess] = useState(false);

  if (!isOpen) return null;

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    await submitLead({
      name,
      phone,
      email,
      service: serviceName,
      message: notes
    });

    setIsSubmitting(false);
    setIsPaidSuccess(true);
  };

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Hi BizBuddy Team!\nI am interested in: *${serviceName}* ${price ? `(${price})` : ""}.\nName: ${name || "Client"}\nPhone: ${phone}`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#14161b] rounded-xl border border-[#dcdee0] dark:border-[#27272a] w-full max-w-md shadow-2xl overflow-hidden relative">
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#f0f0f3] dark:border-[#27272a] flex items-center justify-between bg-[#fafafa] dark:bg-[#0c0d10]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0d74ce] dark:text-[#38bdf8] font-semibold block">
              Direct Order & Inquiry
            </span>
            <h3 className="font-semibold text-base text-[#171717] dark:text-[#f4f4f5]">
              {serviceName}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#60646c] dark:text-zinc-400 hover:text-black dark:hover:text-white rounded-md hover:bg-[#f0f0f3] dark:hover:bg-[#27272a]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {price && (
            <div className="bg-[#f0f0f3] dark:bg-[#0c0d10] p-3 rounded-lg flex items-center justify-between mb-4 border border-[#dcdee0] dark:border-[#27272a]">
              <span className="text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400">
                Selected Service Price:
              </span>
              <span className="text-base font-bold text-black dark:text-white font-mono">
                {price}
              </span>
            </div>
          )}

          {isPaidSuccess ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
                Inquiry Received!
              </h4>
              <p className="text-sm text-[#60646c] dark:text-zinc-400">
                We have logged your order request for <span className="font-semibold text-black dark:text-white">{serviceName}</span>. Our expert agent will contact you at <span className="font-semibold text-black dark:text-white">{phone}</span> shortly.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full bg-[#25D366] text-white py-2.5 rounded-md font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#20bd5a]"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  Chat Directly on WhatsApp
                </button>
                <button onClick={onClose} className="btn-secondary w-full">
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleQuickSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Patel"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-input w-full"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="text-input w-full"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. ramesh@mycompany.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-input w-full"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
                  Additional Details / Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention your specific requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-md border border-[#dcdee0] p-2.5 text-sm outline-none focus:border-black"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center"
                >
                  {isSubmitting ? "Processing..." : "Submit Inquiry & Request Callback"}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full bg-[#25D366] text-white py-2.5 rounded-md font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  Connect Instantly via WhatsApp
                </button>
              </div>

              <div className="text-center pt-1 text-[11px] text-[#999999] flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                No advance commitment required. Free initial scope review.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
