import type { Product } from "@/lib/catalog";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col border bg-card transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="border-b bg-card p-3">
        <img src={product.image} alt={`${product.name} – ${product.composition}`} loading="lazy" width={943} height={294} className="w-full" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl">{product.name}</h3>
          <span className="shrink-0 border px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-widest text-muted-foreground">{product.form}</span>
        </div>
        <p className="text-sm text-muted-foreground">{product.composition}</p>
      </div>
    </article>
  );
}
