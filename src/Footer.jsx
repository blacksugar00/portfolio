import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';   

function Footer() {
  const liens = [
    { nom: 'Accueil',     href: '#acceuil' },
    { nom: 'À propos',    href: '#a-propos' },
    { nom: 'Compétences', href: '#competences' },
    { nom: 'Formation',   href: '#formation' },
    { nom: 'Expérience',  href: '#experience' },
    { nom: 'Projets',     href: '#projets' },
    { nom: 'Contact',     href: '#contact' },
  ];

  return (
    <footer className="w-full bg-[#0a0a0a] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Partie gauche : identité */}
        <div className="flex flex-col gap-1">
          <div className="text-lg font-bold flex items-center gap-1">
            Arron KOUCHE NGAMENI
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block" />
          </div>
          <div className="text-sm text-gray-400">
            Étudiant en Génie Informatique & Futur Ingénieur en Machine Learning et IA
          </div>
          <div className="text-xs text-gray-500 mt-1">
            © 2024 Arron KOUCHE NGAMENI. Tous droits réservés.
          </div>
        </div>

        {/* Partie centrale : navigation */}
        <ul className="flex flex-wrap gap-5 text-sm text-gray-300">
          {liens.map((lien) => (
            <li key={lien.nom}>
              <a
                href={lien.href}
                className="hover:text-[rgb(238,120,38)] transition-colors duration-200"
              >
                {lien.nom}
              </a>
            </li>
          ))}
        </ul>

        {/*  Partie droite : réseaux  */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/blacksugar00"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-[rgb(238,120,38)] transition-colors duration-200 group"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-5 h-5 brightness-0 invert transition-opacity"
            />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/arron"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-[rgb(238,120,38)] transition-colors duration-200 group"
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-5 h-5 brightness-0 invert transition-opacity"
            />
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;