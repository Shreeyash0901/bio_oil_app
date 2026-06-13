import { C, font } from "./shared";

export default function HowItWorks() {
  const steps = [
    "Call or WhatsApp",
    "We pick up oil",
    "Get instant payment",
  ];

  return (
    <section style={{ padding: "3rem 1.5rem", background: C.cream }}>
      <h2 style={{ fontFamily: font.head }}>How It Works</h2>

      <div style={{ marginTop: "1rem" }}>
        {steps.map((s, i) => (
          <div key={i} style={{ margin: "0.5rem 0" }}>
            {i + 1}. {s}
          </div>
        ))}
      </div>
    </section>
  );
}