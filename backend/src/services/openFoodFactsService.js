const { OFF_BASE_URL } = require('../config/env');

function normalizeNutrients(nutriments = {}) {
  return {
    sugar: nutriments.sugars_100g ?? null,
    salt: nutriments.salt_100g ?? null,
    energy:
      nutriments['energy-kcal_100g'] ??
      nutriments.energy_kcal_100g ??
      nutriments.energy_100g ??
      null
  };
}

function mapProduct(product) {
  return {
    name: product.product_name || null,
    brand: product.brands || null,
    image: product.image_url || product.image_front_url || null,
    ingredients: product.ingredients_text || null,
    nutrients: normalizeNutrients(product.nutriments),
    allergens: product.allergens || product.allergens_from_ingredients || null,
    additives: Array.isArray(product.additives_tags) ? product.additives_tags : []
  };
}

async function fetchProductByBarcode(barcode) {
  const response = await fetch(`${OFF_BASE_URL}/api/v0/product/${barcode}.json`);

  if (!response.ok) {
    throw new Error(`OpenFoodFacts request failed with status ${response.status}`);
  }

  const data = await response.json();

  if (data.status !== 1 || !data.product) {
    return null;
  }

  return mapProduct(data.product);
}

module.exports = { fetchProductByBarcode };
