/**
 * In-between for localStorage; also applies personalization settings.
 */

import {lockPalette, unLockPalette} from "./ColorManager";


// localStorage keys
const BOOKMARKS_KEY = "bookmarks";
const ACCESSIBILITY_KEY = "accessibility";
const RESPONSES_BASE_KEY = "qtc_responses";

// trims and reformats a path to a standard form for saving as a bookmark.
function correctBookmarkPath(path) {
    let temp = path;
    if (path.charAt(0) == '/') {
        temp = path.substring(1);
    }

    return temp.toLowerCase();
}

/**
 * Add a new bookmark.
 * @param toMark path to mark.
 */
export function addBookmark(toMark) {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    let currentBookmarks = raw == null? [] : JSON.parse(raw);
    if (currentBookmarks == null) {
        currentBookmarks = [];
    }

    const corrected = correctBookmarkPath(toMark);

    if (!currentBookmarks.includes(corrected)) {
        currentBookmarks.push(corrected);
    }

    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(currentBookmarks));
}

/**
 * Remove a bookmark.
 * @param toUnMark path to unmark.
 */
export function removeBookmark(toUnMark) {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    if (raw == null) return;

    const corrected = correctBookmarkPath(toUnMark);

    const currentBookmarks = JSON.parse(raw);
    if (currentBookmarks == null) return;

    const toSpliceAt = currentBookmarks.indexOf(corrected)
    if (toSpliceAt > -1) {
        currentBookmarks.splice(toSpliceAt, 1);
    }

    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(currentBookmarks));
}

/**
 * Is this path bookmarked?
 * @param path to check
 * @returns {boolean|*} whether it's already marked.
 */
export function isBookmarked(path) {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    if (raw == null) return false;

    const currentBookmarks = JSON.parse(raw);
    if (currentBookmarks == null) return false;

    return currentBookmarks.includes(correctBookmarkPath(path));
}

/**
 * Get a full list of bookmarked paths.
 * @returns {*[]|any} the list of paths.
 */
export function getBookmarks() {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    if (raw == null) return [];

    const currentBookmarks = JSON.parse(raw);
    if (currentBookmarks == null) return [];

    return currentBookmarks;
}

/**
 * Delete all stored bookmarks.
 */
export function clearBookmarks() {
    localStorage.setItem(BOOKMARKS_KEY, null);
}

/**
 * Get an object with default accessibility settings.
 */
function initializeAccessibility() {
    return {
        "dyslexic": false,
        "animations": true,
        "highContrast": false,
        "colorLock": false,
        "bionic": false,
        "textSize": 0,
        "textBoldness": 0
    };
}

/**
 * Apply accessibility settings from localStorage to the current session.
 */
export function setAccessibleStyles() {
    const acc = getAllAccessibility();
    const r = document.querySelector(':root');

    r.style.setProperty('--acc-bold-offset', acc["textBoldness"] * 100);
    r.style.setProperty('--acc-size-offset', acc["textSize"] + "pt");

    const accSheetAnim = document.getElementById("accessible-styling-animations").sheet;
    accSheetAnim.disabled = acc["animations"];

    const dysSheetAnim = document.getElementById("accessible-styling-dyslexia").sheet;
    dysSheetAnim.disabled = !acc["dyslexic"];

    const dysSheetCont = document.getElementById("accessible-styling-contrast").sheet;
    dysSheetCont.disabled = !acc["highContrast"];

    if(acc["colorLock"]) {
        lockPalette();
    }
    else {
        unLockPalette();
    }
}

/**
 * Get an object containing all current accessibility preference values.
 */
export function getAllAccessibility() {
    const raw = localStorage.getItem(ACCESSIBILITY_KEY);
    let acc;
    if (raw == null) {
        acc = initializeAccessibility();
        localStorage.setItem(ACCESSIBILITY_KEY, JSON.stringify(acc));
    }
    else {
        acc = JSON.parse(raw);
    }

    return acc;
}

/**
 * Get the current value of a setting.
 * @param setting the key for the setting.
 * @returns {*} the setting's value.
 */
export function getAccessibilitySetting(setting) {
    const raw = localStorage.getItem(ACCESSIBILITY_KEY);
    let acc;
    if (raw == null) {
        acc = initializeAccessibility();
        localStorage.setItem(ACCESSIBILITY_KEY, JSON.stringify(acc));
    }
    else {
        acc = JSON.parse(raw);
    }

    return acc[setting];
}

/**
 * Set a setting's value.
 * @param setting the setting's key.
 * @param newVal the new value.
 */
export function setAccessibilitySetting(setting, newVal) {
    const raw = localStorage.getItem(ACCESSIBILITY_KEY);
    let acc;
    if (raw == null) {
        acc = initializeAccessibility();
    }
    else {
        acc = JSON.parse(raw);
    }

    acc[setting] = newVal;
    localStorage.setItem(ACCESSIBILITY_KEY, JSON.stringify(acc));
}

/**
 * Does this page have answers to any questions?
 * @param pageId the ID of the page to query.
 * @returns {boolean} whether anything on the page has a response.
 */
export function pageHasResponses(pageId) {
    return localStorage.getItem(RESPONSES_BASE_KEY + "_" + pageId) != null;
}

/**
 * Update the response to a question card.
 * @param pageId ID of the page the question card is on.
 * @param questionId ID of the card itself.
 * @param newContent the new response.
 */
export function updateResponse(pageId, questionId, newContent) {
    const thisKey = RESPONSES_BASE_KEY + "_" + pageId;

    const raw = localStorage.getItem(thisKey);
    const currentResponses = raw == null? {} : JSON.parse(raw);

    if (newContent.length > 0) {
        currentResponses[questionId] = newContent;
    }
    else {
        delete currentResponses[questionId];
        //console.log("removed " + questionId + ". " + Object.keys(currentResponses).length + " LEFT")
        if(Object.keys(currentResponses).length <= 0) {
            localStorage.removeItem(thisKey);
            return;
        }
    }

    localStorage.setItem(thisKey, JSON.stringify(currentResponses));
}

/**
 * Get the response to a specific question card.
 * @param pageId ID of the page the question card is on.
 * @param questionId ID of the card itself.
 * @returns {string|*} the response text.
 */
export function getResponse(pageId, questionId) {
    const thisKey = RESPONSES_BASE_KEY + "_" + pageId;

    const raw = localStorage.getItem(thisKey);
    if (raw == null) return "";

    const currentResponses = JSON.parse(raw);
    return currentResponses[questionId];
}