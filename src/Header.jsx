import github_logo from "./assets/github.svg"
import linkeedin_logo from "./assets/linkedin_logo.png"
import { MapPin } from 'lucide-react';



function Header(){
    return (
    <div className="fixed top-0 left-0 w-full z-[1000] "> 
        <div className="  flex justify-around items-center  bg-[rgb(24,26,27)] text-white h-[4.5vh] border-b border-b-gray-600 " >
            <div>

                <span> En recherche d'opportunite en IA & Genie Logiciel</span>
            </div>
            <div>
                <ul className=" flex gap-4">
                    <li></li>
                    <li><div className="flex items-center gap-1.5  flex-shrink-0">
                        <MapPin size={16} className="text-orange-500" />
                        <span className="text-sm">Yaounde, Cameroun</span>
        </div> </li>
                    <li className="text-gray-500">|</li>
                    <li className=" duration-200 hover:text-[rgb(238,120,38)]"><a href="#">kouchengameniarron@gmail.com</a></li>
                    <li className="text-gray-500">|</li>
                    <li className=" duration-200 hover:text-[rgb(238,120,38)]"><a href="#">+237 6 87 81 29 24</a></li>
                </ul>

            </div>
        </div>

        <div className="flex justify-around items-center   bg-[rgb(24,26,27)] text-white h-[8.5vh]">
            <div className="flex gap-6">
                <div className="bg-[rgb(238,120,38)] h-10 w-10 text-[30px] rounded-sm" >AK</div>
                <div className="">
                    <div className="">ARRON KOUCHE.</div>
                    <div>INGENIERIE & IA</div>
                </div>

            </div>

            <div>
                <ul className="flex gap-4 ">
                    <li className="duration-200 hover:text-[rgb(238,120,38)]"><a href="#acceuil">Acceuil</a></li>
                    <li className="duration-200 hover:text-[rgb(238,120,38)]"><a href="#a-propos">A propos</a></li>
                    <li className="duration-200 hover:text-[rgb(238,120,38)]"><a href="#competences">Competences</a></li>
                    <li className="duration-200 hover:text-[rgb(238,120,38)]"><a href="#formation"> Formation</a></li>
                    <li className="duration-200 hover:text-[rgb(238,120,38)]"><a href="#experience">Experience</a></li>
                    <li className="duration-200 hover:text-[rgb(238,120,38)]"><a href="#projet">projet</a></li>
                    <li className="duration-200 hover:text-[rgb(238,120,38)]"><a href="#contact">Contact</a></li>

                </ul>

            </div>

            <div className="flex gap-4">
                <img src={github_logo} alt="icone-github" className="w-6 h-6 rounded-xl bg-white cursor-pointer"></img>
                <img src={linkeedin_logo} alt="linkedin-logo" className=" cursor-pointer w-6 h-6 rounded-xl bg-white"></img>
                <button className="bg-[rgb(238,120,38)] rounded-md w-32 h-8 cursor-pointer duration-200 hover:-translate-y-1" > Me contacter</button>

            </div>

        </div>
    </div>
);



}

export default Header