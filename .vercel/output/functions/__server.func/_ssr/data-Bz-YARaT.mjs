import { l as Calculator, R as Receipt, B as BookOpen, m as Building2, n as FileBadge, U as Users, o as FilePenLine, p as Banknote, q as Briefcase } from "../_libs/lucide-react.mjs";
const services = [
  { icon: Calculator, title: "Income Tax", desc: "ITR filing, tax planning, capital gains, advance tax & notice replies." },
  { icon: Receipt, title: "GST Services", desc: "Registration, returns, audits, refunds, e-way bills and amendments." },
  { icon: BookOpen, title: "Accounting", desc: "Bookkeeping, Tally, financial statements, MIS reports & audit prep." },
  { icon: Building2, title: "Business Registration", desc: "Proprietorship, Partnership, LLP, Pvt Ltd, OPC, MSME & Startup." },
  { icon: FileBadge, title: "Licenses & Certificates", desc: "FSSAI, Udyam, Gumasta, IEC, Trade License, DSC and more." },
  { icon: Users, title: "Payroll & Labour", desc: "EPF, ESIC, payroll processing, salary structuring & compliance." },
  { icon: FilePenLine, title: "Legal Documentation", desc: "Rent agreements, affidavits, declarations, and drafting." },
  { icon: Banknote, title: "Loans & Finance", desc: "Business, home & project loans plus investment planning." },
  { icon: Briefcase, title: "Business Consultancy", desc: "Setup, growth strategy, tax saving and digital marketing advice." }
];
const itrDocuments = [
  "PAN Card",
  "Aadhaar Card",
  "Bank Account Details (with IFSC)",
  "Form 16 / Salary Slips",
  "Form 26AS & AIS / TIS",
  "Interest Certificates (Bank, FD, Post Office)",
  "Investment Proofs (LIC, PPF, ELSS, NPS, etc.)",
  "Home Loan Interest Certificate",
  "Capital Gain Statements (Shares, MF, Property)",
  "Rent Receipts / HRA Proofs",
  "Medical Insurance Premium Receipts",
  "Donation Receipts (80G)"
];
const team = [
  { name: "Prakash Gajra", role: "Founder & Chairman" },
  { name: "Arya Gajra", role: "Co-Founder & CEO" },
  { name: "Manjula Gajra", role: "Admin Head" },
  { name: "Prajakta Raut", role: "Head Accountant" },
  { name: "Sonali Gawad", role: "Accountant" }
];
const testimonials = [
  { name: "Rakesh Sharma", location: "Palghar", rating: 5, text: "Prakash sir has been handling my ITR for over 8 years. Always prompt, transparent and accurate. Highly recommended for any tax matter." },
  { name: "Neha Patil", location: "Mumbai", rating: 5, text: "Their GST team helped my boutique with registration and monthly filing. The process was smooth and incredibly affordable." },
  { name: "Anil Mehta", location: "Vasai", rating: 5, text: "Got my Pvt Ltd company registered within days. Excellent guidance on tax planning and MSME registration too." },
  { name: "Sunita Joshi", location: "Boisar", rating: 5, text: "Reliable accountants who actually pick up the phone. Helped us with payroll setup and EPF compliance flawlessly." },
  { name: "Vikram Desai", location: "Virar", rating: 5, text: "Honest advice on capital gains from property sale saved me significant tax. Truly experts in their field." },
  { name: "Pooja Kulkarni", location: "Thane", rating: 5, text: "From FSSAI to Udyam to GST — they handled everything for my food startup under one roof." }
];
const detailedServices = [
  { title: "Income Tax Services", items: ["ITR Filing – Individuals", "ITR – Proprietorship", "ITR – Partnership / LLP", "ITR – Private Limited", "Capital Gain Tax", "Tax Planning", "Advance Tax", "Income Tax Notice Reply", "TDS Consultancy", "PAN Card Services"] },
  { title: "GST Services", items: ["GST Registration", "GSTR-1 Filing", "GSTR-3B Filing", "Annual Return (GSTR-9)", "GST Audit", "Notice Handling", "Amendment", "Cancellation", "Refund", "E-Way Bill"] },
  { title: "Accounting Services", items: ["Bookkeeping", "Monthly Accounting", "Tally Accounting", "Ledger Maintenance", "Profit & Loss", "Balance Sheet", "Cash Flow Statement", "MIS Reports", "Audit Preparation"] },
  { title: "Business Registration", items: ["Proprietorship", "Partnership Firm", "LLP", "Private Limited", "OPC", "Startup India", "MSME / Udyam"] },
  { title: "Licenses & Certificates", items: ["FSSAI", "Udyog / Udyam", "Gumasta", "Shop & Establishment", "Professional Tax", "IEC Code", "Trade License", "Digital Signature (DSC)"] },
  { title: "Payroll & Labour", items: ["EPF Registration & Filing", "ESIC", "Salary Structuring", "Payroll Processing", "Labour Law Compliance"] },
  { title: "Legal Documentation", items: ["Rent Agreement", "Leave & License", "Affidavit", "Declaration", "Agreement Drafting"] },
  { title: "Loans & Finance", items: ["Secured & Unsecured Loans", "Business Loans", "Home Loans", "Project Funding", "Investment Planning"] },
  { title: "Business Consultancy", items: ["Business Setup", "Growth Planning", "Tax Saving Strategies", "Expansion Advisory", "Digital Marketing"] }
];
export {
  team as a,
  detailedServices as d,
  itrDocuments as i,
  services as s,
  testimonials as t
};
