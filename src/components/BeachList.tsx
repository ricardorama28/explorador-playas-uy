import { Link } from "react-router-dom";
import type { Beach } from "../data/beaches";

type BeachListProps = {
  items: Beach[];
};

function BeachList({ items }: BeachListProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 12,
        maxHeight: 420,
        overflow: "auto",
      }}
    >
      <ul style={{ margin: 0, paddingLeft: 18 }}>
        {items.map((b) => (
          <li key={b.id} style={{ marginBottom: 8 }}>
            <Link to={`/playa/${b.id}`}>{b.name}</Link> — {b.depto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BeachList;
