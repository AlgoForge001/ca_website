import {
  Calculator, Receipt, BookOpen, Building2, FileBadge,
  Users, FileSignature, Banknote, Briefcase,
} from "lucide-react";

export const services = [
  { icon: Calculator, title: "Income Tax", desc: "ITR filing, tax planning, capital gains, advance tax & notice replies." },
  { icon: Receipt, title: "GST Services", desc: "Registration, returns, audits, refunds, e-way bills and amendments." },
  { icon: BookOpen, title: "Accounting", desc: "Bookkeeping, Tally, financial statements, MIS reports & audit prep." },
  { icon: Building2, title: "Business Registration", desc: "Proprietorship, Partnership, LLP, Pvt Ltd, OPC, MSME & Startup." },
  { icon: FileBadge, title: "Licenses & Certificates", desc: "FSSAI, Udyam, Gumasta, IEC, Trade License, DSC and more." },
  { icon: Users, title: "Payroll & Labour", desc: "EPF, ESIC, payroll processing, salary structuring & compliance." },
  { icon: FileSignature, title: "Legal Documentation", desc: "Rent agreements, affidavits, declarations, and drafting." },
  { icon: Banknote, title: "Loans & Finance", desc: "Business, home & project loans plus investment planning." },
  { icon: Briefcase, title: "Business Consultancy", desc: "Setup, growth strategy, tax saving and digital marketing advice." },
];

export const itrDocuments = [
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
  "Donation Receipts (80G)",
];

export const team = [
  { name: "Prakash Gajra", role: "Founder & Chairman", image: "/prakash.png" },
  { name: "Arya Gajra", role: "Co-Founder & CEO", image: "/arya.png" },
  { name: "Manjula Gajra", role: "Admin Head", image: "/manjula.png" },
  { name: "Prajakta Raut", role: "Head Accountant", image: "/prajakta.png" },
  { name: "Sonali Gawad", role: "Accountant" },
];

export const testimonials = [
  { name: "Rakesh Sharma", location: "Palghar", rating: 5, text: "Prakash sir has been handling my ITR for over 8 years. Always prompt, transparent and accurate. Highly recommended for any tax matter." },
  { name: "Neha Patil", location: "Mumbai", rating: 5, text: "Their GST team helped my boutique with registration and monthly filing. The process was smooth and incredibly affordable." },
  { name: "Anil Mehta", location: "Vasai", rating: 5, text: "Got my Pvt Ltd company registered within days. Excellent guidance on tax planning and MSME registration too." },
  { name: "Sunita Joshi", location: "Boisar", rating: 5, text: "Reliable accountants who actually pick up the phone. Helped us with payroll setup and EPF compliance flawlessly." },
  { name: "Vikram Desai", location: "Virar", rating: 5, text: "Honest advice on capital gains from property sale saved me significant tax. Truly experts in their field." },
  { name: "Pooja Kulkarni", location: "Thane", rating: 5, text: "From FSSAI to Udyam to GST — they handled everything for my food startup under one roof." },
];

