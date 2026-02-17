function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

export function runHealthRules(product) {
  const flags = [];

  const sugar = product?.nutriments?.sugar_100g;
  if (typeof sugar === "number") {
    if (sugar >= 22.5) {
      flags.push({
        id: "high_sugar",
        level: "danger",
        title: "Yüksek şeker",
        message: `100g'da ${sugar}g şeker içeriyor (yüksek).`
      });
    } else if (sugar >= 10) {
      flags.push({
        id: "medium_sugar",
        level: "warning",
        title: "Orta şeker",
        message: `100g'da ${sugar}g şeker içeriyor (orta).`
      });
    }
  }

  const salt = product?.nutriments?.salt_100g;
  if (typeof salt === "number" && salt >= 1.5) {
    flags.push({
      id: "high_salt",
      level: "warning",
      title: "Yüksek tuz",
      message: `100g'da ${salt}g tuz içeriyor.`
    });
  }

  const allergens = Array.isArray(product?.allergens) ? product.allergens : [];
  if (allergens.length > 0) {
    flags.push({
      id: "allergens",
      level: "info",
      title: "Alerjen bilgisi",
      message: `Alerjenler: ${allergens.join(", ")}`
    });
  }

  // Basit skor
  let score = 100;
  for (const f of flags) {
    if (f.level === "danger") score -= 35;
    if (f.level === "warning") score -= 15;
    if (f.level === "info") score -= 5;
  }

  score = clamp(score, 0, 100);

  return { product, flags, score };
}
