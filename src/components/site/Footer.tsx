import { Link } from "@tanstack/react-router";
import { categories, company } from "@/lib/catalog";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl">{company.name}</p>
          <p className="mt-4 max-w-md text-sm opacity-70">
            Quality medicines at affordable cost for doctors, healthcare professionals and channel partners. Mysuru, since {company.founded}.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Products</p>
          <ul className="space-y-2 text-sm opacity-80">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to="/products/$category" params={{ category: c.slug }} className="hover:opacity-100 hover:underline">{c.name}</Link>
              </li>
            ))}
            <li><Link to="/products" className="hover:underline">Full catalogue</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <address className="space-y-2 text-sm not-italic opacity-80">
            <p>{company.address}</p>
            <p><a href={`mailto:${company.email}`} className="hover:underline">{company.email}</a></p>
            <p><a href={`https://wa.me/${company.whatsapp}`} className="hover:underline">WhatsApp {company.whatsappDisplay}</a></p>
          </address>
        </div>
      </div>
      <div className="border-t border-ink-foreground/15">
        <div className="container-x flex flex-col gap-2 py-6 text-xs opacity-60 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Product information is intended for registered medical practitioners and trade partners.</p>
        </div>
      </div>
    </footer>
  );
}
