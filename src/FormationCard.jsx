function FormationCard({ Icon, diplome, ecole, statut }) {
  return (
    <div className="flex items-center gap-5 bg-white border border-orange-100 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">

      {/* Icône */}
      <div className="w-14 h-14 rounded-xl bg-orange-200 flex items-center justify-center flex-shrink-0">
        {Icon && <Icon size={28} className="text-orange-500" />}
      </div>

      {/* Texte */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg md:text-xl font-bold text-gray-900">
          {diplome}
        </h3>
        <p className="text-gray-500 mt-1">
          {ecole}
        </p>
      </div>

      {/* Badge de statut */}
      {statut && (
        <div className="flex items-center gap-2 bg-orange-200 text-orange-600 font-medium px-4 py-2 rounded-full text-sm flex-shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          {statut}
        </div>
      )}

    
    </div>
  );
}
export default FormationCard