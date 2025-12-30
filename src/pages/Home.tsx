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

      <div className="homeGrid">
        <div>
          <Map />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, minHeight: 520 }}>
          <Filters />
          <div style={{ flex: 1 }}>
            <BeachList items={beaches} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
