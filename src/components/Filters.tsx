import type { Tag, Depto, Waterbody } from "../data/beaches";

type FiltersProps = {
  depto: Depto | null;
  tag: Tag | null;
  water: Waterbody | null;
  onDeptoChange: (value: Depto | null) => void;
  onTagChange: (value: Tag | null) => void;
  onWaterChange: (value: Waterbody | null) => void;
  onClear: () => void;
  totalCount: number;
  filteredCount: number;
};

const deptos: { value: Depto; label: string }[] = [
  { value: "Montevideo", label: "Montevideo" },
  { value: "Canelones", label: "Canelones" },
  { value: "Maldonado", label: "Maldonado" },
  { value: "Rocha", label: "Rocha" },
];

const tags: { value: Tag; label: string }[] = [
  { value: "familia", label: "Familia" },
  { value: "tranquila", label: "Tranquila" },
  { value: "movida", label: "Movida" },
  { value: "surf", label: "Surf" },
  { value: "naturaleza", label: "Naturaleza" },
];

const waters: { value: Waterbody; label: string }[] = [
  { value: "river", label: "Rio de la Plata" },
  { value: "ocean", label: "Oceano Atlantico" },
];

const chipBase: React.CSSProperties = {
  padding: "6px 14px",
  borderRadius: 20,
  fontSize: "0.8rem",
  fontWeight: 500,
  lineHeight: 1,
  whiteSpace: "nowrap",
};

const chipInactive: React.CSSProperties = {
  ...chipBase,
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  color: "var(--color-text-secondary)",
};

const chipActive: React.CSSProperties = {
  ...chipBase,
  background: "var(--color-primary)",
  border: "1px solid var(--color-primary)",
  color: "#fff",
};

function Filters({
  depto, tag, water,
  onDeptoChange, onTagChange, onWaterChange,
  onClear,
  totalCount, filteredCount,
}: FiltersProps) {
  const hasFilters = depto || tag || water;

  return (
    <div
      style={{
        background: "var(--color-surface)",
        borderRadius: "var(--radius-md)",
        padding: 16,
        boxShadow: "var(--shadow-sm)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {/* Count */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.95rem", color: "var(--color-text)" }}>
          {filteredCount} {filteredCount === 1 ? "playa" : "playas"}
          {hasFilters && <span style={{ color: "var(--color-text-muted)", fontWeight: 400 }}> de {totalCount}</span>}
        </span>
        {hasFilters && (
          <button
            type="button"
            onClick={onClear}
            style={{
              ...chipBase,
              background: "var(--color-surface-alt)",
              border: "1px solid var(--color-border)",
              color: "var(--color-accent-warm)",
              fontWeight: 600,
            }}
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Departamento */}
      <div>
        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
          Departamento
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {deptos.map((d) => (
            <button
              key={d.value}
              type="button"
              style={depto === d.value ? chipActive : chipInactive}
              onClick={() => onDeptoChange(depto === d.value ? null : d.value)}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Agua */}
      <div>
        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
          Cuerpo de agua
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {waters.map((w) => (
            <button
              key={w.value}
              type="button"
              style={water === w.value ? { ...chipActive, background: "var(--color-accent-cool)", borderColor: "var(--color-accent-cool)" } : chipInactive}
              onClick={() => onWaterChange(water === w.value ? null : w.value)}
            >
              {w.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
          Tipo de playa
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {tags.map((t) => (
            <button
              key={t.value}
              type="button"
              style={tag === t.value ? { ...chipActive, background: "var(--color-secondary)", borderColor: "var(--color-secondary)", color: "var(--color-text)" } : chipInactive}
              onClick={() => onTagChange(tag === t.value ? null : t.value)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
