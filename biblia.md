# Explorador de Playas UY — BIBLIA DE ARQUITECTURA

> Fuente de verdad del proyecto. Toda decisión técnica, de producto y de negocio vive acá.
> Antes de implementar cualquier feature, leer este archivo completo.
> Acá vive el **plan** completo con el avance de sus work-orders (casillas). El **puntero de dónde vamos ahora** (fase/etapa/paso actual) NO se duplica acá — vive en CLAUDE.md.

---

## 1. VISIÓN DEL PRODUCTO

Aplicación web que permite **descubrir, filtrar y comparar las playas de la costa
uruguaya** (Montevideo, Canelones, Maldonado y Rocha) sobre un mapa interactivo, con
fichas por playa que resumen su carácter, servicios, nivel de acceso y ubicación.

**Propuesta de valor:** encontrar la playa correcta según lo que buscás
(tranquilidad, movida, surf, naturaleza, familia) y según dónde estás, en un solo
lugar y de un vistazo.

**Modelo de negocio:** **ninguno.** Es un proyecto **personal de portfolio y
aprendizaje**. No hay monetización, ni ads, ni cuentas de usuario con fines
comerciales. Las decisiones se toman priorizando **craft técnico y claridad de
arquitectura**, no ingresos. Cualquier feature que solo tenga sentido con un modelo
de negocio (pagos, planes, monetización de datos) está **fuera de alcance por
definición**.

---

## 2. CONTEXTO DEL USUARIO / EQUIPO

- **Quién desarrolla:** desarrollador individual, en modo aprendizaje.
- **Objetivo del proyecto:** mostrar dominio de una SPA moderna (React 19 +
  TypeScript + Vite) con mapa, ruteo, estado en URL y un modelo de datos tipado.
- **Usuario final imaginado:** alguien que planea una salida a la playa en Uruguay y
  quiere comparar opciones rápido. No se recolectan sus datos.
- **Restricción operativa:** el desarrollo se ejecuta por etapas, potencialmente en
  sesiones distintas y por modelos distintos; por eso el proyecto se mantiene
  **reanudable** (ver CLAUDE.md).

---

## 3. STACK TÉCNICO

| Capa | Tecnología | Razón |
|------|-----------|-------|
| Framework UI | React 19.2 | SPA moderna, base del portfolio. |
| Lenguaje | TypeScript 5.9 | Modelo de datos tipado (`Beach`) como red de seguridad. |
| Build / dev | Vite 7.2 | HMR rápido y build simple. |
| Ruteo | React Router 7.11 | Rutas `/` y `/playa/:id`; filtros persistidos en query params. |
| Mapa | Leaflet 1.9.4 + react-leaflet 5.0 | Mapa interactivo con tiles de OpenStreetMap, sin API key. |
| Linting | ESLint 9 + typescript-eslint 8 | Calidad de código. |
| Deploy | **Vercel** | Sitio estático Vite; requiere rewrite SPA (`/* → /index.html`) por `BrowserRouter`. `main` como Production. |

**Notas del stack:**
- Los tiles vienen de OpenStreetMap (`{s}.tile.openstreetmap.org`), sin costo ni
  clave; respetar su política de uso.
- No hay backend **todavía** (ver Fase 3): hoy el dataset es estático y se compila
  dentro del bundle.
- Estilos: sistema de tokens CSS (`--color-*`, `--font-*`, `--radius-*`,
  `--shadow-*`) usados inline y en `home.css`. No hay librería de UI externa.

---

## 4. ARQUITECTURA DE DATOS / SISTEMA

**Fuente de datos actual:** un único array tipado en `src/data/beaches.ts`,
compilado en el bundle (sin red, sin backend). Es la **única fuente de verdad de
datos** de la app en su estado actual.

Entidad central `Beach`:

```ts
type Depto     = "Maldonado" | "Canelones" | "Montevideo" | "Rocha";
type Waterbody = "ocean" | "river";                 // Atlántico | Río de la Plata
type Access    = "easy" | "medium" | "hard";
type Service   = "parking" | "toilets" | "lifeguard" | "food" | "showers";
type Tag       = "tranquila" | "movida" | "naturaleza" | "surf" | "familia";

type Beach = {
  id: string;            // slug único → URL /playa/:id
  name: string;
  depto: Depto;
  waterbody: Waterbody;
  lat: number;
  lng: number;
  access: Access;
  services: Service[];
  tags: Tag[];
  description: string;
  lengthKm?: number;
};
```

**Composición del dataset (57 playas):**

| Departamento | Playas |
|--------------|-------:|
| Montevideo   | 8  |
| Canelones    | 14 |
| Maldonado    | 18 |
| Rocha        | 17 |
| **Total**    | **57** |

