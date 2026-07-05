"use client";

import React, { useState } from "react";
import { ShieldCheck, FileText, CheckCircle2, ArrowRight, Download, Clock, ChevronRight, X } from "lucide-react";
import { ACCOUNT_SERVICES, AccountService } from "../../../lib/data";

interface Props {
  onOpenLeadModal?: (serviceName?: string, price?: string) => void;
}

export default function AccountsPage({ onOpenLeadModal }: Props) {
  const [selectedDocService, setSelectedDocService] = useState<AccountService | null>(null);

  const triggerLead = (svcTitle: string, pricing: string) => {
    if (onOpenLeadModal) {
      onOpenLeadModal(`Accounts: ${svcTitle}`, pricing);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Sub-hero */}
      <section className="hero-sky-wash pt-16 pb-14 border-b border-[#dcdee0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-pill">CA VERIFIED ACCOUNTING & TAX</div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171717]">
            Accounts, GST & Tax Compliance Solutions
          </h1>
          <p className="text-base text-[#60646c]">
            Never miss a tax deadline again. Professional chartered accountants handling EPF, TDS, Income Tax Returns, ROC compliance, and company registrations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACCOUNT_SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="card-surface p-6 flex flex-col justify-between hover:border-[#171717] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#f0f0f3] pb-3">
                  <span className="badge-pill text-[10px]">{svc.category}</span>
                  <span className="text-xs font-mono text-[#0d74ce] font-semibold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {svc.timeline}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-[#171717]">
                  {svc.title}
                </h3>

                <p className="text-xs text-[#60646c] leading-relaxed">
                  {svc.fullDesc}
                </p>

                <div className="bg-[#fafafa] p-3 rounded-lg border border-[#f0f0f3] space-y-2">
                  <div className="text-[11px] font-mono uppercase text-[#60646c] font-semibold">
                    Key Required Documents:
                  </div>
                  <ul className="space-y-1 text-xs text-[#171717]">
                    {svc.documents.slice(0, 3).map((doc) => (
                      <li key={doc} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{doc}</span>
                      </li>
                    ))}
                  </ul>
                  {svc.documents.length > 3 && (
                    <button
                      onClick={() => setSelectedDocService(svc)}
                      className="text-[11px] text-[#0d74ce] font-medium hover:underline pt-1 block"
                    >
                      + View all {svc.documents.length} required documents
                    </button>
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-[#f0f0f3] mt-4 flex items-center justify-between gap-2">
                <div>
                  <div className="text-[10px] font-mono text-[#60646c]">ESTIMATED FEE</div>
                  <div className="text-sm font-bold text-[#171717] font-mono">{svc.pricing}</div>
                </div>
                <button
                  onClick={() => triggerLead(svc.title, svc.pricing)}
                  className="btn-primary text-xs px-4 py-2"
                >
                  Apply Now
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Required Documents Modal Drawer */}
      {selectedDocService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-xl border border-[#dcdee0] w-full max-w-md p-6 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h4 className="font-semibold text-base text-[#171717]">
                Required Documents: {selectedDocService.title}
              </h4>
              <button
                onClick={() => setSelectedDocService(null)}
                className="p-1 text-[#60646c] hover:text-black rounded-md hover:bg-[#f0f0f3]"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <ul className="space-y-2 text-sm text-[#171717]">
              {selectedDocService.documents.map((doc, idx) => (
                <li key={doc} className="flex items-center gap-2 p-2 rounded-md bg-[#fafafa]">
                  <span className="w-5 h-5 rounded bg-[#f0f0f3] text-xs font-mono font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span>{doc}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex gap-2">
              <button
                onClick={() => {
                  const title = selectedDocService.title;
                  const price = selectedDocService.pricing;
                  setSelectedDocService(null);
                  triggerLead(title, price);
                }}
                className="btn-primary w-full justify-center"
              >
                Proceed to Filing Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
