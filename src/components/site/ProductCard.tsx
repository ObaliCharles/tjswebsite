import { Link } from "@tanstack/react-router";
import { Product, formatUGX } from "@/lib/data";
import { addToCart } from "@/lib/cart";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group">
      <Link to="/shop/$slug" params={{ slug: product.slug }} className="block relative overflow-hidden bg-muted aspect-square">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-[10px] tracking-wider uppercase rounded-full px-3 py-1">
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addToCart({ id: product.slug, name: product.name, price: product.price, image: product.image, type: "product" });
            toast.success(`${product.name} added to cart`);
          }}
          className="absolute bottom-0 inset-x-0 bg-primary text-primary-foreground py-3 text-xs uppercase tracking-widest opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all"
        >
          Add to cart
        </button>
      </Link>
      <div className="pt-4 text-center">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{product.category}</p>
        <h3 className="font-serif text-lg mt-1">{product.name}</h3>
        <p className="text-sm mt-1">{formatUGX(product.price)}</p>
      </div>
    </div>
  );
}
