// Content data

let lang = "en";

const fullData = {
    "en": {
        "mail": "celian.pro.78@gmail.com",
        "phone": "+33 (0)6 61 24 71 01",
        "job": "Software Developer",
    },
    "fr": {
        "mail": "celian.pro.78@gmail.com",
        "phone": "+33 (0)6 61 24 71 01",
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