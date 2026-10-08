"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const slides = [
  { eyebrow: "MUSCLE WORRIOR • SPORTS NUTRITION", title: <>TRAIN HARD.<br /><span>FUEL HARDER.</span></>, text: "Performance-focused nutrition for strength, muscle gain and everyday training. Choose your goal. Build your warrior mindset.", tag: "POWER YOUR PERFORMANCE" },
  { eyebrow: "BUILD • PERFORM • DOMINATE", title: <>BUILD<br /><span>YOUR POWER.</span></>, text: "Train with purpose. Fuel your body with products designed for the demands of serious fitness and everyday warriors.", tag: "STRENGTH STARTS HERE" },
  { eyebrow: "RECOVER • REPEAT • RISE", title: <>YOUR GOAL.<br /><span>YOUR WARRIOR.</span></>, text: "Stay consistent, recover smarter and keep moving forward. Make every workout count with Muscle Worrior.", tag: "THE RIGHT CHOICE" },
];

export default function Home() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, []);
  const slide = slides[active];

  return <>
    <section className={"hero hero-slide-" + (active + 1)} aria-label="Muscle Worrior promotional banner">
      <div className="hero-grid" />
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-energy hero-energy-one" />
      <div className="hero-energy hero-energy-two" />
      <div className="container hero-inner">
        <div className="hero-copy" key={active}>
          <span className="eyebrow">{slide.eyebrow}</span>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <div className="hero-actions"><Link className="btn" href="/products">Explore Products</Link><Link className="btn outline" href="/contact">Talk to Us</Link></div>
          <div className="hero-points"><span>✓ 53+ variants</span><span>✓ Value pricing</span><span>✓ Easy ordering</span></div>
        </div>
        <div className="hero-brand-visual" aria-hidden="true">
          <div className="hero-ring hero-ring-outer" /><div className="hero-ring hero-ring-inner" />
          <div className="hero-logo-card"><img src="/logo-placeholder.svg" alt="" /></div>
          <div className="hero-visual-word">{slide.tag}</div>
          <div className="hero-number">0{active + 1}<small>/03</small></div>
        </div>
      </div>
      <div className="hero-controls" aria-label="Hero banner controls">
        {slides.map((item, index) => <button key={item.eyebrow} type="button" className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={"Show banner " + (index + 1)} aria-current={index === active} />)}
      </div>
      <div className="hero-progress"><span key={active} /></div>
    </section>

    <section className="section container">
      <div className="section-head"><div><span className="eyebrow">THE RANGE</span><h2>Fuel your training.</h2></div><Link href="/products">View all →</Link></div>
      <div className="product-grid">{products.slice(0, 8).map((p) => <ProductCard key={p.sku} product={p} />)}</div>
    </section>

    <section className="dark-strip"><div className="container three">
      <div><b>01</b><h3>Training focused</h3><p>Products organized for everyday fitness goals.</p></div>
      <div><b>02</b><h3>Value pricing</h3><p>MRP and sale pricing shown clearly.</p></div>
      <div><b>03</b><h3>Easy ordering</h3><p>Enquire or order directly on WhatsApp.</p></div>
    </div></section>
  </>;
}
