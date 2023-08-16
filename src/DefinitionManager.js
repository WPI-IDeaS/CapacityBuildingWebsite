import React from 'react';

import "./DefinitionManager.css";
import {MentorAnswer, MentorThink} from "./MentorFace";

const defMap = {};

function defBubble(tag) {
    return (
        <span className='definition def-bubble' onBlur={defUnFocus} tabIndex="-1">
            <svg height="40px" width="40px" className='def-styled'>
                <polygon points="0,40 20,0 40,40"/>
            </svg>
            <span className='def-box'>
                <div className='def-blurb'>
                    {defMap[tag.toUpperCase()]}
                </div>
            </span>
        </span>
    );
}

function defFocus(e) {
    //console.log(e.target)
    if(!e.target.classList.contains("def-bubble") && !e.target.classList.contains("definable")){
        return;
    }

    /*if (e.target.tagName == "A") {
        defUnFocus(document.querySelector(".definition_hovered"));
        return;
    }*/

    const bub = e.target.parentElement.children[0];
    bub.classList.add('definition-hovered');

    const bubBox = bub.children[1];
    const bubBlurb = bubBox.children[0];

    const tail = bub.children[0];

    const defActualOffsets = bub.getBoundingClientRect();

    const textOffsets = e.target.getBoundingClientRect();
    const textHeight = textOffsets.bottom - textOffsets.top;

    const myOffsets = bubBlurb.getBoundingClientRect();
    const myHeight = myOffsets.bottom - myOffsets.top;
    const myWidth = myOffsets.right - myOffsets.left;

    const buffer = 30;

    const card = document.querySelector(".definitions-bound");
    const cardOffsets = card.getBoundingClientRect();
    if ((textOffsets.top - myHeight - buffer) < (cardOffsets.top - 15)) {
        bubBox.style.top = (textHeight + buffer) + 'px';
        tail.style.top = textHeight;
        tail.style.transform = null;
    }
    else {
        bubBox.style.top = (-myHeight - buffer) + 'px';
        tail.style.top = -40;
        tail.style.transform = "rotate(180deg)";
    }

    tail.style.left = 10;

    const maxLeft = (cardOffsets.right + 15) - myWidth - defActualOffsets.left;
    const minLeft = (cardOffsets.left - 15) - defActualOffsets.left;
    bubBox.style.left = Math.min(Math.max(10 - (myWidth/2), minLeft), maxLeft) + 'px';
}

function defUnFocus(e) {
    if (e.relatedTarget != null && (e.relatedTarget.matches(".definition-hovered") || e.relatedTarget.matches(".definition-hovered *"))) return;
    const toSetBack = e.target.parentElement.querySelector(".definition-hovered");
    if (toSetBack != null) {
        toSetBack.classList.remove('definition-hovered');
    }
}

export function MakeDef(text, tag) {
    return (
        <span>
            {defBubble(tag)}
            <span className='definable' onFocus={defFocus} onBlur={defUnFocus} tabIndex="-1">
                {text}
            </span>
        </span>
    );
}

export function Def(props) {
    return MakeDef(props.children, props.tag);
}

export function addDefs(entries) {
    for (const [key, value] of Object.entries(entries)) {
        defMap[key.toUpperCase()] = value;
    }
}

export function HelpPopupButton({defId, helpContent}) {
    addDefs({[defId]: helpContent});
    //console.log(defMap);

    return (
        <div className="help-definition" title="Help">
            <Def tag={defId}>
                <MentorThink/>
            </Def>
        </div>
    );
}