import {lockPalette, unLockPalette} from "./ColorManager";


const BOOKMARKS_KEY = "bookmarks";
const ACCESSIBILITY_KEY = "accessibility";
const RESPONSES_BASE_KEY = "qtc_responses";

function correctBookmarkPath(path) {
    let temp = path;
    if (path.charAt(0) == '/') {
        temp = path.substring(1);
    }

    return temp.toLowerCase();
}

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

export function isBookmarked(path) {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    if (raw == null) return false;

    const currentBookmarks = JSON.parse(raw);
    if (currentBookmarks == null) return false;

    return currentBookmarks.includes(correctBookmarkPath(path));
}

export function getBookmarks() {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    if (raw == null) return [];

    const currentBookmarks = JSON.parse(raw);
    if (currentBookmarks == null) return [];

    return currentBookmarks;
}

export function clearBookmarks() {
    localStorage.setItem(BOOKMARKS_KEY, null);
}

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

export function setAccessibleStyles() {
    const acc = getAllAccessibility();
    const r = document.querySelector(':root');

    r.style.setProperty('--acc-bold-offset', acc["textBoldness"] * 100);

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

export function pageHasResponses(pageId) {
    return localStorage.getItem(RESPONSES_BASE_KEY + "_" + pageId) != null;
}

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

export function getResponse(pageId, questionId) {
    const thisKey = RESPONSES_BASE_KEY + "_" + pageId;

    const raw = localStorage.getItem(thisKey);
    if (raw == null) return "";

    const currentResponses = JSON.parse(raw);
    return currentResponses[questionId];
}