import "./globals.css";
import { Store } from "../components/Store";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SiteHero from "../components/SiteHero";
export const metadata = { title: "Muscle Worrior | Sports Nutrition", description: "Premium sports nutrition and fitness products from Muscle Worrior.", metadataBase: new URL("https://www.muscleworrior.co.in") };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><Store><Header/><SiteHero/><main>{children}</main><Footer/></Store></body></html>; }
