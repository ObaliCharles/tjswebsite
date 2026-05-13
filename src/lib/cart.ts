import { useEffect, useState } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
  type: "product" | "service";
};

const KEY = "tjs_cart";

const read = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
};

const write = (items: CartItem[]) => {
  localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("cart:update"));
};

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => {
    setItems(read());
    const onUpdate = () => setItems(read());
    window.addEventListener("cart:update", onUpdate);
    window.addEventListener("storage", onUpdate);
    return () => {
      window.removeEventListener("cart:update", onUpdate);
      window.removeEventListener("storage", onUpdate);
    };
  }, []);
  return items;
};

export const addToCart = (item: Omit<CartItem, "qty">, qty = 1) => {
  const items = read();
  const existing = items.find((i) => i.id === item.id);
  if (existing) existing.qty += qty;
  else items.push({ ...item, qty });
  write(items);
};

export const removeFromCart = (id: string) => {
  write(read().filter((i) => i.id !== id));
};

export const updateQty = (id: string, qty: number) => {
  const items = read().map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i));
  write(items);
};

export const clearCart = () => write([]);

export const cartTotal = (items: CartItem[]) =>
  items.reduce((sum, i) => sum + i.price * i.qty, 0);
