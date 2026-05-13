import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TJ's Beauty Line" },
      { name: "description", content: "Visit, call or message TJ's Beauty Line in Gulu, Uganda." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll reply within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-blush py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-rose mb-3">Get in Touch</p>
            <h1 className="font-serif text-5xl md:text-6xl">Contact Us</h1>
            <p className="mt-4 text-muted-foreground">We'd love to hear from you. Visit our spa or send us a message.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl mb-6">Visit Our Spa</h2>
              <ul className="space-y-4">
                <li className="flex gap-3"><MapPin className="text-rose shrink-0" /> <span>Gulu City, Northern Uganda</span></li>
                <li className="flex gap-3"><Phone className="text-rose shrink-0" /> <span>+256 700 000 000</span></li>
                <li className="flex gap-3"><Mail className="text-rose shrink-0" /> <span>hello@tjsbeautyline.ug</span></li>
                <li className="flex gap-3"><Clock className="text-rose shrink-0" /> <div><div>Mon–Sat: 9:00 – 19:00</div><div>Sun: 10:00 – 16:00</div></div></li>
              </ul>
              <div className="mt-8 aspect-video bg-muted">
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=Gulu,Uganda&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
            <form onSubmit={submit} className="space-y-4">
              <h2 className="font-serif text-3xl mb-6">Send a Message</h2>
              <input required placeholder="Your name" className="w-full border border-border px-4 py-3 bg-background" />
              <input required type="email" placeholder="Email address" className="w-full border border-border px-4 py-3 bg-background" />
              <input placeholder="Phone (optional)" className="w-full border border-border px-4 py-3 bg-background" />
              <input required placeholder="Subject" className="w-full border border-border px-4 py-3 bg-background" />
              <textarea required rows={5} placeholder="Your message" className="w-full border border-border px-4 py-3 bg-background" />
              <button className="bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-widest hover:bg-primary/90">Send Message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
