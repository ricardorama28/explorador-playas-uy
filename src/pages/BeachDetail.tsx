import { useParams, Link } from "react-router-dom";
import { beaches } from "../data/beaches";

function BeachDetail() {
  const { id } = useParams<{ id: string }>();

  const beach = beaches.find((b) => b.id === id);

  if (!beach) {
    return (
      <div style={{ padding: 16 }}>
        <h1>Playa no encontrada</h1>
        <Link to="/">← Volver</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: 16 }}>
      <Link to="/">← Volver</Link>
      <h1 style={{ marginTop: 12 }}>{beach.name}</h1>
      <p>Departamento: {beach.depto}</p>

      <section style={{ marginTop: 16 }}>
        <h2>Condiciones ahora</h2>
        <p>(próximamente)</p>
      </section>

      <section style={{ marginTop: 16 }}>
        <h2>Reportes de noctilucas</h2>
        <p>(próximamente)</p>
      </section>
    </div>
  );
}

export default BeachDetail;
