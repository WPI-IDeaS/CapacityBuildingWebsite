import React, {useState, useEffect} from 'react';
import {sn, sn_qtc, sn_topic} from "./SiteNode";
import {setQuestionsColor} from "./QuestionsManager";
import {Link} from "react-router-dom";

import ConceptualFramework from "./images/diagrams/conceptual_framework.png";
import DecisionMaking from "./images/diagrams/decision_making.png";
import AspectOutcome from "./images/diagrams/aspect_outcome.png";



function Doing() {
    return (
        [
            "Doing Capacity Building",
            <div>
                <div>This is the Doing section! Use the left-hand sidebar or the links below to explore the
                    following sections:
                </div>
                <ul>
                    <li><Link to="/doing/getting-to-know-your-system" style={{color: "var(--pal-main)"}}>Getting to Know Your System</Link></li>
                    <li><Link to="/doing/developing-individuals-expertise" style={{color: "var(--pal-main)"}}>Developing Individuals' Expertise</Link></li>
                    <li><Link to="/doing/building-shared-knowledge" style={{color: "var(--pal-main)"}}>Building Shared Knowledge</Link></li>
                </ul>
            </div>
        ]
    );
}

function GettingToKnow() {
    return (
        [
            "Getting to Know Your System",
            <div>
                Building capacity might involve large shifts in your system or small adjustments to better support people using it or anything in between. How do you learn about your system? How do you help others to understand your system? How do you figure out what other, similar systems look like and do? There are lots of ways to get to know your system. This section describes a few that might be particularly valuable and can be intimidating for novices.
            </div>
        ]
    );
}

function LiteratureReviews() {
    return (
        [
            "Getting to Know Your System: Literature Reviews",
            <div>
                Why do a literature review? We often think of capacity building as developing a deeper level of understanding in a particular area. Literature reviews help you to develop breadth in understanding the landscape of knowledge about a type of system (e.g., the community college sector of higher education, public health’s response to COVID). Instead of a deep dive in one particular way of viewing a topic, literature reviews show you all the ways that different people are thinking about the topic, how they are thinking about it using a variety of methods, and the various conclusions they have reached.
                <br/>
                Reading what has been published by researchers can help you:
                <ul>
                    <li>Save time learning how to do something new as you read about others’ successes and failures</li>
                </ul>
            </div>,
            <div>
                <ul>
                    <li>Gain helpful tools and tips when you are struggling to move forward</li>
                    <li>Strategize about which aspects of context are helpful and harmful factors</li>
                    <li>Determine where the limits are to what is known so you can learn something new that others might want to know, too</li>
                    <li>To publish a peer-reviewed article in an area of (growing) expertise where there are no systematic literature reviews available or where existing reviews are outdated, centered around a perspective you find lacking, or exclusive to knowledge shared across a broader set of publishing venues</li>
                </ul>
            </div>
        ]
    );
}

function LitInformal() {
    return (
        [
            "Literature Reviews: Informal Review Process",
            <div>
                There is great value in letting the literature lead you where it may. Sometimes you don’t know what you are even looking for unless you allow yourself to wander around what has been published.
            </div>
        ]
    );
}

function TipsFindingArticles() {
    return (
        [
            "Literature Reviews: Informal Review Process",
            <div>
                <ul>
                    <li>If you are seeking recommendations, you can crowdsource using Twitter by describing what you’re
                        looking for and asking #AcademicTwitter for reading suggestions. By tagging #AcademicTwitter, a
                        wide range of people might see and respond to your request.</li>

                    <li>If you find a good article, regardless of how you come across it, you can use that to find other
                        potentially interesting reads. One strategy is to click the Google Scholar button “Related
                        articles” under an article’s entry in a search list to get a list of related articles.</li>

                    <li>Another strategy is to click the “Cited by” button, which will call up all of the articles that
                        have cited the one you enjoy. You can then narrow that list, if needed, by clicking a check box
                        to “Search within citing articles” and entering a new search. For example, if you are only
                        interested in articles describing a certain school level, you might search within citing
                        articles for “undergraduate” to weed out studies at the primary and secondary school levels.</li>
                </ul>
            </div>
        ]
    );
}

function TipsGoodArticles() {
    return (
        [
            "Literature Reviews: What Does a \"Good Article\" Mean?",
            <div>
                So many things! When you are engaging in an informal review of the literature, you have the ability to define what is useful as you go. This is a major difference between an informal process and formal systematic review processes (described in more detail below). “Good” might include any article that:
                <ul>
                    <li>describes findings that changed how you viewed a problem</li>

                    <li>showed you a new perspective for understanding how people different from you experience life</li>

                    <li>suggested a way to make something relevant to an audience you want to reach</li>

                </ul>
            </div>,
            <div>
                <ul>
                    <li>displayed information in ways that were particularly easy to follow, either in tables or diagrams
                        or subsections or writing style</li>

                    <li>reference a body of literature in ways that summarize, critique, connect, apply to a problem in
                        ways that are relevant to you</li>

                </ul>
            </div>
        ]
    );
}

function TipsFormalReview() {
    return (
        [
            "Literature Reviews: Formal Review Process",
            <div>
                Depending on what you are aiming to accomplish, you may decide that you need a more systematic coverage of the literature in your review. If you plan to publish a literature review article (not a section of an article manuscript that situates a research study, but an article manuscript that is only a review of the literature), you will need to follow established formal protocols for the methods to be considered high enough quality to merit peer-reviewed publication. In these instances, the literature review is a type of scientific inquiry, and therefore needs to be conducted in ways that are deemed valid, reliable, and repeatable by others. This requires us to intentionally plan strategies for conducting the review and to articulate those decisions transparently when we share the results.
                <br/><br/>
                <i>Research Questions.</i> Just like in any study, systematic literature reviews are guided by research questions. These should articulate what you want to know about the state of the field. For example, are you interested in identifying the predominant concepts and theoretical
            </div>,
            <div>
                perspectives at work? Describing which methodologies are used and which are not? Assessing whose voices are not yet included as participants shaping research conclusions, as theorists shaping understanding of phenomena, as authors influencing a given field?
                <br/><br/>
                <i>Inclusion & Exclusion Criteria.</i> In designing the research methods of a systematic literature review, you’ll set up inclusion and exclusion criteria. These decisions are made before beginning to search for literature because you will use them to decide which literature to include in your dataset and which to ignore and why. Inclusion criteria typically define the conceptual boundaries of a study. This might be related to which disciplines are of interest - for example, perhaps you are only interested in studies that are in education and not those in public health, social work, or other fields. This might also be defined by the scope of what you are interested in. Inclusion criteria should also specify which span of publication dates are included; these are typically either in decade-long increments or begin at the end date of a previous, influential
            </div>,
            <div>
                review of the same (or closely related) topic.
                <br/><br/>
                Exclusion criteria are often used for quality control. For example, you might only include studies that name a methodology or meet other methodological rigor criteria to weed out studies without sufficient attention to the scientific or scholarly knowledge development process. You might decide to exclude forms of dissemination that are not peer reviewed, for example. You might also consider exclusion criteria that delimit whose knowledge you are interested in understanding. This might be pragmatic, such as excluding articles written in a language you cannot read, or centered in the cultural basis for experience, such as excluding articles about systems in other countries that are functioning in cultural systems that might not flourish in your own setting.
                <br/><br/>
                <i>Finding Literature.</i> In a systematic literature review, the goal is to identify every article or

            </div>,
            <div>
                other type of study report (according to your inclusion and exclusion criteria). These literature then become part of your dataset. To find the literature, you will need to specify 1) where you will look for the literature (e.g., Google Scholar, EBSCOhost, other popular academic search engines), 2) which search terms will be used and in which combinations, and 3) who will conduct the search.
                <br/><br/>
                Organizing the Data. Some tips for organizing your search while you compile your dataset:
                <ul><li>As you search, it can be useful to have a spreadsheet where you track the initial number of
                    returns
                    on a given set of search terms and the number retained in the study.</li>

                    <li>If you are using more than one search engine (e.g., JSTOR and Google Scholar), you might also
                        want
                        to track which search engine you’ve used with a given set of search terms to remind yourself
                        systematically what is left to do.</li></ul>


            </div>,
            <div>
                <ul><li>Citation management tools can help you track your literature and, depending on which tool you
                    use,
                    they can even help you organize your notes and keywords for each article. EndNote, Mendeley, and
                    Zotero are popular options. If you are affiliated with a college or university, check the library to
                    see if there is a particular citation management tool to which you have free access.</li></ul>
                
            </div>
        ]
    );
}

