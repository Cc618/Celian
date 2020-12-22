// Content data

let lang = "en";

// TODO : Shared section to avoid duplicates
const fullData = {
    "en": {
        // Misc
        "url_github": "https://github.com/Cc618",
        "url_linkedin": "https://www.linkedin.com/in/c%C3%A9lian-raimbault-53269a1b2",
        // Home
        "translate_lang": "Version française",
        "translate": "Translate",
        "mail": "celian.pro.78@gmail.com",
        "phone": "+33 (0)6 61 24 71 01",
        "job": "Software Developer",
        // TODO : Verify career
        "career": "Career",
        "projects": "Projects",
    },
    "fr": {
        // Misc
        "url_github": "https://github.com/Cc618",
        "url_linkedin": "https://www.linkedin.com/in/c%C3%A9lian-raimbault-53269a1b2",
        // Home
        "translate_lang": "English version",
        "translate": "Traduire",
        "mail": "celian.pro.78@gmail.com",
        "phone": "+33 (0)6 61 24 71 01",
        "job": "Développeur Logiciel",
        "career": "Parcours",
        "projects": "Projets",
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