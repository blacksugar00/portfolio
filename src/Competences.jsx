import SkillCard from './SkillCard';
import { Monitor, Table2, Server, Database, Wrench } from 'lucide-react';

function Competences() {
  const skillsDesktop = [
    { nom: 'C++',           niveau: 88 },
    { nom: 'Qt Creator',    niveau: 85 },
    { nom: 'Visual Studio', niveau: 82 },
    { nom: 'Eclipse CDT',   niveau: 80 },
  ];

  const skillsFrontEnd = [
    { nom: 'React',      niveau: 50 },
    { nom: 'HTML/CSS',   niveau: 75 },
    { nom: 'JavaScript', niveau: 75 },
  ];

  const skillsBackEnd = [
    { nom: 'Python/Django',    niveau: 60 },
    { nom: 'Java/Spring Boot', niveau: 75 },
  ];

  const dataBase = [
    { nom: 'MySQL',      niveau: 80 },
    { nom: 'PostgreSQL', niveau: 60 },
  ];

  const tools = [
    { nom: 'Postman',     niveau: 70 },
    { nom: 'Git/GitHub',  niveau: 75 },
  ];

  const categories = [
    { Icon: Monitor, title: 'Développement Desktop',   skills: skillsDesktop },
    { Icon: Table2,  title: 'Web Frontend',             skills: skillsFrontEnd },
    { Icon: Server,  title: 'Web Backend',              skills: skillsBackEnd },
    { Icon: Database, title: 'Bases de données',        skills: dataBase },
    { Icon: Wrench,  title: 'Outils & Méthodologie',    skills: tools },
  ];

  return (
    <section className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* ═══ En-tête de section ═══ */}
        <div className="flex flex-col gap-4">

          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-orange-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Stack & Maîtrise
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Compétences Techniques
            </h2>
            <p className="text-gray-500 max-w-md lg:text-right">
              Technologies de programmation système, architectures web complètes
              et outils de gestion de code source.
            </p>
          </div>

        </div>

        {/* ═══ Grille de cartes ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <SkillCard
              key={cat.title}
              Icon={cat.Icon}
              title={cat.title}
              skills={cat.skills}
            />
          ))}
        </div>

      </div>
      <div className="h-[5vh] border-b-[0.3px] w-full ">
        
        </div>
    </section>
  );
}

export default Competences;