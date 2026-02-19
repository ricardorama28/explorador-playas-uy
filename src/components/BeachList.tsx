import type { Beach } from "../data/beaches";
import BeachCard from "./BeachCard";

type BeachListProps = {
  items: Beach[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

function BeachList({ items, selectedId, onSelect }: BeachListProps) {
  if (items.length === 0) {
    return (
      <div
        style={{
          padding: 32,
          textAlign: "center",
          color: "var(--color-text-muted)",
          background: "var(--color-surface)",
          borderRadius: "var(--radius-md)",
          boxShadow: "var(--shadow-sm)",
        }}
      >
        <p style={{ fontSize: "1.2rem", marginBottom: 4 }}>&#127754;</p>
        <p style={{ fontWeight: 500 }}>No se encontraron playas</p>
        <p style={{ fontSize: "0.85rem" }}>Proba ajustando los filtros</p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((b) => (
        <BeachCard
          key={b.id}
          beach={b}
          selected={b.id === selectedId}
          onSelect={() => onSelect(b.id)}
        />
      ))}
    </div>
  );
}

export default BeachList;
