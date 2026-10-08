import { Brain,BookOpenText,ChartColumnBig,UserGroup } from "lucide-react";
import Card from "./Card";
const textHead1="Capacité d’abnégation et persévérance";
const mainText1="Résolution méthodique des bugs complexes et engagement total envers la qualité logicielle.";
const textHead2="Soif d’apprendre et curiosité constante";
const mainText2="Veille technologique active en algorithmique, frameworks modernes et état de l'art IA.";
const textHead3="Pensée analytique et résolution de problèmes";
const mainText3="Approche mathématique structurée, modélisation claire et optimisation des performances.";
const textHead4="Travail en équipe multidisciplinaire";
const mainText4="Communication fluide avec designers, ingénieurs et parties prenantes non techniques.";

function Parcours() {
  return (
    <section className="w-full py-16 px-4 bg-gray-50 ">

      
      <div className="max-w-7xl mx-auto">

        
        <div className="flex flex-col gap-8">

          
          <div className="flex items-center gap-3">
            <div className="w-1 h-6 bg-orange-500 rounded-full" />
            <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Profil & Vocation

            </span>
          </div>
          
          <div className="flex justify-between">
            <div className="text-3xl font-extrabold">À propos de mon parcours</div>
            <div className="bg-[rgb(233,160,108)] rounded-sm w-2xs text-center h-7">Spécialisation 100% informatique</div>
          </div>

          
          <p className="text-lg leading-relaxed text-gray-800 bg-white border-[0.1px] border-orange-500 rounded-md h-auto px-8 py-8">
            « Passionné d’informatique, je me spécialise dans le développement desktop
            (C++ / Qt Creator) et le développement web (React, Django, Spring Boot).
            Mon objectif est de devenir ingénieur en Machine Learning et Intelligence
            Artificielle et de devenir un acteur majeur du développement de ce domaine
            en Afrique en général et au Cameroun en particulier. »
          </p>

          <div className="grid grid-cols-4 gap-3">
            <Card Icon={Brain} textHead={textHead1} mainText={mainText1} />
            <Card Icon={BookOpenText} textHead={textHead2} mainText={mainText2} />
            <Card Icon={ChartColumnBig} textHead={textHead3} mainText={mainText3} />
            <Card Icon={UserGroup} textHead={textHead4} mainText={mainText4} />
          </div>

        </div>
      </div>
      <div className="h-[5vh] border-b-[0.3px] w-full ">
        
        </div>
    </section>
  );
}
export default Parcours