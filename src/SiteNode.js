/**
 * Functions for creating and using "site nodes" representing pages and subdirectories.
 */

import QuestionsPanel from "./QuestionsPanel";
import React from 'react';
import {addQuestionsData} from "./QuestionsManager";

// Make a usable directory link from the sidenav title of a node
function makeLink(t) {
    const newLink = t.toLowerCase().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()"']/g, "").trim().replace(/\s+/g, '-');
    return newLink;
}

/**
 * Site directory object, which can be a "dead end" page or one that has children
 */
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

// See the broad topic pages (About.js, Principles.js, Planning.js...) for usage of the below in creating a directory

// Regular site node for normal content pages
export function sn(label, contentFn, childObjs=null, link=null) {
    return new sdObject(label, contentFn, childObjs, link);
}

// Site node for QTC (questions to consider) pages
export function sn_qtc(title, pageId, questionContent, childObjs=null, link=null) {
    addQuestionsData(title, pageId, questionContent);

    function contentFn() {
        return (
            <QuestionsPanel title={title} panelId={pageId} questionBoxes={questionContent} />
        );
    }

    return new sdObject("Questions to Consider", contentFn, childObjs, link);
}

// Site node for broad topic pages (which set a new theme color and top right title)
export function sn_topic(label, contentFn, color=null, bigTitle, childObjs=null, link=null) {
    return new sdObject(label, contentFn, childObjs, link, color, bigTitle);
}