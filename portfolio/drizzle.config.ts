import { type Config } from "drizzle-kit";

import { env } from "@component/env.js";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["portfolio_*"],
} satisfies Config;
