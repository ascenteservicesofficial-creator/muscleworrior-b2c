import Link from "next/link";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
 const featured = products.slice(0,3);
 return <>
  <section className="hero">
   <div className="hero-grid"></div><div className="hero-glow hero-glow-one"></div>
   <div className="container hero-inner">
    <div className="hero-copy">
     <span className="eyebrow">MUSCLE WORRIOR • SPORTS NUTRITION</span>
     <h1>TRAIN HARD.<br/><span>FUEL HARDER.</span></h1>
     <p>Performance-focused nutrition for strength, muscle gain and everyday training. Choose your goal. Build your warrior mindset.</p>
     <div className="hero-actions"><Link className="btn" href="/products">Shop All Products</Link><Link className="btn outline" href="/contact">Talk to Us</Link></div>
     <div className="hero-points"><span>✓ 53+ variants</span><span>✓ Value pricing</span><span>✓ Easy ordering</span></div>
    </div>
    <div className="hero-products">
      <div className="hero-product hero-product-main"><img src={featured[0].image} alt={featured[0].name}/></div>
      <div className="hero-product hero-product-side"><img src={featured[1].image} alt={featured[1].name}/></div>
      <div className="hero-product hero-product-small"><img src={featured[2].image} alt={featured[2].name}/></div>
      <div className="hero-badge"><strong>53+</strong><span>PRODUCT<br/>VARIANTS</span></div>
    </div>
   </div>
  </section>
  <section className="section container"><div className="section-head"><div><span className="eyebrow">THE RANGE</span><h2>Fuel your training.</h2></div><Link href="/products">View all →</Link></div><div className="product-grid">{products.slice(0,8).map(p=><ProductCard key={p.sku} product={p}/>)}</div></section>
  <section className="dark-strip"><div className="container three"><div><b>01</b><h3>Training focused</h3><p>Products organized for everyday fitness goals.</p></div><div><b>02</b><h3>Value pricing</h3><p>MRP and sale pricing shown clearly.</p></div><div><b>03</b><h3>Easy ordering</h3><p>Enquire or order directly on WhatsApp.</p></div></div></section>
 </>;
}