// Content data

let lang = "en";

const fullData = {
    "en": {
        "job": "Software Developer",
    },
    "fr": {
        "job": "Développeur logiciel",
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