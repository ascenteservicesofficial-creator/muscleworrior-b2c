import Link from "next/link";

export default function Footer() {
 return <footer className="site-footer">
  <div className="container footer-grid">
   <div><img className="footer-logo" src="/logo-placeholder.svg" alt="Muscle Worrior" /><p>Premium sports nutrition for training-focused lifestyles.</p><a className="social-link" href="https://www.facebook.com/profile.php?id=61593065662230" target="_blank" rel="noreferrer">Facebook ↗</a></div>
   <div><h4>Explore</h4><Link href="/products">Products</Link><Link href="/about">About Us</Link><Link href="/contact">Contact Us</Link></div>
   <div><h4>Contact</h4><p>info@muscleworrior.co.in</p><p>+91 959-9466-470</p><p>WhatsApp: +91 959-9466-470</p></div>
   <div><h4>Business Details</h4><p>FSSAI: 12726038000488</p><p>GST: 09AADCH7931B1ZQ</p></div>
  </div>
  <div className="footer-bottom"><strong>Copyright © 2026 Muscleworrior | All Rights Reserved.</strong><strong>Designed &amp; Developed by Himvati Foods Pvt.Ltd</strong></div>
 </footer>;
}
