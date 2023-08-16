
const palettes = {
    "green": {
        main: "green",
        accent: "blue",
        font: "cream",
        link: "yellow",
        iconFilter: "none"
    },
    "yellow": {
        main: "yellow",
        accent: "blue",
        font: "black",
        link: "violet",
        iconFilter: "brightness(0.00)"
    },
    "blue": {
        main: "blue",
        accent: "green",
        font: "cream",
        link: "red",
        iconFilter: "none"
    },
    "red": {
        main: "red",
        accent: "blue",
        font: "cream",
        link: "blue",
        iconFilter: "none"
    },
    "violet": {
        main: "violet",
        accent: "blue",
        font: "cream",
        link: "green",
        iconFilter: "none"
    },

    "lock": {
        main: "blue",
        accent: "violet",
        font: "black",
        link: "yellow",
        iconFilter: "brightness(0.00)"
    }
};

let currentPal;

let isLocked = false;

const root = document.querySelector(':root');

function generateColorStrings() {
    const rs = getComputedStyle(root);
    for (const [name, pal] of Object.entries(palettes)) {
        pal.string = (rs.getPropertyValue('--pal-' + name)).split('(').pop().split(')')[0];
    }
}

function initializeColors() {
    generateColorStrings();
    setPalette("green");
}

export function colorStringFor(thisColor) {
    switch(thisColor) {
        case "main":
            return colorStringFor(currentPal.main);
        case "accent":
            return colorStringFor(currentPal.accent);
        case "font":
            return colorStringFor(currentPal.font);
        case "link":
            return colorStringFor(currentPal.link);
        default:
            return palettes[thisColor].string;
    }
}

export function lockPalette() {
    setPalette("lock");

    isLocked = true;
}

export function unLockPalette() {
    isLocked = false;

    setPalette(currentPal["main"]);
}

export function setPalette(to) {
    const changeTo = palettes[to];

    if (!isLocked) {
        const rs = getComputedStyle(root);
        root.style.setProperty('--pal-main', rs.getPropertyValue('--pal-' + changeTo.main));
        root.style.setProperty('--pal-accent', rs.getPropertyValue('--pal-' + changeTo.accent));
        root.style.setProperty('--pal-font', rs.getPropertyValue('--pal-' + changeTo.font));
        root.style.setProperty('--pal-link', rs.getPropertyValue('--pal-' + changeTo.link));
        root.style.setProperty('--pal-icon-filter', changeTo.iconFilter);
    }

    if (to != "lock") {
        currentPal = palettes[to];
    }
}

export function getPalette(named=null) {
    if(named == null) {
        return currentPal;
    }

    return palettes[named];
}

initializeColors();