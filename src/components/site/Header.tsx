import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ShoppingBag, Menu, X, Search, User, Home, LayoutGrid, ChevronDown, LogIn, UserPlus, CalendarCheck, Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "@/lib/cart";
import { products, services, formatUGX } from "@/lib/data";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/shop", label: "Shop" },
  { to: "/booking", label: "Book Now" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const items = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);
  const loc = useLocation();
  const navigate = useNavigate();

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return { p: [], s: [] };
    return {
      p: products.filter((x) => x.name.toLowerCase().includes(term) || x.category?.toLowerCase().includes(term)).slice(0, 5),
      s: services.filter((x) => x.name.toLowerCase().includes(term) || x.category.toLowerCase().includes(term) || x.short.toLowerCase().includes(term)).slice(0, 5),
    };
  }, [q]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all ${
          scrolled ? "bg-background/95 backdrop-blur shadow-sm" : "bg-background"
        }`}
      >
        <div className="border-b border-border/60 bg-primary text-primary-foreground text-xs">
          <div className="mx-auto max-w-7xl px-4 py-2 flex justify-between items-center gap-2">
            <span className="hidden sm:inline truncate">Free delivery on orders above UGX 200,000 in Gulu</span>
            <span className="sm:hidden truncate">Free delivery over UGX 200K in Gulu</span>
            <span className="opacity-80 shrink-0">UGX • Gulu</span>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-16 md:h-20 gap-2">
          <button className="md:hidden p-1" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
          <Link to="/" className="flex items-center gap-2 mx-auto md:mx-0">
            <img src={logo} alt="TJ's Beauty Line" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
            <div className="leading-tight">
              <div className="font-serif text-base md:text-xl tracking-wide">TJ's Beauty Line</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Gulu, Uganda</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="hover:text-rose transition-colors"
                activeProps={{ className: "text-rose font-medium" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3 md:gap-4">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="hover:text-rose hidden sm:block"
            >
              <Search className="h-5 w-5" />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button aria-label="Account" className="hover:text-rose hidden sm:block">
                  <User className="h-5 w-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate({ to: "/login" })}>
                  <LogIn className="h-4 w-4 mr-2" /> Sign In
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate({ to: "/register" })}>
                  <UserPlus className="h-4 w-4 mr-2" /> Create Account
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate({ to: "/account" })}>
                  <User className="h-4 w-4 mr-2" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate({ to: "/account/bookings" })}>
                  <CalendarCheck className="h-4 w-4 mr-2" /> My Bookings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate({ to: "/wishlist" })}>
                  <Heart className="h-4 w-4 mr-2" /> Wishlist
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-5 w-5 hover:text-rose" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Search dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Search TJ's Beauty Line</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              autoFocus
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search services, products, treatments..."
              className="pl-10 h-11"
            />
          </div>
          <div className="max-h-[60vh] overflow-y-auto mt-2">
            {!q && (
              <p className="text-sm text-muted-foreground py-6 text-center">
                Try “facial”, “massage”, “serum”, “makeup”…
              </p>
            )}
            {q && results.s.length === 0 && results.p.length === 0 && (
              <p className="text-sm text-muted-foreground py-6 text-center">No results for “{q}”.</p>
            )}
            {results.s.length > 0 && (
              <div className="mb-4">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-1 mb-2">Services</p>
                {results.s.map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center gap-3 p-2 hover:bg-muted rounded"
                  >
                    <img src={s.image} alt="" className="h-12 w-12 object-cover rounded" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{s.name}</div>
                      <div className="text-xs text-muted-foreground">{s.category} • {s.duration}</div>
                    </div>
                    <div className="text-xs">{formatUGX(s.price)}</div>
                  </Link>
                ))}
              </div>
            )}
            {results.p.length > 0 && (
              <div>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground px-1 mb-2">Products</p>
                {results.p.map((p) => (
                  <Link
                    key={p.slug}
                    to="/shop/$slug"
                    params={{ slug: p.slug }}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center gap-3 p-2 hover:bg-muted rounded"
                  >
                    <img src={p.image} alt="" className="h-12 w-12 object-cover rounded" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.category}</div>
                    </div>
                    <div className="text-xs">{formatUGX(p.price)}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/40" />
        <aside
          className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-background shadow-xl transition-transform ${open ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <img src={logo} alt="" className="h-10 w-10 object-contain" />
            <button onClick={() => setOpen(false)} aria-label="Close"><X className="h-5 w-5" /></button>
          </div>
          <div className="p-4 border-b">
            <button
              onClick={() => { setOpen(false); setSearchOpen(true); }}
              className="w-full flex items-center gap-2 px-3 py-2 border border-border text-sm text-muted-foreground"
            >
              <Search className="h-4 w-4" /> Search…
            </button>
          </div>
          <nav className="p-2">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} className="flex items-center justify-between px-4 py-4 border-b text-sm">
                {n.label}
                <ChevronDown className="h-4 w-4 -rotate-90 opacity-40" />
              </Link>
            ))}
            <Link to="/login" className="flex items-center justify-between px-4 py-4 border-b text-sm">
              Sign In <LogIn className="h-4 w-4 opacity-60" />
            </Link>
            <Link to="/account" className="flex items-center justify-between px-4 py-4 border-b text-sm">
              My Account <User className="h-4 w-4 opacity-60" />
            </Link>
          </nav>
          <div className="px-4 py-6 flex gap-3">
            <select className="border border-border px-3 py-2 text-xs flex-1 bg-background">
              <option>English</option>
            </select>
            <select className="border border-border px-3 py-2 text-xs flex-1 bg-background">
              <option>UGX</option>
            </select>
          </div>
        </aside>
      </div>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-background border-t border-border grid grid-cols-4 h-16">
        <Link to="/" className="flex flex-col items-center justify-center text-xs gap-1" activeOptions={{ exact: true }} activeProps={{ className: "text-rose" }}>
          <Home className="h-5 w-5" /><span>Home</span>
        </Link>
        <Link to="/services" className="flex flex-col items-center justify-center text-xs gap-1" activeProps={{ className: "text-rose" }}>
          <LayoutGrid className="h-5 w-5" /><span>Services</span>
        </Link>
        <Link to="/cart" className="flex flex-col items-center justify-center text-xs gap-1 relative" activeProps={{ className: "text-rose" }}>
          <ShoppingBag className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute top-2 right-1/4 bg-rose text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              {count}
            </span>
          )}
          <span>Cart</span>
        </Link>
        <Link to="/account" className="flex flex-col items-center justify-center text-xs gap-1" activeProps={{ className: "text-rose" }}>
          <User className="h-5 w-5" /><span>Account</span>
        </Link>
      </nav>
    </>
  );
}
