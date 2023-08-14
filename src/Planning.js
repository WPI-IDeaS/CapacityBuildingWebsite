import React, {useState, useEffect} from 'react';
import {sn, sn_qtc, sn_topic} from "./SiteNode";
import {setQuestionsColor} from "./QuestionsManager";
import {addDefs, Def} from "./DefinitionManager";
import {MentorAttention, MentorNeutral, MentorSad, MentorTalk} from "./MentorFace";
import {Link} from "react-router-dom";

import StaffingChoice from "./images/diagrams/staffing_choice.png";

function Planning() {
    return (
        [
            "Planning",
            <div>
                About
            </div>,
            <div>
                About 2
            </div>
        ]
    );
}

function VsStaffing() {
    addDefs(
        {
            "LGCMDL": <span><MentorTalk/>To learn more about logic models, watch <Link rel="noopener noreferrer" target={"_blank"} to="https://www.youtube.com/watch?v=zxkWpBqNFp4">this video</Link>.</span>,
            "NORMS": <span><MentorTalk/>To learn more about how cultural norms influence our behaviors, watch <Link rel="noopener noreferrer" target={"_blank"} to="https://www.youtube.com/watch?v=Kf6__OKrOSk">this video</Link>.</span>
        }
    );

    return (
        [
            "Choosing Capacity Building Over Staffing a Change Project",
            <div>
                Most folks think about capacity building as vertical growth, stacking skills and increasing existing skills to fit known needs. We emphasize horizontal growth that allows for new directions that might be exploratory and acquiring novice level learning in addition to mastery.
            </div>,
            <div>
                <img src={StaffingChoice} alt="Cylinders representing unidirectional and multidimensional CB." style={{float: "left"}}/>
                <div>This drawing is a metaphor of the choice we are presented with as leaders of capacity building change
                    efforts. Often we are asked to bring together a group of people to build capacity for a systemic
                    change effort at our institutions or organizations. As a leader, we often feel a need to clearly
                    define the scope of the work, to preemptively articulate <Def tag="LGCMDL">a logic model</Def> or sequential stepwise
                    process, to answer the questions presented, to assign roles, to manage the people in the process, to
                    define short-term and long-term outcomes, and so on. These instincts are reasonable because they
                    reflect <Def tag="NORMS">strong, often unquestioned cultural norms</Def>. Such approaches often present themselves as
                    “good” project management or “effective”</div>
            </div>,
            <div>
                <img src={StaffingChoice} alt="Cylinders representing unidirectional and multidimensional CB." style={{float: "left"}}/>
                <div>leadership, but there are tensions and tradeoffs that can be intentionally and proactively
                    considered.
                    While each of these existing tools can be leveraged to good end at particular times, they also
                    constrain
                    possibilities that can undermine long term capacity building.
                </div>
            </div>,
            <div>Our goal is to support practitioners in understanding when and why to use common project management
                methods to staff a change effort and when to use the other tools we present here. This understanding can
                allow us to maximize our choices. Sometimes what we really want to do is to create a more spacious
                container and achieve other goals of capacity building that include, but also go beyond task completion.
                This section tackles this initial decision in capacity building efforts.</div>
        ]
    );
}

function Normative() {
    addDefs(
        {
            "CBA": <span><MentorNeutral/>Prescriptive policies and practices focus on providing the exact rules and procedures that should be
                    followed to remain in compliance. Alternatives may instead focus on understanding the actual reality
                    and consequences (intended and unintended) of policies and practices.</span>
        }
    );

    return (
        [
            <div>Beliefs (Conscious and Unconscious) that <Def tag="CBA">Uphold Prescriptive, Control-Based Approaches</Def></div>,
            <div>
                <ul>
                    <li>I am going to build the capacity of others to see things the way I do or to achieve this
                        predetermined outcome I have identified.
                    </li><br/>

                    <li>Outcomes need to be predetermined and managed to achieve them. I need to start with the end
                        product
                        and get everyone focused on that (i.e., the next proposal, the strategic plan, the reorganized
                        department); they need the end product in mind and this work is not valuable if we do not get to
                        the
                        “end.”
                    </li><br/>

                    <li>Achieving that end is more important than examining our assumptions, more important than
                        learning
                        about ourselves and our work, more important than allowing people to contribute to a shared
                        vision.
                        We’re being paid to achieve this objective.
                    </li><br/>
                </ul>
            </div>,
            <div>
                <ul>
                    <li>There is too much risk in allowing people choice and voice in processes; they want direction and
                        need
                        limited options.
                    </li><br/>

                    <li>How it feels and is facilitated doesn’t matter or is auxiliary; let's just get the work done.
                    </li><br/>

                    <li>It is more time efficient and is good project management to be more structured and directive and
                        hold
                        people accountable.
                    </li><br/>
                </ul>
            </div>
        ]
    );
}

