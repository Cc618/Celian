// Content data

let lang = "fr";

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

// TODO : Shared section to avoid duplicates
const fullData = {
    "en": {
        // Misc
        "url_github": "https://github.com/Cc618",
        "url_linkedin": "https://www.linkedin.com/in/c%C3%A9lian-raimbault-53269a1b2",
        // Home
        "translate_lang": "Version française",
        "translate": "Translate",
        "copied": "Copied !",
        "mail": "celian.pro.78@gmail.com",
        "phone": "+33 (0)6 61 24 71 01",
        "job": "Software Developer",
        "background": "Background",
        "projects": "Projects",
        // Skills
        // TODO : Update
        "skills": [
            {
                "title": "Experiences",
                "items": [
                    "Two months internship at <a href=\"https://www.webdyn.com/en/\">Webdyn</a> in 2020. The goal was to create a mobile application to configure WebdynEasy hardware. Made with Flutter in Dart, this application is available on the <a href=\"https://play.google.com/store/apps/details?id=com.webdyn.WebdynEasy\">Google Play Store</a>"
                ],
            },
            {
                // TODO : Verify studies
                "title": "Studies",
                "items": [
                    "Actually in second year after graduation at <a href=\"https://www.epita.fr\">EPITA</a>",
                    // TODO : Translate
                    "Baccalauréat S",
                    "Diplôme National du Brevet",
                    // TODO : Verify
                    "Participated at the general high school french contest in math section",
                    "Scientific high school, IT speciality",
                    "IT and math passion",
                    "Programming since 5 years",
                ],
            },
            {
                "title": "Activities",
                "items": [
                    "Competitive programming (<a href=\"https://codingcompetitions.withgoogle.com/kickstart\">Google Kickstart</a>)",
                    "Artificial intelligence",
                    "Mobile apps",
                    "English research papers reading",
                    "Electronic music",
                    "Travels (Ireland, Japan, France...)",
                    "Volunteering (sport and culinary events photography)",
                ],
            },
        ]
    },
    "fr": {
        // Misc
        "url_github": "https://github.com/Cc618",
        "url_linkedin": "https://www.linkedin.com/in/c%C3%A9lian-raimbault-53269a1b2",
        // Home
        "translate_lang": "English version",
        "translate": "Traduire",
        "copied": "Copié !",
        "mail": "celian.pro.78@gmail.com",
        "phone": "+33 (0)6 61 24 71 01",
        "job": "Développeur Logiciel",
        "background": "Parcours",
        "projects": "Projets",
        // TODO : Update
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
                    "Passion de l’informatique et des maths",
                    "Programmation depuis 5 ans",
                ],
            },
            {
                "title": "Activités",
                "items": [
                    "Compétitions de programmation (<a href=\"https://codingcompetitions.withgoogle.com/kickstart\">Google Kickstart</a>)",
                    "Création d’intelligences artificielles",
                    "Conception d’applications mobiles",
                    "Lecture d’articles scientifiques en anglais",
                    "Création de musique électronique",
                    "Voyages (Irlande, Japon, France...)",
                    "Bénévolat (couverture photo sportives et du chef patissier François Faidy)",
                ],
            },
        ]
    },
};

let data = fullData[lang];

function changeLang() {
    console.log("CHANGED");

    lang = lang === "fr" ? "en" : "fr";
    data = fullData[lang];
}

export default changeLang;
export {data};
export {lang};