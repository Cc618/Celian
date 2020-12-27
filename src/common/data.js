// Content data

let lang = "en";

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

## Passions
- Prog depuis 5 ans
- IA
- Competitive programming
- Applis mobiles
- Lecture articles scientifique
- MAO
- Learning new skills

## Skills
+ Languages : French = mother tongue, English = Good command, C1
+ Team work (Epita projects)
+ Organization
+ Motivation


## Experiences
TODO : Links (webdyn, app)
- Stage de deux mois à Webdyn en 2020. Le but à été de créer une application mobile permettant la configuration des boitiers WebdynEasy. Faite avec Flutter en Dart, l'application est disponible sur le Google Play Store

## Cursus
TODO : Links (EPITA)
- Actuellement en 2e année de classe préparatoire à EPITA
- Baccalauréat S mention bien
- Diplôme National du Brevet
- Participation à l’épreuve de maths du concours général des lycéens
- Terminale S option SI spé ISN au lycée Charles de Gaulle à Poissy
- Passion de l’informatique et des maths
- Programmation depuis 5 ans

## Activites
- Compétitions de programmation (Google Kickstart)
- Création d’intelligences artificielles
- Conception d’applications mobiles
- Participation à des Capture The Flag (Root-Me)
- Lecture d’articles scientifiques en anglais
- Création de musique électronique
- Voyages (Irlande, Japon, France...)
- Bénévolat (couverture photo sportives et du chef patissier François Faidy)
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
                "title": "Title 1",
                "items": [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Fusce id velit ut tortor pretium viverra suspendisse.",
                    "Pellentesque habitant morbi tristique senectus et.",
                    "Netus et malesuada fames ac turpis egestas maecenas pharetra.",
                    "Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit."
                ],
            },
            {
                "title": "Title 2",
                "items": [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Fusce id velit ut tortor pretium viverra suspendisse.",
                    "Pellentesque habitant morbi tristique senectus et.",
                    "Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit."
                ],
            },
            {
                "title": "Title 3",
                "items": [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Fusce id velit ut tortor pretium viverra suspendisse.",
                    "Pellentesque habitant morbi tristique senectus et.",
                    "Netus et malesuada fames ac turpis egestas maecenas pharetra.",
                    "Fusce id velit ut tortor pretium viverra suspendisse.",
                    "Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit."
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
                "title": "Title 1",
                "items": [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Fusce id velit ut tortor pretium viverra suspendisse.",
                    "Pellentesque habitant morbi tristique senectus et.",
                    "Netus et malesuada fames ac turpis egestas maecenas pharetra.",
                    "Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit."
                ],
            },
            {
                "title": "Title 2",
                "items": [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Fusce id velit ut tortor pretium viverra suspendisse.",
                    "Pellentesque habitant morbi tristique senectus et.",
                    "Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit."
                ],
            },
            {
                "title": "Title 3",
                "items": [
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    "Fusce id velit ut tortor pretium viverra suspendisse.",
                    "Pellentesque habitant morbi tristique senectus et.",
                    "Netus et malesuada fames ac turpis egestas maecenas pharetra.",
                    "Fusce id velit ut tortor pretium viverra suspendisse.",
                    "Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit."
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