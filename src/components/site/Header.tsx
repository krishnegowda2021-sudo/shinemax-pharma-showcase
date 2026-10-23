import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Mail, Menu, MessageCircle, X } from "lucide-react";
import logo from "@/assets/images_logos_logo.png.asset.json";
import { categories, company } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products", dropdown: true },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="hidden border-b bg-ink text-ink-foreground md:block">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <span>Mysuru, Karnataka · Est. {company.founded}</span>
          <div className="flex gap-6">
            <a href={`mailto:${company.email}`} className="inline-flex items-center gap-1.5 hover:opacity-80">
              <Mail className="h-3.5 w-3.5" /> {company.email}
            </a>
            <a href={`https://wa.me/${company.whatsapp}`} className="inline-flex items-center gap-1.5 hover:opacity-80">
              <MessageCircle className="h-3.5 w-3.5" /> {company.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" aria-label="Shinemax Pharma home">
          <img src={logo.url} alt="Shinemax Pharma logo" width={256} height={91} className="h-12 w-auto md:h-14" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) =>
            "dropdown" in item ? (
              <div key={item.to} className="group relative">
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label} <ChevronDown className="h-3.5 w-3.5 transition group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full w-80 translate-y-1 border bg-popover p-2 opacity-0 shadow-lg transition group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      to="/products/$category"
                      params={{ category: c.slug }}
                      className="block px-3 py-3 hover:bg-muted"
                    >
                      <span className="block font-display text-lg">{c.name}</span>
                      <span className="line-clamp-1 text-xs text-muted-foreground">{c.summary}</span>
                    </Link>
                  ))}
                  <Link to="/products" className="mt-1 block border-t px-3 pt-3 pb-2 text-xs font-bold uppercase tracking-widest text-primary">
                    View full catalogue →
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-2 text-sm font-semibold hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/enquiry">Send an enquiry</Link>
          </Button>
          <button
            className="p-2 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="border-b py-3 font-display text-xl">
                {item.label}
              </Link>
            ))}
            {categories.map((c) => (
              <Link
                key={c.slug}
                to="/products/$category"
                params={{ category: c.slug }}
                onClick={() => setOpen(false)}
                className="py-2 pl-4 text-sm text-muted-foreground"
              >
                {c.name}
              </Link>
            ))}
            <Button asChild className="mt-4">
              <Link to="/enquiry" onClick={() => setOpen(false)}>Send an enquiry</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
