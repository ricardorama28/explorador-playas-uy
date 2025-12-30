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
  v === "tranquila" || v === "movida" || v === "servicios" || v === "naturaleza";

function Home() {
  const [selectedId, setSelectedId] = useState<string | null>(beaches[0]?.id ?? null);
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const deptoParam = searchParams.get("depto");
  const tagParam = searchParams.get("tag");
  const waterParam = searchParams.get("water");

  const deptoFilter = isDepto(deptoParam) ? deptoParam : null;
  const tagFilter = isTag(tagParam) ? tagParam : null;
  const isWaterbody = (v: string | null): v is Waterbody =>
    v === "river" || v === "ocean";

  const waterFilter = isWaterbody(waterParam) ? waterParam : null;

  const filteredBeaches = beaches.filter((b) => {
    const okDepto = deptoFilter ? b.depto === deptoFilter : true;
    const okTag = tagFilter ? b.tags.includes(tagFilter) : true;
    const okWater = waterFilter ? b.waterbody === waterFilter : true;
    return okDepto && okTag && okWater;
  });

  const handleSelect = (id: string) => {
      // 1er click: seleccionar
      if (id !== selectedId) {
        setSelectedId(id);
        return;
      }

      // 2do click (ya seleccionada): ir al detalle
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
    const next = new URLSearchParams(searchParams);
    next.delete("depto");
    next.delete("tag");
    next.delete("water");
    setSearchParams(next);
  };

  return (
    <div className="homeGrid">
      <h1 style={{ marginTop: 0 }}>Explorador de Playas del Uruguay</h1>
      <p style={{ marginTop: 4, opacity: 0.8 }}>
        Explorá playas por zona, servicios y condiciones (viento/olas).
      </p>

      <div className="mapBox">
        <Map items={filteredBeaches}
         selectedId={selectedId}
         onSelect={(id) => setSelectedId(id)}  />
      </div>

        <div className="rightPanel" >
          <Filters
            depto={deptoFilter}
            tag={tagFilter}
            water={waterFilter}
            onDeptoChange={setDepto}
            onTagChange={setTag}
            onWaterChange={setWater}
            onClear={clearFilters}
          />

          <div className="listBox">
            <BeachList items={filteredBeaches} selectedId={selectedId} onSelect={handleSelect} />
          </div>
        </div>
      </div>
  );
}

export default Home;
