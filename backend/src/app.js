import express from "express";
import cors from "cors";
import healthRoutes from "./routes/healthRoutes.js";
import scanRoutes from "./routes/scanRoutes.js";

export function createApp(env) {
  const app = express();

  app.use(express.json());

  app.use(
    cors({
      origin: env.CORS_ORIGIN ? env.CORS_ORIGIN.split(",").map((s) => s.trim()) : true,
      credentials: true
    })
  );

  app.use("/api", healthRoutes);
  app.use("/api", scanRoutes(env));

  // 404
  app.use((req, res) => {
    res.status(404).json({ error: "NOT_FOUND" });
  });

  // error handler
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.error("❌ ERROR:", err);
    res.status(err.status || 500).json({
      error: err.code || "SERVER_ERROR",
      message: err.message || "Something went wrong"
    });
  });

  return app;
}
