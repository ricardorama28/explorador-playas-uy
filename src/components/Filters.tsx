function Filters() {
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
      <span style={{ fontSize: 12, opacity: 0.7 }}>Filtros (próx.)</span>
      <button type="button">Rocha</button>
      <button type="button">Maldonado</button>
      <button type="button">Tranquila</button>
      <button type="button">Con servicios</button>
    </div>
  );
}

export default Filters;
