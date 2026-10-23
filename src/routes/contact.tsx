import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/catalog";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Shinemax Pharma | Gangothri Layout, Mysuru" },
      { name: "description", content: "Reach Shinemax Pharma in Gangothri Layout, Mysuru by email or WhatsApp." },
      { property: "og:title", content: "Contact Shinemax Pharma" },
      { property: "og:description", content: "Address, email and WhatsApp for Shinemax Pharma, Mysuru." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: MapPin, label: "Office", value: company.address, href: company.mapsUrl, cta: "Open in Maps" },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}`, cta: "Write to us" },
    { icon: MessageCircle, label: "WhatsApp", value: company.whatsappDisplay, href: `https://wa.me/${company.whatsapp}`, cta: "Chat with us" },
  ];
  return (
    <div className="container-x py-16 md:py-24">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 text-5xl md:text-6xl">Get in touch</h1>
      <div className="mt-12 grid gap-px border bg-border md:grid-cols-3">
        {items.map(({ icon: Icon, label, value, href, cta }) => (
          <div key={label} className="flex flex-col bg-card p-8">
            <Icon className="h-5 w-5 text-brand-blue" />
            <p className="eyebrow mt-6">{label}</p>
            <p className="mt-3 flex-1 font-display text-xl break-words">{value}</p>
            <a href={href} target="_blank" rel="noreferrer" className="mt-6 text-sm font-semibold text-primary hover:underline">{cta} →</a>
          </div>
        ))}
      </div>
      <iframe
        title="Shinemax Pharma location"
        src="https://maps.google.com/maps?q=65%205th%20Cross%20Maruthi%20Temple%20Rd%20Gangothri%20Layout%20Mysuru%20570009&output=embed"
        className="mt-12 h-96 w-full border"
        loading="lazy"
      />
      <Button asChild size="lg" className="mt-12"><Link to="/enquiry">Send a product enquiry</Link></Button>
    </div>
  );
}
