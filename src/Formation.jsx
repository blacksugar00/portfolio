import { GraduationCap } from 'lucide-react';

function Formation() {
  const formations = [
    {
      Icon: GraduationCap,
      diplome: "Diplôme d'ingénieur de conception en informatique",
      ecole: "École Nationale Supérieure Polytechnique de Yaoundé",
      statut: "Formation en cours",
    },
  ];

  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* ═══ En-tête ═══ */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
              Diplôme supérieur
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Parcours Académique
          </h2>
        </div>

        {/* ═══ Liste des formations ═══ */}
        <div className="flex flex-col gap-4">
          {formations.map((f, i) => (
            <FormationCard key={i} {...f} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ═══ Carte individuelle ═══ */
function FormationCard({ Icon, diplome, ecole, statut }) {
  return (
    <div className="flex items-center gap-5 bg-white border border-orange-100 rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">

      {/* Icône */}
      <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
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
        <div className="flex items-center gap-2 bg-orange-100 text-orange-600 font-medium px-4 py-2 rounded-full text-sm flex-shrink-0">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          {statut}
        </div>
      )}

    </div>
  );
}

export default Formation;