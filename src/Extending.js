import React, {useState, useEffect} from 'react';
import {sn, sn_topic} from "./SiteNode";
import {addDefs, makeDef} from "./DefinitionManager";
import {MentorTalk} from "./MentorFace";
import QuestionsPanel from "./QuestionsPanel";

function Extending() {
    addDefs(
        {
            "PRESCRIPTIVE": <span><MentorTalk />This is a sample definition. This is a sample definition. This is a sample definition. This is a sample definition. This is a sample definition. This is a sample definition.</span>,
            "NORMS": <span>Short explanation</span>,
            "NEW_DEF": <span>This is another definition!!!</span>,
            "NEW": <span><MentorTalk />Hi Kimberly!!!</span>,
            "LONG": <span><MentorTalk />This is a sample definition. This is a sample definition. This is a sample definition. This is a sample definition. This is a sample definition. This is a sample definition. This is a sample definition. This is a definition. This is a sample definition. This is a. This is a sample. This is a sample definition. This is a sample definition. This is a sample definition. This is a sample. This is definition. This is a sample. This is a definition.</span>,
        }
    );

    return (
        [
            "Extending",
            <div>
                When you are {makeDef("building", "NEW")} capacity within people for an organization, you need to create the space for capacity to look many different ways, to be greater as a whole than in individuals, and to be fully inclusive and participatory. This is {makeDef("especially", "NEW_DEF")} the case if you are grappling with entrenched {makeDef("issues", "LONG")} in education (e.g., improving instruction, systemic change) and seeking novel solutions: there has to be enough space and play within your design to allow for unanticipated emergent findings and for people in the {makeDef("process", "PRESCRIPTIVE")} to make their own meaning.
            </div>,
            <div>
                About 2
            </div>
        ]
    );
}

function Questions() {
    return (
        <QuestionsPanel panelId="extending" questionBoxes={[
            {id: "test1", height: 1, text: "Question???"},
            {id: "test2", height: 1, text: "MORE question??????"},
            {id: "test66", height: 1, text: "MORE question??????"},
            {id: "test3", height: 3, text:
                    <div>
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                        <div>
                            4
                        </div>
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                        <div>
                            4
                        </div>
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                        <div>
                            4
                        </div>
                    </div>
            }
        ]} />
    );
}

Extending.makeDirectory = function() {
    return sn_topic("Extending", Extending, "violet", "Extending Capacity Building", [
        sn("Sustaining Capacity", "-link-", [
            sn("What Mattered to Us", "-link-"),
            sn("Tradeoffs and Tensions", "-link-")
        ]),
        sn("Questions to Consider", Questions)
    ]);
}

export default Extending;