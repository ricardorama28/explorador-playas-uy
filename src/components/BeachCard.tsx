import type { Beach, Service } from "../data/beaches";

type BeachCardProps = {
  beach: Beach;
  selected?: boolean;
  onSelect: () => void;
};

const serviceLabels: Record<Service, string> = {
  parking: "Estacionamiento",
  food: "Gastronomia",
  lifeguard: "Guardavidas",
  showers: "Duchas",
  toilets: "Banos",
};

const serviceIcons: Record<Service, string> = {
  parking: "P",
  food: "R",
  lifeguard: "G",
  showers: "D",
  toilets: "B",
};

const tagColors: Record<string, { bg: string; text: string }> = {
  familia: { bg: "#E8F5E9", text: "#2E7D32" },
  tranquila: { bg: "#E3F2FD", text: "#1565C0" },
  movida: { bg: "#FFF3E0", text: "#E65100" },
  surf: { bg: "#E0F7FA", text: "#00695C" },
  naturaleza: { bg: "#F1F8E9", text: "#33691E" },
};

function BeachCard({ beach, selected = false, onSelect }: BeachCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      style={{
        width: "100%",
        textAlign: "left",
        padding: 14,
        borderRadius: "var(--radius-md)",
        border: selected ? "2px solid var(--color-primary)" : "1px solid var(--color-border)",
        background: selected ? "var(--color-primary-bg)" : "var(--color-surface)",
        cursor: "pointer",
        boxShadow: selected ? "var(--shadow-md)" : "var(--shadow-sm)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
        <strong style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: 600, color: "var(--color-text)", lineHeight: 1.3 }}>
          {beach.name}
        </strong>
        <span
          style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            padding: "3px 8px",
            borderRadius: 12,
            background: "var(--color-surface-alt)",
            color: "var(--color-text-secondary)",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {beach.depto}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize: "0.8rem", color: "var(--color-text-secondary)", lineHeight: 1.45, margin: 0 }}>
        {beach.description.length > 100 ? beach.description.slice(0, 100) + "..." : beach.description}
      </p>

      {/* Bottom row: tags + meta */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          {beach.tags.map((t) => {
            const color = tagColors[t] || { bg: "#f5f5f5", text: "#666" };
            return (
              <span
                key={t}
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  padding: "2px 8px",
                  borderRadius: 10,
                  background: color.bg,
                  color: color.text,
                }}
              >
                {t}
              </span>
            );
          })}
        </div>

        <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
          {beach.services.slice(0, 3).map((s) => (
            <span
              key={s}
              title={serviceLabels[s]}
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "var(--color-surface-alt)",
                color: "var(--color-text-muted)",
                fontSize: "0.65rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {serviceIcons[s]}
            </span>
          ))}
          {beach.services.length > 3 && (
            <span
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "var(--color-surface-alt)",
                color: "var(--color-text-muted)",
                fontSize: "0.6rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              +{beach.services.length - 3}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

export default BeachCard;
