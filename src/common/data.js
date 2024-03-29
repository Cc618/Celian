// Content data

import res_dart from '../res/flutter.png';
import res_c from '../res/c.png';
import res_cpp from '../res/cpp.png';
import res_html from '../res/html5.png';
import res_python from '../res/python.png';
import res_julia from '../res/julia.png';
import res_pytorch from '../res/pytorch.png';
import res_git from '../res/git.png';
import res_linux from '../res/linux.png';
import res_quick_shop from '../res/quick_shop.jpg';
import res_os2020 from '../res/os2020.gif';
import res_riddim from '../res/riddim.png';
import res_riddim_svg from '../res/riddim.svg';
import res_alpha from '../res/alpha.png';
import res_feature_changer from '../res/feature_changer.png';
import res_pytorch_collections from '../res/pytorch_collections.gif';
import res_google_play_badge from '../res/google_play_badge.png';
import res_resume from '../res/resume.png';

let lang = "fr";

// Shared data between all languages
const sharedData = {
    // Misc
    "url_github": "https://github.com/Cc618",
    "url_linkedin": "https://www.linkedin.com/in/celian-raimbault",
    "url_resume_github": "https://github.com/Cc618/Celian",
    // Home
    "mail": "celian.pro.78@gmail.com",
    "phone": "(+33) 06 61 24 71 01",
    // Footer
    "copyright_year": "2022",
    "resources_copyright": "- Flutter and the related logo are trademarks of Google LLC. We are not endorsed by or affiliated with Google LLC.\n- PyTorch, the PyTorch logo and any related marks are trademarks of Facebook, Inc.\n- Logos of git are under Creative Commons Attribution 3.0 license (https://git-scm.com/downloads/logos)"
};