function LitReviewsResources() {
    return (
        [
            "Literature Reviews: Informal Review Process",
            <div>
                Procedures for conducting a formal systematic literature review are laid out in greater detail at:<br/>
                Gough, D. (2007). <Link rel="noopener noreferrer" target={"_blank"} to="https://www.tandfonline.com/doi/full/10.1080/02671520701296189">Weight of evidence: a framework for the appraisal of the quality and relevance of
                evidence</Link>. Research papers in education, 22(2), 213-228.
                <br/><br/>
                Xiao, Y., & Watson, M. (2019). <Link rel="noopener noreferrer" target={"_blank"} to="https://journals.sagepub.com/doi/pdf/10.1177/0739456X17723971">Guidance on conducting a systematic literature review.</Link> Journal of planning education and research, 39(1), 93-112.

            </div>
        ]
    );
}

function Surveys() {
    return (
        [
            "Getting to Know Your System: Surveys",
            <div>
                <div>Part of our task was creating a nationwide field-scan survey on the current state of project-based
                    learning. In creating any survey, the big secret is that you already have to know quite a bit about
                    what your respondents will say and how they will say it when you ask them a question. This requires
                    upfront exploration of your topic and your audience. This step can really improve your survey and
                    ensure a level of quality and integrity.</div>

                <div>To explore and begin building your survey, consider the following strategies:</div>
                <ul>
                    <li>Look for example surveys that are already out there in the literature and see if any could be
                        modified to work for your purpose. You might want to reach out to the creators of relevant
                        surveys
                        to talk about what they do and do not cover in their data collection and, more importantly, why
                        they
                        include questions the way they do.
                    </li><br/>

                    <li>Scan for images or conceptual models that operationalize the concepts you are interested</li>
                </ul>
            </div>,
            <div>
                <ul>
                    <li>in. This can help you chunk out the most important parts and not waste time on side tracks or
                        concepts that are peripheral. You will have to make decisions about the most important aspects
                        of
                        the phenomenon about which you are collecting data to keep the survey at a reasonable length to
                        value respondents’ time.
                    </li><br/>

                    <li>Conduct preliminary interviews with a purposeful range of respondents targeted for your survey.
                        Think
                        about what characteristics would differentiate them the most and select a subsample based on
                        maximal
                        variation. For example, in our project, I asked open-ended questions in these interviews to see
                        how
                        they naturally talked about how they got into PBL, what supported them, why they continue doing
                        it.
                        I was also able to pilot some of the survey questions I was curious about because I didn’t feel
                        I
                        could anticipate their responses. Pay attention to their responses, but also the way they talk
                        about
                        things, the terms they use, how they portray the relationships between things - and what they
                        don’t
                    </li>
                </ul>
            </div>,
            <div>
                <div>say, as well. All these things indicate the range of possible responses to a question.</div>

                <div>I did ten preliminary interviews with people from 3 different institution types that had been
                    involved in PBL different amounts of time. There isn't really a right number, it is more determined
                    by a sense of saturation and that you are hearing the same range more or less of responses and feel
                    you can confidently offer that range and norm the language of the survey so it works for most
                    people.</div>
            </div>
        ]
    );
}

function SurveysWhatMattered() {
    return (
        [
            "What Mattered for Us",
            <div>
                <div>In developing our survey I began with an exploration of what already exists that got at the same
                    concepts we were interested in. We were interested in environments and structures that were
                    supportive of or that constrained PBL adoption and how those might vary across different types of
                    institutions, so I wanted to see who else was mapping these concepts out and what were the big
                    categories others had identified.</div>

                <div>I found these images helpful in organizing my thinking.</div>

                <div>I also looked for existing surveys. As I read papers, I looked for their instrument which is
                    sometimes in the supplementary materials or sometimes requires reaching out to the author. In our
                    case, Charles Henderson, was lead author on education reform and was one of the only authors who
                    focused on culture, environments and structures in supporting these kinds of systemic changes in
                    education. I asked him if we could use his survey and modified it based on my preliminary
                    interviews.</div>
            </div>,
            <div>
                <img src={ConceptualFramework} alt="Figure 1. Elements of initial conceptual framework for development the Survey of Climate for Instructional Improvement (SCII) as modeled by Gappa et al. (2007)." style={{float: "left", height: "55vh", marginRight: "5px"}}/>
                <div>This image helped me think about the “Key institution and/or Departmental Characteristics” that
                    influence faculty use of evidence or research based instructional practices like PBL. I spent time
                    thinking about and listening for (in the preliminary interviews) how PBL presents itself in a
                    department or institution context and what cultural, structural, climate based factors permit it and
                    foster it as well as asking how people are resourced and rewarded for doing PBL. doing PBL. So then,
                    resources and rewards became key categories on the survey.</div>
            </div>,
            <div>
                Citation: Walter, E. M., Beach, A., Henderson, C., & Williams, C. T. (2015). Describing Instructional Practice and Climate: Two New Instruments. In G. C. Weaver, W. D. Burgess, A. L. Childress, & L. Slakey (Eds.), Transforming Institutions: Undergraduate Stem Education for the 21st Century. West Lafayette, IN: Purdue University Press.
            </div>
        ]
    );
}

