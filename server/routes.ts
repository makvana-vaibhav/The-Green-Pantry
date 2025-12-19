import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.menu.list.path, async (req, res) => {
    const items = await storage.getMenuItems();
    res.json(items);
  });

  app.get(api.menu.get.path, async (req, res) => {
    const item = await storage.getMenuItem(Number(req.params.id));
    if (!item) {
      return res.status(404).json({ message: 'Menu item not found' });
    }
    res.json(item);
  });

  app.post(api.menu.create.path, async (req, res) => {
    try {
      const input = api.menu.create.input.parse(req.body);
      const item = await storage.createMenuItem(input);
      res.status(201).json(item);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingItems = await storage.getMenuItems();
  if (existingItems.length === 0) {
    const seedData = [
      {
        name: "Mediterranean Quinoa Salad",
        description: "Fresh quinoa with cherry tomatoes, cucumber, kalamata olives, and feta cheese with lemon-herb dressing.",
        price: "12.99",
        category: "Salads",
        tags: ["Vegetarian", "High Protein", "Gluten Free"],
        imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
      },
      {
        name: "Avocado & Kale Green Bowl",
        description: "Massaged kale, sliced avocado, chickpeas, roasted sweet potato, and tahini dressing.",
        price: "11.50",
        category: "Bowls",
        tags: ["Vegan", "Superfood"],
        imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"
      },
      {
        name: "Grilled Chicken Caesar Wrap",
        description: "Grilled chicken breast, crisp romaine, parmesan, and caesar dressing in a spinach wrap.",
        price: "10.99",
        category: "Wraps",
        tags: ["High Protein"],
        imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80"
      },
      {
        name: "Green Detox Juice",
        description: "Spinach, apple, cucumber, lemon, and ginger. Cold-pressed daily.",
        price: "6.50",
        category: "Juices",
        tags: ["Vegan", "Detox"],
        imageUrl: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&q=80"
      },
      {
        name: "Spicy Falafel Wrap",
        description: "Crispy falafel, hummus, pickled onions, and spicy tahini sauce in a whole wheat wrap.",
        price: "9.99",
        category: "Wraps",
        tags: ["Vegan", "Spicy"],
        imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80"
      },
      {
        name: "Berry Antioxidant Bowl",
        description: "Acai base topped with fresh strawberries, blueberries, granola, and honey.",
        price: "13.50",
        category: "Bowls",
        tags: ["Vegetarian", "Antioxidant"],
        imageUrl: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&q=80"
      },
      {
        name: "Greek Salad",
        description: "Crisp lettuce, tomatoes, cucumbers, onions, olives, and feta cheese.",
        price: "10.50",
        category: "Salads",
        tags: ["Vegetarian", "Gluten Free"],
        imageUrl: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80"
      },
      {
        name: "Sunrise Citrus Juice",
        description: "Freshly squeezed orange, carrot, and turmeric.",
        price: "6.50",
        category: "Juices",
        tags: ["Vegan", "Vitamin C"],
        imageUrl: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=800&q=80"
      }
    ];

    for (const item of seedData) {
      await storage.createMenuItem(item);
    }
    console.log("Database seeded successfully");
  }
}
