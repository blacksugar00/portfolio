function FormationCard({ Icon, diplome, ecole, statut }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5
                    bg-white border border-orange-100 rounded-2xl shadow-sm
                    p-4 md:p-6 hover:shadow-md transition-shadow">

      <div className="flex items-start md:items-center gap-4 md:gap-5 flex-1 min-w-0">

        <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-orange-200
                        flex items-center justify-center flex-shrink-0">
          {Icon && (
            <Icon className="w-5 h-5 md:w-7 md:h-7 text-orange-500" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base md:text-xl font-bold text-gray-900 leading-snug">
            {diplome}
          </h3>
          <p className="text-gray-500 mt-1 text-sm md:text-base">
            {ecole}
          </p>
        </div>
      </div>

      {statut && (
        <div className="flex items-center gap-2 bg-orange-200 text-orange-600
                        font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-full
                        text-xs md:text-sm flex-shrink-0 self-start md:self-center">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          {statut}
        </div>
      )}

    </div>
  );
}

export default FormationCard;