import Link from "next/link";

function FacebookIcon() {
 return <svg viewBox="0 0 24 24" aria-hidden="true" className="facebook-icon"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v8h3.2Z"/></svg>;
}

export default function Footer() {
 return <footer className="site-footer">
  <div className="container footer-grid">
   <div>
    <img className="footer-logo" src="/brand/logo.webp" alt="Muscle Worrior" />
    <p>Premium sports nutrition for training-focused lifestyles.</p>
    <a className="social-link facebook-link" href="https://www.facebook.com/profile.php?id=61593065662230" target="_blank" rel="noreferrer" aria-label="Muscle Worrior on Facebook">
      <FacebookIcon /><span>Facebook</span>
    </a>
   </div>
   <div><h4>Explore</h4><Link href="/products">Products</Link><Link href="/about">About Us</Link><Link href="/contact">Contact Us</Link></div>
   <div><h4>Policies</h4><Link href="/policies">Privacy Policy</Link><Link href="/policies">Refund, Return &amp; Cancellation</Link><Link href="/policies">Shipping &amp; Delivery</Link><Link href="/policies">Terms &amp; Conditions</Link></div>
   <div><h4>Contact</h4><p>info@muscleworrior.co.in</p><p>+91 959-9466-470</p><p>WhatsApp: +91 959-9466-470</p><p>FSSAI: 12726038000488</p><p>GST: 09AADCH7931B1ZQ</p></div>
  </div>
  <div className="footer-bottom"><strong>Copyright © 2026 Muscleworrior | All Rights Reserved.</strong><strong>Designed &amp; Developed by Himvati Foods Pvt.Ltd</strong></div>
 </footer>;
}
