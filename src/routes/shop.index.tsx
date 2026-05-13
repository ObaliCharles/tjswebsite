import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/data";
import { useState } from "react";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Shop — TJ's Beauty Line" },
      { name: "description", content: "Shop premium skincare, body care and beauty products in UGX. Delivery across Uganda." },
    ],
  }),
  component: Shop,
});

const categories = ["All", "Skincare", "Body", "Makeup"];

function Shop() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? products : products.filter((p) => p.category === cat);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-blush py-16">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-rose mb-3">Beauty Boutique</p>
            <h1 className="font-serif text-5xl md:text-6xl">Shop</h1>
          </div>
        </section>
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex justify-center gap-6 mb-10 flex-wrap">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`text-xs uppercase tracking-widest pb-1 border-b ${cat === c ? "border-rose text-rose" : "border-transparent hover:border-primary"}`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {filtered.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
