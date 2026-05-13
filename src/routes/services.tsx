import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { services, formatUGX } from "@/lib/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — TJ's Beauty Line" },
      { name: "description", content: "Spa services, facials, massage therapy, makeup and wellness treatments at TJ's Beauty Line in Gulu." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-blush py-16">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-rose mb-3">Spa • Skincare • Wellness</p>
            <h1 className="font-serif text-5xl md:text-6xl">Our Services</h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Treatments designed for your skin, body and soul. Book online and pay securely in UGX.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.slug} className="bg-card border border-border group">
                <Link to="/services/$slug" params={{ slug: s.slug }} className="block aspect-[4/3] overflow-hidden">
                  <img src={s.image} alt={s.name} width={1024} height={1024} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </Link>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.category} • {s.duration}</p>
                  <h3 className="font-serif text-2xl mt-1">{s.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.short}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-medium">{formatUGX(s.price)}</span>
                    <Link to="/booking" search={{ service: s.slug }} className="bg-primary text-primary-foreground px-5 py-2 text-xs uppercase tracking-widest hover:bg-primary/90">
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
