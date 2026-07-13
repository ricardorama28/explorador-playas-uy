# 🌊 Explorador de Playas UY

Aplicación web para descubrir y comparar **57 playas** de la costa uruguaya, desde
Montevideo hasta Rocha. Explorá el mapa, filtrá por departamento, tipo de agua y
estilo de playa, y abrí la ficha de cada playa con sus servicios, nivel de acceso y
ubicación.

> Río de la Plata y océano Atlántico en un solo lugar. Encontrá tu próxima playa
> según lo que buscás: tranquilidad, movida, surf, naturaleza o un plan en familia.

---

## ✨ Funcionalidades

- **Mapa interactivo** (Leaflet + OpenStreetMap) con marcadores para cada playa y
  ajuste automático de encuadre según los filtros activos.
- **Filtros combinables** por:
  - Departamento — Montevideo, Canelones, Maldonado, Rocha.
  - Cuerpo de agua — Río de la Plata u océano Atlántico.
  - Tipo de playa — familia, tranquila, movida, surf, naturaleza.
- **Filtros persistidos en la URL**: podés compartir una búsqueda concreta
  (ej. `/?depto=Rocha&tag=surf`) y se abre con los mismos filtros aplicados.
- **Listado sincronizado con el mapa**: seleccionar una playa la centra en el mapa;
  volver a tocarla abre su ficha de detalle.
- **Ficha de detalle** por playa con descripción, tags, cuerpo de agua, nivel de
  acceso, largo aproximado, coordenadas y servicios disponibles.
- **Diseño responsive** con sistema de tokens CSS (colores, tipografías, sombras).

---

## 🧱 Stack técnico

| Área         | Tecnología |
|--------------|-----------|
| Framework    | [React 19](https://react.dev/) |
| Lenguaje     | [TypeScript](https://www.typescriptlang.org/) |
| Build / dev  | [Vite 7](https://vite.dev/) |
| Ruteo        | [React Router 7](https://reactrouter.com/) |
| Mapas        | [Leaflet](https://leafletjs.com/) + [react-leaflet](https://react-leaflet.js.org/) |
| Linting      | ESLint 9 + typescript-eslint |

---

## 🚀 Puesta en marcha

Requisitos: **Node.js 20.19+ o 22.12+** (lo exige Vite 7) y npm.

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo (http://localhost:5173)
npm run dev

# 3. Build de producción (typecheck + bundle en dist/)
npm run build

# 4. Previsualizar el build de producción
npm run preview

# 5. Linter
npm run lint
```

---

## 🗂️ Estructura del proyecto

```
src/
├── App.tsx                # Rutas (/ y /playa/:id) con React Router
├── main.tsx               # Punto de entrada
├── components/
│   ├── Layout.tsx         # Header + footer + <Outlet/>
│   ├── Map.tsx            # Mapa Leaflet con marcadores y FitBounds
│   ├── Filters.tsx        # Chips de filtro (depto / agua / tag)
│   ├── BeachList.tsx      # Listado de resultados
│   └── BeachCard.tsx      # Tarjeta resumen de una playa
├── pages/
│   ├── Home.tsx           # Vista principal: mapa + filtros + listado
│   └── BeachDetail.tsx    # Ficha completa de una playa
├── data/
│   └── beaches.ts         # Fuente de verdad: tipos + dataset de playas
└── lib/
    └── leafletIcon.ts     # Configuración del ícono de marcador
```

---

## 📊 Modelo de datos

Todas las playas viven en [`src/data/beaches.ts`](src/data/beaches.ts). Cada playa
sigue el tipo `Beach`:

```ts
type Beach = {
  id: string;              // slug único, usado en la URL de detalle
  name: string;
  depto: "Maldonado" | "Canelones" | "Montevideo" | "Rocha";
  waterbody: "ocean" | "river";   // Atlántico | Río de la Plata
  lat: number;
  lng: number;
  access: "easy" | "medium" | "hard";
  services: ("parking" | "toilets" | "lifeguard" | "food" | "showers")[];
  tags: ("tranquila" | "movida" | "naturaleza" | "surf" | "familia")[];
  description: string;
  lengthKm?: number;       // largo aproximado de la playa
};
```

### Agregar una playa nueva

1. Abrí `src/data/beaches.ts`.
2. Agregá un objeto `Beach` al array del departamento correspondiente
   (`rochaBeaches`, `maldonadoBeaches`, `canelonesBeaches` o `montevideoBeaches`).
3. Usá un `id` único en formato slug (ej. `"playa-nueva"`).
4. El nuevo registro aparece automáticamente en el mapa, los filtros y el listado.

> 💡 La arquitectura completa del proyecto (visión, stack, invariantes de datos y
> roadmap por fases) vive en **[`biblia.md`](biblia.md)**. Cómo trabajar y el estado
> de avance, en **[`CLAUDE.md`](CLAUDE.md)**.

---

## 🧭 Roadmap

La ficha de detalle ya reserva un espacio para **condiciones y reportes**. Próximas
mejoras previstas:

- Información de viento y oleaje por playa.
- Reportes de noctilucas (mar bioluminiscente).
- Buscador por nombre y ordenamientos.
- Favoritos y planificación de recorridos.

---

## 📄 Sobre el proyecto

Proyecto **personal de portfolio** para explorar la costa uruguaya. Los datos de
playas son orientativos; verificá siempre las condiciones locales antes de visitar.
