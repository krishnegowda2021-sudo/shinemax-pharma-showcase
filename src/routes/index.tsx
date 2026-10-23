import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-tablets.jpg";
import about from "@/assets/uploads_about_01.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, company, products } from "@/lib/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shinemax Pharma | Diabetology, Cardiology & General Medicine – Mysuru" },
      {
        name: "description",
        content:
          "Shinemax Pharma (I) Pvt Ltd, Mysuru, supplies quality diabetology, cardiology and general medicine formulations at affordable cost since 2013.",
      },
      { property: "og:title", content: "Shinemax Pharma (I) Pvt Ltd" },
      { property: "og:description", content: "Quality medicines at affordable cost for doctors and channel partners, since 2013." },
    ],
  }),
  component: Home,
});

const featured = ["01", "05", "20", "29", "36", "37"];

function Home() {
  const counts = Object.fromEntries(categories.map((c) => [c.slug, products.filter((p) => p.category === c.slug).length]));
  return (
    <>
      <section className="relative overflow-hidden border-b">
        <img src={hero} alt="" width={1600} height={1104} className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        <div className="container-x relative py-24 md:py-36">
          <div className="max-w-2xl animate-rise">
            <p className="eyebrow">Shinemax Pharma (I) Pvt Ltd · Mysuru</p>
            <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
              Quality therapy for <em className="text-primary">chronic care</em>, at an honest cost.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Since {company.founded}, we have brought diabetology, cardiology and general medicine formulations to doctors, healthcare professionals and channel partners.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/products">Explore products <ArrowRight /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/enquiry">Discuss your requirements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-12 py-24 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow">About the company</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Working with doctors to improve patients’ quality of life.</h2>
        </div>
        <div className="space-y-5 text-lg text-muted-foreground md:col-span-6 md:col-start-7">
          <p>
            Shinemax Pharma was established in {company.founded} by a dynamic and committed team. We deal in medicines for diabetes, hypertension, gynaecology, gastro care and more.
          </p>
          <p>
            We are committed to products of high quality standards at affordable cost — joining hands with doctors, healthcare professionals and our channel partners.
          </p>
          <dl className="grid grid-cols-3 gap-6 border-t pt-8 text-foreground">
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Established</dt><dd className="font-display text-4xl">{company.founded}</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Segments</dt><dd className="font-display text-4xl">{categories.length}</dd></div>
            <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Listed products</dt><dd className="font-display text-4xl">{products.length}</dd></div>
          </dl>
        </div>
      </section>

      <section className="border-y bg-paper py-24">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Therapeutic segments</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Three focused portfolios.</h2>
            </div>
            <Link to="/products" className="text-sm font-bold uppercase tracking-widest text-primary">Full catalogue →</Link>
          </div>
          <div className="mt-12 grid gap-px border bg-border md:grid-cols-3">
            {categories.map((c, i) => (
              <Link key={c.slug} to="/products/$category" params={{ category: c.slug }} className="group bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover object-[50%_65%] transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <p className="font-display text-sm text-muted-foreground">0{i + 1} · {counts[c.slug]} products</p>
                  <h3 className="mt-2 text-3xl group-hover:text-primary">{c.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{c.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <p className="eyebrow">Selected formulations</p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl">From statins to SGLT2 combinations.</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.filter((p) => featured.includes(p.id)).map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      <section className="border-t bg-paper">
        <div className="container-x grid items-center gap-12 py-24 md:grid-cols-2">
          <img src={about.url} alt="Healthcare professional" loading="lazy" width={800} height={532} className="w-full" />
          <div>
            <p className="eyebrow">How we work</p>
            <h2 className="mt-4 text-4xl">Partnering across the care chain.</h2>
            <ul className="mt-8 divide-y border-y">
              {[
                ["Doctors & healthcare professionals", "Product information and a growing portfolio across chronic therapy areas."],
                ["Channel partners", "Distributors, stockists and pharmacies can enquire about supply of our range."],
                ["Patients", "Our aim: quality medicines at affordable cost, prescribed by their doctor."],
              ].map(([t, d]) => (
                <li key={t} className="py-5">
                  <p className="font-display text-xl">{t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="container-x flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
          <h2 className="max-w-xl text-4xl">Looking to stock or prescribe Shinemax products?</h2>
          <Button asChild size="lg"><Link to="/enquiry">Send an enquiry <ArrowRight /></Link></Button>
        </div>
      </section>
    </>
  );
}
