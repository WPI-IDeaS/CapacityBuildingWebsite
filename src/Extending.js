/**
 * Extending section content generation functions.
 *
 * See Directory.js and Master.js for how these are used.
 */

import React from 'react';
import {sn, sn_qtc, sn_topic} from "./SiteNode";
import {setQuestionsColor} from "./QuestionsManager";
import {Link} from "react-router-dom";

function Extending() {
    return (
        [
            "Extending Capacity Building",
            <div>
                <div>This is the Extending section! Use the left-hand sidebar or the link below to explore the
                    following section:
                </div>
                <ul>
                    <li><Link to="/extending/sustaining-capacity" style={{color: "var(--pal-main)"}}>Sustaining Capacity</Link></li>
                </ul>
            </div>
        ]
    );
}

function Sustaining() {
    return (
        [
            "Sustaining Capacity",
            <div>
                <div>When we talk about sustaining initiatives, we tend to center the programming, curriculum, activities.
                    But capacity is not about initiatives - it’s about people. To sustain capacity we need to foreground
                    how we support people and their individual capacities and contributions to the group beyond a
                    specific capacity building initiative.</div>

                <div>So what does foregrounding people look like when we talk about sustaining capacity? First remember
                    that the team does not need to be a static entity - individuals may not be able to begin at the same
                    time due to personal or professional commitments and similarly, may need to leave the team before
                    the planned initiative ends. Offer multiple on-ramps - opportunities for people to choose to join a
                    particular activity when they are ready to do so. Better to let them join when they can rather than
                    exclude them altogether. Similarly, team members may need to bow out completely or temporarily.
                    Again, respecting the needs of the individuals should take precedence. In fact, the capacity gains
                    of the individual may assist them in the</div>
            </div>,
            <div>
                <div>next step in their career! This should be seen as a win by the group, even if it means the loss of a
                    valued team member. And remember, they may end up being great collaborators in the future.</div>

                <div>The flexible design of a capacity-building initiative can also have the advantage of sparking
                    curiosity and increasing recognition of opportunities for learning among the participants such that
                    they continue to learn outside the bounds of the initiative. Similarly, as awareness grows around
                    your capacity building target, it becomes easier for the team to recognize, identify and learn from
                    other sources - to see what was once invisible or overlooked about your central theme.</div>

                <div>Another mechanism to sustaining capacity is to make sure that credit is generously distributed to the
                    team. As deliverables emerge from the work, don’t subsume the credit to the group -</div>
            </div>,
            <div>
                identify the individuals participating, call out exemplary contributions, praise where and when praise is deserved.  Public recognition and praise is one of the cheapest and frequently most effective tools we have for letting our team know their value.
            </div>
        ]
    );
}

function WhatMattered() {
    return (
        [
            "What Mattered for Us",
            <div>
                <div>Our capacity building initiative was intended to be a two year commitment, the period of the grant we
                    obtained to support our work. A lot can happen in two years and in fact, in our team, two of our
                    members changed jobs - one working in a completely different capacity for a non-profit, another
                    straddled two positions for the final year of the grant. In each case, we worked with the
                    individuals to maintain their support for the work that they had committed to (and that they were
                    wanting to complete). This was not always easy, but we recognized the value that each of these
                    members brought, and the effort to keep them engaged was deemed well worth the time required to work
                    through the bureaucratic paperwork. These felt like integral members of our group - a sense built
                    through our work together. Each of these team members assisted the group in building capacity, and
                    they will take their expanded capacity into their new roles - contributing to their value in their
                    new organizations.</div>

                <div>Other members saw their work ramp up as the second year of the award came to a close.</div>
            </div>,
            <div>
                <div>While we had some remaining funds and decided to ask for a no-cost extension to complete some work
                    that the pandemic interrupted, these members were unable to commit time to a third year. Their need
                    to focus on other work was respected, though we mourned their absence. They had completed the work
                    they had originally committed to doing and we did not want or need to guilt them into committing
                    more time.</div>

                <div>Each of these situations contributed to maintaining respectful and friendly relationships - and a
                    willingness to collaborate again.</div>
            </div>
        ]
    );
}

function Tradeoffs() {
    return (
        [
            "Tensions and Tradeoffs",
            <div>
                It is challenging when team members come and go while your initiative is ongoing.  There is a desire to demand participation, to resent absences.  And certainly, your work is benefitted by the contributions of the full team.  However, trusting the team, once they’ve engaged and committed, is more likely to end up with higher quality work and a sense of commitment from the team.  You want them to want to be there.  When they feel appreciated and a valued member of the team, they are more likely to make up work missed, contribute more to sessions they do attend, and generally bring their A game.
            </div>
        ]
    );
}

function Questions() {
    return [
        {id: "trust", height: 1, text:
                <div>
                    <b>Trust the Team</b>
                    <ol>
                        <li>Have we provided ways for team members to contribute when they are able?</li>
                    </ol>
                </div>
        },
        {id: "center", height: 2, text:
            <div>
                <b>Center the People</b>
                <ol><li>Have we made it clear that participants are valued for the time that they CAN contribute?</li>
                    <li>Have we built an environment in the group that allows participants a level of comfort in coming
                        and
                        going from the group, knowing that they are welcome when this work fits their lives?</li></ol>
            </div>
        },
        {id: "humility", height: 2, text:
                <div>
                    <b>Humility</b>
                    <ol><li>Have we acknowledged appropriately the contributions of individual team members?</li>
                        <li>Have we centered the team members, rather than ourselves (the initiative leads), in
                            communications
                            about progress, deliverables, outcomes?</li></ol>
                </div>
        }
    ];
}

Extending.makeDirectory = function() {
    return sn_topic("Extending", Extending, setQuestionsColor("violet"), "Extending Capacity Building", [
        sn("Sustaining Capacity", Sustaining, [
            sn("What Mattered to Us", WhatMattered),
            sn("Tradeoffs and Tensions", Tradeoffs)
        ]),
        sn_qtc("Sustaining Your Capacity", "extending", Questions())
    ]);
}

export default Extending;