/**
 * Color palette management system. Manipulates CSS variables.
 */

// Palettes recognized by name; "lock" is special and used for accessibility
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

/**
 * Do color initialization here. For now, only the default green palette is set.
 */
function initializeColors() {
    setPalette("green");
}

/**
 * Set the palette to "lock"; can only be undone from the accessibility window.
 * The previous palette is still remembered.
 */
export function lockPalette() {
    setPalette("lock");

    isLocked = true;
}

/**
 * Unlock the palette and change it to what it otherwise would have been.
 */
export function unLockPalette() {
    isLocked = false;

    setPalette(currentPal["main"]);
}

/**
 * Change the app's palette to the one with the given name.
 * If currently locked, the new palette will be remembered but not yet applied.
 *
 * @param to the palette map key to get a palette from.
 */
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

/**
 * Get a palette by name (or otherwise, whichever is/would be applied by the current page)
 * @param named the palette name to poll.
 * @returns {*} the palette with the given name (or the current remembered one, if inapplicable)
 */
export function getPalette(named=null) {
    if(named == null) {
        return currentPal;
    }

    return palettes[named];
}

initializeColors();