import L from "leaflet";
import marker2x from "leaflet/dist/images/marker-icon-2x.png";
import marker1x from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

export const defaultMarkerIcon = L.icon({
  iconRetinaUrl: marker2x,
  iconUrl: marker1x,
  shadowUrl: shadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
