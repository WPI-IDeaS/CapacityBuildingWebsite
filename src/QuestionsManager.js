/**
 * Used to track questions pages discovered during initial directory traversal, for use ordering/styling My CB
 */

const myCbOrdered = [];
let qColor = "green";

export function addQuestionsData(title, pageId, qBoxes) {
    myCbOrdered.push(
        {
            title: title,
            pageId: pageId,
            questionBoxes: qBoxes.map((q) => {return {id: q.id, text: q.text}}),
            color: qColor
        }
    );
}

/**
 * Set the worksheet color to use for all questions logged until this function is called again.
 *
 * @param color the palette color to use on My CB.
 * @returns {*} the input color
 */
export function setQuestionsColor(color) {
    qColor = color;
    return color;
}

/**
 * Get the tracked question data (in order of question discovery).
 * @returns {*[]} the data.
 */
export function getQuestionsData() {
    return myCbOrdered;
}