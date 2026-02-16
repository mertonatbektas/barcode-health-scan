function HealthBadges({ score }) {
  return (
    <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
      Health score: {score}
    </div>
  );
}

export default HealthBadges;
