import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { services, formatUGX } from "@/lib/data";
import { Clock, Tag } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.name} — TJ's Beauty Line` },
          { name: "description", content: loaderData.service.short },
        ]
      : [],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-3xl">Service not found</h1>
        <Link to="/services" className="mt-4 inline-block underline">Back to services</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => <div className="p-8">{error.message}</div>,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto">
            <img src={service.image} alt={service.name} width={1024} height={1024} className="w-full h-full object-cover" />
          </div>
          <div className="bg-blush flex items-center px-8 md:px-16 py-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-rose mb-3">{service.category}</p>
              <h1 className="font-serif text-4xl md:text-5xl">{service.name}</h1>
              <p className="mt-6 text-muted-foreground">{service.description}</p>
              <div className="mt-8 flex gap-6 text-sm">
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" />{service.duration}</span>
                <span className="flex items-center gap-2"><Tag className="h-4 w-4" />{formatUGX(service.price)}</span>
              </div>
              <Link to="/booking" search={{ service: service.slug }} className="mt-8 inline-block bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-widest hover:bg-primary/90">
                Book This Service
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
