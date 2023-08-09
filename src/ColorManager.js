
const palettes = {
    "green": {
        main: "green",
        accent: "blue",
        font: "cream",
        iconFilter: "none"
    },
    "yellow": {
        main: "yellow",
        accent: "blue",
        font: "black",
        iconFilter: "brightness(0.00)"
    },
    "blue": {
        main: "blue",
        accent: "green",
        font: "cream",
        iconFilter: "none"
    },
    "red": {
        main: "red",
        accent: "blue",
        font: "cream",
        iconFilter: "none"
    },
    "violet": {
        main: "violet",
        accent: "blue",
        font: "cream",
        iconFilter: "none"
    }
};

let currentPal;

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
        default:
            return palettes[thisColor].string;
    }
}

export function setPalette(to) {
    currentPal = palettes[to];

    const rs = getComputedStyle(root);
    root.style.setProperty('--pal-main', rs.getPropertyValue('--pal-' + currentPal.main));
    root.style.setProperty('--pal-accent', rs.getPropertyValue('--pal-' + currentPal.accent));
    root.style.setProperty('--pal-font', rs.getPropertyValue('--pal-' + currentPal.font));
    root.style.setProperty('--pal-icon-filter', currentPal.iconFilter);
}

export function getPalette(named=null) {
    if(named == null) {
        return currentPal;
    }

    return palettes[named];
}

initializeColors();