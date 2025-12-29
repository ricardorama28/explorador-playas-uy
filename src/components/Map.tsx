type MapProps = {
  height?: number;
};

function Map({ height = 520 }: MapProps) {
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
      Mapa acá (después Leaflet)
    </div>
  );
}

export default Map;
