import { CircleCheck, MapPin } from 'lucide-react';
function ExperienceCard({ poste, entreprise, lieu, missions }) {
  return (
    <div className="bg-white border border-orange-100 rounded-2xl shadow-sm p-7 hover:shadow-md transition-shadow">

      {/*  En-tête */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">

        <div className="flex items-start gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              {poste}
            </h3>
            <p className="text-orange-500 font-semibold mt-0.5">
              {entreprise}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-gray-500 flex-shrink-0">
          <MapPin size={16} className="text-orange-500" />
          <span className="text-sm">{lieu}</span>
        </div>

      </div>

      {/* Séparateur  */}
      <div className="border-t border-gray-100 my-5" />

      {/* Missions */}
      <div className="flex flex-col gap-3">

        <span className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Missions réalisées :
        </span>

        
        <ul className="list-none flex flex-col gap-3 mt-1">
          {missions.map((m, i) => (
            <li key={i} className="flex items-start gap-3">
              <CircleCheck
                size={20}
                className="text-orange-500 flex-shrink-0 mt-0.5"
              />
              <span className="text-gray-700 leading-relaxed">{m}</span>
            </li>
          ))}
        </ul>

      </div>

    </div>
  );
}
export default ExperienceCard