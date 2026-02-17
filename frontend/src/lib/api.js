const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";

export async function getScan(barcode) {
  const res = await fetch(`${API_BASE}/api/scan/${encodeURIComponent(barcode)}`);
  if (!res.ok) throw new Error(`Scan failed: ${res.status}`);
  return res.json();
}
