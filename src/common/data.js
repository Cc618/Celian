// Content data

import res_dart from '../res/flutter.png';
import res_c from '../res/c.png';
import res_cpp from '../res/cpp.png';
import res_html from '../res/html5.png';
import res_python from '../res/python.png';
import res_julia from '../res/julia.png';
import res_quick_shop from '../res/quick_shop.jpg';
import res_os2020 from '../res/os2020.gif';
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
};

// Language specific data
const fullData = {
    "en": {
        // Home
        "translate_lang": "Version française",
        "translate": "Translate",
        "copied": "Copied !",
        "job": "Software Developer",
        "background": "Background",
        "projects": "Projects",
        // Skills
        "skills": [
            {
                "title": "Experiences",
                "items": [
                    "Two months internship at <a href=\"https://www.webdyn.com/en/\">Webdyn</a> in 2020. The goal was to create a mobile application to configure WebdynEasy hardware. Made with Flutter in Dart, this application is available on the <a href=\"https://play.google.com/store/apps/details?id=com.webdyn.WebdynEasy\">Google Play Store</a>"
                ],
            },
            {
                "title": "Education",
                "items": [
                    "Actually in second year after graduation at <a href=\"https://www.epita.fr\">EPITA</a>",
                    "A Level: Science, IT option",
                    "Attendee to the general high school contest related to math",
                    "French: native, English: B2 (autonomous)",
                ],
            },
            {
                "title": "Activities",
                "items": [
                    "Passionate in IT and math",
                    "Programming since middle school",
                    "Competitive programming (<a href=\"https://codingcompetitions.withgoogle.com/kickstart\">Google Kickstart</a>)",
                    "Artificial Intelligence",
                    "Mobile apps",
                    "English research papers reading",
                    "Electronic music",
                    "Travels (Ireland, Japan, France...)",
                    "Volunteering (sport / culinary events photography)",
                ],
            },
        ],
        "icon_skills": {
            "title": "Skills",
            "oop": "OOP",
            "func_prog": "Functional Programming",
            "data_struct": "Data Structures",
            "proj_manag": "Project Management",
        },
        // Projects
        "github_page": "GitHub page",
        "projects_data": [
            {
                title: "Alpha",
                tags: ["Julia", "Programming Language"],
                icon: "julia",
                image: "alpha",
                description: "Compiled programming language made entirely in Julia. Contains also a Lexer and Parser generator like Flex and Bison and a Vim plugin.",
                link: "https://github.com/Cc618/Alpha"
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
        "translate": "Traduire",
        "copied": "Copié !",

        "job": "Développeur Logiciel",
        "background": "Parcours",
        "projects": "Projets",
        "skills": [
            {
                "title": "Expériences",
                "items": [
                    "Stage de deux mois à <a href=\"https://www.webdyn.com/en/\">Webdyn</a> en 2020. Le but a été de créer une application mobile permettant la configuration des boîtiers WebdynEasy. Faite avec Flutter en Dart, l'application est disponible sur le <a href=\"https://play.google.com/store/apps/details?id=com.webdyn.WebdynEasy\">Google Play Store</a>"
                ],
            },
            {
                "title": "Cursus",
                "items": [
                    "Actuellement en 2e année de classe préparatoire à <a href=\"https://www.epita.fr\">EPITA</a>",
                    "Baccalauréat S spé ISN mention bien (2019)",
                    "Participation à l’épreuve de maths du concours général des lycéens",
                    "Français : langue maternelle, Anglais : B2 (autonome)",
                ],
            },
            {
                "title": "Activités",
                "items": [
                    "Passion et pratique de l’informatique et des maths depuis le collège",
                    "Compétitions de programmation (<a href=\"https://codingcompetitions.withgoogle.com/kickstart\">Google Kickstart</a>)",
                    "Création d’intelligences artificielles",
                    "Conception d’applications mobiles",
                    "Lecture d’articles scientifiques en anglais",
                    "Création de musique électronique",
                    "Voyages (Irlande, Japon, France...)",
                    "Bénévolat (couverture photo sportives et du chef patissier François Faidy)",
                ],
            },
        ],
        "icon_skills": {
            "title": "Compétences",
            "oop": "POO",
            "func_prog": "Programmation Fonctionelle",
            "data_struct": "Structures de Données",
            "proj_manag": "Gestion de Projets",
        },
        // Projects
        "github_page": "Page GitHub",
        "projects_data": [
            {
                title: "Alpha",
                tags: ["Julia", "Langage de Programmation"],
                icon: "julia",
                image: "alpha",
                description: "Langage de programmation compilé créé entièrement en Julia. Possède un générateur de Parser et Lexer similaire à Flex et Bison ainsi qu'un plugin Vim.",
                link: "https://github.com/Cc618/Alpha"
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
        },
    },
};

// Get resource from id
const resources = {
    "dart": res_dart,
    "c": res_c,
    "cpp": res_cpp,
    "html": res_html,
    "python": res_python,
    "julia": res_julia,
    "quick_shop": res_quick_shop,
    "os2020": res_os2020,
    "alpha": res_alpha,
    "feature_changer": res_feature_changer,
    "pytorch_collections": res_pytorch_collections,
    "google_play_badge": res_google_play_badge,
    "resume": res_resume,
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