import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Support Services — Printing, Consulting & More",
  description: "Printing, visiting cards, accounting support, customer helpline integration, and growth consulting for Indian small businesses.",
  openGraph: {
    title: "Other Business Support Services | BizBuddy",
    description: "Printing, visiting cards, accounting support & growth consulting."
  }
};

export default function OtherServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
