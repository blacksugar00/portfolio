import { Brain, BookOpenText, ChartColumnBig, UserGroup } from "lucide-react";
import Card from "./Card";

const textHead1 = "Capacité d'abnégation et persévérance";
const mainText1 = "Résolution méthodique des bugs complexes et engagement total envers la qualité logicielle.";

const textHead2 = "Soif d'apprendre et curiosité constante";
const mainText2 = "Veille technologique active en algorithmique, frameworks modernes et état de l'art IA.";

const textHead3 = "Pensée analytique et résolution de problèmes";
const mainText3 = "Approche mathématique structurée, modélisation claire et optimisation des performances.";

const textHead4 = "Travail en équipe multidisciplinaire";
const mainText4 = "Communication fluide avec designers, ingénieurs et parties prenantes non techniques.";

function Parcours() {
  return (
    <section id="a-propos" className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-8">

          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-orange-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Profil & Vocation
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              À propos de mon parcours
            </h2>
            <div className="bg-[rgb(233,160,108)] rounded-md px-3 py-1 text-sm font-medium w-fit">
              Spécialisation 100% informatique
            </div>
          </div>

          <p className="text-base md:text-lg leading-relaxed text-gray-800 bg-white
                        border border-orange-500 rounded-md px-5 py-6 md:px-8 md:py-8">
            « Passionné d'informatique, je me spécialise dans le développement desktop
            (C++ / Qt Creator) et le développement web (React, Django, Spring Boot).
            Mon objectif est de devenir ingénieur en Machine Learning et Intelligence
            Artificielle et de devenir un acteur majeur du développement de ce domaine
            en Afrique en général et au Cameroun en particulier. »
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card Icon={Brain} textHead={textHead1} mainText={mainText1} />
            <Card Icon={BookOpenText} textHead={textHead2} mainText={mainText2} />
            <Card Icon={ChartColumnBig} textHead={textHead3} mainText={mainText3} />
            <Card Icon={UserGroup} textHead={textHead4} mainText={mainText4} />
          </div>

        </div>
      </div>

      <div className="h-[5vh] border-b-[0.3px] w-full mt-10"></div>
    </section>
  );
}

export default Parcours;