"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "../data/products";

type CartItem = Product & { quantity: number };
type StoreValue = { items: CartItem[]; count: number; add: (p: Product) => void; update: (sku: string, q: number) => void; remove: (sku: string) => void; clear: () => void; total: number; };
const CartContext = createContext<StoreValue | null>(null);
export function Store({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  useEffect(() => { try { const raw = localStorage.getItem("mw-cart"); if (raw) setItems(JSON.parse(raw)); } catch {} }, []);
  useEffect(() => { localStorage.setItem("mw-cart", JSON.stringify(items)); }, [items]);
  const value = useMemo(() => ({
    items, count: items.reduce((s,i)=>s+i.quantity,0),
    add: (p: Product) => setItems(a => { const f=a.find(i=>i.sku===p.sku); return f ? a.map(i=>i.sku===p.sku?{...i,quantity:i.quantity+1}:i) : [...a,{...p,quantity:1}]; }),
    update: (sku:string,q:number) => setItems(a=>a.map(i=>i.sku===sku?{...i,quantity:Math.max(1,q)}:i)),
    remove: (sku:string) => setItems(a=>a.filter(i=>i.sku!==sku)),
    clear: () => setItems([]),
    total: items.reduce((s,i)=>s+i.salePrice*i.quantity,0)
  }), [items]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() { const c=useContext(CartContext); if(!c) throw new Error("useCart must be used inside Store"); return c; }
export const money=(n:number)=>`₹${n.toLocaleString("en-IN",{minimumFractionDigits:2,maximumFractionDigits:2})}`;
export const whatsapp=(text:string)=>`https://wa.me/919599466470?text=${encodeURIComponent(text)}`;
