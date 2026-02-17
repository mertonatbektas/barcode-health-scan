function safeNumber(x) {
  const n = Number(x);
  return Number.isFinite(n) ? n : undefined;
}

export async function fetchProductFromOFF(baseUrl, barcode) {
  const url = `${baseUrl}/api/v2/product/${encodeURIComponent(barcode)}.json`;

  const resp = await fetch(url, {
    method: "GET",
    headers: { "User-Agent": "barcode-health-scan/1.0" }
  });

  if (!resp.ok) return null;

  const data = await resp.json();
  if (!data || data.status !== 1 || !data.product) return null;

  const p = data.product;

  return {
    barcode,
    name: p.product_name || p.product_name_en || undefined,
    brand: Array.isArray(p.brands_tags) ? p.brands_tags[0] : (p.brands || undefined),
    imageUrl: p.image_front_url || p.image_url || undefined,
    ingredientsText: p.ingredients_text || p.ingredients_text_en || undefined,
    nutriments: {
      sugar_100g: safeNumber(p.nutriments?.sugars_100g),
      salt_100g: safeNumber(p.nutriments?.salt_100g),
      energy_kcal_100g: safeNumber(
        p.nutriments?.["energy-kcal_100g"] ?? p.nutriments?.energy_kcal_100g
      )
    },
    allergens: typeof p.allergens === "string"
      ? p.allergens.split(",").map((s) => s.trim()).filter(Boolean)
      : [],
    additives: Array.isArray(p.additives_tags) ? p.additives_tags : []
  };
}
