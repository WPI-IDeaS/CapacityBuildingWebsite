import React, {useEffect, useState} from 'react';
import './Sketch3.css';
import {Link} from "react-router-dom";

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
            <div className="content-card">
                <div className="content-card-header">
                    {globalTitle}
                </div>
                {cards}
                <div className="content-card-footer">
                    {
                        currentCard > 0?
                            <button href="" onClick={cardBwd}>
                                {"<"}
                            </button>
                            :
                            ""
                    }
                    &nbsp;
                    {currentCard+1}/{totalCards}
                    &nbsp;
                    {
                        currentCard < totalCards-1?
                            <button onClick={cardFwd}>
                                >
                            </button>
                            :
                            ""
                    }
                    {
                        previousStack != null || nextStack != null?
                            <br/>
                            :
                            ""
                    }
                    {
                        previousStack != null?
                            <Link to={previousStack} onClick={() => setCurrentCard(startingCard)}>
                                <button>&lt;&lt; Previous Section</button>
                            </Link>
                            :
                            ""
                    }
                    {
                        nextStack != null?
                            <Link to={nextStack} onClick={() => setCurrentCard(startingCard)}>
                                <button>Next Section >></button>
                            </Link>
                            :
                            ""
                    }
                </div>
            </div>
        );
    }

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
