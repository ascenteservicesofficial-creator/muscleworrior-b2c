"use client";
import Link from "next/link";
import { useCart } from "./Store";

export default function Header() {
  const { count } = useCart();
  return <header className="site-header">
    <div className="container nav">
      <Link href="/" className="brand" aria-label="Muscle Worrior home"><img src="/logo-placeholder.svg" alt="Muscle Worrior — The Right Choice" /></Link>
      <nav><Link href="/">Home</Link><Link href="/products">Products</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/cart" className="cart-link">Cart <span>{count}</span></Link></nav>
    </div>
  </header>;
}