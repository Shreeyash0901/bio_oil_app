import { C, font } from "./shared";

export default function StatsStrip() {
  const stats = [
    ["200+", "Partners"],
    ["₹45–55", "per Litre"],
    ["24hr", "Pickup"],
  ];

  return (
    <div style={{ background: "white", padding: "1.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {stats.map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: font.head, color: C.greenDark, fontSize: "1.5rem" }}>
              {num}
            </div>
            <div style={{ fontSize: "0.8rem", color: C.muted }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}