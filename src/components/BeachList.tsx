import type { Beach } from "../data/beaches";
import BeachCard from "./BeachCard";

type BeachListProps = {
  items: Beach[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

function BeachList({ items, selectedId, onSelect }: BeachListProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 12,
        height: "100%",
        overflow: "auto",
      }}
    >
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
    </div>
  );
}

export default BeachList;
