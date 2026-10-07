import Link from "next/link";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
 return <>
  <section className="hero">
   <div className="hero-glow hero-glow-one"></div><div className="hero-glow hero-glow-two"></div>
   <div className="container hero-inner">
    <div className="hero-copy">
     <span className="eyebrow">TRAIN • FUEL • PERFORM</span>
     <h1>BUILD YOUR<br/><span>WARRIOR</span> MINDSET.</h1>
     <p>Premium sports nutrition for serious training, everyday strength and your next level of performance.</p>
     <div className="hero-actions"><Link className="btn" href="/products">Shop Products</Link><Link className="btn outline" href="/contact">Enquire Now</Link></div>
    </div>
    <div className="hero-visual" aria-hidden="true"><div className="hero-ring"></div><div className="hero-dumbbell">W</div><div className="hero-stat"><strong>53+</strong><span>PRODUCT VARIANTS</span></div></div>
   </div>
  </section>
  <section className="section container"><div className="section-head"><div><span className="eyebrow">THE RANGE</span><h2>Fuel your training.</h2></div><Link href="/products">View all →</Link></div><div className="product-grid">{products.slice(0,8).map(p=><ProductCard key={p.sku} product={p}/>)}</div></section>
  <section className="dark-strip"><div className="container three"><div><b>01</b><h3>Training focused</h3><p>Products organized for everyday fitness goals.</p></div><div><b>02</b><h3>Value pricing</h3><p>MRP and sale pricing shown clearly.</p></div><div><b>03</b><h3>Easy ordering</h3><p>Enquire or order directly on WhatsApp.</p></div></div></section>
 </>;
}