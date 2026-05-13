import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { products, services, formatUGX } from "@/lib/data";
import hero from "@/assets/hero.jpg";
import wellness from "@/assets/wellness.jpg";
import { ArrowRight, Sparkles, Leaf, Heart, Award } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TJ's Beauty Line — Spa, Skincare & Wellness in Gulu" },
      { name: "description", content: "Premium spa, facials, massage therapy, makeup and beauty products in Gulu, Uganda." },
    ],
  }),
  component: Home,
});

function Home() {
  const bestSellers = products.slice(0, 4);
  const featured = products.slice(4, 8);
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <img
            src={hero}
            alt="TJ's Beauty Line hero"
            width={1920}
            height={1080}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
          <div className="relative mx-auto max-w-7xl px-6 md:px-12 min-h-[560px] md:min-h-[680px] flex items-center">
            <div className="max-w-2xl py-16 md:py-24 text-white">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/80 mb-3 md:mb-4">Botanical Beauty • Gulu, Uganda</p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[1.05] drop-shadow-sm">
                Skincare made with the world's finest botanical oils.
              </h1>
              <p className="mt-5 md:mt-6 text-sm md:text-base text-white/85 max-w-xl">
                A sanctuary of beauty, spa and wellness in the heart of Gulu. Discover treatments
                and products crafted to reveal your most radiant self.
              </p>
              <div className="mt-7 md:mt-9 flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/shop" className="bg-white text-primary px-6 md:px-8 py-3 md:py-4 text-xs uppercase tracking-widest hover:bg-white/90 transition text-center">
                  Shop Now
                </Link>
                <Link to="/booking" className="border border-white/80 text-white px-6 md:px-8 py-3 md:py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition text-center">
                  Book a Service
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Brand strip */}
        <section className="border-y border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Leaf, label: "Natural Ingredients" },
              { icon: Heart, label: "Crafted with Love" },
              { icon: Award, label: "Certified Therapists" },
              { icon: Sparkles, label: "Gulu's Premier Spa" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-3 text-sm">
                <Icon className="h-5 w-5 text-rose" />
                <span className="uppercase tracking-wider text-xs">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Best Sellers */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-end justify-between mb-10">
              <h2 className="font-serif text-3xl md:text-4xl">Best Seller Products</h2>
              <Link to="/shop" className="text-xs uppercase tracking-widest hover:text-rose flex items-center gap-1">
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {bestSellers.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>

        {/* Editorial */}
        <section className="bg-blush">
          <div className="mx-auto max-w-7xl grid md:grid-cols-2 items-stretch">
            <div className="aspect-[4/5] md:aspect-auto">
              <img src={wellness} alt="Wellness ritual" width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center px-8 md:px-16 py-16">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-rose mb-4">Botanical Skincare</p>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight">Skincare made with the world's finest</h2>
                <p className="mt-6 text-muted-foreground max-w-md">
                  Sourced locally and globally — we blend tradition with science. Every ritual at TJ's
                  is designed to nurture your skin and soul.
                </p>
                <Link to="/about" className="inline-block mt-8 border-b border-primary pb-1 text-xs uppercase tracking-widest hover:text-rose">
                  Discover our story
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-rose mb-3">Spa & Wellness</p>
              <h2 className="font-serif text-3xl md:text-4xl">Our Signature Services</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {services.slice(0, 6).map((s) => (
                <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group">
                  <div className="aspect-[4/5] overflow-hidden bg-muted">
                    <img src={s.image} alt={s.name} width={1024} height={1024} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="pt-4">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.category} • {s.duration}</p>
                    <h3 className="font-serif text-2xl mt-1">{s.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.short}</p>
                    <p className="text-sm mt-2 font-medium">From {formatUGX(s.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured products */}
        <section className="py-20 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="font-serif text-3xl md:text-4xl mb-10">Featured Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featured.map((p) => <ProductCard key={p.slug} product={p} />)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-rose mb-3">Reserve Your Moment</p>
            <h2 className="font-serif text-4xl md:text-5xl">Treat yourself to a day of beauty.</h2>
            <p className="mt-6 text-muted-foreground">
              Book your spa, facial, massage or makeup appointment online — pay securely in UGX.
            </p>
            <Link to="/booking" className="inline-block mt-8 bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-widest hover:bg-primary/90">
              Book Appointment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