// Language specific data
const fullData = {
    "en": {
        // Home
        "translate_lang": "Version française",
        "print_pdf": "Résumé",
        "translate": "Translate",
        "copied": "Copied !",
        "job": "Software Developer Student",
        "background": "Background",
        "experiences": "Experiences",
        "projects": "Projects",
        // Experiences
        "personal_contributions": "Personal Contributions",
        "professional_contributions": "Professional Contributions",
        "technologies": "Technologies",
        // Skills
        "skills": [
            {
                "title": "Education",
                "items": [
                    "Actually in third year at <a href=\"https://www.epita.fr\">EPITA</a>",
                    "A Level: Science, IT option",
                    "Study abroad semester at Griffith College in Ireland (2021)",
                    "Attendee to the general high school contest related to math",
                    "French: native, English: B2, 870 TOEIC points (autonomous)",
                ],
            },
            {
                "title": "Activities",
                "items": [
                    "Passionate in IT and math since middle school",
                    "Competitive programming (<a href=\"https://codingcompetitions.withgoogle.com/kickstart\">Google Kickstart</a> / <a href=\"https://leetcode.com\">Leetcode</a>)",
                    "Artificial Intelligence",
                    "Mobile apps",
                    "English research papers reading",
                    "Electronic music",
                    "Travels (Ireland, Japan, France...)",
                    "Volunteering (<a href=\"https://prologin.org/\">Prologin</a> / sport / culinary events photography)",
                ],
            },
        ],
        "icon_skills": [
            {
                "title": "Experienced",
                "ratio": .9,
                "items": [
                    {
                        "title": "C / C++",
                        "src": "cpp"
                    },
                    {
                        "title": "Python",
                        "src": "python"
                    },
                    {
                        "title": "PyTorch",
                        "src": "pytorch"
                    }
                ],
                "text_content": false
            },
            {
                "title": "Intermediate",
                "ratio": .7,
                "items": [
                    {
                        "title": "Dart / Flutter",
                        "src": "dart"
                    },
                    {
                        "title": "Julia",
                        "src": "julia"
                    },
                    {
                        "title": "Git",
                        "src": "git"
                    },
                    {
                        "title": "Linux / Bash",
                        "src": "linux"
                    }
                ],
                "text_content": false
            },
            {
                "title": "Skills",
                "items": [
                    "Object Oriented Programming",
                    "Functional Programming",
                    "Data Structures",
                    "Project Management"
                ],
                "text_content": true
            }
        ],
        // Projects
        "github_page": "GitHub page",
        "projects_data": [
            {
                title: "Riddim",
                tags: ["C++", "Programming Language"],
                icon: "cpp",
                image: "riddim",
                extra_image: "riddim_svg",
                description: "Interpreted language made in C++ designed for algorithms / data structures. It contains a standard library, a garbage collector and a documentation generator.",
                link: "https://github.com/Cc618/Riddim"
            },
            {
                title: "Os2020",
                tags: ["C", "Assembly", "OS"],
                icon: "c",
                image: "os2020",
                description: "32 bits Operating System. Written in C and assembly, it provides a custom bootloader, a libc and a Fat32 file system driver.",
                link: "https://github.com/Cc618/Os2020"
            },
            {
                title: "Feature-Changer",
                tags: ["Python", "AI"],
                icon: "python",
                image: "feature_changer",
                description: "Convolutional autoencoder able to change image attributes. It can modify hair color, add glasses and more.",
                link: "https://github.com/Cc618/Feature-Changer"
            },
            {
                title: "PyTorch-Collections",
                tags: ["Python", "AI"],
                icon: "python",
                image: "pytorch_collections",
                description: "A collection of deep learning algorithms made with PyTorch. Inspired by several research papers, it includes mostly image processing and reinforcement learning algorithms.",
                link: "https://github.com/Cc618/PyTorch-Collections"
            },
            {
                title: "Quick-Shop",
                tags: ["Flutter", "Mobile App"],
                icon: "dart",
                image: "quick_shop",
                description: "Shopping list mobile application. Produced with the Flutter framework in Dart. Available also on the Google Play Store.",
                link: "https://github.com/Cc618/Quick-Shop",
                google_play: "https://play.google.com/store/apps/details?id=com.cc.quick_shop"
            },
            {
                title: "This Website !",
                tags: ["Web", "Design"],
                icon: "html",
                image: "resume",
                description: "Online resume made in HTML / JS / SASS with React JS.",
                link: sharedData.url_resume_github
            },
        ],
        // Footer
        "made_with": "Made with",
        "copyright": {
            "name": "Celian Raimbault",
            "year": sharedData.copyright_year,
        },
    },
    "fr": {
        // Home
        "translate_lang": "English version",
        "print_pdf": "CV",
        "translate": "Traduire",
        "copied": "Copié !",
        "job": "Etudiant Ingénieur en Informatique",
        "background": "Parcours",
        "experiences": "Expériences",
        "projects": "Projets",
        // Experiences
        "personal_contributions": "Apports Personnels",
        "professional_contributions": "Apports Professionnels",
        "technologies": "Technologies",
        // Skills
        "skills": [
            {
                "title": "Cursus",
                "items": [
                    "Actuellement en 3e année à <a href=\"https://www.epita.fr\">EPITA</a>",
                    "Baccalauréat S spé ISN mention bien (2019)",
                    "Semestre académique en Irlande à Griffith College en 2021",
                    "Participation à l'épreuve de maths du concours général des lycéens",
                    "Français : langue maternelle, Anglais : B2, 870 points TOEIC (autonome)",
                ],
            },
            {
                "title": "Activités",
                "items": [
                    "Passion et pratique de l’informatique et des maths depuis le collège",
                    "Nombreuses compétitions de programmation (<a href=\"https://codingcompetitions.withgoogle.com/kickstart\">Google Kickstart</a> / <a href=\"https://leetcode.com\">Leetcode</a>)",
                    "Création d’intelligences artificielles",
                    "Conception d’applications mobiles",
                    "Lecture d’articles scientifiques en anglais",
                    "Création de musique électronique",
                    "Voyages (Irlande, Japon, France...)",
                    "Bénévolat (Membre à <a href=\"https://prologin.org/\">Prologin</a> et couverture photo d'événements sportifs)",
                ],
            },
        ],
        "icon_skills": [
            {
                "title": "Maîtrise",
                "ratio": .9,
                "items": [
                    {
                        "title": "C / C++",
                        "src": "cpp"
                    },
                    {
                        "title": "Python",
                        "src": "python"
                    },
                    {
                        "title": "PyTorch",
                        "src": "pytorch"
                    }
                ],
                "text_content": false
            },
            {
                "title": "Fonctionnel",
                "ratio": .7,
                "items": [
                    {
                        "title": "Dart / Flutter",
                        "src": "dart"
                    },
                    {
                        "title": "Julia",
                        "src": "julia"
                    },
                    {
                        "title": "Git",
                        "src": "git"
                    },
                    {
                        "title": "Linux / Bash",
                        "src": "linux"
                    }
                ],
                "text_content": false
            },
            {
                "title": "Compétences",
                "items": [
                    "Programmation Orientée Objet",
                    "Programmation Fonctionnelle",
                    "Structures de Données",
                    "Gestion de Projets"
                ],
                "text_content": true
            }
        ],
        // Projects
        "github_page": "Page GitHub",
        "projects_data": [
            {
                title: "Riddim",
                tags: ["C++", "Langage de Programmation"],
                icon: "cpp",
                image: "riddim",
                extra_image: "riddim_svg",
                description: "Langage de programmation interprété, créé en C++ et fait pour les algorithmes et structures de données. Il possède une bibliothèque standard, un garbage collector et générateur de documentation.",
                link: "https://github.com/Cc618/Riddim"
            },
            {
                title: "Os2020",
                tags: ["C", "Assembleur", "OS"],
                icon: "c",
                image: "os2020",
                description: "OS 32 bits. Réalisé en C et en assembleur, il contient un bootloader personnalisé ainsi qu'une libc et un driver Fat32.",
                link: "https://github.com/Cc618/Os2020"
            },
            {
                title: "Feature-Changer",
                tags: ["Python", "IA"],
                icon: "python",
                image: "feature_changer",
                description: "Autoencoder convolutionnel permettant de changer les traits d'une image. Capable de modifier la couleur de cheveux, d'ajouter des lunettes et plus.",
                link: "https://github.com/Cc618/Feature-Changer"
            },
            {
                title: "PyTorch-Collections",
                tags: ["Python", "IA"],
                icon: "python",
                image: "pytorch_collections",
                description: "Collection d'algorithmes de deep learning réalisés avec PyTorch. Inspiré par divers articles de recherche, il inclu principalement des algorithmes de traitement d'image et de reinforcement learning.",
                link: "https://github.com/Cc618/PyTorch-Collections"
            },
            {
                title: "Quick-Shop",
                tags: ["Flutter", "Appli Mobile"],
                icon: "dart",
                image: "quick_shop",
                description: "Application mobile de liste de courses. Produite grâce au framework Flutter en Dart et disponible sur le Google Play Store.",
                link: "https://github.com/Cc618/Quick-Shop",
                google_play: "https://play.google.com/store/apps/details?id=com.cc.quick_shop"
            },
            {
                title: "Ce Site !",
                tags: ["Web", "Design"],
                icon: "html",
                image: "resume",
                description: "CV en ligne fait en HTML / JS / SASS avec React JS.",
                link: sharedData.url_resume_github
            },
        ],
        // Footer
        "made_with": "Fait avec",
        "copyright": {
            "name": "Célian Raimbault",
            "year": sharedData.copyright_year,
        }
    }
};