**Flujo de la app:**

```
App (BrowserRouter)
└── Layout (header + footer + <Outlet/>)
    ├── "/"          → Home
    │                   ├── Map        (Leaflet: markers + FitBounds sobre filtrados)
    │                   ├── Filters    (chips depto / waterbody / tag)
    │                   └── BeachList  → BeachCard[]
    │                   estado: selectedId (local) + filtros (URL: ?depto&tag&water)
    └── "/playa/:id" → BeachDetail (ficha completa, lee ?qs para volver con filtros)
```

### Reglas de datos (invariantes)

- **INV-1 — `id` único y estable.** Cada `Beach.id` es un slug único; se usa como
  ruta (`/playa/:id`) y como key de React. Nunca dos playas con el mismo `id`.
- **INV-2 — Los filtros viven en la URL, no en estado efímero.** `depto`, `tag` y
  `water` se leen/escriben en query params. Una URL con filtros debe reproducir la
  misma vista al compartirse. `selectedId` (playa resaltada) sí es estado local.
- **INV-3 — Enums cerrados.** `depto`, `waterbody`, `access`, `service` y `tag` son
  uniones literales cerradas. Agregar un valor nuevo implica tocar el tipo, los
  filtros y los mapeos de label/color; no se aceptan strings libres.
- **INV-4 — Toda playa nueva entra por su array de departamento** en `beaches.ts`
  (`montevideoBeaches` / `canelonesBeaches` / `maldonadoBeaches` / `rochaBeaches`),
  y el export `beaches` los concatena. No hay otra vía de alta.
- **INV-5 — Sin secretos en el repo.** No se hardcodean claves ni tokens. Los tiles
  actuales no requieren clave; cualquier API futura usa variables de entorno.

---

## 5. ALCANCE — QUÉ ENTRA Y QUÉ NO

**En alcance (visión del proyecto):**
- Explorador con mapa, filtros combinables y fichas de playa.
- Enriquecer la ficha con condiciones (viento/oleaje) y reportes comunitarios
  (noctilucas), servidos por un backend propio + API.
- Buscador por nombre, ordenamientos, favoritos y armado de recorridos.

**Fuera de alcance (explícito):**
- **Monetización de cualquier tipo** (es portfolio, ver §1).
- **Reservas, pagos, e-commerce** de servicios de playa.
- **App nativa** (iOS/Android). Es web.
- **Cobertura fuera de Uruguay.** El dominio es la costa uruguaya.
- **Edición pública libre del dataset** sin moderación (los reportes de usuarios de
  Fase 5 son un caso acotado, no edición abierta del catálogo).

---

## 6. FASES Y ETAPAS (STEPS)

El desarrollo se corta en fases. Cada fase tiene etapas con work-orders atómicos,
tomables de a uno por sesión. Esta es la sección viva **STEPS**: las casillas marcan
el avance del plan. El **puntero** de dónde vamos ahora (fase/etapa/paso activo) no se
repite acá — vive en CLAUDE.md, que es su fuente única.

### FASE 0 — MVP Explorador ✅
**Definición:** existe una SPA navegable con mapa, filtros y fichas sobre el dataset
estático. **Ya implementada** (código presente en el repo).

**Etapa 0.1 — Núcleo**
- [x] Modelo `Beach` y dataset de 57 playas en `beaches.ts`.
- [x] Layout con header/footer y ruteo (`/`, `/playa/:id`).
- [x] Mapa Leaflet con markers y `FitBounds` sobre los resultados filtrados.
- [x] Filtros por departamento, cuerpo de agua y tag, persistidos en la URL.
- [x] Listado (`BeachList` + `BeachCard`) sincronizado con el mapa.
- [x] Ficha de detalle (`BeachDetail`) con servicios, acceso y coordenadas.

### FASE 1 — Consolidación y deploy 🔄
**Definición:** la base actual queda estable, verificable y publicada en Vercel.

**Etapa 1.1 — Calidad de base**
- [ ] Pasar `npm run lint` y `npm run build` limpios y dejarlos como gate.
- [ ] Revisar responsive del layout mapa+sidebar en mobile.
- [ ] Revisar accesibilidad de los chips de filtro y las tarjetas (foco/teclado).

**Etapa 1.2 — Deploy**
- [ ] Agregar `vercel.json` con rewrite SPA (`/* → /index.html`) para que
  `/playa/:id` no devuelva 404 al abrir/refrescar directo (usa `BrowserRouter`).
- [ ] Publicar en Vercel con `main` como Production.
- [ ] Documentar el flujo de deploy y verificar el primer deploy productivo.

