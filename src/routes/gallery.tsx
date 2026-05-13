import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import facial from "@/assets/facial.jpg";
import massage from "@/assets/massage.jpg";
import makeup from "@/assets/makeup.jpg";
import scrub from "@/assets/scrub.jpg";
import wellness from "@/assets/wellness.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — TJ's Beauty Line Gulu" },
      { name: "description", content: "Step inside TJ's Beauty Line — our spa, treatments and signature beauty moments in Gulu, Uganda." },
    ],
  }),
  component: Gallery,
});

const shots = [
  { src: hero, alt: "Spa interior" },
  { src: facial, alt: "Specialized facial treatment" },
  { src: massage, alt: "Massage therapy room" },
  { src: makeup, alt: "Bridal makeup" },
  { src: scrub, alt: "Body scrub ritual" },
  { src: wellness, alt: "Wellness lounge" },
];

function Gallery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-16 text-center bg-blush">
          <p className="text-xs uppercase tracking-[0.3em] text-rose mb-3">A Look Inside</p>
          <h1 className="font-serif text-4xl md:text-5xl">Our Gallery</h1>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto px-4">
            Moments of beauty, calm and craftsmanship from our Gulu spa.
          </p>
        </section>
        <section className="py-14">
          <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {shots.map((s, i) => (
              <div key={i} className={`overflow-hidden ${i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-square"}`}>
                <img src={s.src} alt={s.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
