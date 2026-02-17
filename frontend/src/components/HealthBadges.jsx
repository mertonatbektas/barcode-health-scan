function HealthBadges({ score }) {
  const tone = score >= 70 ? 'bg-emerald-100 text-emerald-800' : score >= 40 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800';

  return (
    <div className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${tone}`}>
      Puan: {score}/100
    </div>
  );
}

export default HealthBadges;
