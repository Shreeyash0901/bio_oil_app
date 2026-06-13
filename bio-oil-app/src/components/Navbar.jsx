import { useEffect, useState } from "react";
import { C, PHONE, font } from "./shared";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: C.greenDark,
      display: "flex",
      justifyContent: "space-between",
      padding: "0.85rem 1.5rem",
      boxShadow: scrolled
        ? "0 2px 16px rgba(0,0,0,0.22)"
        : "0 2px 8px rgba(0,0,0,0.12)",
    }}>
      <div style={{ color: "white", fontFamily: font.head, fontWeight: 700 }}>
        Hingoli Bio-Oil
      </div>

      <a
        href={`tel:${PHONE}`}
        style={{
          background: C.gold,
          padding: "0.5rem 1rem",
          borderRadius: 30,
          textDecoration: "none",
          color: C.charcoal,
          fontWeight: 700,
        }}
      >
        Call Now
      </a>
    </nav>
  );
}