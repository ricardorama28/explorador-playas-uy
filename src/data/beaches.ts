export type Beach = {
  id: string;
  name: string;
  depto: "Rocha" | "Maldonado" | "Canelones" | "Montevideo";
};

export const beaches: Beach[] = [
  { id: "cabo-polonio", name: "Cabo Polonio", depto: "Rocha" },
  { id: "la-paloma", name: "La Paloma", depto: "Rocha" },
  { id: "jose-ignacio", name: "José Ignacio", depto: "Maldonado" },
];
