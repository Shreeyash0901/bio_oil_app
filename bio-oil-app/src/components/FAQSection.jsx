import { useState } from "react";

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { q: "Minimum quantity?", a: "No minimum required." },
    { q: "Payment?", a: "Instant cash or UPI." },
  ];

  return (
    <section style={{ padding: "3rem 1.5rem" }}>
      <h2>FAQ</h2>

      {faqs.map((f, i) => (
        <div key={i}>
          <button onClick={() => setOpen(i === open ? null : i)}>
            {f.q}
          </button>
          {open === i && <p>{f.a}</p>}
        </div>
      ))}
    </section>
  );
}