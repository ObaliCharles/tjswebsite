import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useCart, cartTotal, clearCart } from "@/lib/cart";
import { formatUGX } from "@/lib/data";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — TJ's Beauty Line" }] }),
  component: Checkout,
});

function Checkout() {
  const items = useCart();
  const navigate = useNavigate();
  const subtotal = cartTotal(items);
  const delivery = subtotal > 200000 || subtotal === 0 ? 0 : 15000;
  const total = subtotal + delivery;
  const [method, setMethod] = useState("mtn");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      clearCart();
      toast.success("Order placed! We'll contact you shortly to confirm.");
      navigate({ to: "/" });
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-6xl px-4 py-16 w-full">
        <h1 className="font-serif text-4xl md:text-5xl mb-10">Checkout</h1>
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="font-serif text-2xl mb-4">Contact</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Full name" className="border border-border px-4 py-3 bg-background" />
                <input required type="email" placeholder="Email" className="border border-border px-4 py-3 bg-background" />
                <input required placeholder="Phone (+256)" className="border border-border px-4 py-3 bg-background sm:col-span-2" />
              </div>
            </section>
            <section>
              <h2 className="font-serif text-2xl mb-4">Delivery Address</h2>
              <div className="grid gap-4">
                <input required placeholder="Street address" className="border border-border px-4 py-3 bg-background" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required defaultValue="Gulu" placeholder="City" className="border border-border px-4 py-3 bg-background" />
                  <input required defaultValue="Uganda" placeholder="Country" className="border border-border px-4 py-3 bg-background" />
                </div>
              </div>
            </section>
            <section>
              <h2 className="font-serif text-2xl mb-4">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { id: "mtn", label: "MTN Mobile Money", desc: "Pay via MTN MoMo" },
                  { id: "airtel", label: "Airtel Money", desc: "Pay via Airtel Money" },
                  { id: "card", label: "Visa / Mastercard", desc: "Secure card payment" },
                  { id: "cash", label: "Cash on Delivery", desc: "Pay when you receive" },
                ].map((m) => (
                  <label key={m.id} className={`flex items-center gap-3 border p-4 cursor-pointer ${method === m.id ? "border-rose bg-blush/30" : "border-border"}`}>
                    <input type="radio" name="payment" checked={method === m.id} onChange={() => setMethod(m.id)} />
                    <div>
                      <div className="font-medium">{m.label}</div>
                      <div className="text-xs text-muted-foreground">{m.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </section>
          </div>
          <aside className="bg-muted/40 p-8 h-fit space-y-3">
            <h3 className="font-serif text-2xl mb-2">Order Summary</h3>
            {items.map((i) => (
              <div key={i.id} className="flex justify-between text-sm">
                <span>{i.name} × {i.qty}</span>
                <span>{formatUGX(i.price * i.qty)}</span>
              </div>
            ))}
            <div className="border-t border-border pt-3 flex justify-between text-sm">
              <span>Subtotal</span><span>{formatUGX(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery</span><span>{delivery === 0 ? "Free" : formatUGX(delivery)}</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between font-medium text-lg">
              <span>Total</span><span>{formatUGX(total)}</span>
            </div>
            <button disabled={submitting || items.length === 0} className="w-full bg-primary text-primary-foreground py-4 text-xs uppercase tracking-widest hover:bg-primary/90 disabled:opacity-50">
              {submitting ? "Processing..." : `Pay ${formatUGX(total)}`}
            </button>
            <p className="text-[10px] text-muted-foreground text-center">All prices in Ugandan Shillings (UGX)</p>
          </aside>
        </form>
      </main>
      <Footer />
    </div>
  );
}
