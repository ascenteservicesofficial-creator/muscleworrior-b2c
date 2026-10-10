"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const banners = [
  { src: "/hero-banner-1.webp", fallback: "/hero-banner-1.svg", alt: "Muscle Worrior Animal Mass Gainer — build more, get stronger" },
  { src: "/hero-banner-2.webp", fallback: "/hero-banner-2.svg", alt: "Muscle Worrior fitness nutrition — fuel your gains" },
  { src: "/hero-banner-3.webp", fallback: "/hero-banner-3.svg", alt: "Muscle Worrior — train, conquer, repeat" },
];

export default function SiteHero() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<number[]>([]);

  useEffect(() => {
    if (!isHome) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % banners.length), 5500);
    return () => window.clearInterval(timer);
  }, [isHome]);

  const imageFor = (index: number) => failed.includes(index) ? banners[index].fallback : banners[index].src;

  if (!isHome) {
    return <section className="site-hero-static" aria-label="Muscle Worrior promotional banner">
      <Link href="/products" className="site-hero-link">
        <img src={imageFor(0)} alt={banners[0].alt} onError={() => setFailed((items) => items.includes(0) ? items : [...items, 0])} />
      </Link>
    </section>;
  }

  return <section className="site-hero-carousel" aria-label="Muscle Worrior promotional banners">
    {banners.map((banner, index) => (
      <Link href="/products" key={banner.src} className={index === active ? "hero-slide is-active" : "hero-slide"} aria-hidden={index !== active} tabIndex={index === active ? 0 : -1}>
        <img src={imageFor(index)} alt={banner.alt} onError={() => setFailed((items) => items.includes(index) ? items : [...items, index])} />
      </Link>
    ))}
    <div className="site-hero-dots" aria-label="Choose banner">
      {banners.map((banner, index) => <button key={banner.src} type="button" className={index === active ? "active" : ""} onClick={() => setActive(index)} aria-label={"Show hero banner " + (index + 1)} aria-pressed={index === active} />)}
    </div>
    <div className="site-hero-progress"><span key={active} /></div>
  </section>;
}
