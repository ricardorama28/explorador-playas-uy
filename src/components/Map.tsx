type MapProps = {
  height?: number;
};

function Map({ height = 320 }: MapProps) {
  return (
    <div style={{ height, background: "#eee", borderRadius: 12, padding: 12 }}>
      Mapa acá
    </div>
  );
}

export default Map;
