const { fetchProductByBarcode } = require('../services/openFoodFactsService');
const { evaluateProductHealth } = require('../services/healthRulesService');
const { isValidBarcode } = require('../utils/validate');

function sendJson(res, statusCode, payload) {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
}

async function scanController(req, res, barcode) {
  if (!isValidBarcode(barcode)) {
    return sendJson(res, 400, {
      error: 'Invalid barcode. Barcode must be 8 to 14 digits long.'
    });
  }

  try {
    const product = await fetchProductByBarcode(barcode);

    if (!product) {
      return sendJson(res, 404, { error: 'Product not found' });
    }

    const health = evaluateProductHealth(product);

    return sendJson(res, 200, {
      barcode,
      product,
      score: health.score,
      flags: health.flags
    });
  } catch (error) {
    return sendJson(res, 502, {
      error: 'Failed to fetch product data from OpenFoodFacts',
      details: error.message
    });
  }
}

module.exports = { scanController, sendJson };
