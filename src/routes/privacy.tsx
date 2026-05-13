import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — TJ's Beauty Line" }] }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-3xl px-4 py-16 prose">
        <h1 className="font-serif text-5xl mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground">Your privacy matters to us. TJ's Beauty Line collects only the information needed to deliver your services and orders — name, contact details, address and booking preferences.</p>
        <p className="text-muted-foreground mt-4">We never sell your data. Payment details processed via MTN, Airtel and card processors are handled securely and never stored on our servers.</p>
        <p className="text-muted-foreground mt-4">For any privacy questions, contact hello@tjsbeautyline.ug.</p>
      </main>
      <Footer />
    </div>
  );
}
