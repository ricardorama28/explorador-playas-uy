import { useParams, Link, useLocation } from "react-router-dom";
import { beaches } from "../data/beaches";

function BeachDetail() {
  const { id } = useParams<{ id: string }>();
  const beach = beaches.find((b) => b.id === id);
  const location = useLocation();
  const qs = location.search;

  if (!beach) {
    return (
      <div>
        <h1>Playa no encontrada</h1>
        <Link to={`/${qs}`}>← Volver</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to={`/${qs}`}>← Volver</Link>
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
