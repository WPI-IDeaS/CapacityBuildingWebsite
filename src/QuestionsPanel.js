import React from 'react';
import {getResponse, updateResponse} from "./UserDataManager";

class QuestionsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.state.currentOpen = "";
    }

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
            <div className="question-card-wrapper" key={panelId + "_" + myId} style={{gridRowEnd: "span " + height, gridColumnEnd: "span " + (openRightNow? 2:1)}}>
                <div className="question-card" key={panelId + "_" + myId}>
                    <textarea defaultValue={initialResponse} placeholder="What do you think?" className="question-response" data-write-id={myId} data-panel-id={panelId} style={{color: "var(--pal-black)", display: openRightNow? "block":"none"}} />
                    {prompt}
                    <button onClick={openResponseBox.bind(this)}>EXPAND</button>
                </div>
            </div>
        );
    }

    updateAllResponses() {
        const inputBoxes = document.querySelectorAll(".question-response");
        for (const box of inputBoxes) {
            updateResponse(box.dataset.panelId, box.dataset.writeId, box.value);
        }
    }

    componentDidMount() {
        window.onbeforeunload = () => {
            this.updateAllResponses();
        }
    }

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
            <div className="question-grid" style={{gridTemplateRows: "repeat(" + Math.ceil(totalHeight / 2) + ", auto)"}}>
                {cards}
            </div>
        );
    }
}

export default QuestionsPanel;