function SurveyDevelopment() {
    return (
        [
            "Survey Development",
            <div>
                <div>Once you have explored, have refined your ideas into categories of key concepts, and worked through
                    the key questions and responses, it is time to edit again. In this stage, it is important to review
                    all the questions to make sure they really ask just one question; it is also important to ensure use
                    of accessible language. In other words, make sure the words you use are simple and clear and do not
                    need further explanation beyond what is available in the survey item itself.</div>

                <div>Questions I ask myself at this stage are:</div>
                <ul>
                    <li>Am I asking the respondent only one thing at a time?</li>
                    <li>Is there any jargon or complex verbiage?</li>
                    <li>Am I missing any responses (including “Other” with a fill in option, or “I don’t know”
                        options)?
                    </li>
                    <li>Is there variation across the questions/response format or is the participant likely to get
                        bored
                        with the format and just click through?
                    </li>
                </ul>
            </div>,
            <div>
                <ul>
                    <li>Do I have identity and context questions that will give me enough information to differentiate
                        people
                        based on the factors that are likely to be associated with differences in responses (e.g.,
                        institution type, race & ethnicity, years experience, leadership role at college)
                    </li>
                    <li>Are there any existing suites of responses for questions from other surveys (like standard
                        demographic questions) that could help me get comparability to other data or are comprehensive
                        and
                        done well that I can use because people are likely to be familiar with?
                    </li>
                </ul>

                <div>Then, pilot it with real participants, again seeking variation, and edit accordingly. Ask the pilot
                    participants to critique the survey and talk about how it felt, what annoyed them, and what didn't
                    make sense. This is not only the most surefire way of eliminating bad questions but also testing to
                    see if you are getting the kind of results you anticipated.</div>
            </div>,
            <div>
                <div style={{marginBottom: "4px"}}>This image helped me think about where we are focusing our inquiry overall and in the survey. We are
                    looking at external influences that shape the use of evidence based practices like PBL primarily at
                    the institutional and departmental scales. And there are a lot of other interesting influences and
                    factors at different scales! A huge part of this exploratory work is constantly editing out the
                    noise and focusing on what albeit incomplete part of this system of</div>
                <img src={DecisionMaking} alt="Fig. 1 Model for faculty's decision-making process on using EBIPs. Underlined terms were included in the FIBIS instrument and measured in this study. (Note: arrows indicate theoretically-based relationships, not empirically tested ones." style={{height: "38vh", marginLeft: "auto", marginRight: "auto"}}/>
            </div>,
            <div>
                <div style={{marginBottom: "4px"}}>drivers you are trying to understand and dropping the others. A survey is a very short instrument to
                    get an overview, it needs to be focused and will not reveal a magnitude of driving factors and their
                    relationships. Striving for simplicity is definitely a worthwhile pursuit for user experience and
                    for analyzing the data later.</div>
                <img src={DecisionMaking} alt="Fig. 1 Model for faculty's decision-making process on using EBIPs. Underlined terms were included in the FIBIS instrument and measured in this study. (Note: arrows indicate theoretically-based relationships, not empirically tested ones." style={{height: "38vh", marginLeft: "auto", marginRight: "auto"}}/>
            </div>,
            <div>
                Citation: Sturtevant, H., & Wheeler, L. (2019). The STEM Faculty Instructional Barriers and Identity Survey (FIBIS): development and exploratory results. International Journal of STEM Education, 6(1), 1-22.
            </div>,
            <div>
                <img src={AspectOutcome} alt="Aspect of System to be Changed / Intended Outcome" style={{float: "left", height: "55vh"}}/>
                <div>This image (below) helped me understand the different ways a practice like PBL gets into a department
                    or institution initially as different change strategies are employed. For example from my
                    preliminary interviews, in a Computer Science Program at a community college, PBL arose as a
                    response to accreditation learning goals (highlighting the importance of soft skill development),
                    this was supported by the Chair’s interest in PBL and her expertise in assessment, and experience in
                    industry and understanding of what skills students need there to be successful. So the chair built
                    PBL into their capstone as a</div>
            </div>,
            <div>
                <img src={AspectOutcome} alt="Aspect of System to be Changed / Intended Outcome" style={{float: "left", height: "55vh"}}/>
                <div>program requirement that all faculty must rotate teaching (Enacting Policy: Prescribed Change
                    Strategy) but coupled that with an intensive quarterly assessment process, faculty peer mentoring
                    structure, and some PBL training (Changing Environments and Structures). You can see how the
                    preliminary interviews give critical context and specificity and allow you to map their story to
                    conceptual models like this but you need both to really decide how to ask questions that could
                    inform a conceptual model of larger change strategies like this. It is helpful to have both in your
                    mind and write the survey from that place.</div>
            </div>,
            <div>
                Citation: Borrego, M., & Henderson, C. (2014). Increasing the use of evidence‐based teaching in STEM higher education: A comparison of eight change strategies. Journal of Engineering Education, 103(2), 220-252.
            </div>
        ]
    );
}

function SWOT() {
    return (
        [
            "Getting to Know Your System: SWOT Analysis (and Alternatives)",
            <div>
                One of the reasons we get to know our systems is to be ready to move from capacity building to mobilization for action. A SWOT analysis helps you to identify areas where change is needed and the resources available to reap benefits. What are the strengths and weaknesses of the system in its current state and context? What opportunities are available that align with your capacity building goals?
            </div>
        ]
    );
}

function SWOTWhatMattered() {
    return (
        [
            "What Mattered to Us",
            <div>
                <div>We wanted to understand the broader institutional contexts not only for advancing PBL practice, but
                    also for advancing a research agenda about transformative level PBL. At our team’s annual retreat in
                    Spring 2022, team members conducted SWOT analyses to curate information about our systems that was
                    gathered in preparation for the meeting. The prompts we used to structure the activity are provided
                    below.</div>

                <div>The SWOT prepared each of us for pursuing research agendas from the positions they occupy within
                    their institutions. As part of this exercise, each team member generated and received feedback from
                    teammates on next steps. This further extended our ability to understand our systems more fully than
                    our limited perspectives. The conversation supported us in capitalizing on strengths and
                    opportunities and to strategizing around weaknesses and threats.</div>

                <div>We used the SWOT analysis to identify the strengths, weaknesses, opportunities, and threats to</div>
            </div>,
            <div>
                pursuing a research agenda on the organizational change processes of bringing PBL to scale. In this sense, our SWOT analysis not only taught us about our systems, but also complemented what we learned about our individual interests, skills, and relationships. As a bridge between individual and organizational capacity building, the SWOT activity served as a multiplier of other activities.
            </div>
        ]
    );
}

