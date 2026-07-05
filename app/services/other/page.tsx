"use client";

import React from "react";
import { Printer, Calculator, Heart, PhoneCall, ArrowRight, Check } from "lucide-react";

interface Props {
  onOpenLeadModal?: (serviceName?: string, price?: string) => void;
}

export default function OtherServicesPage({ onOpenLeadModal }: Props) {
  const triggerLead = (svc: string) => {
    if (onOpenLeadModal) {
      onOpenLeadModal(svc);
    }
  };

  const otherList = [
    {
      title: "Visiting Card & Brochure Printing",
      desc: "Premium quality matte & gloss visiting cards, pamphlets, banners, and letterhead printing delivered to your office doorstep.",
      icon: Printer,
      price: "Starting ₹499"
    },
    {
      title: "Basic Accounting & Tally Ledger Support",
      desc: "Daily transaction entry, voucher creation, petty cash management, and monthly profit & loss reconciliation.",
      icon: Calculator,
      price: "Starting ₹1,999/mo"
    },
    {
      title: "Social Growth & Engagement Support",
      desc: "Targeted campaign strategies to gain genuine local followers, active post likes, and story views for your brand.",
      icon: Heart,
      price: "Starting ₹999"
    },
    {
      title: "Customer Support & Call Helpline",
      desc: "Virtual receptionist and dedicated WhatsApp customer support desk setup to handle client inquiries round the clock.",
      icon: PhoneCall,
      price: "Custom Monthly Plan"
    }
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Sub-hero */}
      <section className="hero-sky-wash pt-16 pb-14 border-b border-[#dcdee0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-pill">BUSINESS SUPPORT SERVICES</div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171717]">
            Printing, Accounting & Business Support
          </h1>
          <p className="text-base text-[#60646c]">
            Essential business utilities to keep your operations running smoothly every day.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherList.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card-surface p-8 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-[#f0f0f3] text-[#171717] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#171717]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#60646c]">
                    {item.desc}
                  </p>
                  <div className="text-xs font-mono font-semibold text-[#0d74ce]">
                    {item.price}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#f0f0f3]">
                  <button
                    onClick={() => triggerLead(item.title)}
                    className="btn-primary w-full justify-center text-xs"
                  >
                    Inquire for {item.title}
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
