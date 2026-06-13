import { PHONE, WA_LINK } from "./shared";

export default function StickyMobileBar() {
  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex"
    }}>
      <a href={`tel:${PHONE}`} style={btn("#1B4D35")}>Call</a>
      <a href={WA_LINK} style={btn("#25D366")}>WhatsApp</a>
    </div>
  );
}

function btn(bg) {
  return {
    flex: 1,
    padding: "1rem",
    textAlign: "center",
    textDecoration: "none",
    color: "white",
    background: bg,
    fontWeight: 700,
  };
}