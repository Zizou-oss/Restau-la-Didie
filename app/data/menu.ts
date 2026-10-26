export type MenuItem = {
  name: string;
  price: number;
  image?: string;
  imageAlt?: string;
  imagePosition?: "top" | "center" | "bottom";
};

export type MenuCategory = {
  id: string;
  label: string;
  color: "green" | "red" | "orange" | "blue";
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "fast-food",
    label: "Sandwichs & burgers",
    color: "red",
    items: [
      {
        name: "Sandwich au poulet",
        price: 1500,
        image: "/images/poulet-roti-plat.jpg",
        imageAlt: "Illustration au poulet pour le sandwich",
      },
      {
        name: "Burger maison",
        price: 2500,
        image: "/images/viande-frites-assiette.jpg",
        imageAlt: "Illustration de viande grillée pour le burger maison",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    color: "green",
    items: [
      {
        name: "Salade de fruits",
        price: 1000,
        image: "/images/smoothie-fraise-gobelet.jpg",
        imageAlt: "Illustration aux fruits pour le dessert",
      },
    ],
  },
  {
    id: "boissons-locales",
    label: "Boissons locales",
    color: "orange",
    items: [
      {
        name: "Jus de bissap",
        price: 500,
        image: "/images/smoothie-fraise-gobelet.jpg",
        imageAlt: "Illustration d'une boisson fraîche pour le jus de bissap",
      },
      {
        name: "Jus de gingembre",
        price: 500,
        image: "/images/smoothie-fraise-gobelet.jpg",
        imageAlt: "Illustration d'une boisson fraîche pour le jus de gingembre",
      },
    ],
  },
  {
    id: "boissons-industrielles",
    label: "Boissons fraîches",
    color: "blue",
    items: [
      { name: "Eau minérale", price: 500 },
      {
        name: "Fanta",
        price: 500,
        image: "/images/canette-fanta-orange.jpg",
        imageAlt: "Canette de Fanta orange",
      },
      {
        name: "Coca-Cola",
        price: 500,
        image: "/images/canette-coca-cola.jpg",
        imageAlt: "Canette de Coca-Cola",
      },
    ],
  },
];

export const COLOR_CLASSES: Record<MenuCategory["color"], string> = {
  green: "text-didie-green border-didie-green",
  red: "text-didie-red border-didie-red",
  orange: "text-didie-orange border-didie-orange",
  blue: "text-didie-blue border-didie-blue",
};

export const formatFCFA = (price: number) => `${price.toLocaleString("fr-FR")} FCFA`;
