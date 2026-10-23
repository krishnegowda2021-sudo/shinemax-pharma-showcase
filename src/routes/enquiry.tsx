import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { company } from "@/lib/catalog";

export const Route = createFileRoute("/enquiry")({
  head: () => ({
    meta: [
      { title: "Product Enquiry | Shinemax Pharma" },
      { name: "description", content: "Send a product or partnership enquiry to Shinemax Pharma, Mysuru." },
      { property: "og:title", content: "Enquire with Shinemax Pharma" },
      { property: "og:description", content: "Doctors, distributors and pharmacies: tell us what you need." },
    ],
  }),
  component: Enquiry,
});

const roles = ["Doctor / healthcare professional", "Distributor / stockist", "Pharmacy", "Other"];

function Enquiry() {
  const [role, setRole] = useState(roles[0]);
  const [error, setError] = useState("");

  function buildText(form: HTMLFormElement) {
    const d = new FormData(form);
    const name = String(d.get("name") || "").trim();
    const phone = String(d.get("phone") || "").trim();
    const message = String(d.get("message") || "").trim();
    if (!name || !phone || !message) {
      setError("Please fill in your name, phone and message.");
      return null;
    }
    setError("");
    return `Enquiry from ${name} (${role})\nPhone: ${phone}\nCity: ${d.get("city") || "-"}\n\n${message}`;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = buildText(e.currentTarget);
    if (text) window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  }

  function sendEmail(form: HTMLFormElement | null) {
    if (!form) return;
    const text = buildText(form);
    if (text) window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Product enquiry")}&body=${encodeURIComponent(text)}`;
  }

  return (
    <div className="container-x grid gap-16 py-16 md:grid-cols-12 md:py-24">
      <div className="md:col-span-5">
        <p className="eyebrow">Enquiry</p>
        <h1 className="mt-4 text-5xl">Discuss your requirements</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Tell us which products or segments you are interested in. Your message opens in WhatsApp or your email app, ready to send to our team.
        </p>
      </div>
      <form onSubmit={onSubmit} className="space-y-6 border bg-card p-8 md:col-span-7" noValidate>
        <fieldset>
          <legend className="mb-3 text-sm font-semibold">I am a</legend>
          <div className="flex flex-wrap gap-2">
            {roles.map((r) => (
              <Button key={r} type="button" size="sm" variant={role === r ? "default" : "outline"} aria-pressed={role === r} onClick={() => setRole(r)}>
                {r}
              </Button>
            ))}
          </div>
        </fieldset>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2"><Label htmlFor="name">Name *</Label><Input id="name" name="name" maxLength={100} /></div>
          <div className="space-y-2"><Label htmlFor="phone">Phone *</Label><Input id="phone" name="phone" type="tel" maxLength={20} /></div>
        </div>
        <div className="space-y-2"><Label htmlFor="city">City</Label><Input id="city" name="city" maxLength={60} /></div>
        <div className="space-y-2"><Label htmlFor="message">Message *</Label><Textarea id="message" name="message" rows={5} maxLength={1000} placeholder="e.g. Interested in Telmishine and Glimeshine range for our pharmacy" /></div>
        {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
        <div className="flex flex-wrap gap-3">
          <Button type="submit" size="lg">Send via WhatsApp</Button>
          <Button type="button" size="lg" variant="outline" onClick={(e) => sendEmail(e.currentTarget.form)}>Send via email</Button>
        </div>
      </form>
    </div>
  );
}
