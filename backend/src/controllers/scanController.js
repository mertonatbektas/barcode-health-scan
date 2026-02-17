import { isValidBarcode } from "../utils/validate.js";
import { fetchProductFromOFF } from "../services/openFoodFactsService.js";
import { runHealthRules } from "../services/healthRulesService.js";

export function scanController(env) {
  return async (req, res, next) => {
    try {
      const barcode = String(req.params.barcode || "").trim();

      if (!isValidBarcode(barcode)) {
        return res.status(400).json({
          error: "INVALID_BARCODE",
          message: "Barkod 8-14 haneli ve sadece rakam olmalı."
        });
      }

      const product = await fetchProductFromOFF(env.OFF_BASE_URL, barcode);

      if (!product) {
        return res.status(404).json({ error: "PRODUCT_NOT_FOUND", barcode });
      }

      const result = runHealthRules(product);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  };
}
