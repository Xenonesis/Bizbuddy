"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, PhoneCall, X, Sparkles } from "lucide-react";

interface FloatingContactWidgetProps {
  onOpenConsultation: () => void;
}

export const FloatingContactWidget: React.FC<FloatingContactWidgetProps> = ({ onOpenConsultation }) => {
  const [expanded, setExpanded] = useState(false);
  const whatsappUrl = "https://wa.me/919876543210?text=Hello%20BizBuddy,%20I%20want%20to%20know%20more%20about%20your%20services!";

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-72 bg-white/95 dark:bg-[#14161b]/98 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800 rounded-2xl shadow-2xl p-4 space-y-3"
          >
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80 pb-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                2 Business Experts Online
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Need help picking a plan or setting up your website & taxes? Chat with us instantly!
            </p>

            <div className="flex flex-col gap-2 pt-1">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                Instant WhatsApp Chat
              </a>
              <button
                onClick={() => {
                  setExpanded(false);
                  onOpenConsultation();
                }}
                className="flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-black dark:hover:bg-zinc-100 text-xs font-semibold py-2.5 px-3 rounded-xl transition-colors shadow-xs"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Schedule Free 15-Min Call
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border border-zinc-800 dark:border-zinc-200 px-4 py-2.5 rounded-full shadow-2xl font-medium text-xs tracking-tight group"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="font-semibold">Need Help?</span>
        <Sparkles className="w-3.5 h-3.5 text-sky-400 dark:text-sky-600 group-hover:rotate-12 transition-transform" />
      </motion.button>
    </div>
  );
};
