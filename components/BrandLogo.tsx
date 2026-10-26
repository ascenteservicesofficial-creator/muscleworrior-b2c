"use client";

import { useState } from "react";

export default function BrandLogo({ className = "" }: { className?: string }) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const sources = ["/brand/logo.webp", "/brand/logo-upload.webp"];

  if (sourceIndex >= sources.length) {
    return (
      <span
        className={className}
        role="img"
        aria-label="Muscle Worrior"
        style={{
          display: "inline-block",
          color: "#111",
          fontWeight: 900,
          fontSize: "clamp(14px, 1.5vw, 22px)",
          lineHeight: 1.05,
          whiteSpace: "nowrap",
        }}
      >
        MUSCLE <span style={{ color: "#e50914" }}>WORRIOR</span>
      </span>
    );
  }

  return (
    <img
      className={className}
      src={sources[sourceIndex]}
      alt="Muscle Worrior"
      width={512}
      height={448}
      onError={() => setSourceIndex((index) => index + 1)}
      style={{
        display: "block",
        width: "100%",
        height: "auto",
        maxWidth: "100%",
        objectFit: "contain",
        objectPosition: "left center",
      }}
    />
  );
}