function Container() {
    return (
        [
            "Design Elements of a Spacious Container for Capacity Building",
            <div>
                <ul>
                    <li>Expand the container by allowing sufficient time and space for exploration, self direction,
                        connection, and multiple points of entry and exits. A predetermined outcomes-based plan and
                        constant
                        directive management of how things get done limits emergent processes, shared ownership,
                        authentic
                        individual vision, and creativity.
                    </li><br/>

                    <li>Emphasize horizontal connections and development: peer to peer sharing, distributed leadership,
                        learning at the surface and margins rather than deep expertise. Hierarchical leadership and
                        control
                        constrains trust, communicates lower expectations, and does not allow for meaningful distributed
                        leadership.
                    </li>
                </ul>
            </div>,
            <div>
                <ul>
                    <li>Provide balance between flexibility and structuring meaning. People need to understand the
                        ‘game’ to
                        be able to come into play so there has to be structure, clear goals, and intentional design;
                        there
                        also has to be warmth, shared vulnerability, room for shared ownership and visioning, space to
                        disengage and re-engage, flexibility, and so on. People need to feel invited into the work and
                        have
                        enough structure to make meaning and feel like a contributing member. And they need to feel like
                        they can authentically connect the work to their context, that they have choices and are
                        uniquely
                        valued for what they bring to the table. This may sound impossible, but balance can exist!
                    </li>
                </ul>
            </div>
        ]
    );
}

function VsStaffingTradeoffs() {
    return (
        [
            "Tradeoffs and Tensions",
            <div>
                <ul>
                    <li>Hierarchical leadership and control constrain trust, communicates lower expectations, and does
                        not
                        allow for meaningful distributed leadership.
                    </li><br/>

                    <li>A predetermined outcomes-based plan limits emergent processes, shared ownership, authentic
                        individual
                        vision, and creativity. Capacity building is often such a predetermined process that important
                        design elements that are necessary for revealing potential critical outcomes are not cultivated:
                        the
                        pleasure and value of collaboration, generating shared ownership, building relationships,
                        fostering
                        creativity, and sustaining capacity. These are the same things that will allow for a group of
                        people
                        to work together over time to solve multiple issues or champion large scale changes. It is just
                        as
                        important to design for these longer term, developmental and humanistic outcomes as it is to
                        achieve
                        initial goals.
                    </li>
                </ul>

            </div>
        ]
    );
}

function TipStructure() {
    addDefs(
        {
            "INQ": <span><MentorTalk/>To learn more about appreciative inquiry, check out <Link rel="noopener noreferrer" target={"_blank"} to="https://organizingengagement.org/models/appreciative-inquiry/#:~:text=Appreciative%20Inquiry%20is%20commonly%20called,deficit%2Dbased%E2%80%9D%20approach)">this site.</Link></span>
        }
    );

    return (
        [
            "Tip: How Much Structure?",
            <div>So how much structure and direction is enough? It depends on what you are trying to do at any given
                moment in the project. At the beginning it is important to set the map– outline the bigger project
                purpose, show major activities, chunk out time, and describe the main formats where people are expected
                to interact— like in a <Link to="/doing/building-shared-knowledge/communities-of-practice" style={{color: "var(--pal-red)"}}>community of practice structure</Link>. Throughout the structure, you can be more
                directive if you are trying to set the next meeting’s agenda or need someone to take on a role, or need
                people to report out their learning and progress in a particular format. Use directive methods for tight
                task oriented deliverables that have deadlines that might not otherwise be met. Use spacious,
                participatory methods for humanistic deliverables, for <Def tag="INQ">appreciative inquiry</Def>, co-learning, idea
                generation, experimentation, or iterative resource development.</div>
        ]
    );
}

