import photo from "./assets/photo.jpeg";
import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';

function Presentation() {
  return (
    <>
      <section
        id="acceuil"
        className="w-full max-w-7xl mx-auto px-4 lg:px-6
                   mt-[100px] lg:mt-[140px] mb-20"
      >
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">

          <div className="flex flex-col gap-5 w-full lg:flex-1">

            <div className="border border-amber-400 rounded-md shadow-md px-4 py-2 text-sm lg:text-base w-full lg:w-fit">
              Yaoundé, Cameroun • École Nationale Supérieure Polytechnique
            </div>

            <div className="text-amber-700 text-sm lg:text-base font-semibold tracking-wide">
              PORTFOLIO D'INGENIERIE LOGICIEL & IA
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
              Arron KOUCHE NGAMENI
            </h1>

            <div className="text-[rgb(247,109,11)] text-lg lg:text-xl font-medium max-w-md">
              Étudiant en Génie Informatique & Futur Ingénieur en Machine
              Learning et Intelligence Artificielle
            </div>

            <div className="italic border-l-4 border-l-orange-600 rounded-md shadow-lg bg-white
                            pl-5 pr-4 py-4 text-base lg:text-xl max-w-xl">
              « Contribuer activement au développement et à l'essor du Machine
              Learning et de l'Intelligence Artificielle en Afrique et
              particulièrement au Cameroun, à travers des solutions logicielles
              et algorithmiques rigoureuses. »
            </div>

            <ul className="flex flex-wrap gap-4 items-center mt-2">

              <li className="w-full sm:w-auto">
                <button className="w-full sm:w-[190px] cursor-pointer text-white bg-[rgb(238,120,38)]
                                   h-[50px] rounded-xl shadow-md duration-200 hover:-translate-y-1 text-sm lg:text-base">
                  Voir mes compétences
                </button>
              </li>

              <li className="w-full sm:w-auto">
                <button className="w-full sm:w-[190px] cursor-pointer bg-gray-100 h-[50px] rounded-xl
                                   border-[0.8px] border-[rgb(238,120,38)] shadow-md duration-200
                                   hover:-translate-y-1 text-sm lg:text-base">
                  Me contacter
                </button>
              </li>

              <li>
                <a
                  href="https://github.com/blacksugar00"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100
                             hover:bg-[rgb(238,120,38)] transition-colors duration-200 group"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="w-5 h-5 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/arron"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100
                             hover:bg-[rgb(238,120,38)] transition-colors duration-200 group"
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    className="w-5 h-5 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                  />
                </a>
              </li>

            </ul>

          </div>

          <div className="flex-shrink-0">
            <img
              src={photo}
              alt="Arron Kouche"
              className="w-[280px] sm:w-[350px] lg:w-auto h-auto lg:h-[500px]
                         object-cover object-center rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* Séparateur */}
      <div className="h-[5vh] border-b-[0.3px] w-full"></div>
    </>
  );
}

export default Presentation;