// Latest experience first
let experiences =
[
  {
    "title": "Medical&Digital",
    "year": "2021",
    "description": "Accélération du chargement de fichier DICOM sur infrastructure embarqué et création d'un serveur d'imagerie médicale PACS sécurisé",
    "content_fr": "Stage de 7 semaines au sein de <a href=\"https://negatoscreen.com\">Medical&Digital</a> (filiale d'<a href=\"https://infotrafic.fr\">Infotrafic</a>).<br>J'ai été chargé d'optimiser le logiciel open source d'imagerie médicale <a href=\"https://github.com/nroduit/Weasis\">Weasis</a>. Le but est de l'utiliser sur Raspberry Pi. De plus, j'ai mis en place un serveur PACS (imagerie médicale) sécurisé afin de l'utiliser dans Weasis.<br>Lors de ce stage, beaucoup de recherche a été faite. La plupart du code était écrit en Java. J'ai appris à utiliser Docker et aussi élargi mes connaissances en web (https et DICOMWeb)",
    "content_en": "7 weeks internship at <a href=\"https://negatoscreen.com\">Medical&Digital</a> (branch of <a href=\"https://infotrafic.fr\">Infotrafic</a>).<br>I have been asked to optimize <a href=\"https://github.com/nroduit/Weasis\">Weasis</a>, an open source viewer for DICOM files (medical images). Weasis was used in Raspberry Pi devices.<br>In addition, I also have set up a secured PACS server used to manage medical files such as DICOM. The server was used alongside Weasis.<br>During this internship, most of the code has been written in Java. I have also learnt Docker and increased my web knowledge (https and DICOMWeb)",
    "personal_contributions": "Dans ce stage, j'ai été amené à beaucoup chercher, j'ai plus cherché que programmé d'ailleurs, ce qui m'a permis d'améliorer mes compétences de recherches et surtout d'en apprendre beaucoup.<br>Je ne connaissais que peu de choses en web et j'ai pu découvrir comment étaient sécurisés les serveurs en faisant un serveur d'imagerie médicale. En effet, j'ai dû porter attention à l'aspect sécurité car les données médicales sont confidentielles.<br>De plus, j'ai appris également à m'organiser dans un projet fait par d'autres personnes (lors de mon premier stage, j'étais le seul à programmer ma partie et je l'avais créée de A à Z) car j'ai travaillé en partie sur un logiciel open source. Cette partie a amélioré mes compétences en debugging et en compréhension de code.<br>Comme le logiciel devait être embarqué dans des Raspberry Pi, j'ai également été amené à cross compiler ce logiciel.<br>Dernièrement, tous les matins, une réunion en ligne était organisée. Grâce à cela, j'ai pu voir comment s'organisait l'équipe de développement et aussi appris à synthétiser ce que je faisais la veille et à prévoir ce que j'allais faire pendant la journée.",
    "professional_contributions": "Personnellement, j'ai eu la chance de découvrir une entreprise qui propose des démarches RSE. Je trouve très bien le fait de travailler sur autre chose lors d'un créneau une fois par semaine, ceci permet aussi de travailler avec d'autres collègues que d'habitude. De plus, j'ai travaillé majoritairement en télétravail, ce que je n'avais jamais fait.<br>Ces deux points sont pour moi de grands avantages, cela m'aidera à faire des choix concernant mes futurs projets professionnels.<br>Dernièrement, je tiens à souligner le fait de m'être senti vraiment utile. En effet, le travail que j'ai fait sera poursuivi et j'ai eu en plus la chance de proposer mon travail au mainteneur du logiciel open source.",
    "technologies": "La plupart de mes travaux ont porté sur le langage Java, que ça soit en recherche ou en développement. Comme c'est du Java, beaucoup de programmation orientée objets était utilisée, je n'avais pas l'habitude d'utiliser autant la POO. J'ai également utilisé git et bash, et aussi appris à utiliser docker, je n'en avais jamais fait avant.<br>Je n'avais jamais manipulé de Raspberry Pi avant, et je suis très content d'avoir découvert cette technologie. Cela m'a donné le goût pour faire des projets personnels avec.<br>Dernièrement, j'ai pu un peu coder en PHP, que je ne connaissais seulement de nom."
  },
  {
    "title": "Webdyn",
    "year": "2020",
    "description": "Création d'une application pour configurer les produits WebdynEasy (compteurs connectés)",
    "content_fr": "Stage de 2 mois à <a href=\"https://www.webdyn.com/en/\">Webdyn</a> en 2020. Webdyn est une entreprise multinationale spécialisée dans les compteurs connectés d'eau, d'électricité et de gaz. Le but était de créer une application mobile permettant la configuration des boîtiers WebdynEasy notamment lors de la pose du compteur par un technicien. Faite avec Flutter en Dart, elle permet de lire des QR Codes, de communiquer en Bluetooth Low Energy avec l'appareil et dispose d'un mode test simplifiant la procédure de certification. L'application est disponible sur le <a href=\"https://play.google.com/store/apps/details?id=com.webdyn.WebdynEasy\">Google Play Store</a>",
    "content_en": "Two months internship at <a href=\"https://www.webdyn.com/en/\">Webdyn</a> in 2020. Webdyn is a multinational company specialized in remote water, gas and electricity meters. The goal was to create a mobile application to configure WebdynEasy hardware especially on its installation by a technician. Made with Flutter in Dart, it provides QR Code scanning, Bluetooth Low Energy communication with the gateway and includes a test mode used in the certification process. This application is available on the <a href=\"https://play.google.com/store/apps/details?id=com.webdyn.WebdynEasy\">Google Play Store</a>",
    "personal_contributions": "Professionnellement, ce stage a permis d'améliorer mes compétences en travail d'équipe.<br> En effet, j'ai dû collaborer avec des collègues ayant diverses fonctions au sein de l'entreprise.<br> Certains travaillent au marketing, d'autres sont du coté hardware ou software. Même ceux travaillant en software ne travaillaient pas sur les mêmes parties du matériel (CPU / module bluetooth par exemple), je me suis occupé de coder l'application seul mais j'ai dû la tester sur le materiel avec mes collègues.<br>Je me suis occupé également de publier l'application (la version test) avec l'aide de mon maître de stage, cette partie est plus marketing mais je trouve important de savoir comment faire même si ce n'est pas ma compétence principale.<br>De plus, j'ai mieux compris comment fonctionnent et de quoi sont composées les cartes électroniques et aussi découvert des appareils comme par exemple un appareil qui détecte les signaux GSM.",
    "professional_contributions": "Ce stage m'a beaucoup appris aussi personnellement car j'ai pu échanger avec des collègues passionnés comme moi, j'ai alors découvert des outils différents de ceux que j'utilisais.<br>Par ailleurs, cela m'a donné envie de faire de l'alternance car je trouve qu'il est très formateur de travailler sur de grands projets ainsi que d'utiliser d'autres outils. J'ai vraiment apprécié utiliser les connaissances que j'ai acquises à l'école ou dans mon temps libre tout en apprenant de nouvelles.<br>Dernièrement, ce stage était l'occasion pour moi de me créer un profil LinkedIn afin de pouvoir rester en contact avec l'entreprise, ce qui me sera utile pour mes futurs stages ou contrats d'alternance.",
    "technologies": "L'application a été créée grâce à la bibliothèque Flutter qui s'utilise avec le langage Dart.<br>J'ai aussi fait des scripts Python qui ont servi d'outils pour par exemple convertir un fichier excel en constantes C ou Dart.<br>Le logiciel de contrôle de version était différent de celui utilisé en cours, c'est SVN, il est semblable à GIT sauf qu'un seul repo est utilisé pour toute l'entreprise.<br>J'ai également documenté l'application, d'une part comment installer les outils nécessaires et d'autre part comment est organisé le code source pour qu'ils puissent maintenir l'application après mon départ, pour cela, j'ai l'habitude d'utiliser des fichiers markdown.<br>Bien que j'avais déjà créé des applications avec ces outils, je n'avais jamais fait d'application aussi complète et c'est pour cela que j'avais peur de mal organiser mon code, je me suis donc inspiré du design pattern model view controller."
  },
];