function VsStaffingWhatMattered() {
    return (
        [
            "What Mattered for Us",
            <div>
                <div>The internal team at WPI began with determining whether we were interested in capacity building or in
                    accomplishing a set of predetermined tasks. We implicitly started from a place of genuine inquiry –
                    what is possible if we learned together? We didn’t want to grow as a Center alone. We wanted to
                    build a community around this work to advance project-based learning. We recognized we needed time
                    to explore how we each got to this place in the field of higher education and what theory and
                    scholarship exists around organizational and systemic change. However, these were not tightly
                    articulated objectives - they were slightly amorphous directions we thought we might want to
                    take.</div>

                <div>We are all adults who are interested in this work, who have different experiences, and work in
                    different contexts. Not one of us “knew” how to do systemic or institutional change. Each of us had
                    been part of organizations and reform efforts and experienced change, even if we had not</div>
            </div>,
            <div>
                formally studied this topic. We did not want to feel like there was one way to get anywhere. We did not want to be micromanaged. We wanted to explore the territory with a bit of a map and be able to connect and learn together in our shared inquiry. This made the choice between capacity building and staffing a change effort easy and instinctual for us.
            </div>
        ]
    );
}

function TensionsResistance() {
    addDefs({
        "GANTT": <span><MentorNeutral/>To learn about GANTT charts, watch <Link rel="noopener noreferrer" target={"_blank"} to="https://www.youtube.com/watch?v=zwseLrxkKKE">this video</Link>.</span>,

        "SMART": <span><MentorNeutral/>To learn about SMART goals, watch <Link rel="noopener noreferrer" target={"_blank"} to="https://www.youtube.com/watch?v=1-SvuFIQjK8">this video</Link>.</span>,

        "CHGTHR": <span><MentorNeutral/>To learn about theories of change, watch <Link rel="noopener noreferrer" target={"_blank"} to="https://www.youtube.com/watch?v=cg4J1g0IVHg">this video</Link>.</span>,

        "LSHR": <span><MentorSad/>Labor sharing is when a group divides up a large project into smaller tasks to more efficiently
                    accomplish one pre-specified goal. This assumes that everyone in the group is unified behind that
                    goal and will benefit from it. This arrangement also usually involves a hierarchy of decision making
                    and social or political power so that the person assigned each task is not always the person who
                    wants or is best suited to that task. There is good research suggesting, for example, that women are
                    often disproportionately assigned tasks related to logistics rather than technical or creative
                    tasks, regardless of team members' relative expertise.</span>,

        "SHORT": <span><MentorSad/>Or, at least, we are expected to talk about solving complex systemic issues in short project
                    timelines, such as in grants that last one year, a few years, maybe - if you're lucky - five years.
                    The emphasis is on project management and efficiency to maximize outputs and deliverables during
                    that short time, which can be out of alignment with a realistic sense of the contribution a single
                    project makes towards much bigger issues. Doubling down on control rather than designing for
                    exploration and innovation is the cultural norm.</span>
    })
    
    return (
        [
            "Tensions: The Resistance",
            <div>
                <div>In Western, academic, capitalist, white culture, there is a level of comfort with hierarchical
                    leadership, with directive process, with <Def tag="GANTT">GANTT charts</Def>, <Def tag="SMART">SMART goals</Def>, logic models, <Def tag="CHGTHR">theories
                        of
                        change</Def>, and tight project management around clear objectives and known outcomes. We associate these
                    things with credibility. They give us legitimacy when we use them. We expect people in leadership
                    roles to lay out the plan and direction and to hold us accountable for the work. <Def tag="LSHR">There is also a
                        cultural norm around using groups and collaboration for labor sharing rather than collective
                        exploration, power sharing, and co-creation.</Def> There is a cultural norm around assuming we can solve
                    complex systemic issues <Def tag="SHORT">in really short time frames</Def>. These beliefs and practices are pervasive even
                    though much of the system is steeped in cultural norms and mental models we are not even entirely
                    aware of, making them difficult to include in this type of approach to project management.</div>

                <div>So naturally, there is resistance to things like capacity building that is ambiguous,</div>

            </div>,
            <div>
                developmental, and process-oriented. You will receive push back as a facilitator in sharing ownership and in asking people to return to a space of exploration and learning. Your credibility will questioned. Rely on the power of relationships to share ownership and the emergent goals and outcomes will be worth the work.
            </div>
        ]
    );
}

