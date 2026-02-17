function HealthBadges({ score }) {
 codex/check-repo-status-and-update-readme.md-o5l5my
  const tone = score >= 70 ? 'bg-emerald-100 text-emerald-800' : score >= 40 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800';

  return (
    <div className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${tone}`}>
      Puan: {score}/100
=======
  return (
    <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
      Health score: {score}
 main
    </div>
  );
}

export default HealthBadges;
