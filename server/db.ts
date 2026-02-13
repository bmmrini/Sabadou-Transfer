import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Make database optional for development
let pool: pg.Pool | null = null;
let db: ReturnType<typeof drizzle> | null = null;

if (process.env.DATABASE_URL) {
  try {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
    db = drizzle(pool, { schema });
    console.log("Database connected successfully");
  } catch (error) {
    console.warn("Database connection failed, running without DB:", error);
  }
} else {
  console.warn("DATABASE_URL not set, running without database");
}

export { pool, db };
