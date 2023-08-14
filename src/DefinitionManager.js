import React, {useEffect} from 'react';

import "./DefinitionManager.css";

const defMap = {};

function defBubble(tag) {
    return (
        <span className='definition' onBlur={defUnFocus} tabIndex="-1">
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
    console.log(e.target)
    if (e.target.tagName == "A") {
        defUnFocus(document.querySelector(".definition_hovered"));
        return;
    }

    const bub = e.target.parentElement.children[1];
    bub.className = 'definition-hovered';

    const bubBox = bub.children[1];
    const bubBlurb = bubBox.children[0];

    const tail = bub.children[0];

    const textOffsets = e.target.getBoundingClientRect();
    const textHeight = textOffsets.bottom - textOffsets.top;
    const textWidth = textOffsets.right - textOffsets.left;

    const myOffsets = bubBlurb.getBoundingClientRect();
    const myHeight = myOffsets.bottom - myOffsets.top;
    const myWidth = myOffsets.right - myOffsets.left;

    const buffer = 30;

    const card = document.querySelector(".content-card");
    const cardOffsets = card.getBoundingClientRect();
    if ((textOffsets.top - myHeight - buffer) < (cardOffsets.top - 15)) {
        bubBox.style.top = (textHeight + buffer) + 'px';
        tail.style.top = textHeight;
        tail.style.transform = "none";
    }
    else {
        bubBox.style.top = (-myHeight - buffer) + 'px';
        tail.style.top = -40;
        tail.style.transform = "rotate(180deg)";
    }

    tail.style.left = -(textWidth/2) - 20;

    const maxLeft = (cardOffsets.right + 15) - myWidth - textOffsets.right;
    const minLeft = (cardOffsets.left - 15) - textOffsets.right;
    bubBox.style.left = Math.min(Math.max((-(textWidth/2) - (myWidth/2)), minLeft), maxLeft) + 'px';
}

function defUnFocus(e) {
    if (e.relatedTarget != null && (e.relatedTarget.matches(".definition-hovered") || e.relatedTarget.matches(".definition-hovered *"))) return;
    const toSetBack = e.target.parentElement.querySelector(".definition-hovered");
    if (toSetBack != null) {
        toSetBack.className = "definition";
    }
}

export function MakeDef(text, tag) {
    return (
        <span>
            <span className='definable' onFocus={defFocus} onBlur={defUnFocus} tabIndex="-1">
                {text}
            </span>
            {defBubble(tag)}
        </span>
    );
}

export function Def(props) {
    return MakeDef(props.children, props.tag);
}

export function addDefs(entries) {
    for (const [key, value] of Object.entries(entries)) {
        defMap[key] = value;
    }
}