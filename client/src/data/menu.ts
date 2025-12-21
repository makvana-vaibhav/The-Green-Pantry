export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "Salads" | "Wraps" | "Drinks";
  tags: string[];
  imageUrl: string;
  available: boolean;
}

import wrapImage from "@/assets/wrap.jpg";
import detoxElixir from "@/assets/menu_images/Detox Elixir Juice.JPG";
import islandGlow from "@/assets/menu_images/Island Glow Juice.JPG";
import pineappleParadise from "@/assets/menu_images/pineapple_paradise.png";
import carrotCrush from "@/assets/menu_images/carrot_crush.png";
import sunriseSqueeze from "@/assets/menu_images/sunrise_squeeze.png";
import veggieBeans from "@/assets/menu_images/Veggie Beans Jumble Salad.PNG";
import nutriBowl from "@/assets/menu_images/Nutri Bowl Salad.PNG";
import fruityFusion from "@/assets/menu_images/Fruity Fusion.PNG";
import burritoBowl from "@/assets/menu_images/Burrito Bowl.PNG";

export const menuData: MenuItem[] = [
  // Salads
  {
    id: "1",
    name: "Veggie Beans Jumble Salad",
    description: "Lettuce, kidney beans, sweet corn, chickpeas, tomato, onion, zucchini, cucumber, black olives with ranch and chilli garlic.",
    price: 225,
    category: "Salads",
    tags: ["Vegetarian", "High Protein"],
    imageUrl: veggieBeans,
    available: true,
  },
  {
    id: "3",
    name: "Nutri Bowl Salad",
    description: "Lettuce, kidney beans, chickpeas, onion, bell peppers, quinoa, black olives, jalapenos with honey mustard and chipotle.",
    price: 259,
    category: "Salads",
    tags: ["Vegetarian", "High Protein"],
    imageUrl: nutriBowl,
    available: true,
  },
  {
    id: "6",
    name: "Fruity Fusion",
    description: "Lettuce, apple, orange, pomegranate, kiwi, pineapple, dragon fruit and mix seeds with honey dressing.",
    price: 290,
    category: "Salads",
    tags: ["Vegetarian", "Vegan"],
    imageUrl: fruityFusion,
    available: true,
  },
  {
    id: "9",
    name: "Burrito Bowl",
    description: "Lettuce, brown rice, onion, kidney beans, corn, bell pepper, cherry tomato, black olives, jalapenos, nachos with Chipotle, guacamole, and salsa.",
    price: 330,
    category: "Salads",
    tags: ["Vegetarian", "High Protein"],
    imageUrl: burritoBowl,
    available: true,
  },

  // Wraps
  {
    id: "12",
    name: "Mexican Heat Wrap",
    description: "Lettuce, brown rice, kidney beans, onion, sweet corn, potato patty, bell peppers, black olives and jalapenos with Guacamole and chipotle.",
    price: 260,
    category: "Wraps",
    tags: ["Vegetarian"],
    imageUrl: wrapImage,
    available: true,
  },
  {
    id: "13",
    name: "Hummus Harmony Wrap",
    description: "Lettuce, brown rice, chickpeas, onion, bell peppers, paneer, black olives and jalapenos with Hummus, chilli garlic, and ranch.",
    price: 260,
    category: "Wraps",
    tags: ["Vegetarian", "High Protein"],
    imageUrl: wrapImage,
    available: true,
  },
  {
    id: "14",
    name: "Terrific Tofu Wrap",
    description: "Lettuce, quinoa, onions, tomato, cucumber, bell peppers, tofu, black olives and jalapenos with Chilli garlic and mint mayo.",
    price: 260,
    category: "Wraps",
    tags: ["Vegetarian", "Vegan"],
    imageUrl: wrapImage,
    available: true,
  },

  // Drinks
  {
    id: "15",
    name: "Detox Elixir Juice",
    description: "Beetroot, carrot, ginger, apple and orange. Cold-pressed for maximum nutrition.",
    price: 195,
    category: "Drinks",
    tags: ["Vegan", "Cold Pressed"],
    imageUrl: detoxElixir,
    available: true,
  },
  {
    id: "16",
    name: "Island Glow Juice",
    description: "Pineapple, kiwi, mint and pomegranate. Tropical and refreshing cold-pressed blend.",
    price: 195,
    category: "Drinks",
    tags: ["Vegan", "Cold Pressed"],
    imageUrl: islandGlow,
    available: true,
  },
  {
    id: "17",
    name: "Pineapple Paradise Juice",
    description: "Pineapple, watermelon and mint. A perfect summer refresher.",
    price: 195,
    category: "Drinks",
    tags: ["Vegan", "Cold Pressed"],
    imageUrl: pineappleParadise,
    available: true,
  },
  {
    id: "18",
    name: "Carrot Crush Juice",
    description: "Carrot, orange, apple and ginger. Packed with vitamins and natural sweetness.",
    price: 195,
    category: "Drinks",
    tags: ["Vegan", "Cold Pressed"],
    imageUrl: carrotCrush,
    available: true,
  },
  {
    id: "19",
    name: "Sunrise Squeeze Juice",
    description: "Orange, pineapple and honey. Start your day with natural energy.",
    price: 195,
    category: "Drinks",
    tags: ["Vegan", "Cold Pressed"],
    imageUrl: sunriseSqueeze,
    available: true,
  },
];
