export default function BrandLogo({ className = "" }: { className?: string }) {
  return <img className={className} src="/brand/logo.webp" alt="Muscle Worrior" width={256} height={256} />;
}
