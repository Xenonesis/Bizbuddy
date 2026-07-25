"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Phone,
  ArrowRight,
  ShieldCheck,
  LayoutGrid,
  TrendingUp,
  FileText,
  Video,
  Code2
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenLeadModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenLeadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const servicesMenu = [
    {
      name: "Social Media Management",
      href: "/services/social-media",
      icon: TrendingUp,
      desc: "Posts, Reels, Ads & Profile Growth"
    },
    {
      name: "Accounts & Tax Solutions",
      href: "/services/accounts",
      icon: FileText,
      desc: "GST, ITR, PF Returns & Bookkeeping"
    },
    {
      name: "Website Development",
      href: "/services/website-development",
      icon: Code2,
      desc: "Landing Pages & E-Commerce"
    },
    {
      name: "Reels & Graphic Editing",
      href: "/services/editing",
      icon: Video,
      desc: "Reels, Banners & AI Videos"
    },
    {
      name: "Other Business Services",
      href: "/services/other",
      icon: LayoutGrid,
      desc: "Printing, Support & Business Growth"
    }
  ];

  const navLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#0c0d10]/95 backdrop-blur-md border-b border-[#dcdee0] dark:border-[#27272a] transition-all">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-[64px] flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-lg tracking-tight group-hover:scale-105 transition-transform">
            B
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg tracking-tight text-[#171717] leading-none flex items-center gap-1">
              BizBuddy
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0d74ce]" />
            </span>
            <span className="text-[10px] text-[#60646c] font-mono tracking-wider uppercase leading-none mt-0.5">
              Digital Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors py-2 ${
                pathname.startsWith("/services") ? "text-black dark:text-white font-semibold" : "text-[#171717] dark:text-[#f4f4f5] hover:text-[#0d74ce] dark:hover:text-[#38bdf8]"
              }`}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-[#0d74ce]" : "text-[#60646c]"}`} />
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-80 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl shadow-lg p-2 grid gap-1 mt-1 animate-in fade-in slide-in-from-top-2 duration-150">
                {servicesMenu.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#f0f0f3] dark:hover:bg-[#1e2026] transition-colors group"
                    >
                        <div className="w-8 h-8 rounded-md bg-[#f0f0f3] dark:bg-[#27272a] text-[#171717] dark:text-[#f4f4f5] flex items-center justify-center group-hover:bg-black dark:group-hover:bg-[#f4f4f5] group-hover:text-white dark:group-hover:text-black transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#171717] dark:text-[#f4f4f5] group-hover:text-[#0d74ce] dark:group-hover:text-[#38bdf8] transition-colors">
                            {item.name}
                          </div>
                          <div className="text-xs text-[#60646c] dark:text-zinc-400">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-black dark:text-white font-semibold" : "text-[#171717] dark:text-[#f4f4f5] hover:text-[#0d74ce] dark:hover:text-[#38bdf8]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={onOpenConsultation}
            className="btn-secondary text-xs sm:text-sm font-medium"
          >
            Book Consultation
          </button>
          <button
            onClick={() => onOpenLeadModal("General Inquiry")}
            className="btn-primary text-xs sm:text-sm font-medium"
          >
            Get Started
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#171717] dark:text-[#f4f4f5] hover:bg-[#f0f0f3] dark:hover:bg-[#27272a] rounded-lg"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#14161b] border-b border-[#dcdee0] dark:border-[#27272a] px-4 pt-3 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#60646c] px-3 py-1">
              Services
            </div>
            {servicesMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-[#171717] dark:text-[#f4f4f5] hover:bg-[#f0f0f3] dark:hover:bg-[#27272a] rounded-md"
              >
                <item.icon className="w-4 h-4 text-[#0d74ce]" />
                {item.name}
              </Link>
            ))}
          </div>

          <div className="border-t border-[#f0f0f3] dark:border-[#27272a] pt-3 space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#60646c] px-3 py-1">
              Company
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-[#171717] dark:text-[#f4f4f5] hover:bg-[#f0f0f3] dark:hover:bg-[#27272a] rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <div className="flex items-center justify-between px-3 py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#60646c]">Theme</span>
              <ThemeToggle />
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="btn-secondary w-full justify-center"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal("Mobile Menu");
              }}
              className="btn-primary w-full justify-center"
            >
              Get Started Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
