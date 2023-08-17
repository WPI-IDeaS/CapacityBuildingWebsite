/**
 * Panel used in the content window for QTC (questions to consider) sections.
 */

import React from 'react';
import {getResponse, updateResponse} from "./UserDataManager";
import {HelpPopupButton} from "./DefinitionManager";

/**
 * Panel component.
 */
class QuestionsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.state.currentOpen = null;
    }

    /**
     *
     * @param prompt question card text.
     * @param height grid height to use for placement.
     * @param panelId id of the panel this card lives in.
     * @param myId id to use for logging this specific question (unique from others on this panel)
     */
    QuestionCard(prompt, height, panelId, myId) {
        const initialResponse = getResponse(panelId, myId);

        const openRightNow = this.state.currentOpen == myId;

        function openResponseBox(e) {
            if(openRightNow) {
                this.setState({currentOpen: null});
            }
            else {
                this.setState({currentOpen: myId});
            }
        }

        return (
            <div className={"question-card-wrapper " + (openRightNow? " response-opened":"")} key={panelId + "_" + myId} style={{gridRowEnd: "span " + height, gridColumnEnd: "span " + (openRightNow? 2:1)}}>
                <div className={"question-card" + ((!openRightNow && this.state.currentOpen != null)? " shorten":"")} key={panelId + "_" + myId}>
                    <textarea defaultValue={initialResponse} placeholder="What do you think?" className="question-response" data-write-id={myId} data-panel-id={panelId} style={{color: "var(--pal-black)", display: openRightNow? "block":"none"}} />
                    {prompt}
                    <svg onClick={openResponseBox.bind(this)} className="pen-button" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <title>Toggle response box</title>
                        <path d="M19.9653 12.9023C37.618 7.30053 39.0893 23.6703 41.7958 41.794C23.6721 39.0875 7.30263 37.6159 12.9044 19.9632L7.60861 14.6673L14.6694 7.60651L19.9653 12.9023Z" fill={"color-mix(in srgb, var(--pal-main) var(--pal-blend3), var(--pal-white))"}/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M43.6786 43.6779L41.8994 43.4122C41.039 43.2837 40.1799 43.1576 39.3247 43.0322C35.7037 42.5008 32.1541 41.98 28.8884 41.3308C24.8553 40.5289 21.1396 39.5109 18.1438 37.9685C15.1294 36.4166 12.7492 34.2831 11.5652 31.2226C10.4552 28.3533 10.4749 24.8699 11.6988 20.6416L6.02583 14.9687L14.9696 6.02487L20.6426 11.6978C24.8709 10.4739 28.3542 10.4543 31.2235 11.5643C34.284 12.7483 36.4174 15.1285 37.9694 18.143C39.5117 21.1388 40.5297 24.8545 41.3315 28.8877C41.9807 32.1531 42.5015 35.7025 43.0327 39.3233C43.1583 40.1787 43.2844 41.0381 43.4129 41.8987L43.6786 43.6779ZM30.2627 14.0478C27.9812 13.1652 24.9124 13.1259 20.6682 14.4727L19.8965 14.7176L14.9696 9.79079L9.79175 14.9686L14.7186 19.8955L14.4737 20.6672C13.1269 24.9114 13.1661 27.9803 14.0488 30.2618C14.9249 32.5266 16.7195 34.2401 19.3627 35.601C22.0245 36.9714 25.4493 37.932 29.4076 38.719C32.1945 39.273 35.1884 39.7309 38.3089 40.1912L28.5206 30.4029C27.6621 30.3632 26.5434 30.2699 25.479 30.0961C24.8273 29.9897 24.1619 29.8477 23.5755 29.6561C23.0314 29.4783 22.3786 29.2036 21.9131 28.7381C21.4167 28.2417 21.1891 27.5941 21.0743 27.0556C20.9547 26.495 20.9239 25.8916 20.9349 25.3288C20.9567 24.2023 21.1504 23.0472 21.3231 22.3134L21.5119 21.5112L22.3141 21.3224C23.0479 21.1497 24.203 20.956 25.3296 20.934C25.8924 20.9231 26.4958 20.9538 27.0564 21.0733C27.595 21.1881 28.2426 21.4157 28.739 21.9121C29.2046 22.3777 29.4793 23.0305 29.657 23.5746C29.8486 24.1609 29.9906 24.8263 30.0971 25.478C30.2709 26.5427 30.3642 27.6616 30.4039 28.5202L40.1919 38.3083C39.7316 35.1877 39.2737 32.1938 38.7197 29.4069C37.9328 25.4485 36.9722 22.0237 35.6018 19.3619C34.241 16.7186 32.5275 14.924 30.2627 14.0478ZM27.6813 27.6804C27.6342 27.1121 27.5651 26.4961 27.469 25.9072C27.3744 25.3281 27.259 24.8094 27.1258 24.4016C27.0595 24.1988 26.9953 24.0434 26.9377 23.9315C26.8971 23.8526 26.8688 23.8127 26.8582 23.7986C26.8415 23.7885 26.7468 23.7301 26.5012 23.6777C26.211 23.6158 25.8287 23.5877 25.3814 23.5964C24.8314 23.6072 24.2551 23.6716 23.7533 23.7526C23.6724 24.2543 23.6079 24.8306 23.5973 25.3805C23.5886 25.8278 23.6167 26.2101 23.6786 26.5002C23.731 26.7458 23.7895 26.8405 23.7996 26.8572C23.8136 26.8678 23.8535 26.8962 23.9324 26.9368C24.0444 26.9943 24.1997 27.0586 24.4025 27.1248C24.8103 27.2581 25.3291 27.3734 25.9082 27.468C26.497 27.5642 27.1131 27.6333 27.6813 27.6804Z" fill={"color-mix(in srgb, var(--pal-main) var(--pal-blend1), var(--pal-white))"}/>
                    </svg>
                </div>
            </div>
        );
    }

    /**
     * Log new responses to localStorage.
     */
    updateAllResponses() {
        const inputBoxes = document.querySelectorAll(".question-response");
        for (const box of inputBoxes) {
            updateResponse(box.dataset.panelId, box.dataset.writeId, box.value);
        }
    }

    // Make sure data is saved when the user leaves!
    componentDidMount() {
        window.onbeforeunload = () => {
            this.updateAllResponses();
        }
    }

    // Make sure data is saved when the user leaves! (for extra measure)
    componentWillUnmount() {
        window.onbeforeunload = undefined;
        this.updateAllResponses();
    }

    render() {
        const questionBoxes = this.props.questionBoxes;

        const cards = [];
        let totalHeight = 0;
        for (const questionBox of questionBoxes) {
            cards.push(this.QuestionCard(questionBox.text, questionBox.height, this.props.panelId, questionBox.id));
            totalHeight += questionBox.height;
        }

        return (
            <div className="questions-outer">
                <HelpPopupButton defId="help_qtc" helpContent={<span>Your answers to these questions will be consolidated into one location for you and formatted into Your Capacity Building Guide. This guide will let you see how you interpret capacity building in your own context and will be available for you at any time! To view Your Capacity Building Guide, click the clipboard in the expandable menu at the bottom of the screen.</span>} />
                <div className="question-grid definitions-bound" style={{gridTemplateRows: "repeat(" + Math.ceil(totalHeight / 2) + ", auto)"}}>
                    {cards}
                </div>
            </div>
        );
    }
}

export default QuestionsPanel;