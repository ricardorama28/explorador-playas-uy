import { Link } from "react-router-dom";
import type { Beach } from "../data/beaches";

type BeachListProps = {
  items: Beach[];
};

function BeachList({ items }: BeachListProps) {
  return (
    <ul>
      {items.map((b) => (
        <li key={b.id}>
          <Link to={`/playa/${b.id}`}>{b.name}</Link> — {b.depto}
        </li>
      ))}
    </ul>
  );
}

export default BeachList;

