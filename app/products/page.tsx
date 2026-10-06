"use client";
import { useState } from "react";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard";
export default function ProductsPage() {
 const [q,setQ]=useState("");
 const filtered=products.filter(p=>(p.name+" "+p.sku+" "+p.size).toLowerCase().includes(q.toLowerCase()));
 return <section className="section container"><div className="section-head"><div><span className="eyebrow">CATALOG</span><h1>All Products</h1><p>{products.length} variants</p></div></div><input className="search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search product, SKU or size..." aria-label="Search products"/><div className="product-grid">{filtered.map(p=><ProductCard key={p.sku} product={p}/>)}</div>{!filtered.length&&<div className="empty">No products found.</div>}</section>;
}
