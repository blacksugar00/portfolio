import { useState } from 'react';
import { MapPin, Menu, X } from 'lucide-react';
import github_logo from "./assets/github.svg";
import linkeedin_logo from "./assets/linkedin_logo.png";

function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  const liens = [
    { nom: 'Accueil',     href: '#acceuil' },
    { nom: 'À propos',    href: '#a-propos' },
    { nom: 'Compétences', href: '#competences' },
    { nom: 'Formation',   href: '#formation' },
    { nom: 'Expérience',  href: '#experience' },
    { nom: 'Projets',     href: '#projet' },
    { nom: 'Contact',     href: '#contact' },
  ];
  return (
    <header className="fixed top-0 left-0 w-full  z-[1000]">

      <div className="hidden lg:flex justify-around items-center bg-[rgb(24,26,27)] text-white h-[5vh] border-b border-b-gray-600 text-sm">

        <span>En recherche d'opportunité en IA & Génie Logiciel</span>

        <ul className="flex gap-4 items-center">
          <li className="flex items-center gap-1.5 flex-shrink-0">
            <MapPin size={16} className="text-orange-500" />
            <span>Yaoundé, Cameroun</span>
          </li>
          <li className="text-gray-500">|</li>
          <li className="hover:text-[rgb(238,120,38)] transition-colors">
            <a href="mailto:kouchengameniarron@gmail.com">kouchengameniarron@gmail.com</a>
          </li>
          <li className="text-gray-500">|</li>
          <li className="hover:text-[rgb(238,120,38)] transition-colors">
            <a href="tel:+237687812924">+237 6 87 81 29 24</a>
          </li>
        </ul>
      </div>
      <div className="bg-[rgb(24,26,27)] text-white lg:h-[8.5vh] ">

        <div className="max-w-7xl mx-auto  flex justify-between items-center px-4 lg:px-6 py-3 lg:py-0">

          {/* Logo + Nom */}
          <a href="#acceuil" className="flex gap-3 lg:gap-6 items-center">
            <div className="bg-[rgb(238,120,38)] h-10 w-10 text-[22px] lg:text-[26px] rounded-sm flex items-center justify-center font-bold">
              AK
            </div>
            <div className="leading-tight">
              <div className="font-bold text-sm lg:text-base">ARRON KOUCHE.</div>
              <div className="text-xs lg:text-sm text-gray-400">INGENIERIE & IA</div>
            </div>
          </a>

          <ul className="hidden lg:flex gap-4">
            {liens.map((lien) => (
              <li key={lien.nom} className="hover:text-[rgb(238,120,38)] transition-colors duration-200">
                <a href={lien.href}>{lien.nom}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex gap-4 items-center">
            <img src={github_logo} alt="GitHub" className="w-6 h-6 rounded-xl bg-white cursor-pointer" />
            <img src={linkeedin_logo} alt="LinkedIn" className="w-6 h-6 rounded-xl bg-white cursor-pointer" />
            <button className="bg-[rgb(238,120,38)] rounded-md px-4 h-8 cursor-pointer duration-200 hover:-translate-y-1 text-sm">
              Me contacter
            </button>
          </div>
          <button
            onClick={() => setMenuOuvert(!menuOuvert)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {menuOuvert ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOuvert && (
          <div className="lg:hidden bg-[rgb(24,26,27)] border-t border-gray-700 px-4 py-4">

            <ul className="flex flex-col gap-3 mb-4">
              {liens.map((lien) => (
                <li key={lien.nom}>
                  <a
                    href={lien.href}
                    onClick={() => setMenuOuvert(false)}
                    className="block py-2 text-white hover:text-[rgb(238,120,38)] transition-colors"
                  >
                    {lien.nom}
                  </a>
                </li>
              ))}
            </ul>            
            <div className="border-t border-gray-700 pt-4 mb-4 text-sm text-gray-300 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-orange-500" />
                Yaoundé, Cameroun
              </div>
              <a href="mailto:kouchengameniarron@gmail.com" className="hover:text-orange-500">
                kouchengameniarron@gmail.com
              </a>
              <a href="tel:+237687812924" className="hover:text-orange-500">
                +237 6 87 81 29 24
              </a>
            </div>
            <div className="flex items-center gap-3">
              <img src={github_logo} alt="GitHub" className="w-8 h-8 rounded-lg bg-white p-1 cursor-pointer" />
              <img src={linkeedin_logo} alt="LinkedIn" className="w-8 h-8 rounded-lg bg-white p-1 cursor-pointer" />
              <button className="bg-[rgb(238,120,38)] rounded-md px-4 h-10 ml-auto text-sm font-medium">
                Me contacter
              </button>
            </div>

          </div>
        )}

      </div>
    </header>
  );
}

export default Header;