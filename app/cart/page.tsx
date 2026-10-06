"use client";
import Link from "next/link";
import { money, useCart, whatsapp } from "../../components/Store";
export default function CartPage() {
 const {items,total,update,remove}=useCart();
 const msg=["Muscle Worrior WhatsApp order enquiry","",...items.map(i=>`${i.name} | ${i.size} | ${i.sku} | Qty: ${i.quantity} | ${money(i.salePrice*i.quantity)}`),"",`Estimated total: ${money(total)}`].join("\n");
 return <section className="section container"><span className="eyebrow">YOUR SELECTION</span><h1>Cart</h1>{!items.length?<div className="empty"><p>Your cart is empty.</p><Link className="btn" href="/products">Browse Products</Link></div>:<div className="cart-layout"><div>{items.map(i=><div className="cart-item" key={i.sku}><img src={i.image} alt=""/><div className="cart-info"><h3>{i.name}</h3><p>{i.size} · {i.sku}</p><strong>{money(i.salePrice)}</strong></div><div className="qty"><button onClick={()=>update(i.sku,i.quantity-1)}>-</button><span>{i.quantity}</span><button onClick={()=>update(i.sku,i.quantity+1)}>+</button></div><button className="remove" onClick={()=>remove(i.sku)}>Remove</button></div>)}</div><aside className="summary"><h2>Order enquiry</h2><p>Checkout is handled through WhatsApp in Version 1. No online payment is required.</p><div className="total"><span>Estimated total</span><strong>{money(total)}</strong></div><a className="btn full" href={whatsapp(msg)} target="_blank">Send Order on WhatsApp</a></aside></div>}</section>;
}