function TipOwnership() {
    addDefs({
        "PREFS": <span><MentorAttention/>If you didn't already know, people have different preferences and leadership styles related to how we
                    engage each other and make sense of the world around us. The DISC model, for example, describes four
                    styles: dominance, influence, steadiness, and compliance. Depending on your team members' styles,
                    there might be some clashes if these styles remain unspoken and subconscious. Making everyone's
                    preferences explicit and sharing them might not make everyone always get along, but it can go a long
                    way towards helping each person get what they need.</span>
    });

    return (
        [
            "Tip: Sharing Ownership",
            <div>
                <div><i>Rethinking Leadership.</i> If you wrote the grant or are the chair of the committee or otherwise find
                    yourself designated as the lead of a systemic change effort, resist the opportunity to take complete
                    ownership of the effort, of answering the question, of solving the problem. Instead of thinking,
                    “Okay, I have to figure out how we scale project-based learning at community colleges” and taking
                    ownership of the project, reframe the objective to “Could we explore how each of us can meaningfully
                    participate in a shared inquiry around this topic?” or “What does this mean to each of you and where
                    is the work most engaging for you?” Systemic change efforts are characteristically not able to be
                    designed or solved by one person – it is not your job so don’t try to take on that responsibility.
                    It is a subtle shift and largely unconscious, but it really matters.</div>

                <div>If you decide it is your job to answer this question, you are not allowing for there to be shared
                    ownership and a lot of ‘answers’ to the question. This doesn’t mean you do not hold a larger</div>
            </div>,
            <div>
                <div>vision for this work or that you do not provide structure. It means you set the tone from the
                    beginning that this is collectively owned and its success is predicated on co-creation and
                    collaboration.</div>

                <div><i>Facilitating Shared Ownership.</i> Facilitating shared ownership can involve multiple approaches. You
                    might start with incorporating input on collaboration structure and strategies. How might you build
                    in sufficient time and meeting space for meaningful participation? How might you meet each person’s
                    preferences for communicating, for organizing information, for making decisions? How can you ensure
                    each person shares power? For example, this might involve inviting people to rotate facilitation and
                    to take on specific micro deliverables or projects within the larger project.</div>
            </div>,
            <div>
                <div><i>Managing Accountability.</i> Being intentional about how you work with accountability in the group can go
                    a long way in setting and reinforcing how capacity building is different from staffing tasks. Set a
                    norm of sharing emergent learning rather than sharing expertise. Cede the stage to the person who
                    was in charge of the deliverable to present it back to the group. Shift the accountability structure
                    from you as the ‘lead’ to the group as a collective.</div>

                <div><i>Encouraging Engagement.</i> Capacity building always relies on individuals’ engagement in change. Create
                    spaces that are central to the project that allow for a lot of autonomy and customization based on
                    your team member’s interests and goals. Individual growth and process has to be valued alongside and
                    as much as group process or project outcomes. This takes a lot of responsibility off of you to
                    create that value for everyone. People can be trusted to connect the work and make meaning based on
                    their interests but they need genuine</div>
            </div>,
            <div>opportunities to do so. Creating opportunities for their interests to contribute valued aspects of the
                larger work is something that can be intentionally designed and supported. As a leader, it is just as
                important for a person on your team to learn something that is thematically related and perhaps
                tangential to the project but really supports them in something they had to do on their camps. You
                cannot foresee the outcomes for team members when they are able to shape their own path in the work and
                the outcomes that are important to them may not be what is important to you or to the project. They do
                build long term capacity indirectly by helping the team member stay involved in the work and find value
                in it.</div>
        ]
    );
}

