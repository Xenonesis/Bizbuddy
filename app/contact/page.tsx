"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageSquare, CheckCircle2, ArrowRight } from "lucide-react";
import { submitLead } from "../../lib/supabase";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Social Media Management");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setIsSubmitting(true);
    await submitLead({ name, phone, email, service, message });
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi BizBuddy!\nI submitted an inquiry for *${service}*.\nName: ${name || "Client"}\nPhone: ${phone}`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, "_blank");
  };

  return (
    <div className="space-y-16 pb-20">
      {/* Sub-hero */}
      <section className="hero-sky-wash pt-16 pb-14 border-b border-[#dcdee0]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-pill">GET IN TOUCH WITH US</div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#171717] dark:text-[#f4f4f5]">
            We are here to help your business grow.
          </h1>
          <p className="text-base text-[#60646c]">
            Have questions about our monthly plans or tax return filings? Connect with an expert agent on WhatsApp or fill out the form below.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="card-surface p-8 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl space-y-6">
            <h3 className="text-xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
              Send Us a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-semibold dark:text-[#f4f4f5]">Message Received!</h4>
                <p className="text-sm text-[#60646c] dark:text-zinc-400">
                  Thank you <span className="font-semibold text-black dark:text-white">{name}</span>. Our team will call you back at <span className="font-semibold text-black dark:text-white">{phone}</span> within 2 hours.
                </p>
                <button onClick={handleWhatsApp} className="btn-primary bg-[#25D366] hover:bg-[#20bd5a] border-none w-full justify-center">
                  <MessageSquare className="w-4 h-4 fill-white" />
                  Connect Instantly on WhatsApp
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-input w-full"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
                      WhatsApp Phone *
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
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-input w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="text-input w-full bg-white dark:bg-[#14161b]"
                  >
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Accounts & Tax Filing">Accounts & Tax Filing</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Reel & Video Editing">Reel & Video Editing</option>
                    <option value="Printing & Other Services">Printing & Other Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-[#60646c] dark:text-zinc-400 mb-1">
                    Message / Business Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-md border border-[#dcdee0] dark:border-[#27272a] bg-white dark:bg-[#14161b] text-black dark:text-[#f4f4f5] p-2.5 text-sm outline-none focus:border-black dark:focus:border-white"
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full justify-center">
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </form>
            )}
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <div className="card-surface p-8 space-y-6 bg-white dark:bg-[#14161b] border border-[#dcdee0] dark:border-[#27272a] rounded-xl">
              <h3 className="text-xl font-semibold text-[#171717] dark:text-[#f4f4f5]">
                Office & Contact Details
              </h3>

              <div className="space-y-4 text-sm text-[#171717] dark:text-[#f4f4f5]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#f0f0f3] dark:bg-[#27272a] flex items-center justify-center text-[#0d74ce] dark:text-[#38bdf8]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#60646c] dark:text-zinc-400">Phone & WhatsApp Helpline</div>
                    <div className="font-semibold">+91 98765 43210</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#f0f0f3] dark:bg-[#27272a] flex items-center justify-center text-[#0d74ce] dark:text-[#38bdf8]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#60646c] dark:text-zinc-400">Email Support</div>
                    <div className="font-semibold">support@bizbuddy.in</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#f0f0f3] dark:bg-[#27272a] flex items-center justify-center text-[#0d74ce] dark:text-[#38bdf8]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#60646c] dark:text-zinc-400">Corporate Head Office</div>
                    <div className="font-semibold">Tech Tower, Cyber Hub, MG Road, New Delhi</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-6 rounded-xl space-y-3">
              <h4 className="font-semibold text-base text-[#171717] dark:text-[#f4f4f5] flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                Prefer Instant WhatsApp Chat?
              </h4>
              <p className="text-xs text-[#60646c] dark:text-zinc-400">
                Skip waiting for email callbacks. Click below to start an instant live chat with an account representative.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%20BizBuddy,%20I%20have%20a%20business%20inquiry!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-[#25D366] hover:bg-[#20bd5a] border-none inline-flex text-xs px-4 py-2"
              >
                Chat on WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
