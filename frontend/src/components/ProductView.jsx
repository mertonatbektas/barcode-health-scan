import HealthBadges from "./HealthBadges.jsx";

 codex/improve-productview-design-with-tailwind-8rtk9m
function ProductView({ barcode, data }) {
  if (!data?.product) {
    return (
      <p className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm text-slate-600 shadow-sm">
        Ürün bilgisi bulunamadı.
      </p>
    );
  }
export default function ProductView({ data }) {
  const product = data?.product;

  if (!product) {
    return <div className="rounded-xl border p-4">Ürün yok.</div>;
  }

  return (
 codex/improve-productview-design-with-tailwind-8rtk9m
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 sm:p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {product.name || 'İsimsiz ürün'}
          </h1>

          <div className="grid gap-2 text-sm sm:grid-cols-2">
            <p className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700">
              <span className="font-medium text-slate-900">Marka:</span> {product.brand || '-'}
            </p>
            <p className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700">
              <span className="font-medium text-slate-900">Barkod:</span> {barcode}
            </p>
          </div>
        </div>

        {product.image ? (
          <div className="w-full shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-2 shadow-sm sm:w-40">
            <img
              src={product.image}
              alt={product.name || 'Ürün görseli'}
              className="h-32 w-full rounded-lg object-cover sm:h-28"
            />
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
      <div className="mt-5 space-y-2 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-700">İçindekiler</h2>
        <p className="text-sm leading-relaxed text-slate-700">{product.ingredients || '-'}</p>
      </div>

      <div className="mt-5">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-700">
          Besin Değerleri (100g)
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-500">Enerji</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">{product.nutrition?.energy ?? '-'} kcal</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-500">Şeker</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">{product.nutrition?.sugar ?? '-'} g</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-slate-500">Protein</p>
            <p className="mt-1 text-lg font-semibold text-slate-900">{product.nutrition?.protein ?? '-'} g</p>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-700">Uyarılar</h2>
        {flags.length ? (
          <ul className="space-y-1 text-sm text-amber-700">
            {flags.map((flag) => (
              <li key={flag} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span>{flag}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-emerald-700">Uyarı yok.</p>
        )}
      </div>

      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <HealthBadges score={score} />
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
