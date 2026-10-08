import { Mail, Phone, MapPin, Send } from 'lucide-react';
import githubIcon from './assets/github.svg';
import linkedinIcon from './assets/linkedin.svg';
import InfoItem from './InfoItem';
import SocialLink from './SocialLink';
function Contact() {
  return (
    <section id='contact' className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/*  Carte principale sombre  */}
        <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 shadow-2xl">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/*  COLONNE GAUCHE */}
            <div className="flex flex-col justify-between gap-10">

              <div className="flex flex-col gap-6">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 w-fit">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-sm font-medium text-white">
                    Opportunités & Collaborations
                  </span>
                </div>

                {/* Titre */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  Travaillons ensemble.
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  Disponible pour des stages techniques, missions en génie
                  logiciel et projets novateurs en Intelligence Artificielle
                  et Machine Learning.
                </p>
              </div>

              {/*  Coordonnées  */}
              <div className="flex flex-col gap-5">

                <InfoItem
                  Icon={Mail}
                  label="Email direct"
                  value="kouchengameniarron@gmail.com"
                  href="mailto:kouchengameniarron@gmail.com"
                />

                <InfoItem
                  Icon={Phone}
                  label="Téléphone / WhatsApp"
                  value="+237 6 87 81 29 24"
                  href="tel:+237687812924"
                />

                <InfoItem
                  Icon={MapPin}
                  label="Localisation"
                  value="Yaoundé, Cameroun"
                />

              </div>

              {/*  Réseaux sociaux  */}
              <div className="flex items-center gap-3">
                <SocialLink href="#" label="GitHub">
                  <img src={githubIcon} alt="GitHub" className="w-4 h-4 brightness-0 invert" />
                  GitHub
                </SocialLink>

                <SocialLink href="#" label="LinkedIn">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4 brightness-0 invert" />
                  LinkedIn
                </SocialLink>
              </div>

            </div>

            {/*  COLONNE DROITE : FORMULAIRE  */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <form className="flex flex-col gap-5">

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nom & prénom
                  </label>
                  <input
                    type="text"
                    placeholder="ex: Patrick Mboma"
                    className="w-full bg-white text-gray-900 placeholder-gray-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Votre adresse email
                  </label>
                  <input
                    type="email"
                    placeholder="nom@exemple.com"
                    className="w-full bg-white text-gray-900 placeholder-gray-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Détaillez votre proposition de collaboration, stage ou projet..."
                    className="w-full bg-white text-gray-900 placeholder-gray-400 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 resize-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-3.5 transition-colors mt-2"
                >
                  Envoyer le message
                  <Send size={18} />
                </button>

                <p className="text-center text-xs text-gray-500 mt-1">
                  Réponse rapide assurée  •  Basé à Yaoundé, Cameroun
                </p>

              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
export default Contact;


