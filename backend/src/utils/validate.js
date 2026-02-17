export function isValidBarcode(barcode) {
  return typeof barcode === "string" && /^\d{8,14}$/.test(barcode);
}
