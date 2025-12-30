import type { Tag, Depto, Waterbody } from "../data/beaches";

type FiltersProps = {
  depto: Depto | null;
  tag: Tag | null;
  water: Waterbody | null;
  onDeptoChange: (value: Depto | null) => void;
  onTagChange: (value: Tag | null) => void;
  onWaterChange: (value: Waterbody | null) => void;
  onClear: () => void;
};

function Filters({ depto, tag, water, onDeptoChange, onTagChange, onWaterChange, onClear }: FiltersProps) {
  const deptoBtn = (value: Depto) => ({
    background: depto === value ? "rgba(110,168,254,0.18)" : "transparent",
    border: depto === value ? "1px solid #6ea8fe" : "1px solid #ddd",
  });

  const tagBtn = (value: Tag) => ({
    background: tag === value ? "rgba(110,168,254,0.18)" : "transparent",
    border: tag === value ? "1px solid #6ea8fe" : "1px solid #ddd",
  });

  const baseBtn: React.CSSProperties = {
    padding: "8px 10px",
    borderRadius: 10,
    cursor: "pointer",
    color: "inherit",
  };

  const inactiveBtn: React.CSSProperties = {
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "rgba(255,255,255,0.9)",
  };

  const activeBtn: React.CSSProperties = {
    background: "rgba(255,255,255,0.12)",
    border: "1px solid rgba(255,255,255,0.25)",
    color: "#fff",
  };



  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        padding: 12,
        border: "1px solid #ddd",
        borderRadius: 12,
      }}
    >
      <span style={{ fontSize: 12, opacity: 0.7, marginRight: 6 }}>Filtros</span>

      {/* Deptos */}
      <button type="button" style={{ ...baseBtn, ...deptoBtn("Rocha") }} onClick={() => onDeptoChange(depto === "Rocha" ? null : "Rocha")}>
        Rocha
      </button>
      <button type="button" style={{ ...baseBtn, ...deptoBtn("Maldonado") }} onClick={() => onDeptoChange(depto === "Maldonado" ? null : "Maldonado")}>
        Maldonado
      </button>

      <button
          type="button"
          style={{ ...baseBtn, ...(water === "river" ? activeBtn : inactiveBtn) }}
          onClick={() => onWaterChange(water === "river" ? null : "river")}
    >
      Río
    </button>

      <button
          type="button"
          style={{ ...baseBtn, ...(water === "ocean" ? activeBtn : inactiveBtn) }}
          onClick={() => onWaterChange(water === "ocean" ? null : "ocean")}
    >
      Océano
    </button>


      {/* Tags */}
      <button type="button" style={{ ...baseBtn, ...tagBtn("tranquila") }} onClick={() => onTagChange(tag === "tranquila" ? null : "tranquila")}>
        Tranquila
      </button>

      {/* Reset */}
      <button type="button" style={{ ...baseBtn, border: "1px solid #ddd", opacity: 0.8 }} onClick={onClear}>
        Limpiar
      </button>
    </div>
  );
}

export default Filters;
