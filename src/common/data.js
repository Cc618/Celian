// Content data

let lang = "en";

const fullData = {
    "en": {
        // Home
        "translate_lang": "Version française",
        "mail": "celian.pro.78@gmail.com",
        "phone": "+33 (0)6 61 24 71 01",
        "job": "Software Developer",
        // TODO : Verify career
        "career": "Career",
        "projects": "Projects",
    },
    "fr": {
        // Home
        "translate_lang": "English version",
        "mail": "celian.pro.78@gmail.com",
        "phone": "+33 (0)6 61 24 71 01",
        "job": "Développeur logiciel",
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