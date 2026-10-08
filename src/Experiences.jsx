import ExperienceCard from "./ExperienceCard";

function Experiences() {
  const experiences = [
    {
      poste: "Stage en Développement Web",
      entreprise: "Fanelit Digital Solutions",
      lieu: "Yaoundé, Cameroun",
      missions: [
        "Conception et mise en place de sites web et applications web pour des particuliers et des institutions étatiques.",
        "Formation des utilisateurs finaux à l'utilisation des sites et applications développés.",
        "Collaboration avec une équipe multidisciplinaire pour concevoir un site web responsive et ergonomique.",
      ],
    },
  ];

  return (
    <section id="experience" className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* En-tête */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
              Immersion en entreprise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Expériences Professionnelles
          </h2>
        </div>

        {/*  Liste des expériences */}
        <div className="flex flex-col gap-5">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>

      </div>
      <div className="h-[5vh] border-b-[0.3px] w-full ">
        
        </div>
    </section>
  );
}



export default Experiences;