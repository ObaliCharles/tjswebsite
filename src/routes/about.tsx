import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import wellness from "@/assets/wellness.jpg";
import facial from "@/assets/facial.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TJ's Beauty Line" },
      { name: "description", content: "Learn about TJ's Beauty Line, Gulu's premier beauty, spa and wellness destination." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-blush py-20">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-rose mb-4">Our Story</p>
            <h1 className="font-serif text-5xl md:text-6xl">A sanctuary of beauty in Gulu.</h1>
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              TJ's Beauty Line was born from a passion for natural beauty and holistic wellness.
              We believe every woman deserves to feel radiant, confident and cared for.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">
            <img src={facial} alt="Facial" width={1024} height={1024} loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">Crafted with care, rooted in nature.</h2>
              <p className="mt-4 text-muted-foreground">
                From the lush landscapes of Northern Uganda, we source the finest botanicals to bring
                you spa rituals, skincare and wellness experiences that nourish from the inside out.
              </p>
              <p className="mt-4 text-muted-foreground">
                Our team of certified therapists and beauty experts have one mission: to make you feel
                like the most beautiful version of yourself.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/40">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-10 text-center">
            {[
              { n: "10K+", l: "Happy Clients" },
              { n: "20+", l: "Spa Treatments" },
              { n: "5★", l: "Average Rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-5xl text-rose">{s.n}</div>
                <div className="mt-2 text-sm uppercase tracking-widest">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl">Our Promise</h2>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                <li>✦ Every product crafted with natural, ethically-sourced ingredients.</li>
                <li>✦ Certified, experienced beauty and spa professionals.</li>
                <li>✦ A warm, welcoming environment where you feel at home.</li>
                <li>✦ Personalized treatments tailored to your unique needs.</li>
              </ul>
            </div>
            <img src={wellness} alt="Wellness" width={1024} height={1024} loading="lazy" className="w-full aspect-[4/5] object-cover" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
