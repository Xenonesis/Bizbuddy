"use client";

import React from "react";
import { Video, Sparkles, Check, ArrowRight, Play } from "lucide-react";
import { EDITING_SERVICES } from "../../../lib/data";

interface Props {
  onOpenLeadModal?: (serviceName?: string, price?: string) => void;
}

export default function EditingServicesPage({ onOpenLeadModal }: Props) {
  const triggerLead = (title: string, price: string) => {
    if (onOpenLeadModal) {
      onOpenLeadModal(`Editing Service: ${title}`, price);
    }
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Sub-hero */}
      <section className="hero-sky-wash pt-16 pb-14 border-b border-[#dcdee0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-pill">VIRAL REELS & GRAPHIC DESIGN</div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171717]">
            Reels, YouTube Thumbnails & AI Video Editing
          </h1>
          <p className="text-base text-[#60646c]">
            Grab audience attention in the first 3 seconds. Viral captions, kinetic text animations, color grading, sound design, and realistic AI avatars.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDITING_SERVICES.map((item) => (
            <div key={item.id} className="card-surface p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start border-b border-[#f0f0f3] pb-3">
                  <h3 className="text-xl font-semibold text-[#171717] flex items-center gap-2">
                    <Video className="w-5 h-5 text-[#0d74ce]" />
                    {item.title}
                  </h3>
                  <span className="font-mono text-sm font-bold text-[#171717]">
                    {item.price}
                  </span>
                </div>

                <p className="text-sm text-[#60646c] leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase text-[#60646c] font-semibold">
                    Included Features:
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#171717]">
                    {item.deliverables.map((del) => (
                      <li key={del} className="flex items-center gap-1.5 bg-[#fafafa] p-2 rounded border border-[#f0f0f3]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#f0f0f3]">
                <button
                  onClick={() => triggerLead(item.title, item.price)}
                  className="btn-primary w-full justify-center text-xs"
                >
                  Order {item.title}
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
