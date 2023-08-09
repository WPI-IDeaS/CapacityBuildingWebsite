
function makeLink(t) {
    const newLink = t.toLowerCase().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()"']/g, "").trim().replace(/\s+/g, '-');
    return newLink;
}

class sdObject {
    constructor(label, contentFn, childObjs=null, link=null, color=null, bigTitle=null) {
        this.label = label;
        this.contentFn = contentFn;
        this.children = childObjs;
        this.color = color;
        this.bigTitle = bigTitle;

        this.link = (link === null? makeLink(label) : link);
    }
}

export function sn(label, contentFn, childObjs=null, link=null) {
    return new sdObject(label, contentFn, childObjs, link);
}

export function sn_topic(label, contentFn, color=null, bigTitle, childObjs=null, link=null) {
    return new sdObject(label, contentFn, childObjs, link, color, bigTitle);
}