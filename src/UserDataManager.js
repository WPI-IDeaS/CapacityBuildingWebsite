

const BOOKMARKS_KEY = "bookmarks";
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

export function updateResponse(pageId, questionId, newContent) {
    const thisKey = RESPONSES_BASE_KEY + "_" + pageId;

    const raw = localStorage.getItem(thisKey);
    const currentResponses = raw == null? {} : JSON.parse(raw);

    if (newContent.length > 0) {
        currentResponses[questionId] = newContent;
    }
    else {
        delete currentResponses[questionId];
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