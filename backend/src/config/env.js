import dotenv from "dotenv";

dotenv.config();

export function loadEnv() {
  const PORT = Number(process.env.PORT || 4000);
  const OFF_BASE_URL = process.env.OFF_BASE_URL || "https://world.openfoodfacts.org";
  const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

  return { PORT, OFF_BASE_URL, CORS_ORIGIN };
}
