import "./home.css";
import Map from "../components/Map";
import Filters from "../components/Filters";
import BeachList from "../components/BeachList";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { beaches, type Tag, type Depto, type Waterbody } from "../data/beaches";

const isDepto = (v: string | null): v is Depto =>
  v === "Rocha" || v === "Maldonado" || v === "Canelones" || v === "Montevideo";

const isTag = (v: string | null): v is Tag =>
  v === "tranquila" || v === "movida" || v === "naturaleza" || v === "surf" || v === "familia";

const isWaterbody = (v: string | null): v is Waterbody =>
  v === "river" || v === "ocean";

function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const deptoParam = searchParams.get("depto");
  const tagParam = searchParams.get("tag");
  const waterParam = searchParams.get("water");

  const deptoFilter = isDepto(deptoParam) ? deptoParam : null;
  const tagFilter = isTag(tagParam) ? tagParam : null;
  const waterFilter = isWaterbody(waterParam) ? waterParam : null;

  const filteredBeaches = beaches.filter((b) => {
    const okDepto = deptoFilter ? b.depto === deptoFilter : true;
    const okTag = tagFilter ? b.tags.includes(tagFilter) : true;
    const okWater = waterFilter ? b.waterbody === waterFilter : true;
    return okDepto && okTag && okWater;
  });

  const handleSelect = (id: string) => {
    if (id !== selectedId) {
      setSelectedId(id);
      return;
    }
    const qs = searchParams.toString();
    navigate(`/playa/${id}${qs ? `?${qs}` : ""}`);
  };

  const setDepto = (value: Depto | null) => {
    const next = new URLSearchParams(searchParams);
    if (!value) next.delete("depto");
    else next.set("depto", value);
    setSearchParams(next);
  };

  const setTag = (value: Tag | null) => {
    const next = new URLSearchParams(searchParams);
    if (!value) next.delete("tag");
    else next.set("tag", value);
    setSearchParams(next);
  };

  const setWater = (value: Waterbody | null) => {
    const next = new URLSearchParams(searchParams);
    if (!value) next.delete("water");
    else next.set("water", value);
    setSearchParams(next);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  return (
    <div className="home">
      <div className="home__hero">
        <h1 className="home__title">Explora las playas de Uruguay</h1>
        <p className="home__subtitle">
          Descubri {beaches.length} playas a lo largo de la costa, desde Montevideo hasta Rocha.
          Filtra por departamento, tipo de agua y estilo.
        </p>
      </div>

      <div className="home__content">
        <div className="home__map">
          <Map
            items={filteredBeaches}
            selectedId={selectedId}
            onSelect={(id) => setSelectedId(id)}
          />
        </div>

        <div className="home__sidebar">
          <Filters
            depto={deptoFilter}
            tag={tagFilter}
            water={waterFilter}
            onDeptoChange={setDepto}
            onTagChange={setTag}
            onWaterChange={setWater}
            onClear={clearFilters}
            totalCount={beaches.length}
            filteredCount={filteredBeaches.length}
          />

          <div className="home__list-wrapper">
            <BeachList
              items={filteredBeaches}
              selectedId={selectedId}
              onSelect={handleSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
