"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Heart } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/917838472802?text=Hello%20Bizbuddy%20Consulting,%20I%20want%20to%20know%20more%20about%20your%20services!";

  return (
    <footer className="bg-white dark:bg-[#0c0d10] border-t border-[#dcdee0] dark:border-[#27272a] text-[#60646c] dark:text-zinc-400">
      {/* WhatsApp Banner Strip */}
      <div className="bg-[#f0f0f3] dark:bg-[#14161b] border-b border-[#dcdee0] dark:border-[#27272a] py-3 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2 text-sm text-[#171717] dark:text-[#f4f4f5]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium">Instant Support Available:</span> Chat directly with our business expert on WhatsApp
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-[#20bd5a] transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/android-chrome-192x192.png"
              alt="Bizbuddy Consulting"
              className="w-8 h-8 rounded-lg object-contain"
            />
            <div>
              <span className="font-semibold text-lg text-[#171717] dark:text-[#f4f4f5] tracking-tight leading-none block">
                Bizbuddy Consulting
              </span>
              <span className="text-[10px] text-[#60646c] dark:text-zinc-400 font-mono tracking-wider uppercase leading-none mt-0.5 block">
                Grow Smarter Scale Faster
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed max-w-sm">
            Bizbuddy Consulting is your all-in-one digital growth platform. From social media marketing, viral reels editing, and custom web development to EPF, TDS return filings, and company incorporation.
          </p>
          <div className="pt-2 flex items-center gap-4 text-xs font-mono text-[#171717] dark:text-[#f4f4f5]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Tax Compliant
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              24/7 WhatsApp Response
            </div>
          </div>
        </div>

        {/* Col 2: Services */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171717] dark:text-[#f4f4f5] font-mono">
            Core Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services/social-media" className="hover:text-[#0d74ce] transition-colors">
                Social Media Management
              </Link>
            </li>
            <li>
              <Link href="/services/accounts" className="hover:text-[#0d74ce] transition-colors">
                Accounts & Tax Returns
              </Link>
            </li>
            <li>
              <Link href="/services/website-development" className="hover:text-[#0d74ce] transition-colors">
                Website Development
              </Link>
            </li>
            <li>
              <Link href="/services/editing" className="hover:text-[#0d74ce] transition-colors">
                Reels & Video Editing
              </Link>
            </li>
            <li>
              <Link href="/services/other" className="hover:text-[#0d74ce] transition-colors">
                Printing & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Company & Tools */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171717] dark:text-[#f4f4f5] font-mono">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/pricing" className="hover:text-[#0d74ce] transition-colors">
                Monthly Pricing Plans
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-[#0d74ce] transition-colors">
                Case Studies & Work
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-[#0d74ce] transition-colors">
                Client Testimonials
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#0d74ce] transition-colors">
                About Our Team
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-[#0d74ce] transition-colors flex items-center gap-1">
                Client Dashboard <ArrowUpRight className="w-3 h-3 text-[#0d74ce]" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Details */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171717] dark:text-[#f4f4f5] font-mono">
            Get In Touch
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#171717] dark:text-[#f4f4f5]" />
              <span>+91 120-4725137</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#171717] dark:text-[#f4f4f5]" />
              <span>Bizbuddyconsulting@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#171717] dark:text-[#f4f4f5] shrink-0 mt-0.5" />
              <span>A-26, NOIDA SECTOR 3 , NEARBY NOIDA SECTOR 16 METRO STATION</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#f0f0f3] dark:border-zinc-800 py-6 px-4 sm:px-6 bg-[#fafafa] dark:bg-[#0c0d10]">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} Bizbuddy Consulting Solutions Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-[#476cff]">
            <ThemeToggle />
            <Link href="/contact" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:underline">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
