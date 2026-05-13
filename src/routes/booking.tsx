import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { services, formatUGX } from "@/lib/data";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const searchSchema = z.object({ service: z.string().optional() });

export const Route = createFileRoute("/booking")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Book Appointment — TJ's Beauty Line" },
      { name: "description", content: "Book your spa, facial, massage, makeup or wellness appointment online at TJ's Beauty Line in Gulu." },
    ],
  }),
  component: Booking,
});

const times = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

function Booking() {
  const { service: preselected } = Route.useSearch();
  const [serviceSlug, setServiceSlug] = useState(preselected || services[0].slug);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pay, setPay] = useState("mtn");
  const [submitting, setSubmitting] = useState(false);

  const service = services.find((s) => s.slug === serviceSlug)!;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Booking confirmed! We'll send you a confirmation shortly.");
      setSubmitting(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-blush py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-rose mb-3">Reserve Your Moment</p>
            <h1 className="font-serif text-5xl md:text-6xl">Book an Appointment</h1>
            <p className="mt-4 text-muted-foreground">Choose a service, pick a time, and we'll take care of the rest.</p>
          </div>
        </section>

        <section className="py-16">
          <form onSubmit={onSubmit} className="mx-auto max-w-4xl px-4 grid md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-8">
              <div>
                <label className="block text-xs uppercase tracking-widest mb-2">Select Service</label>
                <select value={serviceSlug} onChange={(e) => setServiceSlug(e.target.value)} className="w-full border border-border px-4 py-3 bg-background">
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.name} — {formatUGX(s.price)} ({s.duration})</option>
                  ))}
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2">Date</label>
                  <input required type="date" value={date} min={new Date().toISOString().split("T")[0]} onChange={(e) => setDate(e.target.value)} className="w-full border border-border px-4 py-3 bg-background" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2">Time</label>
                  <select required value={time} onChange={(e) => setTime(e.target.value)} className="w-full border border-border px-4 py-3 bg-background">
                    <option value="">Choose time</option>
                    {times.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-serif text-xl">Your Details</h3>
                <input required placeholder="Full name" className="w-full border border-border px-4 py-3 bg-background" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required type="email" placeholder="Email" className="border border-border px-4 py-3 bg-background" />
                  <input required placeholder="Phone (+256)" className="border border-border px-4 py-3 bg-background" />
                </div>
                <textarea placeholder="Special requests (optional)" rows={3} className="w-full border border-border px-4 py-3 bg-background" />
              </div>

              <div>
                <h3 className="font-serif text-xl mb-3">Payment Method</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { id: "mtn", label: "MTN Mobile Money" },
                    { id: "airtel", label: "Airtel Money" },
                    { id: "card", label: "Card Payment" },
                    { id: "spot", label: "Pay at Spa" },
                  ].map((m) => (
                    <label key={m.id} className={`flex items-center gap-2 border p-3 cursor-pointer ${pay === m.id ? "border-rose bg-blush/30" : "border-border"}`}>
                      <input type="radio" name="pay" checked={pay === m.id} onChange={() => setPay(m.id)} />
                      <span className="text-sm">{m.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <aside className="bg-muted/40 p-6 h-fit space-y-3">
              <h3 className="font-serif text-xl">Booking Summary</h3>
              <div className="text-sm space-y-2 text-muted-foreground">
                <div className="flex justify-between"><span>Service</span><span className="text-foreground">{service.name}</span></div>
                <div className="flex justify-between"><span>Duration</span><span className="text-foreground">{service.duration}</span></div>
                <div className="flex justify-between"><span>Date</span><span className="text-foreground">{date || "—"}</span></div>
                <div className="flex justify-between"><span>Time</span><span className="text-foreground">{time || "—"}</span></div>
              </div>
              <div className="border-t border-border pt-3 flex justify-between font-medium">
                <span>Total</span><span>{formatUGX(service.price)}</span>
              </div>
              <button disabled={submitting} className="w-full bg-primary text-primary-foreground py-4 text-xs uppercase tracking-widest hover:bg-primary/90 disabled:opacity-50">
                {submitting ? "Booking..." : "Confirm Booking"}
              </button>
              <p className="text-[10px] text-muted-foreground text-center">Prices in UGX • Confirmation by SMS/Email</p>
            </aside>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
