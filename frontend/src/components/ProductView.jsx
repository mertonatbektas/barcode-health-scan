import HealthBadges from './HealthBadges';

function ProductView({ barcode }) {
  return (
    <article className="space-y-4">
      <h1 className="text-xl font-semibold">Ürün: {barcode}</h1>
      <p className="text-sm text-slate-600">Ürün detayları burada gösterilecek.</p>
      <HealthBadges score={0} />
    </article>
  );
}

export default ProductView;
