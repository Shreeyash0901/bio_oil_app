import { C, font } from "./shared";

export default function PricingSection() {
  return (
    <section style={{ padding: "3rem 1.5rem", background: "white" }}>
      <h2 style={{ fontFamily: font.head }}>Rate</h2>
      <h1>₹45–55 per litre</h1>
    </section>
  );
}