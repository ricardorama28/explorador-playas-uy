import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMemo } from "react";
import type { Beach } from "../data/beaches";
import { useEffect } from "react";
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

    const bounds = L.latLngBounds(
      items.map((b) => [b.lat, b.lng])
    );

    map.fitBounds(bounds, {
      padding: [40, 40],
      maxZoom: 12,
    });
  }, [items, map]);

  return null;
}


function Map({ items, selectedId, onSelect }: Props) {
  // Centro fallback (Punta del Este aprox)
  const center = useMemo<[number, number]>(() => {
    if (items.length > 0) return [items[0].lat, items[0].lng];
    return [-34.95, -54.95];
  }, [items]);

  // Si hay selected, centrar más cerca
  const selected = items.find((b) => b.id === selectedId) || null;
  const mapCenter: [number, number] = selected ? [selected.lat, selected.lng] : center;

  return (
    <div style={{ height: 520, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)" }}>
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
              <strong>{b.name}</strong>
              <div style={{ opacity: 0.8 }}>{b.depto} · {b.waterbody === "ocean" ? "Océano" : "Río"}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
