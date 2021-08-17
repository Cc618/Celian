// Experiences

import './Experiences.scss';
import {data} from '../common/data';
import ExperienceCard from '../widgets/ExperienceCard';

// TODO
// Latest experience first
let experiences = [
  {
    "title": "Medical&Digital",
    "year": "2021",
    // TODO : Update content
    "description": "Création d'une application pour configurer les produits WebdynEasy (compteurs connectés)",
    "content": "Stage de deux mois à <a href=\"https://www.webdyn.com/en/\">Webdyn</a> en 2020. Webdyn est une entreprise multinationale spécialisée dans les compteurs connectés d'eau, d'électricité et de gaz. Le but était de créer une application mobile permettant la configuration des boîtiers WebdynEasy notamment lors de la pose du compteur par un technicien. Faite avec Flutter en Dart, elle permet de lire des QR Codes, de communiquer en Bluetooth Low Energy avec l'appareil et dispose d'un mode test simplifiant la procédure de certification. L'application est disponible sur le <a href=\"https://play.google.com/store/apps/details?id=com.webdyn.WebdynEasy\">Google Play Store</a>",
    "personal_contributions": "Professionnellement, ce stage a permis d'améliorer mes compétences en travail d'équipe.<br> En effet, j'ai dû collaborer avec des collègues ayant diverses fonctions au sein de l'entreprise.<br> Certains travaillent au marketing, d'autres sont du coté hardware ou software. Même ceux travaillant en software ne travaillaient pas sur les mêmes parties du matériel (CPU / module bluetooth par exemple), je me suis occupé de coder l'application seul mais j'ai dû la tester sur le materiel avec mes collègues.<br>Je me suis occupé également de publier l'application (la version test) avec l'aide de mon maître de stage, cette partie est plus marketing mais je trouve important de savoir comment faire même si ce n'est pas ma compétence principale.<br>De plus, j'ai mieux compris comment fonctionnent et de quoi sont composées les cartes électroniques et aussi découvert des appareils comme par exemple un appareil qui détecte les signaux GSM.",
    "professional_contributions": "Ce stage m'a beaucoup appris aussi personnellement car j'ai pu échanger avec des collègues passionnés comme moi, j'ai alors découvert des outils différents de ceux que j'utilisais.<br>Par ailleurs, cela m'a donné envie de faire de l'alternance car je trouve qu'il est très formateur de travailler sur de grands projets ainsi que d'utiliser d'autres outils. J'ai vraiment apprécié utiliser les connaissances que j'ai acquises à l'école ou dans mon temps libre tout en apprenant de nouvelles.<br>Dernièrement, ce stage était l'occasion pour moi de me créer un profil LinkedIn afin de pouvoir rester en contact avec l'entreprise, ce qui me sera utile pour mes futurs stages ou contrats d'alternance.",
    "technologies": "L'application a été créée grâce à la bibliothèque Flutter qui s'utilise avec le langage Dart.<br>J'ai aussi fait des scripts Python qui ont servi d'outils pour par exemple convertir un fichier excel en constantes C ou Dart.<br>Le logiciel de contrôle de version était différent de celui utilisé en cours, c'est SVN, il est semblable à GIT sauf qu'un seul repo est utilisé pour toute l'entreprise.<br>J'ai également documenté l'application, d'une part comment installer les outils nécessaires et d'autre part comment est organisé le code source pour qu'ils puissent maintenir l'application après mon départ, pour cela, j'ai l'habitude d'utiliser des fichiers markdown.<br>Bien que j'avais déjà créé des applications avec ces outils, je n'avais jamais fait d'application aussi complète et c'est pour cela que j'avais peur de mal organiser mon code, je me suis donc inspiré du design pattern model view controller."
  },
  {
    "title": "Webdyn",
    "year": "2020",
    "description": "Création d'une application pour configurer les produits WebdynEasy (compteurs connectés)",
    "content": "Stage de deux mois à <a href=\"https://www.webdyn.com/en/\">Webdyn</a> en 2020. Webdyn est une entreprise multinationale spécialisée dans les compteurs connectés d'eau, d'électricité et de gaz. Le but était de créer une application mobile permettant la configuration des boîtiers WebdynEasy notamment lors de la pose du compteur par un technicien. Faite avec Flutter en Dart, elle permet de lire des QR Codes, de communiquer en Bluetooth Low Energy avec l'appareil et dispose d'un mode test simplifiant la procédure de certification. L'application est disponible sur le <a href=\"https://play.google.com/store/apps/details?id=com.webdyn.WebdynEasy\">Google Play Store</a>",
    "personal_contributions": "Professionnellement, ce stage a permis d'améliorer mes compétences en travail d'équipe.<br> En effet, j'ai dû collaborer avec des collègues ayant diverses fonctions au sein de l'entreprise.<br> Certains travaillent au marketing, d'autres sont du coté hardware ou software. Même ceux travaillant en software ne travaillaient pas sur les mêmes parties du matériel (CPU / module bluetooth par exemple), je me suis occupé de coder l'application seul mais j'ai dû la tester sur le materiel avec mes collègues.<br>Je me suis occupé également de publier l'application (la version test) avec l'aide de mon maître de stage, cette partie est plus marketing mais je trouve important de savoir comment faire même si ce n'est pas ma compétence principale.<br>De plus, j'ai mieux compris comment fonctionnent et de quoi sont composées les cartes électroniques et aussi découvert des appareils comme par exemple un appareil qui détecte les signaux GSM.",
    "professional_contributions": "Ce stage m'a beaucoup appris aussi personnellement car j'ai pu échanger avec des collègues passionnés comme moi, j'ai alors découvert des outils différents de ceux que j'utilisais.<br>Par ailleurs, cela m'a donné envie de faire de l'alternance car je trouve qu'il est très formateur de travailler sur de grands projets ainsi que d'utiliser d'autres outils. J'ai vraiment apprécié utiliser les connaissances que j'ai acquises à l'école ou dans mon temps libre tout en apprenant de nouvelles.<br>Dernièrement, ce stage était l'occasion pour moi de me créer un profil LinkedIn afin de pouvoir rester en contact avec l'entreprise, ce qui me sera utile pour mes futurs stages ou contrats d'alternance.",
    "technologies": "L'application a été créée grâce à la bibliothèque Flutter qui s'utilise avec le langage Dart.<br>J'ai aussi fait des scripts Python qui ont servi d'outils pour par exemple convertir un fichier excel en constantes C ou Dart.<br>Le logiciel de contrôle de version était différent de celui utilisé en cours, c'est SVN, il est semblable à GIT sauf qu'un seul repo est utilisé pour toute l'entreprise.<br>J'ai également documenté l'application, d'une part comment installer les outils nécessaires et d'autre part comment est organisé le code source pour qu'ils puissent maintenir l'application après mon départ, pour cela, j'ai l'habitude d'utiliser des fichiers markdown.<br>Bien que j'avais déjà créé des applications avec ces outils, je n'avais jamais fait d'application aussi complète et c'est pour cela que j'avais peur de mal organiser mon code, je me suis donc inspiré du design pattern model view controller."
  },
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
