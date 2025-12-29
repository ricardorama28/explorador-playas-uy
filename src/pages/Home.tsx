import Map from "../components/Map";
import BeachList from "../components/BeachList";
import { beaches } from "../data/beaches";

function Home() {
  return (
    <div>
      <h1>Explorador de Playas del Uruguay</h1>
      <p>Descubrí playas según viento, oleaje y tranquilidad.</p>

      <section style={{ marginTop: 16 }}>
        <h2>Mapa</h2>
        <Map />
      </section>

      <section style={{ marginTop: 16 }}>
        <h2>Playas</h2>
        <BeachList items={beaches} />
      </section>
    </div>
  );
}

export default Home;
