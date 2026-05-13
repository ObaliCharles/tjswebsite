import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Heart } from "lucide-react";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — TJ's Beauty Line" }] }),
  component: Wishlist,
});

function Wishlist() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <Heart className="h-10 w-10 mx-auto text-rose" />
          <h1 className="font-serif text-4xl mt-4">Your Wishlist</h1>
          <p className="text-muted-foreground mt-3">Save your favourite products and services here.</p>
          <Link to="/shop" className="inline-block mt-8 bg-primary text-primary-foreground px-8 py-3 text-xs uppercase tracking-widest">Browse Shop</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
