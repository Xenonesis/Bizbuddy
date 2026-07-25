import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST, ITR & EPF Filing Services — CA Verified (₹999+)",
  description: "CA-verified tax & accounting services — GST registration & returns (₹999/mo), ITR filing (₹1,199/yr), EPF, TDS & ROC compliance. Trusted by 250+ businesses.",
  openGraph: {
    title: "Accounts & Tax Filing Services — Starting ₹999 | BizBuddy",
    description: "Professional CA-verified GST, ITR, EPF and ROC filing services for Indian businesses."
  }
};

export default function AccountsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