function ToolsSWOTPrompts() {
    return (
        [
            "Tools: Prompts for Eliciting SWOT Responses",
            <div>
                <div>Note: Replace the generic text inside the brackets with phrasing specific to your project or
                    initiative.</div>
                <ul>
                    <li>Strengths: What do you do well re: [the phenomena of interest]? What unique resources can you
                        leverage? What do others who work with you say are your strengths?
                    </li>
                    <li>Weaknesses: What needs improvement in your work re: [the phenomena of interest]? What resources
                        do
                        you lack?
                    </li>
                    <li>Opportunities: How does [the phenomena of interest] fit into your university’s or organization’s
                        strategic plan? How do you fit into current needs/trends re: [the phenomena of interest] with
                        your
                        unit’s current mission/slate of services?
                    </li>
                    <li>Threats: What threats are there to your current operations? What barriers stand in the way of
                        launching new projects, initiatives, etc.? What keeps you treading water, rather than supporting
                        change in a big way?
                    </li>
                </ul>
            </div>
        ]
    );
}

function SWOTFailures() {
    return (
        [
            "Common Design Failures",
            <div>
                <ul>
                    <li>Not including people in different types of roles within an organization. Every person has a
                        limited
                        perspective on the strengths, weaknesses, and other realities facing an organization.
                    </li><br/>

                    <li>Using this activity as data gathering, rather than also using it for team building. If the SWOT
                        is
                        only intended to generate information, then there is a missed opportunity for people to talk
                        about
                        their varied experiences, share perspectives related to their identities, and use the
                        information to
                        talk about action that might leverage assets to achieve goals for each member of the
                        organization.
                    </li><br/>

                    <li>Focusing on defining problems, rather than centering solutions and future action. This can make
                        people feel worse about their situations and shut down engagement.
                    </li>
                </ul>
            </div>,
            <div>
                <ul>
                    <li>Spending too much time collecting an overwhelming amount of data, leading to analysis
                        paralysis.
                    </li>
                    <br/>

                    <li>Oversimplifying things by not collecting enough data to reflect the lived realities of various
                        people
                        within the organization
                    </li>
                </ul>
            </div>
        ]
    );
}

function TipsSWOTAlternatives() {
    return (
        [
            "Tips: Alternatives to SWOT",
            <div>
                <ul>
                    <li>SOAR analysis replaces the SWOT areas with strengths, opportunities, aspirations, and results.
                        It is
                        an asset-based, forward-thinking version of a similar activity. The aspirations category can be
                        a
                        useful opening for groups that are relatively new and might not know their systems very well
                        yet.
                    </li><br/>

                    <li>NOISE analysis is another option that focuses on solutions to areas of need, rather than
                        stopping
                        short at describing challenges. NOISE asks participants to identify 1) needs for a strategy to
                        be
                        successful, 2) opportunities for growth, 3) improvements that are necessary for attaining that
                        growth, 4) strengths that already exist, and 5) exceptions that are already present.
                    </li><br/>

                    <li>SCORE analysis identifies strengths, challenges, options, responses, and effectiveness. This is
                        another alternative that is asset-based and solutions-oriented. The SCORE model
                    </li>
                </ul>
            </div>,
            <div>
                connects the challenges more directly to actions to be taken by exploring options, strategic responses, and assessing effectiveness, as compared to a SWOT approach.
            </div>
        ]
    );
}

function SWOTResources() {
    return (
        [
            "Resources",
            <div>
                <div>For further information on how SWOT analysis has been used in research, see:</div>

                <div>Helms, M. M., & Nixon, J. (2010). Exploring SWOT analysis–where are we now? A review of academic
                    research from the last decade. Journal of Strategy and Management, 3(3), 215-251.</div>
            </div>,
            <div>
                <div>To learn more about SOAR analysis, check out <Link rel="noopener noreferrer" target={"_blank"} to="https://www.mindtools.com/a0atsgq/soar-analysis">this article by Mind Tools</Link>!</div>

                <div>To learn more about these and other alternatives to SOAR analysis, you can read the following:</div>

                <div><Link rel="noopener noreferrer" target={"_blank"} to="https://smallbusiness.chron.com/alternatives-swot-analysis-64967.html">Alternatives to SWOT Analysis</Link>, by Nicole LeMarco, published in Chron</div>

                <div><Link rel="noopener noreferrer" target={"_blank"} to="https://www.nmblstrategies.com/blog/four-alternatives-to-a-swot-analysis">Four Alternatives to a SWOT Analysis</Link> on the NMBL Strategies blog</div>
            </div>
        ]
    );
}

function GettingToKnowQuestions() {
    return [
        {id: "humility", height: 1, text:
                <div>
                    <b>Humility</b>
                    <ol>
                        <li>Which method(s) is/are most likely to provide stepping stones to our overall goal (even if we
                            are less familiar with it)?</li>
                        <li>Can we divide the team into subgroups to accomplish more than one of these?</li>
                        <li>How will we make decisions about which tools to use?</li>
                    </ol>
                </div>
        },
        {id: "center", height: 1, text:
                <div>
                    <b>Center the People</b>
                    <ol>
                        <li>Whose expertise or past experiences would suggest that they take a lead? Whose growth
                            trajectory or desired learning would suggest that they be involved or lead one or more of
                            these?</li>
                        <li>What would be a reasonable workload in any of these?</li>
                        <li>What would be a reasonable workload in any of these?</li>
                    </ol>
                </div>
        },
        {id: "design", height: 1, text:
                <div>
                    <b>Focus on Design</b>
                    <ol>
                        <li>How do we share the learning from any of these methods and allow others to provide input?</li>
                    </ol>
                </div>
        },
        {id: "trust", height: 3, text:
                <div>
                    <b>Trust the Team</b>
                    <ol>
                        <li>How do we schedule this work? Who is responsible for deadlines?</li>
                    </ol>
                </div>
        }
    ];
}

function DevelopingExpertise() {
    return (
        [
            "Developing Individuals’ Expertise",
            <div>
                Perhaps the most traditional views of capacity building involve developing individuals’ expertise. What does the journey look like between exploration and expertise? How do we support others in moving beyond an exploratory level of a new skill or knowledge and encourage a deepening of mastery?            </div>
        ]
    );
}

function MOOCsReadings() {
    return (
        [
            "Developing Individuals’ Expertise: MOOCs and Directed Reading",
            <div>
                <div>There are ways to develop expertise in a broad array of topics without first creating a new resource.
                    What topic would provide additional value and is aligned with personal and professional interests?
                    How can you start in this interest while keeping an open mind for next steps? What might you learn
                    that informs where you then turn your attention?</div>

                <div>Massive open online courses enjoyed celebrity status for a while; although the initial excitement has
                    diminished, they still are a useful resource for developing expertise. This beginner’s guide by Pat
                    Bowden, <Link rel="noopener noreferrer" target={"_blank"} to="https://www.classcentral.com/help/moocs">Beginner’s Guide to Massive Open Online Courses (MOOCs)</Link>, answers some basic questions about
                    what they are and how they can be used.</div>

                <div>While MOOCs provide a learning experience that is pre-designed and curated by experts,</div>
            </div>,
            <div>
                similar to coursework within colleges and universities, the topics available are constrained and tend to be more readily available in certain areas (e.g., computer science, data analytics). Rather than MOOCs, some topics may benefit from customized directed readings in which the content is chosen by the participant to align with their interests.
            </div>
        ]
    );
}

