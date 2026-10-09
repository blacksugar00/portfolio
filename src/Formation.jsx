import { GraduationCap } from 'lucide-react';
import FormationCard from './FormationCard';

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
    <section id="formation" className="w-full py-12 md:py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-10">

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-orange-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Diplôme supérieur
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Parcours Académique
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {formations.map((f, i) => (
            <FormationCard key={i} {...f} />
          ))}
        </div>

      </div>

      <div className="h-[5vh] border-b-[0.3px] w-full mt-10"></div>
    </section>
  );
}

export default Formation;