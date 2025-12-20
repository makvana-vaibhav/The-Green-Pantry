import type { Handler } from "@netlify/functions";
import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import { eq } from "drizzle-orm";
import * as schema from "../../shared/schema";
import ws from "ws";

const handler: Handler = async (event, context) => {
  try {
    if (!process.env.DATABASE_URL) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "DATABASE_URL not configured" }),
      };
    }

    const pool = new Pool({ connectionString: process.env.DATABASE_URL });
    const db = drizzle({ client: pool, schema });

    const { id } = event.queryStringParameters || {};

    if (id) {
      const item = await db
        .select()
        .from(schema.menuItems)
        .where(eq(schema.menuItems.id, Number(id)));

      if (!item.length) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: "Menu item not found" }),
        };
      }

      await pool.end();
      return {
        statusCode: 200,
        body: JSON.stringify(item[0]),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
    }

    const items = await db.select().from(schema.menuItems);
    await pool.end();

    return {
      statusCode: 200,
      body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    console.error("Error fetching menu:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch menu items" }),
    };
  }
};

export { handler };
