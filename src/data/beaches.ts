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
};


export const beaches: Beach[] = [
  {
    id: "playa-mansa",
    name: "Playa Mansa (Punta del Este)",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.953423,
    lng: -54.94116,
    access: "easy",
    services: ["parking", "food", "lifeguard"],
    tags: ["familia", "tranquila", "movida"],
  },
  {
    id: "playa-brava",
    name: "Playa Brava (Punta del Este)",
    depto: "Maldonado",
    waterbody: "ocean",
    lat: -34.95274,
    lng: -54.93164,
    access: "easy",
    services: ["parking", "food", "lifeguard"],
    tags: ["movida", "surf"],
  },
  {
    id: "la-barra",
    name: "La Barra",
    depto: "Maldonado",
    waterbody: "ocean",
    lat: -34.9156036,
    lng: -54.8650428,
    access: "easy",
    services: ["parking", "food"],
    tags: ["movida", "surf"],
  },
  {
    id: "montoya",
    name: "Playa Montoya",
    depto: "Maldonado",
    waterbody: "ocean",
    lat: -34.915714458181895,
    lng: -54.84887852523354,
    access: "easy",
    services: ["parking", "food"],
    tags: ["movida", "surf"],
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
  },
  {
    id: "punta-ballena",
    name: "Punta Ballena (zona)",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.88889,
    lng: -55.04056,
    access: "easy",
    services: ["parking", "food"],
    tags: ["naturaleza", "tranquila"],
  },
  {
    id: "solanas-crystal-beach",
    name: "Solanas Crystal Beach",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.875224464983184,
    lng: -55.0461087253037,
    access: "easy",
    services: ["parking", "food"],
    tags: ["familia", "tranquila"],
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
  },
  {
    id: "piriapolis",
    name: "Piriápolis",
    depto: "Maldonado",
    waterbody: "river",
    lat: -34.86287,
    lng: -55.27471,
    access: "easy",
    services: ["parking", "food"],
    tags: ["movida", "familia"],
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
  },
] as const;


