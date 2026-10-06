"use client";
import Link from "next/link";
import { Product } from "../data/products";
import { money, useCart } from "./Store";
export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return <article className="product-card">
    <Link href={`/products/${product.sku}`} className="product-image"><img src={product.image} alt={product.name} /></Link>
    <div className="product-body">
      <p className="sku">{product.sku}</p><Link href={`/products/${product.sku}`}><h3>{product.name}</h3></Link>
      <p className="size">{product.size}</p><div className="price"><strong>{money(product.salePrice)}</strong><del>{money(product.mrp)}</del></div>
      <button className="btn" onClick={()=>add(product)}>Add to cart</button>
    </div>
  </article>;
}
