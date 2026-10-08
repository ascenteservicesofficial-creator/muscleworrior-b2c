"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const banners = [
  { src: "/hero-banner-1.webp", alt: "Muscle Worrior Animal Mass Gainer — male fitness character" },
  { src: "/hero-banner-2.webp", alt: "Muscle Worrior Fitness For Everyone — female fitness character" },
  { src: "/hero-banner-3.webp", alt: "Muscle Worrior training — male fitness character" },
];

export default function SiteHero() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!isHome) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % banners.length), 5000);
    return () => window.clearInterval(timer);
  }, [isHome]);

  if (!isHome) {
    return <section className="site-hero-static" aria-label="Muscle Worrior promotional banner">
      <Link href="/products" className="site-hero-link"><img src={banners[0].src} alt={banners[0].alt} /></Link>
    </section>;
  }

  return <section className="site-hero-carousel" aria-label="Muscle Worrior promotional banners">
    {banners.map((banner, index) => (
      <img key={banner.src} src={banner.src} alt={banner.alt} className={index === active ? "is-active" : ""} />
    ))}
    <div className="site-hero-dots">
      {banners.map((banner, index) => (
        <button key={banner.src} type="button" className={index === active ? "active" : ""}
          onClick={() => setActive(index)} aria-label={"Show hero banner " + (index + 1)}
          aria-current={index === active} />
      ))}
    </div>
    <div className="site-hero-progress"><span key={active} /></div>
  </section>;
}
