"use client";

import { useState } from "react";

export default function BrandLogo({ className = "" }: { className?: string }) {
  const [source, setSource] = useState("/brand/logo-upload.webp");

  return (
    <img
      className={className}
      src={source}
      alt="Muscle Worrior"
      width={256}
      height={224}
      onError={() => {
        if (source !== "/logo-placeholder.svg") setSource("/logo-placeholder.svg");
      }}
      style={{ display: "block", objectFit: "contain", maxWidth: "100%", height: "auto" }}
    />
  );
}
