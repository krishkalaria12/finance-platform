import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { envKeys } from "@/lib/env";

const sql = neon(envKeys.DATABASE_URL);
export const db = drizzle(sql);