function VsStaffingQuestions() {
    return [
        {id: "humility", height: 1, text:
                <div>
                    <b>Humility</b>
                    <ol><li>How will we distribute leadership tasks?</li>
                        <li>How will we recognize and build on the assets of the team?</li></ol>
                </div>
        },
        {id: "center", height: 1, text:
                <div>
                    <b>Center the People</b>
                    <ol><li>Did we define the area of capacity building broadly enough to allow a range of individuals to see the value in participating and to identify an area of growth for themselves?</li>
                        <li>Recognizing that different members of the team will have different levels of preparation and different areas of interest in this work, how will we allow for each member to grow to advance our thinking?</li>
                        <li>How do we provide enough flexibility in our process to accommodate the different
                            needs/passions/career paths of the team members?</li>
                        <li>Are we asking for an appropriate level of work from the individual members?</li>
                    </ol>
                </div>
        },
        {id: "design", height: 1, text:
                <div>
                    <b>Focus on Design</b>
                    <ol>
                        <li>How will we recognize the need to shift goals as the team learns?</li>
                    </ol>
                </div>
        },
        {id: "trust", height: 3, text:
                <div>
                    <b>Trust the Team</b>
                    <ol>
                        <li>How will we collaboratively make decisions?</li>
                        <li>How can we engage each member in ways that feel significant to that member?</li>
                    </ol>
                </div>
        }
    ];
}

function Budgeting() {
    return (
        [
            "Allocating Resources and Budgeting",
            <div>
                How do we decide where to use our time, attention, and budget? We can think about budgets as the resources needed to accomplish particular tasks. Or we can think about them in terms of investing in people, being flexible as people’s capacity changes, and honoring that labor should not be coerced or presumed. This section talks about how to make this shift.
            </div>
        ]
    );
}

function TipSources() {
    return (
        [
            "Tip: Sources of Resources",
            <div>
                <div><i>Internal funding.</i> There are many forms that internal funding to support capacity building might take.
                    If you work at a college or university, there may be seed funds available for building capacity of a
                    team. Check with your teaching and learning center (if you have one), the office that supports
                    research (again, if you have one), and the Provost - these teams sometimes provide seed funds to
                    jumpstart work that will provide benefits to the institution.</div>

                <div><i>External funding.</i> Many academics (though certainly not all!) are expected to learn how to be
                    successful at finding and being awarded funding for research. These funding sources often do not
                    fund capacity building…but that doesn’t mean there isn’t external funding available.</div>

                <ul>
                    <li>The National Science Foundation funds a Capacity Building level of funding in the Innovations in
                        Undergraduate STEM Education (IUSE) funding stream on the Institutional and Community
                        Transformation
                        track. These are only available when a college or university has not been funded yet for an IUSE
                        in
                        this track.
                    </li>
                </ul>

            </div>,
            <div>
                <ul>
                    <li>grant, so be sure to check with your Office of Sponsored Projects or other research support
                        staff
                        before investing effort into this as a possibility.
                    </li>

                    <li>Regional education foundations often are willing to invest in targeted capacity building that
                        aligns
                        with their mission and grantmaking priorities.
                    </li>
                </ul>

                <div><i>Existing job duties.</i> Sometimes what you want to learn how to do falls within someone’s existing job
                    duties and, if they want to engage in a project, you don’t need additional funding to pay for their
                    time. This might require recruiting on a few levels: recruiting the person themself to collaborate,
                    as well as convincing their direct supervisor to allocate their time to a project. Be wary of adding
                    capacity building on top of other duties that already fill a person’s time; not only is this a clear
                    signal that capacity building is not valued within their unit or by their organization, it also
                    makes capacity building the most likely activity to fall off their</div>
            </div>,
            <div>
                priorities. It’s okay and only fair to be flexible, but if it’s not a priority, it’s perhaps better for everyone to pass on the opportunity. Just because someone’s supervisor offers their participation in a capacity building project does not mean that individual will value it enough to put in extra work hours on top of existing duties.
            </div>
        ]
    );
}

