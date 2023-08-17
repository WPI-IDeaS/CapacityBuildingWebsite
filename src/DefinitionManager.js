/**
 * Manager for floating informational popup elements (such as term clarifications on content pages)
 */

import React from 'react';

import "./DefinitionManager.css";
import {MentorAnswer, MentorThink} from "./MentorFace";

// Maps short string tags to long JSX definitions
const defMap = {};

/**
 * Make a definition speech bubble from the (already logged) definition matching this tag
 * @param tag
 * @returns JSX for a bubble.
 */
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

/**
 * Handle focus shifting to a definable or definition (opening it/keeping it open)
 * @param e event.
 */
function defFocus(e) {
    //console.log(e.target)
    if(!e.target.classList.contains("def-bubble") && !e.target.classList.contains("definable")){
        return;
    }



    const bub = e.target.parentElement.children[0];
    bub.classList.add('definition-hovered');

    const bubBox = bub.children[1];
    const bubBlurb = bubBox.children[0];

    const tail = bub.children[0];

    // Below here we do some math to keep bubbles within the active content area
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

    const maxLeft = (cardOffsets.right + 10) - myWidth - defActualOffsets.left;
    const minLeft = (cardOffsets.left - 10) - defActualOffsets.left;
    bubBox.style.left = Math.min(Math.max(10 - (myWidth/2), minLeft), maxLeft) + 'px';
}

/**
 * Handle loss of focus from a definition.
 * @param e event.
 */
function defUnFocus(e) {
    if (e.relatedTarget != null && (e.relatedTarget.matches(".definition-hovered") || e.relatedTarget.matches(".definition-hovered *"))) return;
    const toSetBack = e.target.parentElement.querySelector(".definition-hovered");
    if (toSetBack != null) {
        toSetBack.classList.remove('definition-hovered');
    }
}

/**
 * Generate JSX for a definition.
 * @param text clickable text for toggling the definition
 * @param tag tag of the definition to use.
 * @returns {JSX.Element} def text span with attached bubble.
 */
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

/**
 * Span containing a highlighted interactable that toggles a clarification popup.
 *
 * @param props children, the content to define, and tag, the tag for the desired definition text.
 */
export function Def(props) {
    return MakeDef(props.children, props.tag);
}

/**
 * Add one or more new definition JSXs.
 * @param entries object containing k/v pairs to add to or replace in the map (a string tag / a JSX def).
 */
export function addDefs(entries) {
    for (const [key, value] of Object.entries(entries)) {
        defMap[key.toUpperCase()] = value;
    }
}

/**
 * Shorthand element for creating help buttons that use definition-style popups.
 *
 * @param defId tag to register the new definition under.
 * @param helpContent
 */
export function HelpPopupButton({defId, helpContent}) {
    addDefs({[defId]: helpContent});
    //console.log(defMap);

    return (
        <div className="help-definition" title="Help">
            <Def tag={defId}>
                <MentorThink/>
                <MentorAnswer/>
            </Def>
        </div>
    );
}