export type Beach = {
  id: string;
  name: string;
  depto: "Rocha" | "Maldonado" | "Canelones" | "Montevideo";
  tags: Array<"tranquila" | "movida" | "servicios" | "naturaleza">;
};

export const beaches: Beach[] = [
  {
    id: "cabo-polonio",
    name: "Cabo Polonio",
    depto: "Rocha",
    tags: ["naturaleza", "tranquila"],
  },
  {
    id: "la-paloma",
    name: "La Paloma",
    depto: "Rocha",
    tags: ["servicios", "movida"],
  },
  {
    id: "jose-ignacio",
    name: "José Ignacio",
    depto: "Maldonado",
    tags: ["servicios", "tranquila"],
  },
];
