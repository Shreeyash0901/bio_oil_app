import { C, font } from "./shared";

export default function EcoSection() {
  return (
    <section style={{ padding: "3rem 1.5rem", background: C.cream }}>
      <h2 style={{ fontFamily: font.head }}>Eco Impact</h2>
      <p>Used oil becomes biodiesel and reduces pollution.</p>
    </section>
  );
}