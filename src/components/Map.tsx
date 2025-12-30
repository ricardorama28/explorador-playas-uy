type MapProps = {
  height?: number;
  selectedName?: string;
};

function Map({ height = 520, selectedName }: MapProps) {
  return (
    <div
      style={{
        height,
        background: "#eee",
        borderRadius: 12,
        padding: 12,
        position: "sticky",
        top: 16,
      }}
    >
      <div style={{ fontSize: 12, opacity: 0.7 }}>
        {selectedName ? `Seleccionada: ${selectedName}` : "Seleccioná una playa"}
      </div>

      <div style={{ marginTop: 8 }}>Mapa acá (después Leaflet)</div>
    </div>
  );
}

export default Map;
