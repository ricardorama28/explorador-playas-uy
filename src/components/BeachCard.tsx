import type { Beach } from "../data/beaches";

type BeachCardProps = {
  beach: Beach;
  selected?: boolean;
  onSelect: () => void;
};

function BeachCard({ beach, selected = false, onSelect }: BeachCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={{
        width: "100%",
        textAlign: "left",
        padding: 12,
        borderRadius: 12,
        border: selected ? "2px solid #6ea8fe" : "1px solid #ddd",
        background: selected ? "rgba(110,168,254,0.12)" : "transparent",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <strong>{beach.name}</strong>
        <span style={{ fontSize: 12, opacity: 0.75 }}>{beach.depto}</span>
      </div>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 8 }}>
        {beach.tags.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 12,
              padding: "4px 8px",
              borderRadius: 999,
              border: "1px solid #ddd",
              opacity: 0.9,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </button>
  );
}

export default BeachCard;
