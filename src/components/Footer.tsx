import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white/80">
      <div className="container-pg py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Trusted Income Tax & GST Practitioner serving individuals and businesses across India since 2001.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/15 hover:border-brand-red hover:text-brand-red transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/team", label: "Our Team" },
              { to: "/blog", label: "Blog" },
              { to: "/testimonials", label: "Testimonials" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-brand-red transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {["Income Tax", "GST Services", "Accounting", "Business Registration", "Licenses", "Payroll"].map((s) => (
              <li key={s}>
                <Link to="/services" className="hover:text-brand-red transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-brand-red shrink-0" />
              <span>201, Vraj, 2nd Floor, Above Gandhi Distributor, Plot No. 24, Rajnikamal Park, Mahim Road, Palghar (W) – 401404</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="h-4 w-4 text-brand-red shrink-0" />
              <a href="tel:+919822979157" className="hover:text-brand-red">+91 9822979157</a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="h-4 w-4 text-brand-red shrink-0" />
              <a href="mailto:prakashgajra@gmail.com" className="hover:text-brand-red break-all">prakashgajra@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-pg py-5 text-xs text-white/50 text-center">
          © 2025 Prakash Gajra – Income Tax & GST Practitioner. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
