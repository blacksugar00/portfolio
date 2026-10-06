import photo from "./assets/photo.jpeg";
import monImage from './assets/github.svg';
function Presentation() {
  return (
    <>
      <div className="flex justify-around  mb-20 ">
        <div className="flex gap-10 justify-around items-start  ">
          <div className="flex flex-col gap-5">
            <div className=" border border-amber-400 w-[500px] rounded-md shadow-md">
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
            <div className=" italic border border-l-[4px]  pl-[25px] border-l-orange-600 border-t-orange-600  border-b-orange-600 border-r-orange-600 rounded-md shadow-lg bg-white w-[75vh] text-xl">
              « Contribuer activement au développement et à l'essor du Machine
              Learning et de l'Intelligence Artificielle en Afrique et
              particulièrement au Cameroun, à travers des solutions logicielles
              et algorithmiques rigoureuses. »
            </div>
            <ul className="flex gap-5">
              <li>
                <button className=" text-white bg-[rgb(257,107,0,1)] h-[50px] w-[190px] rounded-xl shadow-md">voir mes competences</button>
              </li>
              <li>
                <button className="bg-gray-100 h-[50px] w-[190px] rounded-xl border-[0.8px] border-[rgb(257,107,0,1)] shadow-md " >Me contacter</button>
              </li>
              <li>
                <a
                    href="#"
                    style={{ backgroundImage: `url(${monImage})` }}
                    className="inline-block bg-cover bg-center bg-no-repeat px-6 py-3 text-white rounded-lg"
                  >
                    Mon lien
                  </a>
              </li>
              <li>
                <a></a>
              </li>
            </ul>
          </div>
          <div className="mb-0">
            <img
              src={photo}
              alt="photo"
              className="  h-[500px] rounded-xl"
            ></img>
          </div>
        </div>
        
      </div>
    <div className="h-[5vh] border-b-[0.3px] w-full ">
        
        </div>
    </>
  );
}
export default Presentation;
