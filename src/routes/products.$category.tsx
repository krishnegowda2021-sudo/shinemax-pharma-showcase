import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, products } from "@/lib/catalog";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.category.name} Products | Shinemax Pharma` },
          { name: "description", content: loaderData.category.summary },
          { property: "og:title", content: `${loaderData.category.name} | Shinemax Pharma` },
          { property: "og:description", content: loaderData.category.summary },
        ]
      : [{ title: "Unavailable | Shinemax Pharma" }, { name: "robots", content: "noindex" }],
  }),
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const list = products.filter((p) => p.category === category.slug);
  return (
    <>
      <section className="border-b bg-paper">
        <div className="container-x grid items-center gap-10 py-16 md:grid-cols-2">
          <div>
            <Link to="/products" className="eyebrow">← Catalogue</Link>
            <h1 className="mt-4 text-5xl md:text-6xl">{category.name}</h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">{category.summary}</p>
            <p className="mt-4 font-display text-muted-foreground">{list.length} products</p>
          </div>
          <img src={category.image} alt={category.name} className="aspect-[4/3] w-full object-cover object-[50%_65%]" />
        </div>
      </section>
      <section className="container-x py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="mt-16 flex flex-wrap gap-3">
          {categories.filter((c) => c.slug !== category.slug).map((c) => (
            <Button key={c.slug} asChild variant="outline">
              <Link to="/products/$category" params={{ category: c.slug }}>{c.name}</Link>
            </Button>
          ))}
          <Button asChild><Link to="/enquiry">Enquire about this segment</Link></Button>
        </div>
      </section>
    </>
  );
}