// Get resource from id
const resources = {
    "dart": res_dart,
    "c": res_c,
    "cpp": res_cpp,
    "html": res_html,
    "python": res_python,
    "julia": res_julia,
    "pytorch": res_pytorch,
    "git": res_git,
    "linux": res_linux,
    "quick_shop": res_quick_shop,
    "os2020": res_os2020,
    "alpha": res_alpha,
    "riddim": res_riddim,
    "riddim_svg": res_riddim_svg,
    "feature_changer": res_feature_changer,
    "pytorch_collections": res_pytorch_collections,
    "google_play_badge": res_google_play_badge,
    "resume": res_resume,
};

// Prefix where the index is located
const URL_PREFIX = '/Celian';

// Raw files located in /public
const URL_RAW = `${URL_PREFIX}/raw`;

const printData = {
    "fr": `${URL_RAW}/Célian Raimbault_fr.pdf`,
    "en": `${URL_RAW}/Celian Raimbault_en.pdf`,
};

let data = genData();

function changeLang() {
    setLang(lang === "fr" ? "en" : "fr");
}

function setLang(newLang) {
    lang = newLang;
    data = genData();
}

function genData() {
    return { ...fullData[lang], ...sharedData };
}

export {changeLang};
export {data};
export {experiences};
export {lang};
export {setLang};
export {resources};
export {printData};