function FindingMOOCs() {
    return (
        [
            "Resources: Finding MOOCs",
            <div>
                <ul>
                    <li><Link rel="noopener noreferrer" target={"_blank"} to="https://www.edx.org/">edX.org</Link> offers one of the largest collections of MOOCs</li><br/>

                    <li><Link rel="noopener noreferrer" target={"_blank"} to="https://www.coursera.org/">Coursera</Link> offers a large collection of MOOCs, which are organized in ways that can help you find
                        the
                        right MOOCs for your goals. Namely, there are ways to filter or find courses that are part of
                        degree
                        pathways, that can be completed within a single day, and those connected to specific careers.
                    </li><br/>

                    <li>Access <Link rel="noopener noreferrer" target={"_blank"} to="https://docs.google.com/spreadsheets/d/1fr9E_Sg0baafu0lLH_BBf0QN3MIAjJozhiCezqcF5og/edit?usp=sharing">a list of MOOCs relevant to capacity building</Link> (e.g., leadership development, innovation,
                        change management) within our higher education context that we compiled as part of our grant.
                    </li>
                </ul>
            </div>
        ]
    );
}

function TipsFindingReadings() {
    return (
        [
            "Tips: Finding Useful Readings",
            <div>
                <ul>
                    <li>Use Google Scholar to identify the most widely cited articles about your topic. You can scan
                        these to
                        see if there are any that appear particularly useful in extending your thinking.
                    </li><br/>

                    <li>Check out those who have cited a particularly good article to see if any of them might be a good
                        follow-up to continue learning in this area.
                    </li><br/>

                    <li>Don’t be shy! Email a scholar whose work you admire to ask for recommendations. They may or may
                        not
                        respond with suggestions; if they do, they may make your work easier in learning what the
                        options
                        are and which are worth your time.
                    </li>
                </ul>
            </div>
        ]
    );
}

function MOOCsWhatMattered() {
    return (
        [
            "What Mattered for Us",
            <div>
                <div>One of our objectives was to deepen our understanding of frameworks for understanding organizational
                    change and institutional transformation in higher education. Such study was important to us to allow
                    the team to make appropriate design decisions in a research agenda on organizational change
                    processes in PBL.</div>

                <div>This development of individual expertise was needed based on the gap between our partners’ existing
                    areas of expertise and experience, on one hand, and the team’s capacity building goals, on the
                    other. The partners involved in our capacity building project have a range of disciplinary
                    backgrounds, including interdisciplinary engineering, chemistry, environmental science,
                    microbiology, history, and sociology of education. Each partner has extensive experience
                    implementing professional development around PBL; however, there was wide variation in training and
                    knowledge related to organizational change theories and institutional theory, more broadly.</div>
            </div>,
            <div>
                <div>Each partner initially agreed to participate in three Massive Open Online Courses (MOOCs) on relevant
                    topics - one in the Spring semester of the first year, one in the summer, and one in the Fall
                    semester of the second year. Two aspects of our experiences pushed us to amend this decision and to
                    broaden our plan to include directed readings in place of MOOCs.</div>

                <div>Engaging in MOOCs fits the adult learning principle of scaffolded self-direction (Merriam, 2001) as
                    each partner chooses the most relevant topic and level for themselves. Partners can therefore engage
                    in ways that extend their existing knowledge and complement professional interests. Several of our
                    team members struggled to find MOOCs that would advance their knowledge and skills in the areas
                    where they wanted to grow. Because this principle was important to us for engaging partners in
                    individual benefits, we opened up our initial plan to allow us to better tailor our learning through
                    directed readings.</div>
            </div>,
            <div>
                Another principle of adult learning theories we used in designing this activity is supporting people’s ability to assess practical relevance (Merriam, 2001; Miflin, 2004). By taking several months for each round of learning, we allowed team members to fit the activity into busy schedules. Beyond the practicality of logistics, though, the scheduling was intended to allow adequate time to process information and to make connections to our professional roles and responsibilities. A few team members found the MOOC format did not fulfill this intended flexibility in timing because they struggled to engage with the recorded lecture format. This suggested that directed readings, which we estimated might require more time curating and reading, might actually allow some participants to dedicate more time processing and applying.
            </div>
        ]
    );
}

function MOOCsResources() {
    return (
        [
            "Resources: Finding Readings on Change",
            <div>
                <div>Access <Link rel="noopener noreferrer" target={"_blank"} to="https://docs.google.com/document/d/1-NH4m9vBRe-HmWvZaMD5K9xDQXOzS2XP-iBNPbRKHhk/edit?usp=sharing">a list of readings relevant to change in higher education</Link> that we compiled as part of our
                    grant</div>

                <div>If you are in higher education, we highly recommend Kezar, Holcombe, & Kitchen’s, Scaling Change in
                    Higher Education: A Guide for External Stakeholder Groups. You can download it <Link rel="noopener noreferrer" target={"_blank"} to="https://eric.ed.gov/?id=ED591454">here</Link> for free.</div>
            </div>
        ]
    );
}

function MOOCsFailures() {
    return (
        [
            "Common Design Failures",
            <div>
                <ul>
                    <li>Requiring everyone to read the same books/articles or participate in the same MOOC. A book club
                        approach only adds value if everyone is trying to build the same expertise…which requires
                        abandoning
                        an asset-based, interest-driven approach. Beware of falling into the trap of assuming everyone
                        needs
                        to know all of the same things.
                    </li>

                    <li>Choosing to focus on the easiest topic to find rather than putting in a bit more work to access
                        the
                        right resources to learn in a truly meaningful area.
                    </li>

                    <li>Not connecting topics to individuals’ own professional journeys. Find aspirations and fulfill
                        them
                        while building broader organizational capacity or folks will leave the organization and any
                        capacity
                        will need to be rebuilt.
                    </li>
                </ul>
            </div>
        ]
    );
}

function ApprenticeCollabs() {
    return (
        [
            "Developing Individuals’ Expertise: Apprenticeship Collaborations",
            <div>
                At the Center for Project-Based Learning, we believe strongly in learning through theory AND practice, hand in hand. We believe in learning while doing. In capacity building, how might we support learning by allowing novices to lead? What do we gain by pairing those with expertise with those leading an activity to serve as support, rather than as facilitators or decision-makers?
            </div>
        ]
    );
}

