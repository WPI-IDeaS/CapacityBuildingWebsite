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

export function setQuestionsColor(color) {
    qColor = color;
    return color;
}

export function getQuestionsData() {
    return myCbOrdered;
}