### FASE 2 — Buscador y orden ⏳
**Definición:** el usuario puede encontrar una playa por nombre y ordenar resultados.

**Etapa 2.1 — Buscar**
- [ ] Input de búsqueda por nombre, combinable con los filtros existentes.
- [ ] Ordenamientos (ej. por departamento, por largo, alfabético).

### FASE 3 — Backend propio + API ⏳
**Definición:** el dataset deja de estar hardcodeado y se sirve desde una API propia,
habilitando datos dinámicos y reportes de usuarios. Preparar el terreno para Fases 4-5.

**Etapa 3.1 — Servir playas desde API**
- [ ] Definir backend + esquema de datos (espejo del tipo `Beach`).
- [ ] Migrar el dataset estático a la fuente servida por API, sin romper INV-1..INV-4.
- [ ] Capa de fetch en el front (loading/error), reemplazando el import estático.

### FASE 4 — Condiciones (viento / oleaje) ⏳
**Definición:** la ficha muestra condiciones reales por playa.

**Etapa 4.1 — Integración de clima/oleaje**
- [ ] Integrar API de viento/oleaje (por coordenadas de la playa).
- [ ] Renderizar condiciones en la sección "Condiciones y reportes" de la ficha.

### FASE 5 — Reportes de noctilucas ⏳
**Definición:** los usuarios pueden reportar avistajes de mar bioluminiscente.

**Etapa 5.1 — Reportes comunitarios**
- [ ] Modelo de reporte (playa, fecha, avistaje) sobre el backend de Fase 3.
- [ ] Alta y visualización de reportes en la ficha, con moderación mínima.

### FASE 6 — Favoritos y recorridos ⏳
**Definición:** el usuario guarda playas y arma itinerarios.

**Etapa 6.1 — Favoritos y planificación**
- [ ] Marcar/guardar playas favoritas.
- [ ] Armar un recorrido con varias playas.

---

## 7. REGLA DE MODULARIZACIÓN

Las tareas repetibles con un workflow propio NO viven como sección de esta biblia: se
modularizan en su propio archivo MD (ej: `SEED_PLAYA.md`), con el formato de
`modulo.template.md`, y se referencian desde acá.

**Módulos del proyecto:**
- _(ninguno todavía)_ — candidato futuro: `SEED_PLAYA.md`, el flujo repetible para dar
  de alta una playa nueva respetando INV-1..INV-4 (crear bajo demanda).

---

## 8. REGLAS DEL PROYECTO

- Toda playa nueva se agrega SOLO vía su array de departamento en `beaches.ts` (INV-4).
- Nunca romper la persistencia de filtros en la URL (INV-2).
- No agregar valores fuera de los enums sin tocar tipo + filtros + labels/colores (INV-3).
- No hardcodear secretos; APIs futuras usan variables de entorno (INV-5).
- `main` es la rama de producción en Vercel. Nada se considera "en producción" hasta
  estar en `origin/main`.
- Antes de declarar una etapa terminada: `npm run lint` y `npm run build` en verde.

---

## 9. BUGS

Defectos encontrados fuera del flujo normal de etapas.
**Atributos:** estado · etapa donde se reconoció · fecha · duración de corrección.

_(sin bugs registrados)_

---

## 10. MEJORAS TÉCNICAS

Cambios de calidad técnica que no son feature ni bug.
**Atributos:** estado · etapa de referencia · fecha · duración · impacto medible.

---

### ✅ MT-001 — Documentación de arquitectura (biblia + CLAUDE)
- **Estado:** Resuelto
- **Etapa de referencia:** Fase 1 (consolidación)
- **Fecha:** 2026-07-13
- **Duración:** 1 sesión
- **Impacto:** proyecto reanudable y auditable; README, biblia.md y CLAUDE.md sin
  solapamiento. Onboarding de una sesión nueva pasa de "leer todo el código" a "leer
  la biblia y el estado".
- **Descripción:** se reescribió el README genérico de Vite y se generó la biblia de
  arquitectura + el CLAUDE.md operativo siguiendo el skill `berserk-arquitect`.

---

## 11. CONTEXTO PARA NUEVAS SESIONES

> "Explorador de Playas UY: SPA de portfolio (React 19 + TypeScript + Vite + React
> Router + Leaflet) que muestra 57 playas de la costa uruguaya en un mapa con filtros
> por departamento, cuerpo de agua y tipo. Dataset estático en `src/data/beaches.ts`;
> backend propio planeado (Fase 3). Deploy en Vercel, `main` = Production. Antes de
> tocar nada, leé esta `biblia.md` completa y el ESTADO ACTUAL de `CLAUDE.md`, y
> seguí desde el próximo paso sin reescribir lo que ya funciona."
