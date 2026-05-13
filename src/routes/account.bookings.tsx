import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/account/bookings")({
  head: () => ({ meta: [{ title: "My Bookings — TJ's Beauty Line" }] }),
  component: () => (
    <div>
      <h1 className="font-serif text-3xl">My Bookings</h1>
      <p className="text-muted-foreground text-sm mt-2">Your upcoming and past appointments will appear here.</p>
      <div className="mt-10 border border-dashed border-border p-10 text-center">
        <p className="text-sm text-muted-foreground">No bookings yet.</p>
        <Link to="/booking" className="inline-block mt-4 bg-primary text-primary-foreground px-6 py-3 text-xs uppercase tracking-widest">Book a Service</Link>
      </div>
    </div>
  ),
});
