import { ArrowRight } from 'lucide-react';
import githubIcon from './assets/github.svg';

function ProjetCard({ categorie, couleur, annee, titre, description, technologies, github, demo }) {

  const badgeColors = {
    orange: "bg-orange-100 text-orange-600",
    blue:   "bg-blue-100 text-blue-600",
    green:  "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
  };

  const dotColors = {
    orange: "bg-orange-500",
    blue:   "bg-blue-500",
    green:  "bg-green-500",
    purple: "bg-purple-500",
  };

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/*En-tête*/}
      <div className="flex items-center justify-between mb-4">
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[couleur] || badgeColors.orange}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${dotColors[couleur] || dotColors.orange}`} />
          {categorie}
        </div>
        <span className="text-sm text-gray-400">{annee}</span>
      </div>

      {/*  Titre  */}
      <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">
        {titre}
      </h3>

      {/*  Description  */}
      <p className="text-gray-500 text-sm leading-relaxed mb-5">
        {description}
      </p>

      {/*  Technologies  */}
      <div className="flex flex-wrap gap-2 mb-5">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/*  Séparateur (pousse le footer en bas)*/}
      <div className="border-t border-gray-100 mt-auto pt-4" />

      {/*  Footer : GitHub + Démo */}
      <div className="flex items-center justify-between">

        <a
          href={github}
          className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
        >
          <img src={githubIcon} alt="GitHub" className="w-4 h-4" />
          Lien GitHub
        </a>

        <a
          href={demo}
          className="flex items-center gap-1 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors group"
        >
          Démo en direct
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>

      </div>

    </div>
  );
}

export default ProjetCard;