import { C, font } from "./shared";

export default function WhySection() {
  const items = ["Earn Money", "Free Pickup", "Instant Payment"];

  return (
    <section style={{ padding: "3rem 1.5rem", background: C.greenDark, color: "white" }}>
      <h2 style={{ fontFamily: font.head }}>Why Choose Us</h2>

      {items.map((i) => (
        <p key={i}>✔ {i}</p>
      ))}
    </section>
  );
}