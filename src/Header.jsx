function Header(){
    return (
    <> 
        <div className="  flex justify-around items-center  bg-[rgb(24,26,27)] text-white h-[4.5vh]" >
            <div>

                <span> En recherche d'opportunite en IA & Genie Logiciel</span>
            </div>
            <div>
                <ul className=" flex gap-4">
                    <li></li>
                    <li>Yaounde, Cameroun </li>
                    <li>|</li>
                    <li><a href="#">kouchengameniarron@gmail.com</a></li>
                    <li>|</li>
                    <li><a href="#">+237 6 87 81 29 24</a></li>
                </ul>

            </div>
        </div>

        <div className="flex justify-around">
            <div className="flex justify-around">
                <div className="mx-3.5"> AK </div>
                <div className="mx-3.5">
                    <div>ARRON KOUCHE.</div>
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

        </div>
    </>
);



}

export default Header