function ApprenticeTradeoffs() {
    return (
        [
            "Tensions and Tradeoffs",
            <div>
                <ul>
                    <li>Apprenticeship can be an expensive model because it requires more labor and people’s time costs
                        money. A novice will typically take longer to achieve a task than someone with more experience.
                        This
                        approach also adds in the time from an expert mentoring the novice.
                    </li>

                    <li>The return on this more expensive investment is a double dose of capacity building: both
                        accomplishing the capacity building task while also building the novice’s skills and experience.
                    </li>

                    <li>Having access to an expert as a mentor can increase the confidence of the novice and support
                        their
                        willingness to take risks as the expectation is that they are learning - and that a mentor will
                        not
                        let the project be entirely derailed. For others, though, having a mentor can tempt the novice
                        to
                        position them as the ultimate authority and decision maker. The mentor must resist the
                        temptation to
                        take over, which would curtail the intended learning
                    </li>
                </ul>
            </div>,
            <div>
                <ul>
                    <li>for the novice; in turn, the novice must lean in to the experience of learning by doing without
                        constantly seeking expert approval. This is a balancing act that requires clear role boundaries,
                        communication, and trust.
                    </li>
                </ul>
            </div>
        ]
    );
}

function Journaling() {
    return (
        [
            "Developing Individuals’ Expertise: Reflective Journaling",
            <div>
                <div>Reflective journaling can be a powerful tool for processing what is being learned, how, and why. You
                    can reflect on the quality and conditions of the learning that is happening, the effectiveness of
                    the processes in place, the obstacles to building and deploying capacity and brainstorming how to
                    overcome them. Understanding what’s working and why gives you greater power over your own
                    learning.</div>

                <div>Reflecting can operate as reinforcement for the individual doing the reflecting. Asking team members
                    to reflect on each of the activities can provide opportunities to process what each person is
                    learning. It also can document the journey both individually and, if shared with collaborators,
                    collectively. Provide prompts to elicit responses that can then be shared on issues likely to be
                    relevant to others in various institutions if you want to share your learning.</div>
            </div>,
            <div>
                Reflections might include brief self-recorded videos, links to content, blog-like personal essays, and other formats accessible to a wide audience.
            </div>
        ]
    );
}

function JournalingTradeoffs() {
    return (
        [
            "Tensions and Tradeoffs",
            <div>
                <ul>
                    <li>Sharing the learning can run a spectrum from full vulnerability to more content-driven exchanges
                        of
                        knowledge. Without trust already in place, asking folks to share their reflections can come
                        across
                        as deeply personal and potentially reduce the level of deep connection made during the activity.
                        At
                        the same time, sharing reflections can serve to increase the trust between members of a capacity
                        building effort if done well.
                    </li>
                    <br/>

                    <li>Another tension surrounds asking people to complete “homework” between capacity building
                        meetings.
                        For many, the value of spending time on reflective journaling is distal and indirect; there are
                        other priorities that have immediate, direct impact on their professional lives that are in
                        competition with the time needed for reflection and writing. Some people might find more value
                        in
                        reflecting or might have fewer competing priorities at this time or might just feel more
                        compelled
                        to contribute to the group’s norms and requests of them. As in many things, we cannot force
                        people
                        to share their learning - and
                    </li>
                </ul>
            </div>,
            <div>
                <ul>
                    <li>that’s alright. Capacity building is socially negotiated and if folks negotiate that reflective
                        journaling is not useful or tenable enough, it does not have to be part of the work.
                    </li>
                </ul>
            </div>
        ]
    );
}

function JournalingWhatMattered() {
    return (
        [
            "What Mattered for Us",
            <div>
                <div>This is an area where it can be helpful to provide some structure to increase the sense of meaning
                    that people experience. We had two people generate a starter list of prompts and then crowdsourced
                    additions. These prompts were then shared with everyone as a bank of potential prompts that could be
                    used for reflective journaling with the understanding that folks could also be opportunistic: if
                    they found themselves puzzling over something or noticing a theme that could be useful for others to
                    hear, those reflections would be just as useful as responding to a prompt.</div>

                <div>We also used reflective journaling as an accountability tool. For particular activities, such as the
                    literature review or the MOOCs, we predetermined a number of journal entries to be written by those
                    participating. This allowed us to be honest with one another about what we had and had not yet
                    completed from our agreed-upon tasks.</div>
            </div>
        ]
    );
}

function ToolsJournalingPrompts() {
    return (
        [
            "Tools: Prompt Ideas for Reflective Journaling",
            <div>
                <ul>
                    <li>Experiences and Lessons Learned</li>
                    <ul>
                        <li>What has (surprised, excited, dismayed) me about (x) is…</li>
                        <li>What I noticed about this (x) compared to xyz topic in my field is…</li>
                        <li>What the (x) showed me about privilege is…</li>
                        <li>The strategy I found most impactful for (x) was…</li>
                        <li>The most frustrating part of doing (x) was...and this is how I managed that…</li>
                        <li>The most exciting part of doing (x) was...and this is how I dove into that...</li>
                        <li>The experience of conducting/learning about (x) was…</li>
                        <li>Next time I do a (x) I will be sure to (repeat, not repeat) ….</li>
                        <li>The most challenging aspect of doing this was ... and I think this is why</li>
                        <li>What were some things my teammates did that helped me to learn or overcome obstacles?</li>
                        <li>How did I help others during this process? How do I feel I may have hindered others?</li>
                    </ul>
                </ul>
            </div>,
            <div>
                <ul>
                    <ul>
                        <li>The act of reflecting for me is (challenging, natural, superficial, etc.) and in the future
                            I
                            hope to
                            xyz when it comes to building reflection into work.
                        </li>
                        <li>I felt (surprised, as expected etc.) about how I did/did not feel a sense of belonging in
                            this
                            research at the beginning of our grant based on my professional background. What helped me
                            feeling
                            like I belonged or question my belonging were… XYZ things helped me work through these
                            feelings.
                        </li>
                    </ul>
                    <br/>

                    <li>Ideas New to Me</li>
                    <ul>
                        <li>I had never before considered …</li>
                        <li>Learning this (framework, idea, way of thinking) has altered how I (view, respond, value)...
                        </li>
                        <li>The most important thing I learned was … and why</li>
                        <li>The most challenging thing I learned was … and why</li>
                    </ul>
                </ul>
            </div>,
            <div>
                <ul>
                    <ul>
                        <li>In this work, I realized my comfort zone was xyz and I found I was able to push outside of
                            those
                            boundaries by doing xyz...
                        </li>
                        <li>XYZ idea of equity and access has fundamentally changed how I view/approach institutional
                            transformation by…
                        </li>
                    </ul>
                    <br/>

                    <li>Still Grappling With</li>
                    <ul>
                        <li>What do some of our early findings and learnings say about the field of xyz and xyz subject
                            we
                            examined/discussed? How will I handle the broader implication of these?
                        </li>
                        <li>I am still grappling with cognitive dissonance about xyz and this is how I am reflecting on
                            it.
                        </li>
                        <li>My personal beliefs and how I believe my institution can be transformed are similar in xyz
                            ways
                            and
                            different in xyz ways … and how you are wrestling with those
                        </li>
                        <li>Reckoning with my privilege left me feeling xyz and needing to continue to learn about
                            xyz...
                        </li>
                    </ul>
                </ul>
            </div>
        ]
    );
}

