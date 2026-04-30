import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/documents", label: "Documents" },
  { to: "/team", label: "Team" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-pg flex h-20 items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-brand-red" }}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm font-medium text-foreground hover:text-brand-red transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+919822979157"
            className="inline-flex items-center gap-2 rounded-sm bg-brand-red px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-red-dark transition-colors"
          >
            <Phone className="h-4 w-4" />
            +91 9822979157
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-pg py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-brand-red bg-muted" }}
                activeOptions={{ exact: l.to === "/" }}
                className="px-3 py-3 text-sm font-medium rounded-sm hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+919822979157"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-brand-red px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              +91 9822979157
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
