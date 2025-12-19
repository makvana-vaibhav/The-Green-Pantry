import { pgTable, text, serial, numeric, boolean, text as textArray } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const menuItems = pgTable("menu_items", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  category: text("category").notNull(), // Salads, Wraps, Juices, Bowls, Add-Ons
  tags: text("tags").array(), // Vegan, High Protein, Low Cal
  imageUrl: text("image_url").notNull(),
  available: boolean("available").default(true).notNull(),
});

export const insertMenuItemSchema = createInsertSchema(menuItems).omit({ id: true });

export type MenuItem = typeof menuItems.$inferSelect;
export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;
