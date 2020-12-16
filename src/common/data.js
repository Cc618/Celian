// Content data

let lang = "en";

const fullData = {
    "en": {
        "hello": "Hello",
    },
    "fr": {
        "hello": "Bonjour",
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