import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getScan } from "../lib/api.js";
import ProductView from "../components/ProductView.jsx";

export default function Product() {
  const { barcode } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;

    async function run() {
      try {
        setLoading(true);
        const res = await getScan(barcode);
        if (alive) setData(res);
      } catch (e) {
        toast.error("Ürün bulunamadı veya hata oldu.");
      } finally {
        if (alive) setLoading(false);
      }
    }

    run();
    return () => { alive = false; };
  }, [barcode]);

  return (
    <div className="space-y-4">
      <Link to="/" className="text-sm text-gray-600 hover:underline">← Geri</Link>

      {loading ? (
        <div className="rounded-xl border p-4">Yükleniyor...</div>
      ) : data ? (
        <ProductView data={data} />
      ) : (
        <div className="rounded-xl border p-4">Sonuç yok.</div>
      )}
    </div>
  );
}
