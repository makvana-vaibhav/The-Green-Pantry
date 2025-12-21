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

import mexicanHeat from "@/assets/menu_images/mexican_heat_wrap.png";
import hummusHarmony from "@/assets/menu_images/hummus_harmony_wrap.png";
import detoxElixir from "@/assets/menu_images/detox_elixir.png";
import islandGlow from "@/assets/menu_images/island_glow.png";
import pineappleParadise from "@/assets/menu_images/pineapple_paradise.png";
import carrotCrush from "@/assets/menu_images/carrot_crush.png";
import sunriseSqueeze from "@/assets/menu_images/sunrise_squeeze.png";
import goldenCrunch from "@/assets/menu_images/golden_crunch_salad.png";
import gardenDelight from "@/assets/menu_images/garden_delight_salad.png";

export const menuData: MenuItem[] = [
  // Salads
  {
    id: "1",
    name: "Veggie Beans Jumble Salad",
    description: "Lettuce, kidney beans, sweet corn, chickpeas, tomato, onion, zucchini, cucumber, black olives with ranch and chilli garlic.",
    price: 225,
    category: "Salads",
    tags: ["Vegetarian", "High Protein"],
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80", // Salad bowl
    available: true,
  },
  {
    id: "2",
    name: "Power Punch Salad",
    description: "Lettuce, tomato, onion, zucchini, sprouts, tofu, olives with Thousand Island and chilli garlic.",
    price: 259,
    category: "Salads",
    tags: ["Vegetarian", "High Protein"],
    imageUrl: "https://images.unsplash.com/photo-1623428187969-5da2dcea5ebf?w=800&q=80", // Tofu salad
    available: true,
  },
  {
    id: "3",
    name: "Nutri Bowl Salad",
    description: "Lettuce, kidney beans, chickpeas, onion, bell peppers, quinoa, black olives, jalapenos with honey mustard and chipotle.",
    price: 259,
    category: "Salads",
    tags: ["Vegetarian", "High Protein"],
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80", // Mixed bowl
    available: true,
  },
  {
    id: "4",
    name: "Zesty Rainbow",
    description: "Lettuce, red cabbage, chickpeas, zucchini, bell peppers, tomatoes, baby corn, broccoli with lemon-mint and honey mustard.",
    price: 290,
    category: "Salads",
    tags: ["Vegetarian", "Vegan"],
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80", // Rainbow salad
    available: true,
  },
  {
    id: "5",
    name: "Sprouts Spell",
    description: "Lettuce, sprouts, onions, bell peppers, paneer, red cabbage, black olives with chipotle and mint mayonnaise.",
    price: 290,
    category: "Salads",
    tags: ["Vegetarian", "High Protein"],
    imageUrl: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=800&q=80", // Sprouts/Paneerish
    available: true,
  },
  {
    id: "6",
    name: "Fruity Fusion",
    description: "Lettuce, apple, orange, pomegranate, kiwi, pineapple, dragon fruit and mix seeds with honey dressing.",
    price: 290,
    category: "Salads",
    tags: ["Vegetarian", "Vegan"],
    imageUrl: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&q=80", // Fruit salad
    available: true,
  },
  {
    id: "7",
    name: "Golden Crunch",
    description: "Lettuce, quinoa, onions, baby corn, potato patty, kidney beans, cherry tomatoes, black olives with Ranch and mint mayonnaise.",
    price: 305,
    category: "Salads",
    tags: ["Vegetarian", "High Protein"],
    imageUrl: goldenCrunch,
    available: true,
  },
  {
    id: "8",
    name: "Garden Delight",
    description: "Lettuce, cucumber, cherry tomatoes, bell peppers, onion, carrot, corn, jalapenos and olives with Chilli garlic and honey mustard.",
    price: 305,
    category: "Salads",
    tags: ["Vegetarian", "Low Cal"],
    imageUrl: gardenDelight,
    available: true,
  },
  {
    id: "9",
    name: "Burrito Bowl",
    description: "Lettuce, brown rice, onion, kidney beans, corn, bell pepper, cherry tomato, black olives, jalapenos, nachos with Chipotle, guacamole, and salsa.",
    price: 330,
    category: "Salads",
    tags: ["Vegetarian", "High Protein"],
    imageUrl: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=800&q=80", // Burrito bowl confirmed
    available: true,
  },
  {
    id: "10",
    name: "Fusilli Fiesta",
    description: "Lettuce, fusilli pasta, bell pepper, broccoli, zucchini, red cabbage, carrot, black olives, jalapenos with chipotle and thousand island.",
    price: 330,
    category: "Salads",
    tags: ["Vegetarian"],
    imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80", // Pasta salad
    available: true,
  },
  {
    id: "11",
    name: "Millet Medley Salad",
    description: "Lettuce, bajra, carrot, beetroot, cucumber, tomatoes, green capsicum, chickpeas, black olives with sweet onion and chipotle.",
    price: 225,
    category: "Salads",
    tags: ["Vegetarian", "Vegan"],
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80", // Millet/Grain bowl confirmed
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
    imageUrl: mexicanHeat,
    available: true,
  },
  {
    id: "13",
    name: "Hummus Harmony Wrap",
    description: "Lettuce, brown rice, chickpeas, onion, bell peppers, paneer, black olives and jalapenos with Hummus, chilli garlic, and ranch.",
    price: 260,
    category: "Wraps",
    tags: ["Vegetarian", "High Protein"],
    imageUrl: hummusHarmony,
    available: true,
  },
  {
    id: "14",
    name: "Terrific Tofu Wrap",
    description: "Lettuce, quinoa, onions, tomato, cucumber, bell peppers, tofu, black olives and jalapenos with Chilli garlic and mint mayo.",
    price: 260,
    category: "Wraps",
    tags: ["Vegetarian", "Vegan"],
    imageUrl: hummusHarmony, // distinct fallback until generation available
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
