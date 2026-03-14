export type Depto = "Maldonado" | "Canelones" | "Montevideo" | "Rocha";

export type Waterbody = "ocean" | "river";
// ocean = Atlántico / ocean swell, river = Río de la Plata

export type Access = "easy" | "medium" | "hard";

export type Service =
  | "parking"
  | "toilets"
  | "lifeguard"
  | "food"
  | "showers";

export type Tag =
  | "tranquila"
  | "movida"
  | "naturaleza"
  | "surf"
  | "familia";

export type Beach = {
  id: string;
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

/* ──────────────────────────────────────────────
   ROCHA
   ────────────────────────────────────────────── */

const rochaBeaches: Beach[] = [
  {
    id: "punta-del-diablo",
    name: "Punta del Diablo",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.04361,
    lng: -53.87472,
    access: "easy",
    services: ["parking", "food", "showers"],
    tags: ["surf", "movida", "naturaleza"],
    description:
      "Antiguo pueblo de pescadores convertido en balneario bohemio. Olas consistentes y ambiente relajado con ferias artesanales.",
    lengthKm: 2.5,
  },
  {
    id: "playa-grande-pdd",
    name: "Playa Grande (Punta del Diablo)",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.0398,
    lng: -53.8685,
    access: "easy",
    services: ["parking", "food", "lifeguard"],
    tags: ["surf", "movida"],
    description:
      "La playa principal de Punta del Diablo, ideal para surf y bodyboard. Tiene buen oleaje y servicios cerca.",
    lengthKm: 1.2,
  },
  {
    id: "playa-de-la-viuda",
    name: "Playa de la Viuda",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.0475,
    lng: -53.879,
    access: "medium",
    services: ["parking"],
    tags: ["tranquila", "naturaleza"],
    description:
      "Pequeña playa rocosa entre Punta del Diablo y Santa Teresa, rodeada de naturaleza virgen y pozas naturales.",
    lengthKm: 0.4,
  },
  {
    id: "santa-teresa",
    name: "Playa Santa Teresa",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -33.9835,
    lng: -53.5345,
    access: "easy",
    services: ["parking", "showers", "toilets"],
    tags: ["naturaleza", "familia", "tranquila"],
    description:
      "Dentro del Parque Nacional Santa Teresa. Playa extensa de arena fina rodeada de bosque nativo y palmares.",
    lengthKm: 4.0,
  },
  {
    id: "la-coronilla",
    name: "La Coronilla",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -33.9125,
    lng: -53.5097,
    access: "easy",
    services: ["parking", "food"],
    tags: ["tranquila", "familia", "naturaleza"],
    description:
      "Balneario tranquilo cerca de la frontera con Brasil. Conocido por el avistamiento de ballenas francas entre julio y noviembre.",
    lengthKm: 3.0,
  },
  {
    id: "cabo-polonio",
    name: "Cabo Polonio",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.3994,
    lng: -53.7883,
    access: "hard",
    services: ["food"],
    tags: ["naturaleza", "tranquila", "surf"],
    description:
      "Reserva ecológica sin electricidad ni agua corriente. Lobos marinos, faro histórico y atardeceres únicos entre dunas.",
    lengthKm: 2.0,
  },
  {
    id: "valizas",
    name: "Barra de Valizas",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.3388,
    lng: -53.7806,
    access: "medium",
    services: ["parking", "food"],
    tags: ["naturaleza", "surf", "movida"],
    description:
      "Pueblo pequeño junto al arroyo Valizas. Punto de partida para caminar a Cabo Polonio por la playa y las dunas más altas de Uruguay.",
    lengthKm: 3.5,
  },
  {
    id: "aguas-dulces",
    name: "Aguas Dulces",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.2667,
    lng: -53.7667,
    access: "easy",
    services: ["parking", "food"],
    tags: ["tranquila", "familia", "naturaleza"],
    description:
      "Balneario con calles de arena y ritmo lento. Dunas, buena pesca y comunidad local amigable.",
    lengthKm: 5.0,
  },
  {
    id: "la-pedrera",
    name: "La Pedrera",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.3108,
    lng: -54.1225,
    access: "easy",
    services: ["parking", "food", "lifeguard"],
    tags: ["movida", "surf", "naturaleza"],
    description:
      "Balneario sobre un acantilado rocoso con vistas espectaculares. Vida nocturna activa en verano y buenas olas.",
    lengthKm: 1.5,
  },
  {
    id: "playa-del-barco",
    name: "Playa del Barco (La Pedrera)",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.3145,
    lng: -54.1175,
    access: "medium",
    services: ["parking"],
    tags: ["surf", "naturaleza"],
    description:
      "Nombrada por un naufragio visible en la arena. Excelente para surf y rodeada de formaciones rocosas.",
    lengthKm: 0.8,
  },
  {
    id: "la-paloma",
    name: "La Paloma",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.6575,
    lng: -54.1567,
    access: "easy",
    services: ["parking", "food", "lifeguard", "showers", "toilets"],
    tags: ["familia", "movida", "surf"],
    description:
      "Ciudad balnearia principal de Rocha. Puerto pesquero, faro, y múltiples playas con distinta orientación al oleaje.",
    lengthKm: 2.0,
  },
  {
    id: "la-balconada",
    name: "Playa La Balconada",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.6695,
    lng: -54.1456,
    access: "easy",
    services: ["parking", "lifeguard"],
    tags: ["surf", "naturaleza"],
    description:
      "Una de las mejores playas de surf de Uruguay. Olas potentes y constantes con fondo de arena.",
    lengthKm: 1.0,
  },
  {
    id: "la-aguada-paloma",
    name: "Playa La Aguada (La Paloma)",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.6615,
    lng: -54.1625,
    access: "easy",
    services: ["parking", "food", "lifeguard"],
    tags: ["familia", "tranquila"],
    description:
      "Playa protegida dentro de la bahía de La Paloma. Aguas más calmas, ideal para familias con niños.",
    lengthKm: 0.6,
  },
  {
    id: "anaconda",
    name: "Playa Anaconda",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.6533,
    lng: -54.1722,
    access: "easy",
    services: ["parking"],
    tags: ["tranquila", "naturaleza"],
    description:
      "Playa larga y poco concurrida al norte de La Paloma. Arena fina y entorno natural conservado.",
    lengthKm: 3.0,
  },
  {
    id: "costa-los-botes",
    name: "Playa de los Botes (La Paloma)",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.6605,
    lng: -54.155,
    access: "easy",
    services: ["parking", "food"],
    tags: ["familia", "tranquila"],
    description:
      "Junto al puerto de La Paloma. Aguas tranquilas con vista a los barcos pesqueros y al faro.",
    lengthKm: 0.5,
  },
  {
    id: "oceania-del-polonio",
    name: "Oceanía del Polonio",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.4175,
    lng: -53.8289,
    access: "medium",
    services: ["parking"],
    tags: ["tranquila", "naturaleza"],
    description:
      "Balneario aislado entre Cabo Polonio y Valizas. Dunas, playa infinita y sensación de estar en el fin del mundo.",
    lengthKm: 6.0,
  },
  {
    id: "punta-rubia",
    name: "Punta Rubia",
    depto: "Rocha",
    waterbody: "ocean",
    lat: -34.645,
    lng: -54.19,
    access: "easy",
    services: ["parking", "food"],
    tags: ["tranquila", "naturaleza", "familia"],
    description:
      "Pequeño balneario entre La Paloma y La Pedrera. Dunas, bosque de pinos y ambiente familiar.",
    lengthKm: 2.0,
  },
];

/* ──────────────────────────────────────────────
   MALDONADO
   ────────────────────────────────────────────── */

const maldonadoBeaches: Beach[] = [
  {
    id: "playa-mansa",
    name: "Playa Mansa",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.953423,
    lng: -54.94116,
    access: "easy",
    services: ["parking", "food", "lifeguard", "showers", "toilets"],
    tags: ["familia", "tranquila", "movida"],
    description:
      "La playa más emblemática de Punta del Este sobre el Río de la Plata. Aguas calmas ideales para familias, con servicios completos y atardeceres memorables.",
    lengthKm: 5.0,
  },
  {
    id: "playa-brava",
    name: "Playa Brava",
    depto: "Maldonado",
    waterbody: "ocean",
    lat: -34.95274,
    lng: -54.93164,
    access: "easy",
    services: ["parking", "food", "lifeguard", "showers"],
    tags: ["movida", "surf"],
    description:
      'Sobre el océano Atlántico, con olas fuertes y la icónica escultura "Los Dedos". Punto de encuentro de jóvenes y surfistas.',
    lengthKm: 3.0,
  },
  {
    id: "la-barra",
    name: "La Barra",
    depto: "Maldonado",
    waterbody: "ocean",
    lat: -34.9156036,
    lng: -54.8650428,
    access: "easy",
    services: ["parking", "food", "lifeguard"],
    tags: ["movida", "surf"],
    description:
      "Balneario sofisticado con puente ondulante icónico. Gastronomía de nivel, galerías de arte y buenas olas.",
    lengthKm: 2.5,
  },
  {
    id: "montoya",
    name: "Playa Montoya",
    depto: "Maldonado",
    waterbody: "ocean",
    lat: -34.915714,
    lng: -54.848879,
    access: "easy",
    services: ["parking", "food"],
    tags: ["movida", "surf"],
    description:
      "Playa de moda frecuentada por famosos. Paradores exclusivos, buenas olas y ambiente sofisticado.",
    lengthKm: 1.5,
  },
  {
    id: "bikini",
    name: "Playa Bikini",
    depto: "Maldonado",
    waterbody: "ocean",
    lat: -34.9095,
    lng: -54.8447,
    access: "easy",
    services: ["parking", "food"],
    tags: ["movida"],
    description:
      "Parador emblemático de Manantiales. Ambiente trendy con DJ sets, gastronomía y cócteles frente al mar.",
    lengthKm: 0.8,
  },
  {
    id: "jose-ignacio",
    name: "José Ignacio",
    depto: "Maldonado",
    waterbody: "ocean",
    lat: -34.84639,
    lng: -54.63333,
    access: "medium",
    services: ["parking", "food"],
    tags: ["tranquila", "naturaleza"],
    description:
      "Pueblo pesquero exclusivo con faro histórico. Gastronomía gourmet, galerías y la laguna de José Ignacio.",
    lengthKm: 2.0,
  },
  {
    id: "playa-jose-ignacio-mansa",
    name: "Playa Mansa de José Ignacio",
    depto: "Maldonado",
    waterbody: "ocean",
    lat: -34.8425,
    lng: -54.6395,
    access: "easy",
    services: ["parking", "food"],
    tags: ["tranquila", "familia"],
    description:
      "Lado calmo de José Ignacio con aguas protegidas por la punta. Vista al faro y atardeceres sobre la laguna.",
    lengthKm: 1.0,
  },
  {
    id: "punta-ballena",
    name: "Punta Ballena",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.88889,
    lng: -55.04056,
    access: "easy",
    services: ["parking", "food"],
    tags: ["naturaleza", "tranquila"],
    description:
      "Zona elevada con vistas panorámicas. Casapueblo del artista Páez Vilaró y playas protegidas entre rocas.",
    lengthKm: 1.5,
  },
  {
    id: "portezuelo",
    name: "Portezuelo",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.8796,
    lng: -55.059,
    access: "easy",
    services: ["parking", "food"],
    tags: ["familia", "tranquila"],
    description:
      "Amplia playa sobre el Río de la Plata con arena dorada. Zona residencial tranquila con arroyo Portezuelo.",
    lengthKm: 2.0,
  },
  {
    id: "solanas",
    name: "Solanas",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.875224,
    lng: -55.046109,
    access: "easy",
    services: ["parking", "food"],
    tags: ["familia", "tranquila"],
    description:
      "Playa familiar con aguas calmas y arena suave. Complejo residencial con servicios y entorno arbolado.",
    lengthKm: 1.5,
  },
  {
    id: "chihuahua",
    name: "Chihuahua",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.8746311,
    lng: -55.0851764,
    access: "easy",
    services: ["parking", "food"],
    tags: ["familia", "tranquila"],
    description:
      "Playa familiar y tranquila sobre el Río de la Plata. Popular entre familias por sus aguas mansas y poco profundas.",
    lengthKm: 1.0,
  },
  {
    id: "sauce-de-portezuelo",
    name: "Sauce de Portezuelo",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.875,
    lng: -55.14028,
    access: "easy",
    services: ["parking"],
    tags: ["tranquila", "familia"],
    description:
      "Balneario tranquilo con playas de arena gruesa. Entorno arbolado de sauces y ambiente muy relajado.",
    lengthKm: 1.0,
  },
  {
    id: "punta-negra",
    name: "Punta Negra",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.8869942,
    lng: -55.212112,
    access: "medium",
    services: ["parking"],
    tags: ["tranquila", "naturaleza"],
    description:
      "Formaciones rocosas oscuras que le dan el nombre. Playa semi-salvaje con buena pesca y atardeceres pintorescos.",
    lengthKm: 0.8,
  },
  {
    id: "piriapolis",
    name: "Piriápolis",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.86287,
    lng: -55.27471,
    access: "easy",
    services: ["parking", "food", "lifeguard", "showers", "toilets"],
    tags: ["movida", "familia"],
    description:
      "Balneario histórico fundado por Francisco Piria. Rambla costanera, cerro San Antonio con teleférico y Argentino Hotel.",
    lengthKm: 3.0,
  },
  {
    id: "playa-hermosa",
    name: "Playa Hermosa",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.8283456,
    lng: -55.3005262,
    access: "easy",
    services: ["parking"],
    tags: ["tranquila", "familia"],
    description:
      "Pequeño balneario con playa de arena y rocas. Ambiente residencial tranquilo, ideal para descanso.",
    lengthKm: 0.8,
  },
  {
    id: "playa-verde",
    name: "Playa Verde",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.8223457,
    lng: -55.3157315,
    access: "easy",
    services: ["parking"],
    tags: ["tranquila", "naturaleza"],
    description:
      "Balneario rodeado de vegetación que llega hasta la arena. Entorno verde, calmo y con pocos visitantes.",
    lengthKm: 0.6,
  },
  {
    id: "playa-grande-piriapolis",
    name: "Playa Grande (Piriápolis)",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.8575,
    lng: -55.2878,
    access: "easy",
    services: ["parking", "food", "lifeguard"],
    tags: ["familia", "movida"],
    description:
      "Playa principal al este de Piriápolis. Amplia extensión de arena con servicios y buena infraestructura.",
    lengthKm: 2.5,
  },
  {
    id: "playa-san-francisco",
    name: "Playa San Francisco",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.841,
    lng: -55.295,
    access: "easy",
    services: ["parking"],
    tags: ["tranquila", "familia"],
    description:
      "Balneario pequeño entre Piriápolis y Playa Hermosa. Tranquilidad y entorno natural.",
    lengthKm: 0.5,
  },
];

/* ──────────────────────────────────────────────
   CANELONES
   ────────────────────────────────────────────── */

const canelonesBeaches: Beach[] = [
  {
    id: "atlantida",
    name: "Atlántida",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.7725,
    lng: -55.7583,
    access: "easy",
    services: ["parking", "food", "lifeguard", "showers", "toilets"],
    tags: ["familia", "movida"],
    description:
      "El balneario más popular de Canelones. Amplia rambla, buena infraestructura, iglesia diseñada por Eladio Dieste.",
    lengthKm: 3.0,
  },
  {
    id: "las-toscas",
    name: "Las Toscas",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.7631,
    lng: -55.7944,
    access: "easy",
    services: ["parking", "food"],
    tags: ["tranquila", "familia"],
    description:
      "Balneario arbolado contiguo a Atlántida. Ambiente familiar con pinares que llegan hasta la costa.",
    lengthKm: 1.5,
  },
  {
    id: "parque-del-plata",
    name: "Parque del Plata",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.7672,
    lng: -55.7275,
    access: "easy",
    services: ["parking", "food", "lifeguard"],
    tags: ["familia", "tranquila"],
    description:
      "Balneario con rambla peatonal y playa extensa. Arroyo Solís Chico desemboca formando pozones de agua dulce.",
    lengthKm: 2.0,
  },
  {
    id: "la-floresta",
    name: "La Floresta",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.7583,
    lng: -55.685,
    access: "easy",
    services: ["parking", "food", "lifeguard"],
    tags: ["familia", "tranquila"],
    description:
      "Balneario histórico con arquitectura pintoresca. Playa arbolada de pinos y eucaliptos con aguas calmas.",
    lengthKm: 2.0,
  },
  {
    id: "costa-azul",
    name: "Costa Azul",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.7569,
    lng: -55.6575,
    access: "easy",
    services: ["parking", "food"],
    tags: ["familia", "tranquila"],
    description:
      "Pequeño balneario residencial con playa de arena dorada. Ambiente tranquilo entre La Floresta y Neptunia.",
    lengthKm: 1.0,
  },
  {
    id: "neptunia",
    name: "Neptunia",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.7544,
    lng: -55.6283,
    access: "easy",
    services: ["parking"],
    tags: ["tranquila", "familia"],
    description:
      "Balneario tranquilo con playa ancha y arboleda de pinos. Popular entre familias de la zona.",
    lengthKm: 1.2,
  },
  {
    id: "pinamar-uy",
    name: "Pinamar",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.7531,
    lng: -55.6139,
    access: "easy",
    services: ["parking"],
    tags: ["tranquila", "naturaleza"],
    description:
      "Bosques de pinos que llegan hasta la playa. Muy tranquilo, ideal para caminatas y contacto con la naturaleza.",
    lengthKm: 1.0,
  },
  {
    id: "salinas",
    name: "Salinas",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.7628,
    lng: -55.8322,
    access: "easy",
    services: ["parking", "food", "lifeguard"],
    tags: ["familia", "movida"],
    description:
      "Balneario consolidado con buena infraestructura. Rambla, comercios y playas anchas de arena.",
    lengthKm: 2.5,
  },
  {
    id: "marindia",
    name: "Marindia",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.765,
    lng: -55.82,
    access: "easy",
    services: ["parking"],
    tags: ["tranquila", "familia"],
    description:
      "Balneario residencial muy tranquilo. Playa ancha con barrancas naturales y pinares.",
    lengthKm: 1.5,
  },
  {
    id: "jaureguiberry",
    name: "Jaureguiberry",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.7467,
    lng: -55.5917,
    access: "easy",
    services: ["parking", "food"],
    tags: ["familia", "tranquila"],
    description:
      "Último balneario de Canelones hacia el este. Playa rodeada de naturaleza con la desembocadura del arroyo Solís Grande.",
    lengthKm: 2.0,
  },
  {
    id: "san-luis",
    name: "San Luis",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.7592,
    lng: -55.6472,
    access: "easy",
    services: ["parking"],
    tags: ["tranquila", "familia"],
    description:
      "Pequeño balneario entre Neptunia y Pinamar. Arena fina y ambiente de barrio residencial costero.",
    lengthKm: 0.8,
  },
  {
    id: "shangri-la",
    name: "Shangrilá",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.7711,
    lng: -55.9592,
    access: "easy",
    services: ["parking", "food"],
    tags: ["familia"],
    description:
      "Balneario urbano cercano a Montevideo con buena conectividad. Playa con rambla y zona comercial activa.",
    lengthKm: 1.5,
  },
  {
    id: "ciudad-de-la-costa",
    name: "Ciudad de la Costa",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.775,
    lng: -55.9458,
    access: "easy",
    services: ["parking", "food"],
    tags: ["familia"],
    description:
      "Franja costera urbanizada con múltiples accesos a la playa. Rambla para paseos, ciclismo y running.",
    lengthKm: 4.0,
  },
  {
    id: "solymar",
    name: "Solymar",
    depto: "Canelones",
    waterbody: "river",
    lat: -34.7739,
    lng: -55.9403,
    access: "easy",
    services: ["parking", "food"],
    tags: ["familia"],
    description:
      "Balneario residencial del área metropolitana. Playa amplia, accesible y con servicios cercanos.",
    lengthKm: 2.0,
  },
];

/* ──────────────────────────────────────────────
   MONTEVIDEO
   ────────────────────────────────────────────── */

const montevideoBeaches: Beach[] = [
  {
    id: "pocitos",
    name: "Playa Pocitos",
    depto: "Montevideo",
    waterbody: "river",
    lat: -34.9175,
    lng: -56.1583,
    access: "easy",
    services: ["parking", "food", "lifeguard", "showers", "toilets"],
    tags: ["movida", "familia"],
    description:
      "La playa más icónica de Montevideo. Rambla activa con edificios emblemáticos, ideal para correr, pasear y tomar sol.",
    lengthKm: 1.2,
  },
  {
    id: "ramirez",
    name: "Playa Ramírez",
    depto: "Montevideo",
    waterbody: "river",
    lat: -34.9158,
    lng: -56.1756,
    access: "easy",
    services: ["parking", "food", "lifeguard", "showers"],
    tags: ["movida", "familia"],
    description:
      "Frente al Parque Rodó. Playa urbana con juegos infantiles, parque de diversiones y Museo Nacional de Artes Visuales.",
    lengthKm: 0.5,
  },
  {
    id: "malvin",
    name: "Playa Malvín",
    depto: "Montevideo",
    waterbody: "river",
    lat: -34.9108,
    lng: -56.1164,
    access: "easy",
    services: ["parking", "food", "lifeguard"],
    tags: ["familia", "movida"],
    description:
      "Playa barrial con ambiente joven. Canchas de fútbol-playa, vóley y eventos deportivos durante el verano.",
    lengthKm: 1.0,
  },
  {
    id: "buceo",
    name: "Playa del Buceo",
    depto: "Montevideo",
    waterbody: "river",
    lat: -34.9117,
    lng: -56.1378,
    access: "easy",
    services: ["parking", "food"],
    tags: ["familia", "tranquila"],
    description:
      "Playa pequeña junto al Puerto del Buceo. Aguas calmas y vista a los veleros del yacht club.",
    lengthKm: 0.4,
  },
  {
    id: "carrasco",
    name: "Playa Carrasco",
    depto: "Montevideo",
    waterbody: "river",
    lat: -34.8908,
    lng: -56.0508,
    access: "easy",
    services: ["parking", "food", "lifeguard"],
    tags: ["familia", "tranquila"],
    description:
      "Playa del barrio más exclusivo de Montevideo. Arena blanca, arroyo Carrasco y el histórico Hotel Casino Carrasco.",
    lengthKm: 2.0,
  },
  {
    id: "playa-honda",
    name: "Playa Honda",
    depto: "Montevideo",
    waterbody: "river",
    lat: -34.9094,
    lng: -56.1053,
    access: "easy",
    services: ["parking"],
    tags: ["tranquila", "familia"],
    description:
      "Playa de aguas muy calmas y poco profundas. Ideal para niños pequeños por su gradual profundidad.",
    lengthKm: 0.6,
  },
  {
    id: "playa-de-los-ingleses",
    name: "Playa de los Ingleses",
    depto: "Montevideo",
    waterbody: "river",
    lat: -34.9053,
    lng: -56.0806,
    access: "easy",
    services: ["parking"],
    tags: ["tranquila", "naturaleza"],
    description:
      "Playa rocosa y pintoresca en Punta Gorda. Entorno natural dentro de la ciudad, popular para pesca.",
    lengthKm: 0.3,
  },
  {
    id: "playa-verde-mvd",
    name: "Playa Verde (Montevideo)",
    depto: "Montevideo",
    waterbody: "river",
    lat: -34.9025,
    lng: -56.0694,
    access: "easy",
    services: ["parking"],
    tags: ["tranquila", "naturaleza"],
    description:
      "Pequeña playa entre Punta Gorda y Carrasco. Vegetación abundante y rocas que forman pozas naturales.",
    lengthKm: 0.3,
  },
];

/* ──────────────────────────────────────────────
   EXPORT
   ────────────────────────────────────────────── */

export const beaches: Beach[] = [
  ...montevideoBeaches,
  ...canelonesBeaches,
  ...maldonadoBeaches,
  ...rochaBeaches,
];
