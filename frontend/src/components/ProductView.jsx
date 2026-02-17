import HealthBadges from './HealthBadges';

 codex/check-repo-status-and-update-readme.md-o5l5my
function ProductView({ barcode, data }) {
  if (!data?.product) {
    return <p className="text-slate-600">Ürün bilgisi bulunamadı.</p>;
  }

  const { product, flags = [], score = 0 } = data;

  return (
    <article className="space-y-4 rounded-xl bg-white p-4 shadow">
      <h1 className="text-xl font-semibold">{product.name || 'İsimsiz ürün'}</h1>
      <p className="text-sm text-slate-600">Marka: {product.brand || '-'}</p>
      <p className="text-sm text-slate-600">Barkod: {barcode}</p>

      {product.image ? (
        <img
          src={product.image}
          alt={product.name || 'Product image'}
          className="h-48 w-48 rounded object-cover"
        />
      ) : null}

      <p className="text-sm">İçindekiler: {product.ingredients || '-'}</p>

      <div className="space-y-2">
        <h2 className="font-medium">Uyarılar</h2>
        {flags.length ? (
          <ul className="list-disc pl-5 text-sm text-amber-700">
            {flags.map((flag) => (
              <li key={flag}>{flag}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-emerald-700">Uyarı yok.</p>
        )}
      </div>

      <HealthBadges score={score} />
=======
function ProductView({ barcode }) {
  return (
    <article className="space-y-4">
      <h1 className="text-xl font-semibold">Ürün: {barcode}</h1>
      <p className="text-sm text-slate-600">Ürün detayları burada gösterilecek.</p>
      <HealthBadges score={0} />
 main
    </article>
  );
}

export default ProductView;
