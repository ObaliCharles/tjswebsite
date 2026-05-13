import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Sign In — TJ's Beauty Line" }] }),
  component: Login,
});

function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-md px-4">
          <h1 className="font-serif text-4xl text-center">Welcome back</h1>
          <p className="text-center text-muted-foreground text-sm mt-2">Sign in to manage bookings and orders.</p>
          <form className="mt-8 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Login is a demo — connect Lovable Cloud to enable accounts."); }}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 text-xs uppercase tracking-widest hover:bg-primary/90">Sign In</button>
          </form>
          <p className="text-center text-sm mt-6 text-muted-foreground">
            New here? <Link to="/register" className="text-rose">Create an account</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
