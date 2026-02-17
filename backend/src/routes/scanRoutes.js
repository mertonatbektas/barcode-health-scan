import { Router } from "express";
import { scanController } from "../controllers/scanController.js";

export default function scanRoutes(env) {
  const router = Router();

  router.get("/scan/:barcode", scanController(env));

  return router;
}
