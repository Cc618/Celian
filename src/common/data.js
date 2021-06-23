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
    "url_linkedin": "https://www.linkedin.com/in/c%C3%A9lian-raimbault-53269a1b2",
    "url_resume_github": "https://github.com/Cc618/Celian",
    // Home
    "mail": "celian.pro.78@gmail.com",
    "phone": "(+33) 06 61 24 71 01",
    // Footer
    "copyright_year": "2021",
    "resources_copyright": "- Flutter and the related logo are trademarks of Google LLC. We are not endorsed by or affiliated with Google LLC.\n- PyTorch, the PyTorch logo and any related marks are trademarks of Facebook, Inc.\n- Logos of git are under Creative Commons Attribution 3.0 license (https://git-scm.com/downloads/logos)"
};

// Language specific data
const fullData = {
    "en": {
        // Home
        "translate_lang": "Version française",
        "print_pdf": "Printable version",
        "translate": "Translate",
        "copied": "Copied !",
        "job": "Computer Engineering Student",
        "background": "Background",
        "projects": "Projects",
        // Skills
        "skills": [
            {
                "title": "Experiences",
                "items": [
                    "Two months internship at <a href=\"https://www.webdyn.com/en/\">Webdyn</a> in 2020. Webdyn is a multinational company specialized in remote water, gas and electricity meters. The goal was to create a mobile application to configure WebdynEasy hardware especially on its installation by a technician. Made with Flutter in Dart, it provides QR Code scanning, Bluetooth Low Energy communication with the gateway and includes a test mode used in the certification process. This application is available on the <a href=\"https://play.google.com/store/apps/details?id=com.webdyn.WebdynEasy\">Google Play Store</a>"
                ],
            },
            {
                "title": "Education",
                "items": [
                    "Actually in second year after graduation at <a href=\"https://www.epita.fr\">EPITA</a>",
                    "A Level: Science, IT option",
                    "Study abroad semester at Griffith College in Ireland (2021)",
                    "Attendee to the general high school contest related to math",
                    "French: native, English: B2, 800 TOEIC points (autonomous)",
                ],
            },
            {
                "title": "Activities",
                "items": [
                    "Passionate in IT and math",
                    "Programming since middle school",
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
                    "Oriented Object Programming",
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
                description: "Interpreted language made in C++ designed for algorithms / data structures",
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
        "print_pdf": "Version imprimable",
        "translate": "Traduire",
        "copied": "Copié !",
        "job": "Etudiant Ingénieur en Informatique",
        "background": "Parcours",
        "projects": "Projets",
        "skills": [
            {
                "title": "Expériences",
                "items": [
                    "Stage de deux mois à <a href=\"https://www.webdyn.com/en/\">Webdyn</a> en 2020. Webdyn est une entreprise multinationale spécialisée dans les compteurs connectés d'eau, d'électricité et de gaz. Le but était de créer une application mobile permettant la configuration des boîtiers WebdynEasy notamment lors de la pose du compteur par un technicien. Faite avec Flutter en Dart, elle permet de lire des QR Codes, de communiquer en Bluetooth Low Energy avec l'appareil et dispose d'un mode test simplifiant la procédure de certification. L'application est disponible sur le <a href=\"https://play.google.com/store/apps/details?id=com.webdyn.WebdynEasy\">Google Play Store</a>"
                ],
            },
            {
                "title": "Cursus",
                "items": [
                    "Actuellement en 2e année de classe préparatoire à <a href=\"https://www.epita.fr\">EPITA</a>",
                    "Baccalauréat S spé ISN mention bien (2019)",
                    "Semestre académique en Irlande à Griffith College en 2021",
                    "Participation à l’épreuve de maths du concours général des lycéens",
                    "Français : langue maternelle, Anglais : B2, 800 points TOEIC (autonome)",
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
                description: "Langage de programmation interprété, créé en C++ et fait pour les algorithmes et les structures de données. Possède une bibliothèque standard, un garbage collector et générateur de documentation",
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

const printData = {
    "fr": "https://github.com/Cc618/Celian/raw/main/src/res/print/C%C3%A9lian%20Raimbault_fr.pdf",
    "en": "https://github.com/Cc618/Celian/raw/main/src/res/print/Celian%20Raimbault_en.pdf",
};

let data = genData();

function changeLang() {
    lang = lang === "fr" ? "en" : "fr";
    data = genData();
}

function genData() {
    return { ...fullData[lang], ...sharedData };
}

export {changeLang};
export {data};
export {lang};
export {resources};
export {printData};
