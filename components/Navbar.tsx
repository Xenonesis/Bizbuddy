"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
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

  // Close menus on route change or Escape key press
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-[#0c0d10]/90 backdrop-blur-md border-b border-[#dcdee0] dark:border-zinc-800/80 transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-[64px] flex items-center justify-between gap-4">
        
        {/* Brand Wordmark (Fixed Dark Mode Contrast) */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8.5 h-8.5 rounded-lg bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-lg tracking-tight group-hover:scale-105 transition-transform shadow-xs">
            B
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-lg tracking-tight text-[#171717] dark:text-white leading-none flex items-center gap-1">
              BizBuddy
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0d74ce] dark:bg-[#38bdf8]" />
            </span>
            <span className="text-[10px] text-[#60646c] dark:text-zinc-400 font-mono tracking-wider uppercase leading-none mt-0.5">
              Digital Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          
          {/* Services Dropdown with Safe Hover Area */}
          <div
            className="relative py-2"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                isServicesActive || servicesDropdownOpen
                  ? "text-black dark:text-white bg-zinc-100 dark:bg-zinc-800/80 font-semibold"
                  : "text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50"
              }`}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-[#0d74ce] dark:text-[#38bdf8]" : "text-zinc-400 dark:text-zinc-500"}`} />
            </button>

            {/* Floating Popover */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 pt-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="w-80 bg-white/95 dark:bg-[#14161b]/98 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl shadow-2xl p-2 grid gap-1">
                  <div className="px-3 py-1 text-[10px] font-semibold font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    Explore Services
                  </div>
                  {servicesMenu.map((item) => {
                    const Icon = item.icon;
                    const isServiceActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 group ${
                          isServiceActive
                            ? "bg-zinc-100 dark:bg-zinc-800/80"
                            : "hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60"
                        }`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 flex items-center justify-center group-hover:bg-[#0d74ce] dark:group-hover:bg-[#38bdf8] group-hover:text-white dark:group-hover:text-black transition-colors shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-[#0d74ce] dark:group-hover:text-[#38bdf8] transition-colors leading-snug">
                            {item.name}
                          </div>
                          <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-normal">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Core Nav Links */}
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? "text-black dark:text-white bg-zinc-100 dark:bg-zinc-800/80 font-semibold"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Actions (Compact Theme Toggle + Buttons) */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <ThemeToggle variant="compact" />

          <button
            onClick={onOpenConsultation}
            className="btn-secondary text-xs xl:text-sm font-medium px-3 xl:px-4 py-2 h-9 xl:h-10 hidden lg:inline-flex"
          >
            Book Consultation
          </button>
          
          <button
            onClick={() => onOpenLeadModal("General Inquiry")}
            className="btn-primary text-xs xl:text-sm font-medium px-3.5 xl:px-4.5 py-2 h-9 xl:h-10 shrink-0"
          >
            Get Started
            <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 ml-1.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
          aria-label="Toggle Navigation"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Backdrop Mask */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="relative z-40 lg:hidden bg-white/98 dark:bg-[#0c0d10]/98 backdrop-blur-xl border-b border-[#dcdee0] dark:border-zinc-800 px-4 pt-3 pb-6 space-y-4 max-h-[calc(100vh-64px)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            <div className="text-[11px] font-semibold font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-3 py-1">
              Services
            </div>
            {servicesMenu.map((item) => {
              const isServiceActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isServiceActive
                      ? "bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-semibold"
                      : "text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
                  }`}
                >
                  <item.icon className="w-4 h-4 text-[#0d74ce] dark:text-[#38bdf8]" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-3 space-y-1">
            <div className="text-[11px] font-semibold font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 px-3 py-1">
              Navigation
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? "bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-semibold"
                      : "text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-3 border-t border-zinc-100 dark:border-zinc-800/80">
            <div className="flex items-center justify-between px-3 py-1">
              <span className="text-[11px] font-semibold font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Theme</span>
              <ThemeToggle variant="segmented" />
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="btn-secondary w-full justify-center text-sm font-medium py-2.5"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal("Mobile Menu");
              }}
              className="btn-primary w-full justify-center text-sm font-medium py-2.5"
            >
              Get Started Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