function ExpertiseQuestions() {
    return [
        {id: "humility", height: 1, text:
                <div>
                    <b>Humility</b>
                    <ol><li>Are we providing sufficient autonomy in choice of learning tool to support the team members’ different zones of proximal development?</li>
                        <li>Have we provided opportunities for the group to share their ideas about sources of learning so that they can all benefit from each other’s thinking?</li></ol>
                </div>
        },
        {id: "center", height: 1, text:
                <div>
                    <b>Center the People</b>
                    <ol><li>Have we built in enough time for the team to both do the learning and reflecting on it?</li>
                        <li>Have we provided prompts to guide the reflections in ways that support the individual learning outcomes as well as the team’s objectives?</li>
                    </ol>
                </div>
        }
    ];
}

function SharedKnowledge() {
    return (
        [
            "Building Shared Knowledge",
            <div>
                Capacity building is often considered an act of individual learning with the premise that the individual will then contribute more or differently to the larger organization. However, we find that the experience and outcomes of capacity building are both magnified when we share our learning with each other. Ideally, this approach builds on the idea that we each bring assets to the table - and we can and should use capacity building to further develop in a variety of ways. How do we then share our gifts and our learning with each other? Sharing the learning is critical to offering new insights and interpretations from our multiple perspectives.
            </div>
        ]
    );
}

function Communities() {
    return (
        [
            "Building Shared Knowledge: Communities of Practice",
            <div>
                Communities of practice (CoP) are a popular way to develop shared knowledge. In a community of practice practitioners regularly meet and share their experiences and learning with the goal of deepening individual and collective knowledge to advance a domain of professional practice. Individuals have the opportunity to learn from each other, sharing best practices, mistakes made, different perspectives and experiences. The social aspect is also important in affirming the importance and utility of the endeavor for those who may be discouraged or uncertain.
            </div>
        ]
    );
}

function CommunitiesWhatMattered() {
    return (
        [
            "What Mattered for Us",
            <div>
                We needed to constantly connect our individual learning goals and interests and broader capacity across our contexts. This necessitated a CoP model where we each engaged in three self-directed learning experiences, reflected, and then shared our learning with our team community. The facilitation of these CoP meetings rotated and required some pre-planning and resource development by the leads. We needed reflection questions, a clear format and meeting agenda, and clear timelines that allowed for us to have a learning experience in between meetings and set amounts of reflection and discussion time to make the best use of the collaborative time. Each CoP meeting was started with time to share our lives and get to know each other, usually about 30 minutes. We also needed time to say what wasn’t working and what we wanted to do moving forward. The three CoP meetings over the project period allowed for iteration and adjustment of the group’s and individual’s learning goals.
            </div>
        ]
    );
}

function CommunitiesResources() {
    return (
        [
            "Tips, Tools, Resources",
            <div>
                <div>As mentioned above each community of practice had an identified facilitator who planned these
                    meetings and developed a set of questions to guide the discussion. The facilitator can rotate among
                    the group, or be the same person each time. The questions provided need to be flexible to
                    accommodate the learning trajectory of the whole group. Here are example questions we used:</div>
                <ul>
                    <li>What mode of information did you choose to learn from? Why did that particular piece resonate
                        with
                        you?
                    </li>
                    <li>What impact did the piece have on your thinking as it relates to PBL? Or the implementation of
                        PBL?
                    </li>
                    <li>What did you find challenging regarding your change, DEI, or sustainable implementation
                        resource?
                    </li>
                    <li>What did you find refreshing or rewarding about the resource?</li>
                    <li>Reflect on how your experience in the MOOC relates to your identities (multiple) and your
                        possible
                        future practices.
                    </li>
                </ul>
                <div>Each meeting started with us in pairs or threes, sharing our answers to these questions, and was then
                    followed with some time to reflect and write, individually. We then regathered to share our
                    thoughts, and our writing, in the bigger group. This format proved very effective for us.</div>
            </div>
        ]
    );
}

function CommunitiesTradeoffs() {
    return (
        [
            "Tensions and Tradeoffs",
            <div>
                Finding ways to document the conversations and learning can pose problems. Participants may be concerned about sharing their learning and/or their writing publicly. We used powerpoint slides for our individual reflections - using bullet points meant less concern about exact wording or developing beautiful language. Concerns can be further reduced if there is a sense of community and trust in the group. This is important because the group benefits from the contributions of each individual.
            </div>
        ]
    );
}

function CommunitiesFailures() {
    return (
        [
            "Common Design Failures",
            <div>
                Expectations that these meetings will each lead to concrete deliverables or some anticipated outcomes can squelch what might end up being valuable conversations between the participants. While some organization and structure is important, it is also important to provide space for participants to explore ideas with each other - this can result in insights gleaned and built upon in ways that are difficult or impossible in a more directed setting.
            </div>
        ]
    );
}

function Retreats() {
    return (
        [
            "Building Shared Knowledge: Annual Retreats",
            <div>
                How do we strengthen potential partnerships in ways that take stock of progress and situate possibilities for the future? How do we ensure that there are throughlines from individuals’ interest and growing capacity to broader institutional priorities and capacity to meet them? Sometimes, stepping back from our everyday responsibilities and surroundings allows us to see the big picture and long-term more clearly. Annual retreats - when planned intentionally - can be powerful tools for accomplishing this productive disruption.
            </div>
        ]
    );
}

function TipOwnership() {
    return (
        [
            "Tip: Facilitating Shared Ownership",
            <div>
                <div>When one person serves as a project manager and directs the structure and content of capacity
                    building, participants are effectively disempowered over their own learning. How the group runs, how
                    people engage, what they get out of it - these are choices and everyone can be allowed to weigh in
                    on them.</div>

                <div>Facilitating team meetings requires that we keep an eye on the choice to engage in capacity building
                    rather than staffing a project. Capacity building that asks each person to take ownership over their
                    own learning opens up possibilities for engagement. This allows people to participate who have a lot
                    of experience and those with little experience without replicating hierarchies. Those who are
                    experts might not engage if the process is directive and assumes that those participating need to be
                    taught how to be experts.</div>
            </div>
        ]
    );
}

