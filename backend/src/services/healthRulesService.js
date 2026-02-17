 codex/check-repo-status-and-update-readme.md-o5l5my
function toNumber(value) {
  const numeric = Number(value);
  return Number.isFinite(numeric) ? numeric : null;
}

function evaluateProductHealth(product) {
  const flags = [];
  let score = 100;

  const sugar = toNumber(product?.nutrients?.sugar);
  const salt = toNumber(product?.nutrients?.salt);
  const hasAllergens = Boolean(product?.allergens && String(product.allergens).trim());
  const additivesCount = Array.isArray(product?.additives) ? product.additives.length : 0;

  if (sugar !== null && sugar > 22.5) {
    flags.push('high_sugar');
    score -= 25;
  } else if (sugar !== null && sugar > 5) {
    flags.push('medium_sugar');
    score -= 10;
  }

  if (salt !== null && salt > 1.5) {
    flags.push('high_salt');
    score -= 25;
  } else if (salt !== null && salt > 0.3) {
    flags.push('medium_salt');
    score -= 10;
  }

  if (hasAllergens) {
    flags.push('contains_allergens');
    score -= 20;
  }

  if (additivesCount > 4) {
    flags.push('many_additives');
    score -= 15;
  } else if (additivesCount > 0) {
    flags.push('contains_additives');
    score -= 5;
  }

  score = Math.max(0, Math.min(100, score));

  return { score, flags };
=======
function evaluateProductHealth() {
  return { score: 0, verdict: 'unknown' };
 main
}

module.exports = { evaluateProductHealth };
