import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMemo, useEffect } from "react";
import type { Beach } from "../data/beaches";
import { useMap } from "react-leaflet";
import L from "leaflet";
import { defaultMarkerIcon } from "../lib/leafletIcon";

type Props = {
  items: Beach[];
  selectedId: string | null;
  onSelect: (id: string) => void;
};

function FitBounds({ items }: { items: Beach[] }) {
  const map = useMap();

  useEffect(() => {
    if (items.length === 0) return;

    const bounds = L.latLngBounds(items.map((b) => [b.lat, b.lng]));

    map.fitBounds(bounds, {
      padding: [40, 40],
      maxZoom: 12,
    });
  }, [items, map]);

  return null;
}

function Map({ items, selectedId, onSelect }: Props) {
  const center = useMemo<[number, number]>(() => {
    if (items.length > 0) return [items[0].lat, items[0].lng];
    return [-34.95, -54.95];
  }, [items]);

  const selected = items.find((b) => b.id === selectedId) || null;
  const mapCenter: [number, number] = selected ? [selected.lat, selected.lng] : center;

  return (
    <div
      style={{
        height: 560,
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: "var(--shadow-md)",
        border: "1px solid var(--color-border)",
      }}
    >
      <MapContainer center={mapCenter} zoom={10} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FitBounds items={items} />

        {items.map((b) => (
          <Marker
            key={b.id}
            position={[b.lat, b.lng]}
            icon={defaultMarkerIcon}
            eventHandlers={{ click: () => onSelect(b.id) }}
          >
            <Popup>
              <div style={{ fontFamily: "var(--font-body)" }}>
                <strong style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem" }}>{b.name}</strong>
                <div style={{ fontSize: "0.8rem", color: "#666", marginTop: 2 }}>
                  {b.depto} · {b.waterbody === "ocean" ? "Oceano" : "Rio de la Plata"}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#888", marginTop: 4 }}>
                  {b.description.slice(0, 80)}...
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
