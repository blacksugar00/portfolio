import ProjetCard from "./ProjetCard";
function Projets() {
  const projets = [
    {
      categorie: "Machine Learning",
      couleur: "orange",
      annee: 2024,
      titre: "Système d'Analyse Prédictive & Dashboard ML",
      description: "Architecture d'exploration de données et prédiction avec API REST et interface réactive. Pipelines de prétraitement et métriques de validation en temps réel.",
      technologies: ["Python", "Django", "Scikit-Learn", "React", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      categorie: "Desktop Software",
      couleur: "blue",
      annee: 2024,
      titre: "Application Desktop de Supervision d'une ecole",
      description: "Application logicielle Desktop à haute performance pour la visualisation ,le monitoring, la gestion de flux de données dans une ecole.",
      technologies: ["C++", "Qt Creator", "QCustomPlot", "Multi-threading"],
      github: "#",
      demo: "#",
    },
    {
      categorie: "Web Entreprise",
      couleur: "green",
      annee: 2023,
      titre: "Plateforme  de e-learning",
      description: "Système web sécurisé, permettant de vendre et d'acheter des cours par granularité, garantissant une flexibilite de l'apprentissage.",
      technologies: ["Java", "Spring Boot", "React", "MySQL"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projet" className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* En-tête */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
              Réalisations techniques
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Projets & Développements
            </h2>
            <p className="text-gray-500 max-w-md lg:text-right">
              Solutions logicielles natives et web illustrant la synergie
              entre génie logiciel rigoureux et algorithmique prédictive.
            </p>
          </div>
        </div>

        {/* Grille de projets  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projets.map((projet, i) => (
            <ProjetCard key={i} {...projet} />
          ))}
        </div>

      </div>
      
    </section>
  );
}
export default Projets
