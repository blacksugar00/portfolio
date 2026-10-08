import photo from "./assets/photo.jpeg";
import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg'; 

function Presentation() {
  return (
    <>
      <div id="acceuil" className="flex justify-around mb-20 mt-[190px]">
        <div className="flex gap-10 justify-around items-start">
          <div className="flex flex-col gap-5">
            <div className="border border-amber-400 w-[500px] rounded-md shadow-md">
              Yaoundé, Cameroun • École Nationale Supérieure Polytechnique
            </div>
            <div className="text-amber-700">
              {" "}
              PORTFOLIO D'INGENIERIE LOGICIEL &I A
            </div>
            <h1 className="text-5xl font-extrabold w-[40vh]">
              Arron KOUCHE NGAMENI
            </h1>
            <div className="text-[rgb(247,109,11)] text-[20px] w-80">
              Étudiant en Génie Informatique & Futur Ingénieur en Machine
              Learning et Intelligence Artificielle
            </div>
            <div className="italic border border-l-[4px] pl-[25px] border-l-orange-600 border-t-orange-600 border-b-orange-600 border-r-orange-600 rounded-md shadow-lg bg-white w-[75vh] text-xl">
              « Contribuer activement au développement et à l'essor du Machine
              Learning et de l'Intelligence Artificielle en Afrique et
              particulièrement au Cameroun, à travers des solutions logicielles
              et algorithmiques rigoureuses. »
            </div>

            <ul className="flex gap-5 items-center">
              <li>
                <button className="cursor-pointer text-white bg-[rgb(238,120,38)] h-[50px] w-[190px] rounded-xl shadow-md duration-200 hover:-translate-y-1">
                  voir mes competences
                </button>
              </li>
              <li>
                <button className="cursor-pointer bg-gray-100 h-[50px] w-[190px] rounded-xl border-[0.8px] border-[rgb(238,120,38)] shadow-md duration-200 hover:-translate-y-1">
                  Me contacter
                </button>
              </li>

              {/*  GitHub  */}
              <li>
                <a
                  href="https://github.com/blacksugar00"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-[rgb(238,120,38)] transition-colors duration-200 group"
                >
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="w-5 h-5 transition-all duration-200 group-hover:brightness-0 group-hover:invert"
                  />
                </a>
              </li>

              {/*  LinkedIn  */}
              <li>
                <a
                  href="https://linkedin.com/in/arron"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-[rgb(238,120,38)] transition-colors duration-200 group"
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

          <div className="mb-0">
            <img
              src={photo}
              alt="photo"
              className="h-[500px] rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="h-[5vh] border-b-[0.3px] w-full"></div>
    </>
  );
}

export default Presentation;