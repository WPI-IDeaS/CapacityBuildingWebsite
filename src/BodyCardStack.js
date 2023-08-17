/**
 * Content card deck for main content pages.
 */

import React, {useEffect, useState} from 'react';
import './Sketch3.css';
import {Link} from "react-router-dom";

/**
 * Large body section deck with cards that are paged through one by one.
 *
 * @param globalTitle
 * @param cardContents an array of JSX objects to display (1 per card).
 * @param startingCard initial card index.
 * @param previousStack path to previous "topic" stack.
 * @param nextStack path to next "topic" stack.
 */
function BodyCardStack(globalTitle, cardContents, startingCard=0, previousStack=null, nextStack=null) {

    const [currentCard, setCurrentCard] = useState(startingCard); // In case card switching is in use
    const totalCards = cardContents.length;

    function cardBody(content, cardNumber) {
        return (
            // Add any per-card adjustments within this div!
            <div className="content-card-body" key={cardNumber} style={{display: cardNumber == currentCard? "initial":"none"}}>
                {content}
            </div>
        );
    }

    function cardBezel(cards) {
        function cardFwd(e) {
            e.preventDefault();
            setCurrentCard(currentCard+1);
        }

        function cardBwd(e) {
            e.preventDefault();
            setCurrentCard(currentCard-1);
        }

        return (
            // Use this div to wrap things around the entire card stack
            <div className="content-card definitions-bound">
                <div className="content-card-header">
                    {globalTitle}
                </div>
                {cards}
                <div className="content-card-footer">
                    <div style={{display: "flex", flex: 1, justifyContent: "start"}}>
                        {
                            previousStack != null?
                                <Link to={previousStack} onClick={() => setCurrentCard(startingCard)}>
                                    <button>&lt;&lt; Previous Topic</button>
                                </Link>
                                :
                                ""
                        }
                    </div>
                    <div style={{display: "flex", flex: 1, justifyContent: "center"}}>
                        <button onClick={cardBwd} style={{visibility: (currentCard > 0)? "visible":"hidden"}}>
                            {"<"}
                        </button>
                        &nbsp;
                        {currentCard+1}/{totalCards}
                        &nbsp;
                        <button onClick={cardFwd} style={{visibility: (currentCard < (totalCards-1))? "visible":"hidden"}}>
                            >
                        </button>
                    </div>
                    <div style={{display: "flex", flex: 1, justifyContent: "end"}}>
                        {
                            nextStack != null?
                                <Link to={nextStack} onClick={() => setCurrentCard(startingCard)}>
                                    <button>Next Topic >></button>
                                </Link>
                                :
                                ""
                        }
                    </div>
                </div>
            </div>
        );
    }

    // Ensure we return to the initial card on page change
    useEffect(() => {
        setCurrentCard(startingCard);
    }, [globalTitle, startingCard]);

    const cardJSX = [];
    for(const i in cardContents) {
        cardJSX.push(
            cardBody(cardContents[i], i)
        );
    }

    return (cardBezel(cardJSX));
}

export default BodyCardStack;
