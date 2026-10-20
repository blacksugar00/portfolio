function ProgressBar({ value = 0, label }) {
  const pourcentage = Math.min(100, Math.max(0, value));
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-900 font-semibold">{label}</span>
        <span className="text-orange-500 font-bold">{pourcentage}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-orange-500 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${pourcentage}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;