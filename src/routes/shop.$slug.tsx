import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { products, formatUGX } from "@/lib/data";
import { addToCart } from "@/lib/cart";
import { toast } from "sonner";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.product.name} — TJ's Beauty Line` },
      { name: "description", content: loaderData.product.description },
    ] : [],
  }),
  component: ProductDetail,
  notFoundComponent: () => <div className="min-h-screen flex items-center justify-center">Product not found</div>,
  errorComponent: ({ error }) => <div className="p-8">{error.message}</div>,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-12">
          <div className="bg-muted aspect-square overflow-hidden">
            <img src={product.image} alt={product.name} width={800} height={800} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-rose">{product.category}</p>
            <h1 className="font-serif text-4xl md:text-5xl mt-2">{product.name}</h1>
            <p className="mt-4 text-2xl">{formatUGX(product.price)}</p>
            <p className="mt-6 text-muted-foreground">{product.description}</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center border border-border">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3"><Minus className="h-3 w-3" /></button>
                <span className="px-4">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-3"><Plus className="h-3 w-3" /></button>
              </div>
              <button
                onClick={() => {
                  addToCart({ id: product.slug, name: product.name, price: product.price, image: product.image, type: "product" }, qty);
                  toast.success("Added to cart");
                }}
                className="flex-1 bg-primary text-primary-foreground py-4 text-xs uppercase tracking-widest hover:bg-primary/90"
              >
                Add to cart
              </button>
            </div>
            <Link to="/cart" className="block mt-4 text-center border border-primary py-4 text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground">
              View Cart
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