function BudgetingWhatMattered() {
    return (
        [
            "What Mattered for Us",
            <div>
                <div><i>Sharing Is Caring.</i> The PI and core WPI team made the decision early in the budgeting process to build
                    in substantial funds to support the activities of partners from Bellevue College and Texas A&M. We
                    estimated that half of the budget coming to WPI for personnel would fund time devoted to project
                    management activities, such as reporting requirements and coordinating logistics. The other half of
                    the budget funding personnel at WPI would support people’s time engaging in capacity building. We
                    therefore allocated the same funding amount for each of the partner institutions’ capacity building
                    efforts. Including the same support for each institution reflected the understanding that everyone’s
                    time engaging in capacity building was equally valuable, without neglecting the need to support
                    backbone organization responsibilities.</div>

                <div>Autonomy Allows for Authentic Engagement. After making the decision to allocate a meaningful portion
                    of the budget to other institutions partnering in our capacity building, we</div>
            </div>,
            <div>
                <div>had to decide how that funding would be justified. That “we” was the leads at those institutions: WPI
                    did not decide which activities the subawards would support. It was important to start with trusting
                    that each institution and their lead partners for our teams knew their own people and institutional
                    horizons and needs better than we do.</div>

                <div><i>Operations & Administrative Personnel Are Real People, Too.</i> We knew that the activities we were
                    proposing for funding would require the support of the WPI Center’s Operations Director. (Most
                    projects do…). Many academic departments receive a portion of the indirect costs included in NSF and
                    other federal funding budgets to cover the costs of administrative work for the department. When
                    that is not the case or when the indirect costs recouped do not sufficiently cover the effort
                    required for coordinating capacity building, include these costs in the budget. In our case, grant
                    funding is relatively new in the Center and there is no portion of indirects to cover administrative
                    salaries. In addition to the new costs for the Operations</div>
            </div>,
            <div>
                <div>Director, one of the Co-PIs coordinated several aspects of the grant, such as conducting evaluation
                    activities and writing required reports. Not including funding for these activities literally
                    devalues the work and, by extension, the people who do it. So we requested the funds, justified the
                    expense in the proposal, and were awarded the support.</div>

                <div><i>Reflect Broader Impacts in the Budget.</i> One of the two primary review criteria for all NSF grant
                    proposals, including the capacity building level of the IUSE program, involves broader impacts that
                    benefit society. Our team allocated 10% of the total budget to a partnership for disseminating what
                    we learned with others because we recognize both the value of sharing and the cost of the labor
                    required to do so. We also included staffing with particular expertise in diversity, equity, and
                    inclusion to build our capacity as a team to continue to learn in this direction. Both of these
                    additions to the budget were explicitly articulated as part of our broader impacts plan in the
                    proposal. Here is the section from our proposal where we</div>
            </div>,
            <div>
                <div>articulated the resource allocation to broader impacts:</div>

                <div>“Building capacity through the proposed project would dedicate substantial resources to broader
                    impacts on undergraduate STEM education and society. Specific resources allocated to reaching a
                    broader community of undergraduate STEM educators through this project include $30,000 to fund
                    collaborations through STEM Central. These funds represent 10% of the total budget. In addition to
                    the activities accomplished through STEM Central, we have included WPI’s Director of Equity, Access,
                    and Community as a Co-PI on the project with one month’s effort each year. This funding supports the
                    foregrounding of issues of power, privilege, identity, and inclusion in our efforts to build
                    individual and collective capacity. These resources are an investment in capacity building dedicated
                    explicitly to broader impacts on improving the quality and outcomes of undergraduate STEM
                    education.”</div>
            </div>
        ]
    );
}

