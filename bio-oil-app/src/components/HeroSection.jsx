import { C, PHONE, WA_LINK, font } from "./shared";

export default function HeroSection() {
  return (
    <section style={{
      background: C.greenDark,
      color: "white",
      textAlign: "center",
      padding: "4rem 1.5rem"
    }}>
      <h1 style={{ fontFamily: font.head, fontSize: "2rem" }}>
        Turn Used Oil Into Cash
      </h1>

      <p style={{ marginTop: "1rem", opacity: 0.8 }}>
        We collect used cooking oil from your doorstep in Hingoli.
      </p>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a href={`tel:${PHONE}`} style={btn(true)}>Call Us</a>
        <a href={WA_LINK} target="_blank" style={btn(false)}>WhatsApp</a>
      </div>
    </section>
  );
}

function btn(primary) {
  return {
    padding: "0.8rem 1.5rem",
    borderRadius: 30,
    textDecoration: "none",
    fontWeight: 700,
    background: primary ? "#D4A017" : "transparent",
    color: primary ? "#1C2B1F" : "white",
    border: primary ? "none" : "2px solid white",
  };
}