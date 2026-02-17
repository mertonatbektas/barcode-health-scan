const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

export async function getProduct(barcode) {
  const response = await fetch(`${API_BASE}/api/scan/${encodeURIComponent(barcode)}`);
  let payload = null;

  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const message = payload?.error || 'API request failed';
    throw new Error(message);
  }

  return payload;
}
