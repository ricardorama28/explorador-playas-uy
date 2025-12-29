import "./home.css";
import Map from "../components/Map";
import Filters from "../components/Filters";
import BeachList from "../components/BeachList";
import { beaches } from "../data/beaches";

function Home() {
  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Explorador de Playas del Uruguay</h1>
      <p style={{ marginTop: 4, opacity: 0.8 }}>
        Explorá playas por zona, servicios y condiciones (viento/olas).
      </p>

      {/* 2 columnas */}
      <div className="homeGrid">
        {/* Columna mapa */}
        <div>
          <Map />
        </div>

        {/* Columna panel */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Filters />
          <BeachList items={beaches} />
        </div>
      </div>
    </div>
  );
}

export default Home;
