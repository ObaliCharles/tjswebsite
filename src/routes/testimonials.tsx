import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — TJ's Beauty Line Gulu" },
      { name: "description", content: "Hear from clients who've experienced TJ's Beauty Line spa, facials, makeup and wellness in Gulu." },
    ],
  }),
  component: Tests,
});

const reviews = [
  { name: "Aceng Joyce", text: "The bridal makeup was flawless and lasted all day. TJ's is now my go-to in Gulu.", rating: 5 },
  { name: "Okello Brian", text: "Best deep tissue massage I've had. Very calming space and warm staff.", rating: 5 },
  { name: "Akello Sarah", text: "My skin glows after their specialized facial. Booking was super easy.", rating: 5 },
  { name: "Lamaro Grace", text: "Loved the body scrub and the products I took home. Worth every shilling.", rating: 5 },
  { name: "Komakech Ivan", text: "Gifted my wife a spa day — she came back glowing and grateful.", rating: 5 },
  { name: "Atim Patience", text: "Professional, hygienic, and luxurious. Gulu finally has a real spa.", rating: 5 },
];

function Tests() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 text-center bg-blush">
          <p className="text-xs uppercase tracking-[0.3em] text-rose mb-3">Client Love</p>
          <h1 className="font-serif text-4xl md:text-5xl">Testimonials</h1>
        </section>
        <section className="py-14">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="border border-border p-6">
                <div className="flex gap-1 text-rose">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="font-serif text-lg mt-4 leading-snug">“{r.text}”</p>
                <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">— {r.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
