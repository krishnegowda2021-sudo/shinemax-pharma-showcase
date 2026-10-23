import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Search } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products } from "@/lib/catalog";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Product Catalogue | Shinemax Pharma" },
      { name: "description", content: "Full Shinemax Pharma catalogue: diabetology, cardiology and general medicine formulations with compositions." },
      { property: "og:title", content: "Product Catalogue | Shinemax Pharma" },
      { property: "og:description", content: "Browse all Shinemax Pharma formulations by segment or molecule." },
    ],
  }),
  component: Catalogue,
});

function Catalogue() {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  return (
    <div className="container-x py-16 md:py-24">
      <p className="eyebrow">Catalogue</p>
      <h1 className="mt-4 text-5xl md:text-6xl">Our products</h1>
      <div className="relative mt-10 max-w-lg">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          aria-label="Search products"
          placeholder="Search by brand or molecule, e.g. Telmisartan"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="h-12 pl-10"
        />
      </div>
      {categories.map((c) => {
        const list = products.filter(
          (p) => p.category === c.slug && (!term || `${p.name} ${p.composition}`.toLowerCase().includes(term)),
        );
        if (!list.length) return null;
        return (
          <section key={c.slug} className="mt-16">
            <div className="flex items-baseline justify-between border-b pb-4">
              <h2 className="text-3xl">{c.name}</h2>
              <Link to="/products/$category" params={{ category: c.slug }} className="text-sm font-semibold text-primary">
                Segment page →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        );
      })}
      {term && !products.some((p) => `${p.name} ${p.composition}`.toLowerCase().includes(term)) && (
        <p className="mt-16 text-muted-foreground">No products match “{q}”.</p>
      )}
    </div>
  );
}
