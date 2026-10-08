import SkillCard from './SkillCard';
import { Monitor } from 'lucide-react';

function Competences() {
  const skillsDesktop = [
    { nom: 'C++',           niveau: 88 },
    { nom: 'Qt Creator',    niveau: 85 },
    { nom: 'Visual Studio', niveau: 82 },
    { nom: 'Eclipse CDT',   niveau: 80 },
  ];

  return (
    <div className="flex flex-col gap-5 mx-auto">
      <div>
        stack & maitrise
      </div>
      <div className="flex justify-between">
            <div className="text-3xl font-extrabold">Compétences Techniques
</div>
            <div className="text-gray-400 rounded-sm w-xl text-center h-7">technologies de programmation système, architectures web complètes et outils de gestion de code source.</div>
          </div>

    <SkillCard
      Icon={Monitor}
      title="Développement Desktop"
      skills={skillsDesktop}
    />
    </div>
  );

}

export default Competences