function RetreatsWhatMattered() {
    return (
        [
            "What Mattered for Us",
            <div>
                <div>We decided to include an annual retreat in each year of our initiative, which was planned for two
                    years. With partners dispersed across institutions in different regions, we initially wanted to
                    bring everyone together to the same in-person location; this plan was revised when the pandemic made
                    travel irresponsible (and, arguably, unethical).</div>

                <div>At the first annual retreat, the team focused on relationship building and exploring our research
                    interests. To elicit and share our research interests, we blended structured activities (e.g.,
                    participating in a Mad Tea Chat from Liberating Structures to share interests and introduce our
                    experiences to each other) with time for less structured discussions. Together, we reviewed findings
                    from the systematic literature review to build an understanding of where there are opportunities to
                    advance the field.</div>

                <div>As we connected our own interests with a growing sense of the landscape of existing practices</div>
            </div>,
            <div>
                <div>and studies, we explored our commitment to prioritizing issues of equity in STEM. The team engaged in
                    dialogue facilitated by WPI STEM Education Center’s Director of Equity, Access, and Community. They
                    assisted the group in examining our beliefs and biases around equity and inclusion in STEM
                    education. This professional identity work was necessary to ensure that research interests are built
                    on a foundation of understanding how certain identities have historically been excluded from STEM
                    fields. Doing so mitigates the chance that team members will inadvertently perpetuate inequity and
                    disparity within our own research agendas moving forward, which is important to us.</div>

                <div>In the second annual retreat, the team worked together to strategize how to position our research
                    interests in alignment with the broader priorities of our institutions. We focused on deepening our
                    relationships in ways that set us up for sustainability. Leading up to the team retreat in Spring
                    2022, team members from each institution worked with the appropriate center</div>
            </div>,
            <div>
                directors, deans of research, provosts, and other administrators at our institutions to assess opportunities to layer research agendas on PBL and organizational change into existing and upcoming strategic plans.
            </div>
        ]
    );
}

function ToolsMeetings() {
    return (
        [
            "Tools: Facilitating Good Meetings",
            <div>
                <div>Building capacity cannot follow a banking method of depositing capacity within people. We must design
                    in ways that allow those whose capacity is being developed to make decisions about what the goals of
                    the work will be, how the work will happen, and when they will engage. Remember: engaging in the
                    hard work of change is not compulsory. Superficial participation does not build capacity. Persuading
                    people to fully engage requires skillful facilitation.</div>

                <div>How meetings are structured makes a very real impact on engagement. <Link rel="noopener noreferrer" target={"_blank"} to="https://www.liberatingstructures.com/">Liberating Structures</Link> offers a
                    toolkit of options for setting up and running meetings and other activities in ways that invite
                    participation and yield useful outcomes. We used the <Link  rel="noopener noreferrer" target={"_blank"} to="https://learning-moments.net/2020/04/17/the-online-version-of-the-liberating-structure-mad-tea-is-booming/">Mad Tea Chat</Link>, adapted from the handbook into a
                    virtual-friendly format, to get to know one another better at the start of our first team
                    meeting.</div>
            </div>
        ]
    );
}

function RetreatsFailures() {
    return (
        [
            "Common Design Failures",
            <div>
                <ul>
                    <li>There are natural temptations to see oneself as an expert where you are comfortable with your
                        knowledge and believe it to be better than those around you. And this can extend to believing,
                        quite
                        naturally, that you have ownership to lead decisions because of that expertise. Resist this
                        narrative.
                    </li>
                    <br/>

                    <li>Sometimes people want someone to tell them what they are supposed to do. When the expectations
                        are
                        clear, we know what we must do to be considered successful. When someone else makes decisions,
                        we do
                        not hold accountability for the consequences of their choices. Don’t let anyone convince you
                        it’s
                        okay to tell them what to do.
                    </li>
                </ul>
            </div>
        ]
    );
}

function SharedKnowledgeQuestions() {
    return [
        {id: "humility", height: 1, text:
                <div>
                    <b>Humility</b>
                    <ol>
                        <li>How can leadership of the activities of the group be allocated to advance both the group and the capacities of individuals?</li>
                    </ol>
                </div>
        },
        {id: "center", height: 1, text:
                <div>
                    <b>Center the People</b>
                    <ol>
                        <li>What’s a reasonable meeting schedule that respects team members’ time and other responsibilities?</li>
                    </ol>
                </div>
        },
        {id: "design", height: 1, text:
                <div>
                    <b>Focus on Design</b>
                    <ol>
                        <li>What structures for our meetings will allow both progress on our initiative and time for participants to explore together?</li>
                    </ol>
                </div>
        },
        {id: "trust", height: 3, text:
                <div>
                    <b>Trust the Team</b>
                    <ol>
                        <li>Have we given enough time for there to be emergent conversations?</li>
                    </ol>
                </div>
        }
    ];
}

Doing.makeDirectory = function() {
    return sn_topic("Doing", Doing, setQuestionsColor("red"), "Doing Capacity Building", [
        sn("Getting to Know Your System", GettingToKnow, [
            sn("Literature Reviews", LiteratureReviews, [
                sn("Informal Review Process", LitInformal),
                sn("Tips: Finding Articles", TipsFindingArticles),
                sn("Tips: What's a \"Good\" Article?", TipsGoodArticles),
                sn("Tips: Formal Review Processes", TipsFormalReview),
                sn("Resources", LitReviewsResources)
            ]),
            sn("Surveys", Surveys, [
                sn("What Mattered for Us", SurveysWhatMattered),
                sn("Survey Development", SurveyDevelopment)
            ]),
            sn("SWOT Analysis", SWOT, [
                sn("What Mattered to Us", SWOTWhatMattered),
                sn("Tools: SWOT Prompts", ToolsSWOTPrompts),
                sn("Common Design Failures", SWOTFailures),
                sn("Tips: Alternatives to SWOT", TipsSWOTAlternatives),
                sn("Resources", SWOTResources)
            ]),
            sn_qtc("Getting to Know Your System", "knowsystem", GettingToKnowQuestions())
        ]),
        sn("Developing Individuals' Expertise", DevelopingExpertise, [
            sn("MOOCs and Directed Readings", MOOCsReadings, [
                sn("Finding MOOCs", FindingMOOCs),
                sn("Tips: Finding Useful Readings", TipsFindingReadings),
                sn("What Mattered for Us", MOOCsWhatMattered),
                sn("Resources", MOOCsResources),
                sn("Common Design Failures", MOOCsFailures)
            ]),
            sn("Apprenticeship Collaborations", ApprenticeCollabs, [
                sn("Tradeoffs and Tensions", ApprenticeTradeoffs)
            ]),
            sn("Reflective Journaling", Journaling, [
                sn("Tradeoffs and Tensions", JournalingTradeoffs),
                sn("What Mattered for Us", JournalingWhatMattered),
                sn("Tools: Sample Prompts", ToolsJournalingPrompts)
            ]),
            sn_qtc("Individual Expertise", "expertise", ExpertiseQuestions())
        ]),
        sn("Building Shared Knowledge", SharedKnowledge, [
            sn("Communities of Practice", Communities, [
                sn("What Mattered to Us", CommunitiesWhatMattered),
                sn("Resources", CommunitiesResources),
                sn("Tradeoffs and Tensions", CommunitiesTradeoffs),
                sn("Common Design Failures", CommunitiesFailures)
            ]),
            sn("Annual Retreats", Retreats, [
                sn("Tip: Shared Ownership", TipOwnership),
                sn("What Mattered to Us", RetreatsWhatMattered),
                sn("Tools: Effective Meetings", ToolsMeetings),
                sn("Common Design Failures", RetreatsFailures)
            ]),
            sn_qtc("Shared Knowledge", "sharedknowledge", SharedKnowledgeQuestions())
        ])
    ]);
}

export default Doing;