import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { formatUGX } from "@/lib/data";

export const Route = createFileRoute("/gift-cards")({
  head: () => ({
    meta: [
      { title: "Gift Cards — TJ's Beauty Line Gulu" },
      { name: "description", content: "Give the gift of beauty and wellness. Digital gift cards from TJ's Beauty Line, Gulu." },
    ],
  }),
  component: Gifts,
});

const denominations = [50000, 100000, 200000, 500000, 1000000];

function Gifts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 text-center bg-blush">
          <p className="text-xs uppercase tracking-[0.3em] text-rose mb-3">A Thoughtful Gift</p>
          <h1 className="font-serif text-4xl md:text-5xl">TJ's Beauty Gift Cards</h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto px-4">
            Give a loved one a moment of pure luxury. Redeemable on any service or product.
          </p>
        </section>
        <section className="py-14">
          <div className="mx-auto max-w-5xl px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {denominations.map((amt) => (
              <div key={amt} className="border border-border p-6 bg-gradient-to-br from-blush to-background">
                <p className="text-xs uppercase tracking-[0.3em] text-rose">Gift Card</p>
                <p className="font-serif text-3xl mt-2">{formatUGX(amt)}</p>
                <p className="text-sm text-muted-foreground mt-2">Delivered instantly via email or WhatsApp.</p>
                <Link to="/checkout" className="block mt-5 bg-primary text-primary-foreground text-center py-3 text-xs uppercase tracking-widest">Buy now</Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
