// Content data

let lang = "en";

// TODO : Projects button in content page ? Home button in footer ?

/* TODO
## Experiences
- Stage Webdyn : Decrire + link to app
- Projets Epita ?

## Cursus
- Actuellement 2e annee epita
- Diplomes
- Lycee
- Concours lyceen
- Epita
- Projets Epita ?

## Passions
- Prog depuis 5 ans
- IA
- Competitive programming
- Applis mobiles
- Lecture articles scientifique
- MAO
- Learning new skills

## TODO : Skills
+ Languages : French = mother tongue, English = Good command, C1
+ Team work (Epita projects)
+ Organization
+ Motivation
*/

// Shared data between all languages
const sharedData = {
    // Misc
    "url_github": "https://github.com/Cc618",
    "url_linkedin": "https://www.linkedin.com/in/c%C3%A9lian-raimbault-53269a1b2",
    // Home
    "mail": "celian.pro.78@gmail.com",
    "phone": "+33 (0)6 61 24 71 01",
    // Footer
    "copyright": "Célian Raimbault - 2021",
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
                    "A Level: Science",
                    "Attendee to the general high school contest related to math",
                    "Scientific high school, option IT",
                ],
            },
            {
                "title": "Activities",
                "items": [
                    "Passionate in IT and math",
                    "Programming since 5 years",
                    "Competitive programming (<a href=\"https://codingcompetitions.withgoogle.com/kickstart\">Google Kickstart</a>)",
                    "Artificial Intelligence",
                    "Mobile apps",
                    "English research papers reading",
                    "Electronic music",
                    "Travels (Ireland, Japan, France...)",
                    "Volunteering (sport and culinary events photography)",
                ],
            },
        ],
        // Projects
        // Footer
        "made_with": "Made with",
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
                    "Stage de deux mois à <a href=\"https://www.webdyn.com/en/\">Webdyn</a> en 2020. Le but a été de créer une application mobile permettant la configuration des boitiers WebdynEasy. Faite avec Flutter en Dart, l'application est disponible sur le <a href=\"https://play.google.com/store/apps/details?id=com.webdyn.WebdynEasy\">Google Play Store</a>"
                ],
            },
            {
                "title": "Cursus",
                "items": [
                    "Actuellement en 2e année de classe préparatoire à <a href=\"https://www.epita.fr\">EPITA</a>",
                    "Baccalauréat S mention bien",
                    "Diplôme National du Brevet",
                    "Participation à l’épreuve de maths du concours général des lycéens",
                    "Terminale S option SI spé ISN au lycée Charles de Gaulle à Poissy",
                ],
            },
            {
                "title": "Activités",
                "items": [
                    // TODO : Too much items : overflow (either rm items or 2 bars layout)
                    "Passion et pratique de l’informatique et des maths depuis 5 ans",
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
        // "icon_skills": {
        //     "title": "Compétences",
        //     "rows": [
        //         {
        //             "name": "Python",
        //             "icon": "python",
        //             "ratio": "10",
        //         }
        //     ],
        // },
        "made_with": "Fait avec",
    },
};

let data = genData();

function changeLang() {
    lang = lang === "fr" ? "en" : "fr";
    data = genData();
}

function genData() {
    return { ...fullData[lang], ...sharedData };
}

export default changeLang;
export {data};
export {lang};