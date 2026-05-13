import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/register")({
  head: () => ({ meta: [{ title: "Create Account — TJ's Beauty Line" }] }),
  component: Register,
});

function Register() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16">
        <div className="mx-auto max-w-md px-4">
          <h1 className="font-serif text-4xl text-center">Create your account</h1>
          <p className="text-center text-muted-foreground text-sm mt-2">Join TJ's Beauty Line for exclusive offers.</p>
          <form className="mt-8 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Registration is a demo — connect Lovable Cloud to enable accounts."); }}>
            <div className="grid grid-cols-2 gap-3">
              <div><Label>First name</Label><Input required /></div>
              <div><Label>Last name</Label><Input required /></div>
            </div>
            <div><Label>Email</Label><Input type="email" required /></div>
            <div><Label>Phone</Label><Input type="tel" placeholder="+256 ..." required /></div>
            <div><Label>Password</Label><Input type="password" required /></div>
            <button type="submit" className="w-full bg-primary text-primary-foreground py-3 text-xs uppercase tracking-widest hover:bg-primary/90">Create Account</button>
          </form>
          <p className="text-center text-sm mt-6 text-muted-foreground">
            Already a member? <Link to="/login" className="text-rose">Sign in</Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
