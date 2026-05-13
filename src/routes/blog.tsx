import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import scrub from "@/assets/scrub.jpg";
import wellness from "@/assets/wellness.jpg";
import facial from "@/assets/facial.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — TJ's Beauty Line" },
      { name: "description", content: "Beauty tips, skincare guides and wellness inspiration from TJ's Beauty Line." },
    ],
  }),
  component: Blog,
});

const posts = [
  { slug: "skincare-routine", title: "Building a Skincare Routine That Glows", category: "Skincare", image: facial, excerpt: "The five essential steps for radiant skin year-round." },
  { slug: "spa-day", title: "How to Plan the Perfect Spa Day", category: "Wellness", image: wellness, excerpt: "Make the most of your wellness ritual with these tips." },
  { slug: "natural-scrubs", title: "The Magic of Natural Body Scrubs", category: "Body", image: scrub, excerpt: "Why exfoliation is the secret to soft, glowing skin." },
];

function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-blush py-16">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-rose mb-3">Latest News</p>
            <h1 className="font-serif text-5xl md:text-6xl">Journal</h1>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-8">
            {posts.map((p) => (
              <article key={p.slug} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-rose mt-4">{p.category}</p>
                <h2 className="font-serif text-2xl mt-2">{p.title}</h2>
                <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
                <Link to="/blog" className="inline-block mt-3 text-xs uppercase tracking-widest border-b border-primary pb-0.5 hover:text-rose">Read more</Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