export const detailedServices = [
  { title: "Income Tax Services", items: ["ITR Filing – Individuals", "ITR – Proprietorship", "ITR – Partnership / LLP", "ITR – Private Limited", "Capital Gain Tax", "Tax Planning", "Advance Tax", "Income Tax Notice Reply", "TDS Consultancy", "PAN Card Services"] },
  { title: "GST Services", items: ["GST Registration", "GSTR-1 Filing", "GSTR-3B Filing", "Annual Return (GSTR-9)", "GST Audit", "Notice Handling", "Amendment", "Cancellation", "Refund", "E-Way Bill"] },
  { title: "Accounting Services", items: ["Bookkeeping", "Monthly Accounting", "Tally Accounting", "Ledger Maintenance", "Profit & Loss", "Balance Sheet", "Cash Flow Statement", "MIS Reports", "Audit Preparation"] },
  { title: "Business Registration", items: ["Proprietorship", "Partnership Firm", "LLP", "Private Limited", "OPC", "Startup India", "MSME / Udyam"] },
  { title: "Licenses & Certificates", items: ["FSSAI", "Udyog / Udyam", "Gumasta", "Shop & Establishment", "Professional Tax", "IEC Code", "Trade License", "Digital Signature (DSC)"] },
  { title: "Payroll & Labour", items: ["EPF Registration & Filing", "ESIC", "Salary Structuring", "Payroll Processing", "Labour Law Compliance"] },
  { title: "Legal Documentation", items: ["Rent Agreement", "Leave & License", "Affidavit", "Declaration", "Agreement Drafting"] },
  { title: "Loans & Finance", items: ["Secured & Unsecured Loans", "Business Loans", "Home Loans", "Project Funding", "Investment Planning"] },
  { title: "Business Consultancy", items: ["Business Setup", "Growth Planning", "Tax Saving Strategies", "Expansion Advisory", "Digital Marketing"] },
];

export const documentChecklists = [
  {
    id: "gst",
    title: "GST Registration",
    items: [
      "PAN Card of Proprietor / Firm / Company",
      "Aadhaar Card of Proprietor / Partners / Directors",
      "Passport Size Photograph",
      "Business Address Proof (Electricity Bill / Property Tax Receipt / Rent Agreement)",
      "If Rented Property – NOC from Owner",
      "Bank Account Proof (Cancelled Cheque / Bank Statement / Passbook)",
      "Business Registration Proof (Partnership Deed / COI / Shop Act / MSME)",
      "Mobile Number",
      "Email ID",
      "Digital Signature (for Company / LLP)",
    ],
    whatsappMsg: "GST Registration",
  },
  {
    id: "udyam",
    title: "Udyam (MSME) Registration",
    items: [
      "Aadhaar Card of Proprietor / Partner / Director",
      "PAN Card of Business / Proprietor",
      "Mobile Number linked with Aadhaar",
      "Email ID",
      "Business Address Details",
      "Bank Account Details (Account Number & IFSC Code)",
      "Type of Business Activity (Manufacturing / Service / Trading)",
      "Number of Employees",
      "Investment in Plant & Machinery / Equipment",
      "Annual Turnover Details",
      "GST Number (if available)",
      "PAN & Aadhaar of Partners / Directors (for Partnership / Company / LLP)",
    ],
    whatsappMsg: "Udyog Udyam",
  },
  {
    id: "fssai",
    title: "Food Licence (FSSAI Registration)",
    items: [
      "Aadhaar Card of Proprietor / Partner / Director",
      "PAN Card of Proprietor / Firm / Company",
      "Passport Size Photograph",
      "Business Address Proof (Electricity Bill / Rent Agreement / Property Tax Receipt)",
      "Shop & Establishment / Trade License (if applicable)",
      "Nature of Food Business Details (Manufacturer / Trader / Restaurant / Caterer / Retailer / Wholesaler)",
      "List of Food Products to be dealt with",
      "Bank Account Proof (Cancelled Cheque / Passbook / Bank Statement)",
      "Mobile Number",
      "Email ID",
      "NOC from Owner (if rented premises)",
      "GST Certificate (if available)",
    ],
    whatsappMsg: "Food Licence",
  },
  {
    id: "partnership",
    title: "Partnership Deed Preparation",
    items: [
      "PAN Card of All Partners",
      "Aadhaar Card of All Partners",
      "Passport Size Photographs of All Partners",
      "Mobile Number & Email ID of All Partners",
      "Business Name Proposed",
      "Nature of Business Activity",
      "Business Address Proof (Electricity Bill / Rent Agreement / Property Tax Receipt)",
      "Ownership Proof / NOC from Owner (if rented premises)",
      "Capital Contribution Details of Each Partner",
      "Profit & Loss Sharing Ratio",
      "Authorized Partner Details",
      "Witness ID Proof (if required)",
    ],
    whatsappMsg: "Partnership Deed preparation",
  },
];
