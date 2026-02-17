function isValidBarcode(barcode) {
 codex/check-repo-status-and-update-readme.md-o5l5my
  return typeof barcode === 'string' && /^\d{8,14}$/.test(barcode);
=======
  return typeof barcode === 'string' && /^\d+$/.test(barcode);
 main
}

module.exports = { isValidBarcode };
