// Experiences

import './Experiences.scss';
import {data} from '../common/data';
import ExperienceCard from '../widgets/ExperienceCard';

// TODO
let experiences = [
  {
    "title": "Webdyn",
    "year": "2020",
    "content": "Stage de deux mois à <a href=\"https://www.webdyn.com/en/\">Webdyn</a> en 2020. Webdyn est une entreprise multinationale spécialisée dans les compteurs connectés d'eau, d'électricité et de gaz. Le but était de créer une application mobile permettant la configuration des boîtiers WebdynEasy notamment lors de la pose du compteur par un technicien. Faite avec Flutter en Dart, elle permet de lire des QR Codes, de communiquer en Bluetooth Low Energy avec l'appareil et dispose d'un mode test simplifiant la procédure de certification. L'application est disponible sur le <a href=\"https://play.google.com/store/apps/details?id=com.webdyn.WebdynEasy\">Google Play Store</a>"
  },
  {
    "title": "Medical&Digital",
    "year": "2021",
    // TODO : Change content
    "content": "Stage de deux mois à <a href=\"https://www.webdyn.com/en/\">Webdyn</a> en 2020. Webdyn est une entreprise multinationale spécialisée dans les compteurs connectés d'eau, d'électricité et de gaz. Le but était de créer une application mobile permettant la configuration des boîtiers WebdynEasy notamment lors de la pose du compteur par un technicien. Faite avec Flutter en Dart, elle permet de lire des QR Codes, de communiquer en Bluetooth Low Energy avec l'appareil et dispose d'un mode test simplifiant la procédure de certification. L'application est disponible sur le <a href=\"https://play.google.com/store/apps/details?id=com.webdyn.WebdynEasy\">Google Play Store</a>"
  }
]

function Experiences() {
  return (
    <div className="Experiences" id="experiences">
      <div className="experiences-content">
        {experiences.map((experience, i) => <ExperienceCard key={i} experience={experience} index={i} />)}
      </div>
    </div>
  );
}

export default Experiences;
