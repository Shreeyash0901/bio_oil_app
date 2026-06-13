import { PHONE, WA_LINK } from "./shared";

export default function CTASection() {
  return (
    <section style={{ padding: "3rem 1.5rem", background: "#D4A017", textAlign: "center" }}>
      <h2>Ready to Earn?</h2>

      <a href={`tel:${PHONE}`}>Call Now</a>
      <br />
      <a href={WA_LINK} target="_blank">WhatsApp</a>
    </section>
  );
}