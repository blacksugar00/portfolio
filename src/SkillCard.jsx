function SkillCard({ Icon, title, skills = [] }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 w-full max-w-xs">

      {/* En-tête */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
          {Icon && <Icon size={20} className="text-orange-500" />}
        </div>
        <h3 className="text-base font-bold text-gray-900">{title}</h3>
      </div>

      <div className="border-t border-gray-200 mb-3" />

      {/* Compétences */}
      <div className="flex flex-col gap-3">
        {skills.map((skill) => {
          const pct = Math.min(100, Math.max(0, skill.niveau));
          return (
            <div key={skill.nom}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-gray-900">{skill.nom}</span>
                <span className="text-sm font-bold text-orange-500">{pct}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-orange-500 h-1.5 rounded-full"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillCard