"use client";

import React, { createContext, useContext, useState } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ConsultationModal } from "./ConsultationModal";
import { LeadModal } from "./LeadModal";
import { FloatingContactWidget } from "./FloatingContactWidget";

interface ModalHandlers {
  onOpenLeadModal: (serviceName?: string, price?: string) => void;
  onOpenConsultation: () => void;
}

const noop = () => {};

export const ModalContext = createContext<ModalHandlers>({
  onOpenLeadModal: noop,
  onOpenConsultation: noop,
});

export const useModals = () => useContext(ModalContext);

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

  const modalHandlers: ModalHandlers = {
    onOpenLeadModal: openLeadModal,
    onOpenConsultation: () => setConsultationOpen(true),
  };

  return (
    <ModalContext.Provider value={modalHandlers}>
      <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-[#0c0d10] text-[#171717] dark:text-[#f4f4f5] transition-colors duration-200">
        <Navbar
          onOpenConsultation={() => setConsultationOpen(true)}
          onOpenLeadModal={(svc) => openLeadModal(svc)}
        />

        <main className="flex-1">{children}</main>

        <Footer />

        <FloatingContactWidget
          onOpenConsultation={() => setConsultationOpen(true)}
        />

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
    </ModalContext.Provider>
  );
};