function BudgetingFailures() {
    return (
        [
            "Common Design Failures",
            <div>
                <ul>
                    <li>Expecting more work than is feasible given the amount of a person’s time funded, either through
                        grant
                        funding or their existing job duties and availability
                    </li>

                    <li>Assuming that limited budgets must fund tasks first; anything “leftover” after tasks can fund a
                        more
                        collaborative, empowering capacity building approach
                    </li>

                    <li>Including a person’s name with a given role in budgeting approvals without first discussing the
                        role,
                        rates of pay, amount of time, and any other stipulations with the person
                    </li>

                    <li>Maxing out the budget on people’s time, rather than including sufficient funding for travel to
                        conferences, materials, data management (e.g., incentives, audio transcription); these small
                        budget
                        items can have a large return on investment when it comes to engaging partners in the work
                    </li>
                </ul>
            </div>
        ]
    );
}

function BudgetingQuestions() {
    return [
        {id: "humility", height: 1, text:
                <div>
                    <b>Humility</b>
                    <ol><li>How can roles be distributed to others to empower them, and what resources will they require?</li></ol>
                </div>
        },
        {id: "center", height: 1, text:
                <div>
                    <b>Center the People</b>
                    <ol>
                        <li>How do we make sure that the team members have the time and bandwidth to participate in this
                            initiative?</li>
                        <li>Have we recognized that different roles require different time and compensated these
                            accordingly?</li>
                        <li>Are the team members willing to participate? Eager to participate?</li>
                    </ol>
                </div>
        },
        {id: "design", height: 1, text:
                <div>
                    <b>Focus on Design</b>
                    <ol>
                        <li>How do we build in time for emergence of new ideas?</li>
                        <li>Have we considered the different ways that the big goal can be achieved, and built resources
                            in to allow for flexibility?</li>
                    </ol>
                </div>
        },
        {id: "trust", height: 3, text:
                <div>
                    <b>Trust the Team</b>
                    <ol>
                        <li>Have we asked our team what roles they would like to play?</li>
                        <li>Have we built in enough flexibility in roles and processes that all can see value in
                            participating?</li>
                    </ol>
                </div>
        }
    ];
}

function BuildingTeam() {
    return (
        [
            "Building Your Team",
            <div>
                This is a hugely significant part of good capacity building. The team should be similar in that they are all invested in the broad goals of the capacity-building exercise; the team should also be diverse, with that diversity expressed on many levels: different levels of expertise, different areas of focus within the broad goal of the capacity building exercise, from different sectors of the organization, even preferring different modes of thinking (e.g., operational, visionary). These differences broaden discussions as each member brings their unique skill set, perspective, and ways of thinking to bear on the issue under consideration. It will also minimize unquestioned assumptions.
            </div>
        ]
    );
}

function BuildingTradeoffs() {
    return (
        [
            "Tradeoffs and Tensions",
            <div>
                Little formal structure is required for teams to be successful, though it should be clear who on the team is responsible for the various tasks and activities that the team will undertake. The distribution of these responsibilities is best done through negotiation with asking and agreement, rather than assigning work to people. Discussion of tasks should include how the work might draw on the members’ assets. How people are tasked with particular roles and work will set a tone for collaboration in the rest of the time together.
            </div>
        ]
    );
}

function BuildingWhatMattered() {
    return (
        [
            "What Mattered for Us",
            <div>
                <div>The WPI Center for Project-Based Learning was interested in learning more about institutional
                    transformation in higher ed with an eye to developing a set of research questions in this area. Our
                    internal team logically included the Center Director and the Assessment and Evaluation Associate. We
                    recognized the need for us to center DEI in this work and included a colleague with that focus. This
                    was our internal institutional team.</div>

                <div>We also wanted collaborators that represented different parts of the higher education landscape who
                    had a deep knowledge of higher education and institutional change. We identified partners from very
                    different institutions (i.e., a large public land grant university and a large community college)
                    who we had worked with before at the Center. Each of these partners were also directors of centers
                    at their institutions. They each added a more junior colleague from their institution.</div>
            </div>,
            <div>
                This group of seven was in many ways an ideal size to provide great diversity of expertise, and experience, and still remain manageable in an operational sense (e.g., planning meetings, full participation in discussions). Any larger and full group discussions would have become difficult and challenging to include everyone’s voices. Any smaller and we would not have been able to learn as much from such varied perspectives.
            </div>
        ]
    );
}

