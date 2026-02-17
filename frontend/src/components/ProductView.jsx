import HealthBadges from "./HealthBadges.jsx";

export default function ProductView({ data }) {
  const product = data?.product;

  if (!product) {
    return <div className="rounded-xl border p-4">Ürün yok.</div>;
  }

  return (
    <article className="space-y-4">
      <div className="rounded-xl border p-4 space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold">
              {product.name || "İsimsiz ürün"}
            </h1>
            <p className="text-sm text-gray-600">
              {product.brand ? `Marka: ${product.brand}` : "Marka yok"}
            </p>
            <p className="text-sm text-gray-600">Barkod: {product.barcode}</p>
          </div>

          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name || "Ürün"}
              className="h-24 w-24 rounded-lg object-cover border"
            />
          ) : null}
        </div>

        {product.ingredientsText ? (
          <div className="pt-2">
            <h2 className="font-medium">İçindekiler</h2>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">
              {product.ingredientsText}
            </p>
          </div>
        ) : null}
      </div>

      <HealthBadges flags={data.flags || []} score={data.score ?? 0} />

      <div className="rounded-xl border p-4">
        <h2 className="font-medium mb-2">Besin Değerleri (100g)</h2>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>Şeker: {product.nutriments?.sugar_100g ?? "-"} g</li>
          <li>Tuz: {product.nutriments?.salt_100g ?? "-"} g</li>
          <li>Enerji: {product.nutriments?.energy_kcal_100g ?? "-"} kcal</li>
        </ul>
      </div>
    </article>
  );
}
