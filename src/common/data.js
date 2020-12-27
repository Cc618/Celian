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
        "copied": "Copied !",
        "mail": "celian.pro.78@gmail.com",
        "phone": "+33 (0)6 61 24 71 01",
        "job": "Software Developer",
        "background": "Background",
        "projects": "Projects",
        // Skills
        // TODO : Update and translate to french
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