"use client";

import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ConsultationModal } from "./ConsultationModal";
import { LeadModal } from "./LeadModal";

export const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("General Business Solution");
  const [selectedPrice, setSelectedPrice] = useState<string | undefined>();

  const openLeadModal = (serviceName?: string, price?: string) => {
    setSelectedService(serviceName || "General Business Solution");
    setSelectedPrice(price);
    setLeadModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-[#171717]">
      <Navbar
        onOpenConsultation={() => setConsultationOpen(true)}
        onOpenLeadModal={(svc) => openLeadModal(svc)}
      />

      <main className="flex-1">
        {/* Pass modal handlers down via React Context or direct clone if needed */}
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              onOpenConsultation: () => setConsultationOpen(true),
              onOpenLeadModal: openLeadModal
            });
          }
          return child;
        })}
      </main>

      <Footer />

      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        serviceName={selectedService}
        price={selectedPrice}
      />
    </div>
  );
};
