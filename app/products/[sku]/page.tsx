"use client";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { products } from "../../../data/products";
import { money, useCart, whatsapp } from "../../../components/Store";
export default function ProductDetail() {
 const { sku }=useParams<{sku:string}>(); const p=products.find(x=>x.sku===sku); if(!p) return notFound();
 const {add}=useCart(); const msg=`Muscle Worrior product enquiry\nProduct: ${p.name}\nSize: ${p.size}\nSKU: ${p.sku}\nSale price: ${money(p.salePrice)}`;
 return <section className="section container"><Link href="/products" className="back">← Back to products</Link><div className="detail"><div className="detail-image"><img src={p.image} alt={p.name}/></div><div><span className="eyebrow">PRODUCT</span><p className="sku">{p.sku}</p><h1>{p.name}</h1><p className="size">{p.size}</p><div className="price large"><strong>{money(p.salePrice)}</strong><del>{money(p.mrp)}</del></div><p className="detail-copy">Premium sports-nutrition product. Product imagery and detailed nutritional information can be added when final pack assets are supplied.</p><div className="actions"><button className="btn" onClick={()=>add(p)}>Add to cart</button><a className="btn outline" href={whatsapp(msg)} target="_blank">WhatsApp Enquiry</a></div></div></div></section>;
}
