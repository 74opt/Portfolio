import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "@component/env.js";
import * as schema from "./schema";

export const db = drizzle(postgres(env.DATABASE_URL), { schema });
