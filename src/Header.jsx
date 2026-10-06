import github_logo from "./assets/github.svg"
import linkeedin_logo from "./assets/linkedin_logo.png"



function Header(){
    return (
    <div className=""> 
        <div className="  flex justify-around items-center  bg-[rgb(24,26,27)] text-white h-[4.5vh] border-b border-b-gray-600 " >
            <div>

                <span> En recherche d'opportunite en IA & Genie Logiciel</span>
            </div>
            <div>
                <ul className=" flex gap-4">
                    <li></li>
                    <li>Yaounde, Cameroun </li>
                    <li>|</li>
                    <li className=" duration-200 hover:text-[rgb(238,120,38)]"><a href="#">kouchengameniarron@gmail.com</a></li>
                    <li>|</li>
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
                <ul className="flex gap-4">
                    <li><a href="#">Acceuil</a></li>
                    <li><a href="#">A propos</a></li>
                    <li><a href="#">Competences</a></li>
                    <li><a href="#"> Formation</a></li>
                    <li><a href="#"></a>Experience</li>
                    <li><a href="#">projet</a></li>
                    <li><a href="#">Contact</a></li>

                </ul>

            </div>

            <div className="flex gap-4">
                <img src={github_logo} alt="icone-github" className="w-6 h-6 rounded-xl bg-white cursor-pointer"></img>
                <img src={linkeedin_logo} alt="linkedin-logo" className=" cursor-pointer w-6 h-6 rounded-xl bg-white"></img>
                <button className="bg-[rgb(238,120,38)] rounded-md w-32 h-8 cursor-pointer" > Me contacter</button>

            </div>

        </div>
    </div>
);



}

export default Header