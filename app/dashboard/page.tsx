"use client";

import React, { useState } from "react";
import {
  Users,
  TrendingUp,
  FileText,
  DollarSign,
  CheckCircle2,
  Plus,
  Search,
  Filter,
  BarChart3,
  Globe,
  Star,
  Settings
} from "lucide-react";
import { SOCIAL_MEDIA_PLANS, ACCOUNT_SERVICES, PORTFOLIO_ITEMS, TESTIMONIALS } from "../../lib/data";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"leads" | "services" | "portfolio" | "analytics">("leads");

  // Mock leads
  const [leadsList, setLeadsList] = useState([
    { id: "L-101", name: "Ankit Mehta", phone: "9876543210", service: "Social Media Super Plan (₹1,999)", date: "Today 14:20", status: "New Inquiry" },
    { id: "L-102", name: "Pooja Verma", phone: "9812345678", service: "GST Registration & Returns", date: "Today 11:05", status: "In Progress" },
    { id: "L-103", name: "Suresh Commerce", phone: "9898989898", service: "E-Commerce Web Dev (₹14,999)", date: "Yesterday", status: "Closed / Converted" }
  ]);

  return (
    <div className="space-y-8 pb-20">
      {/* Dashboard Top Header */}
      <section className="bg-[#171717] text-white py-10 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              BIZBUDDY ADMIN & CLIENT PORTAL
            </div>
            <h1 className="text-3xl font-semibold mt-1">
              Management Dashboard
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-md border border-zinc-700">
              ROLE: Administrator
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Top Analytics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card-surface p-5 space-y-2">
            <div className="text-xs text-[#60646c] font-mono">TOTAL LEADS GENERATED</div>
            <div className="text-3xl font-bold font-mono text-[#171717]">148</div>
            <div className="text-[10px] text-emerald-600 font-mono">↑ +32 this week</div>
          </div>

          <div className="card-surface p-5 space-y-2">
            <div className="text-xs text-[#60646c] font-mono">ACTIVE SUBSCRIPTIONS</div>
            <div className="text-3xl font-bold font-mono text-[#171717]">84</div>
            <div className="text-[10px] text-emerald-600 font-mono">Social & Accounts</div>
          </div>

          <div className="card-surface p-5 space-y-2">
            <div className="text-xs text-[#60646c] font-mono">TAX RETURNS FILED</div>
            <div className="text-3xl font-bold font-mono text-[#171717]">210</div>
            <div className="text-[10px] text-emerald-600 font-mono">100% Verified</div>
          </div>

          <div className="card-surface p-5 space-y-2">
            <div className="text-xs text-[#60646c] font-mono">MONTHLY REVENUE</div>
            <div className="text-3xl font-bold font-mono text-[#171717]">₹2.45L</div>
            <div className="text-[10px] text-emerald-600 font-mono">Target Reached</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-[#dcdee0] flex items-center gap-6">
          {[
            { id: "leads", label: "Manage Leads" },
            { id: "services", label: "Services & Pricing" },
            { id: "portfolio", label: "Portfolio Showcase" },
            { id: "analytics", label: "Analytics Overview" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab.id
                  ? "border-black text-black font-semibold"
                  : "border-transparent text-[#60646c] hover:text-black"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content 1: Leads */}
        {activeTab === "leads" && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-[#171717]">Recent Inquiries & Leads</h3>
              <div className="badge-pill font-mono">{leadsList.length} Active Leads</div>
            </div>

            <div className="card-surface overflow-x-auto rounded-xl">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#fafafa] border-b border-[#dcdee0] text-xs font-mono uppercase text-[#60646c]">
                    <th className="p-4">Lead ID</th>
                    <th className="p-4">Client Name</th>
                    <th className="p-4">Phone</th>
                    <th className="p-4">Service Requested</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f0f0f3] text-sm">
                  {leadsList.map((lead) => (
                    <tr key={lead.id} className="hover:bg-[#fafafa]">
                      <td className="p-4 font-mono text-xs text-[#0d74ce]">{lead.id}</td>
                      <td className="p-4 font-medium text-[#171717]">{lead.name}</td>
                      <td className="p-4 font-mono text-xs text-[#171717]">{lead.phone}</td>
                      <td className="p-4 text-[#171717]">{lead.service}</td>
                      <td className="p-4 text-xs text-[#60646c]">{lead.date}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono">
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content 2: Services & Pricing */}
        {activeTab === "services" && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#171717]">Active Monthly Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SOCIAL_MEDIA_PLANS.map((plan) => (
                <div key={plan.id} className="card-surface p-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-lg">{plan.name}</h4>
                    <span className="font-mono font-bold text-base">{plan.price}</span>
                  </div>
                  <p className="text-xs text-[#60646c]">{plan.features.length} deliverables included</p>
                  <button className="btn-secondary w-full text-xs">Edit Plan Details</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 3: Portfolio */}
        {activeTab === "portfolio" && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-[#171717]">Manage Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PORTFOLIO_ITEMS.slice(0, 3).map((item) => (
                <div key={item.id} className="card-surface p-4 space-y-2">
                  <div className="text-xs font-mono text-[#0d74ce]">{item.client}</div>
                  <div className="font-semibold text-base">{item.title}</div>
                  <div className="text-xs text-emerald-600 font-mono">{item.impactMetric}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 4: Analytics */}
        {activeTab === "analytics" && (
          <div className="card-surface p-8 text-center space-y-4">
            <BarChart3 className="w-12 h-12 text-[#0d74ce] mx-auto" />
            <h3 className="text-xl font-semibold">Detailed Analytics Engine</h3>
            <p className="text-sm text-[#60646c] max-w-md mx-auto">
              Real-time Google Analytics 4 & Meta Ads API performance metrics tracking client impressions, click-through rates, and lead conversion efficiency.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
