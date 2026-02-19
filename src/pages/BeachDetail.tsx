import { useParams, Link, useLocation } from "react-router-dom";
import { beaches, type Service } from "../data/beaches";

const serviceLabels: Record<Service, string> = {
  parking: "Estacionamiento",
  food: "Gastronomia",
  lifeguard: "Guardavidas",
  showers: "Duchas",
  toilets: "Banos",
};

const accessLabels: Record<string, { label: string; color: string }> = {
  easy: { label: "Facil", color: "#2D9F73" },
  medium: { label: "Moderado", color: "#E8B830" },
  hard: { label: "Dificil", color: "#D94545" },
};

const tagColors: Record<string, { bg: string; text: string }> = {
  familia: { bg: "#E8F5E9", text: "#2E7D32" },
  tranquila: { bg: "#E3F2FD", text: "#1565C0" },
  movida: { bg: "#FFF3E0", text: "#E65100" },
  surf: { bg: "#E0F7FA", text: "#00695C" },
  naturaleza: { bg: "#F1F8E9", text: "#33691E" },
};

function BeachDetail() {
  const { id } = useParams<{ id: string }>();
  const beach = beaches.find((b) => b.id === id);
  const location = useLocation();
  const qs = location.search;

  if (!beach) {
    return (
      <div style={{ textAlign: "center", padding: 48 }}>
        <h1 style={{ color: "var(--color-text-muted)" }}>Playa no encontrada</h1>
        <Link to={`/${qs}`} style={{ color: "var(--color-primary)", fontWeight: 500 }}>
          Volver al explorador
        </Link>
      </div>
    );
  }

  const access = accessLabels[beach.access] || { label: beach.access, color: "#888" };

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      {/* Back link */}
      <Link
        to={`/${qs}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          color: "var(--color-primary)",
          fontWeight: 500,
          fontSize: "0.9rem",
          marginBottom: 16,
        }}
      >
        &#8592; Volver al explorador
      </Link>

      {/* Header card */}
      <div
        style={{
          background: "var(--color-surface)",
          borderRadius: "var(--radius-lg)",
          padding: 24,
          boxShadow: "var(--shadow-md)",
          marginBottom: 20,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
          <h1 style={{ fontSize: "1.5rem", color: "var(--color-primary-dark)" }}>{beach.name}</h1>
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              padding: "4px 12px",
              borderRadius: 16,
              background: "var(--color-primary-bg)",
              color: "var(--color-primary)",
              whiteSpace: "nowrap",
            }}
          >
            {beach.depto}
          </span>
        </div>

        <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.6, fontSize: "0.95rem", marginBottom: 16 }}>
          {beach.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
          {beach.tags.map((t) => {
            const color = tagColors[t] || { bg: "#f5f5f5", text: "#666" };
            return (
              <span
                key={t}
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  padding: "4px 12px",
                  borderRadius: 12,
                  background: color.bg,
                  color: color.text,
                }}
              >
                {t}
              </span>
            );
          })}
        </div>

        {/* Info grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 12,
          }}
        >
          <InfoTile label="Cuerpo de agua" value={beach.waterbody === "ocean" ? "Oceano Atlantico" : "Rio de la Plata"} />
          <InfoTile label="Acceso" value={access.label} valueColor={access.color} />
          {beach.lengthKm && <InfoTile label="Largo" value={`${beach.lengthKm} km`} />}
          <InfoTile label="Coordenadas" value={`${beach.lat.toFixed(4)}, ${beach.lng.toFixed(4)}`} />
        </div>
      </div>

      {/* Services */}
      <div
        style={{
          background: "var(--color-surface)",
          borderRadius: "var(--radius-lg)",
          padding: 24,
          boxShadow: "var(--shadow-md)",
          marginBottom: 20,
        }}
      >
        <h2 style={{ fontSize: "1.1rem", marginBottom: 12, color: "var(--color-text)" }}>Servicios disponibles</h2>
        {beach.services.length === 0 ? (
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>Sin servicios registrados</p>
        ) : (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {beach.services.map((s) => (
              <span
                key={s}
                style={{
                  padding: "6px 14px",
                  borderRadius: 20,
                  background: "var(--color-accent-cool)",
                  color: "#fff",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                }}
              >
                {serviceLabels[s]}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Future sections */}
      <div
        style={{
          background: "var(--color-surface)",
          borderRadius: "var(--radius-lg)",
          padding: 24,
          boxShadow: "var(--shadow-md)",
        }}
      >
        <h2 style={{ fontSize: "1.1rem", marginBottom: 8, color: "var(--color-text)" }}>Condiciones y reportes</h2>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem" }}>
          Informacion de viento, oleaje y reportes de noctilucas proximamente.
        </p>
      </div>
    </div>
  );
}

function InfoTile({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) {
  return (
    <div
      style={{
        background: "var(--color-surface-alt)",
        borderRadius: "var(--radius-sm)",
        padding: "10px 14px",
      }}
    >
      <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontSize: "0.9rem", fontWeight: 600, color: valueColor || "var(--color-text)" }}>
        {value}
      </div>
    </div>
  );
}

export default BeachDetail;