function BuildingFailures() {
    return (
        [
            "Common Design Failures",
            <div>
                <ul>
                    <li>Choosing collaborators who are more similar than different to make things easier and faster.
                        This
                        violates an important guiding principle by valuing the outcome over the process of learning.
                    </li>

                    <li>Diving into accomplishing tasks without spending time getting to know your collaborators,
                        building
                        trusting relationships, and collectively deciding how to work together. This might involve group
                        work, but not a team.
                    </li>

                    <li>One person being responsible for leading all activities. This violates the critical guiding
                        principles of trusting your collaborators, using team assets, and extending intellectual
                        humility.
                        Each of these violations makes learning more difficult.
                    </li>
                </ul>
            </div>
        ]
    );
}

function BuildingQuestions() {
    return [
        {id: "humility", height: 1, text:
                <div>
                    <b>Humility</b>
                    <ol>
                        <li>Who are we genuinely interested in learning from and with?</li>
                        <li>Who can provide balance?</li>
                    </ol>
                </div>
        },
        {id: "center", height: 1, text:
                <div>
                    <b>Center the People</b>
                    <ol>
                        <li>How will we negotiate who is responsible for which tasks/activities?</li>
                        <li>How will we adjust our processes to accommodate the needs of the different members of the
                            team?</li>
                    </ol>
                </div>
        },
        {id: "design", height: 1, text:
                <div>
                    <b>Focus on Design</b>
                    <ol>
                        <li>How will we help each member to identify their personal goals in this work while also
                            advancing the overall goals of the project?</li>
                        <li>Who has different perspectives/expertise/ways of thinking that will provide value to the
                            team?</li>
                    </ol>
                </div>
        },
        {id: "trust", height: 3, text:
                <div>
                    <b>Trust the Team</b>
                    <ol>
                        <li>How will we avoid a hierarchical structure so that all members feel equally capable of
                            providing value?</li>
                        <li>How will we demonstrate trust with each other?</li>
                    </ol>
                </div>
        }
    ];
}

Planning.makeDirectory = function() {
    return sn_topic("Planning", Planning, setQuestionsColor("yellow"), "Planning Capacity Building", [
        sn("Building Capacity vs. Staffing", VsStaffing, [
            sn("Normative Beliefs", Normative),
            sn("Designing a Container", Container),
            sn("Tradeoffs and Tensions", VsStaffingTradeoffs),
            sn("Tip: How Much Structure?", TipStructure),
            sn("What Mattered for Us", VsStaffingWhatMattered),
            sn("Tensions: The Resistance", TensionsResistance),
            sn("Tip: Sharing Ownership", TipOwnership),
            sn_qtc("Building Capacity vs. Staffing", "capacityvstaffing", VsStaffingQuestions())
        ]),
        sn("Allocating Resources and Budgeting", Budgeting, [
            sn("Tip: Sources of Resources", TipSources),
            sn("What Mattered for Us", BudgetingWhatMattered),
            sn("Common Design Failures", BudgetingFailures),
            sn_qtc("Resources and Budgeting", "budget", BudgetingQuestions())
        ]),
        sn("Building Your Team", BuildingTeam, [
            sn("Tradeoffs and Tensions", BuildingTradeoffs),
            sn("What Mattered for Us", BuildingWhatMattered),
            sn("Common Design Failures", BuildingFailures),
            sn_qtc("Building Your Team", "teamplanning", BuildingQuestions())
        ])
    ]);
}

export default Planning;