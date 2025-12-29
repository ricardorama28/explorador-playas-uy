import type { Beach } from "../data/beaches";

type BeachListProps = {
  items: Beach[];
};

function BeachList({ items }: BeachListProps) {
  return (
    <ul>
      {items.map((b) => (
        <li key={b.id}>
          {b.name} — {b.depto}
        </li>
      ))}
    </ul>
  );
}

export default BeachList;
