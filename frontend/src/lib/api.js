const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export async function getProduct(barcode) {
  const response = await fetch(`${API_BASE_URL}/scan?barcode=${encodeURIComponent(barcode)}`);
  if (!response.ok) throw new Error('API request failed');
  return response.json();
}
