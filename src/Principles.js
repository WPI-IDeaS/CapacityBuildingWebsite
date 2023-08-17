/**
 * Principles section content generation functions.
 *
 * See Directory.js and Master.js for how these are used.
 */

import React from 'react';
import {sn, sn_topic} from "./SiteNode";
import {setQuestionsColor} from "./QuestionsManager";
import {addDefs, Def} from "./DefinitionManager";
import {MentorTalk} from "./MentorFace";
import {Link} from "react-router-dom";

function Principles() {
    return (
        [
            "Guiding Principles of Capacity Building",
            <div>
                <div>This is the Guiding Principles section! Use the left-hand sidebar or the links below to explore the
                    following sections:</div>
                <ul>
                    <li><Link to="/principles/humility" style={{color: "var(--pal-main)"}}>Humility</Link></li>
                    <li><Link to="/principles/center-the-people" style={{color: "var(--pal-main)"}}>Center the People</Link></li>
                    <li><Link to="/principles/focus-on-design-not-outcomes" style={{color: "var(--pal-main)"}}>Focus on Design, Not Outcomes</Link></li>
                    <li><Link to="/principles/trust-the-team" style={{color: "var(--pal-main)"}}>Trust the Team</Link></li>
                </ul>
            </div>
        ]
    );
}

function Humility() {
    return (
        [
            "Humility",
            <div>
                <div><b>Hold a position of humility.</b> This comes from accepting and genuinely believing that you do not know
                    the right way to get from here to there, that there is immeasurable value in what each person is
                    able to bring, and that what can be collectively created at any given time is better than you could
                    do on your own.</div>

                <div>Establish a commitment to learn together and decenter your expertise, your plan, your way of doing
                    things. Make what you bring to the table one of many options.</div>

                <div>There is work to be done that only this group of people can do and it can only be done together.
                    Enter a space of wonder and curiosity to find that work.</div>
            </div>
        ]
    );
}

function Center() {
    addDefs(
        {
            "ZPD": <span><MentorTalk/>For more information, check out <Link target="_blank" rel="noopener noreferrer" to="https://www.simplypsychology.org/zone-of-proximal-development.html">this breakdown of ZPD</Link>.</span>,}
    );

    return (
        [
            "Center the People",
            <div>
                <div><b>Center the project around the people in it.</b> This means:</div>

                <ol>
                    <li>appreciating each team member's strengths</li>
                    <li>recognizing their <Def tag="ZPD">zone of proximal development</Def> or area for growth is unique to them</li>
                    <li>giving them resources and time without contingency</li>
                    <li>allowing them to create their own authentic vision and direction for their collaboration in this
                        work
                    </li>
                </ol>

                <div>This requires flexibility and humanity as people will enter and exit in ways that prioritize their
                    whole selves. When you center the people, you are centering their need to enter and exit, rather
                    than centering the needs for staffing a particular initiative, program, or project.</div>

            </div>
        ]
    );
}

function Design() {
    return (
        [
            "Focus on Design, Not Outcomes",
            <div>
                <div><b>Design for good processes and trust the products will emerge.</b> Instead of hyper-focusing on the
                    products and outputs of capacity building work, invest in processes that allow people to interact in
                    ways that are meaningful to them. Let them participate in sharing the responsibility of moving the
                    project forward.</div>

                <div>Invest in processes that:</div>
                <ol>
                    <li>allow people freedom and experimentation</li>
                    <li>support relationship building</li>
                    <li>give time for sharing, integration, and reflection</li>
                </ol>

                <div>These kinds of processes are supportive of high functioning teams and create self-sustaining
                    relationships which carry the work forward beyond a specific project period.</div>

            </div>
        ]
    );
}

function Trust() {
    return (
        [
            "Trust the Team",
            <div>
                <div><b>Trust your team to do the work that needs to be done.</b></div>

                <div>Trust must be generously given and intentionally built. It must be sustained through relationship,
                    repeated interaction, shared vulnerability, and honesty.</div>

                <div>Trust is reflected in all the other guiding principles and should be modeled repeatedly by the
                    project leads in the ways they:</div>

                <ol>
                    <li>communicate expectations</li>
                    <li>cede power and share project ownership</li>
                    <li>respond to challenges and emergent issues</li>
                    <li>model humility in the learning process</li>
                </ol>
            </div>
        ]
    );
}

Principles.makeDirectory = function() {
    return sn_topic("Principles", Principles, setQuestionsColor("green"), "The Guiding Principles", [
        sn("Humility", Humility),
        sn("Center the People", Center),
        sn("Focus on Design, Not Outcomes", Design),
        sn("Trust the Team", Trust)
    ]);
}

export default Principles;