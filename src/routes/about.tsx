import { createFileRoute, Link } from "@tanstack/react-router";
import about from "@/assets/uploads_about_01.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { categories, company } from "@/lib/catalog";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Shinemax Pharma (I) Pvt Ltd | Mysuru" },
      { name: "description", content: "Established in 2013 in Mysuru, Shinemax Pharma supplies quality medicines at affordable cost." },
      { property: "og:title", content: "About Shinemax Pharma" },
      { property: "og:description", content: "Our story, commitment and therapy focus since 2013." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="container-x py-16 md:py-24">
        <p className="eyebrow">About us</p>
        <h1 className="mt-4 max-w-4xl text-5xl leading-tight md:text-7xl">Established {company.founded}, built on quality and affordability.</h1>
      </section>
      <section className="container-x grid gap-12 pb-24 md:grid-cols-2">
        <img src={about.url} alt="Healthcare professional" width={800} height={532} className="w-full" />
        <div className="space-y-6 text-lg text-muted-foreground">
          <p>
            <strong className="text-foreground">{company.name}</strong> was established by dynamic and committed people in the year {company.founded}. We deal with drugs related to diabetes, hypertension, gynaecology, gastro and other therapy areas.
          </p>
          <p>
            Shinemax Pharma is committed to providing products with high quality standards at affordable cost, and to working towards improving the quality of life of patients in society by joining hands with doctors, healthcare professionals and all our channel partners.
          </p>
          <div className="border-t pt-6">
            <p className="eyebrow mb-3">Segments</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <Button key={c.slug} asChild variant="outline" size="sm">
                  <Link to="/products/$category" params={{ category: c.slug }}>{c.name}</Link>
                </Button>
              ))}
            </div>
          </div>
          <p className="text-sm">Registered office: {company.address}</p>
        </div>
      </section>
    </>
  );
}
