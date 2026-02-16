function isValidBarcode(barcode) {
  return typeof barcode === 'string' && /^\d+$/.test(barcode);
}

module.exports = { isValidBarcode };
