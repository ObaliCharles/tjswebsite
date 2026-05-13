import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — TJ's Beauty Line" }] }),
  component: FAQ,
});

const faqs = [
  { q: "How do I book an appointment?", a: "Visit our Booking page, choose your service, date and time. You'll receive a confirmation by SMS or email." },
  { q: "What payment methods do you accept?", a: "We accept MTN Mobile Money, Airtel Money, Visa / Mastercard, and cash on arrival. All prices are in Ugandan Shillings (UGX)." },
  { q: "Do you offer delivery for products?", a: "Yes. We deliver across Gulu and major cities in Uganda. Free delivery on orders above UGX 200,000." },
  { q: "Can I cancel or reschedule a booking?", a: "Yes, please contact us at least 24 hours in advance to reschedule or cancel." },
  { q: "Where are you located?", a: "We're located in Gulu City, Northern Uganda. See the Contact page for directions." },
];

function FAQ() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-3xl px-4 py-16 w-full">
        <h1 className="font-serif text-5xl mb-10 text-center">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="border border-border p-5 group">
              <summary className="font-serif text-xl cursor-pointer">{f.q}</summary>
              <p className="mt-3 text-muted-foreground text-sm">{f.a}</p>
            </details>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
