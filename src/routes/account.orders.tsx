import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/account/orders")({
  head: () => ({ meta: [{ title: "My Orders — TJ's Beauty Line" }] }),
  component: () => (
    <div>
      <h1 className="font-serif text-3xl">Orders</h1>
      <p className="text-muted-foreground text-sm mt-2">Track your shop orders and delivery status.</p>
      <div className="mt-10 border border-dashed border-border p-10 text-center">
        <p className="text-sm text-muted-foreground">No orders yet.</p>
        <Link to="/shop" className="inline-block mt-4 bg-primary text-primary-foreground px-6 py-3 text-xs uppercase tracking-widest">Shop Now</Link>
      </div>
    </div>
  ),
});
