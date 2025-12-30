import "./home.css";
import Map from "../components/Map";
import Filters from "../components/Filters";
import BeachList from "../components/BeachList";
import { beaches } from "../data/beaches";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

type Depto = "Rocha" | "Maldonado" | "Canelones" | "Montevideo";
type Tag = "tranquila" | "movida" | "servicios" | "naturaleza";

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

  const deptoFilter = isDepto(deptoParam) ? deptoParam : null;
  const tagFilter = isTag(tagParam) ? tagParam : null;

  const filteredBeaches = beaches.filter((b) => {
    const okDepto = deptoFilter ? b.depto === deptoFilter : true;
    const okTag = tagFilter ? b.tags.includes(tagFilter) : true;
    return okDepto && okTag;
  });

  const selectedBeach = beaches.find((b) => b.id === selectedId);

  const handleSelect = (id: string) => {
    setSelectedId(id);
  
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

  const clearFilters = () => {
    const next = new URLSearchParams(searchParams);
    next.delete("depto");
    next.delete("tag");
    setSearchParams(next);
  };

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>Explorador de Playas del Uruguay</h1>
      <p style={{ marginTop: 4, opacity: 0.8 }}>
        Explorá playas por zona, servicios y condiciones (viento/olas).
      </p>

      <div className="homeGrid">
        <div>
          <Map selectedName={selectedBeach?.name} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, minHeight: 520 }}>
          <Filters
            depto={deptoFilter}
            tag={tagFilter}
            onDeptoChange={setDepto}
            onTagChange={setTag}
            onClear={clearFilters}
          />

          <div style={{ flex: 1 }}>
            <BeachList items={filteredBeaches} selectedId={selectedId} onSelect={handleSelect} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
