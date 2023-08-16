import React, {useState, useEffect} from 'react';
import {sn, sn_topic} from "./SiteNode";
import {addDefs, Def} from "./DefinitionManager";
import {MentorAttention, MentorHappy, MentorNeutral, MentorTalk} from "./MentorFace";
import {Link} from "react-router-dom";
import {setQuestionsColor} from "./QuestionsManager";

function About() {
    return (
        [
            "About",
            <div>
                <div>This is the About section! Use the left-hand sidebar or the links below to explore the
                    following sections:</div>
                <ul>
                    <li><Link to="/about/our-goals" style={{color: "var(--pal-main)"}}>Our Goals</Link></li>
                    <li><Link to="/about/our-audience" style={{color: "var(--pal-main)"}}>Our Audience</Link></li>
                    <li><Link to="/about/why-do-capacity-building" style={{color: "var(--pal-main)"}}>Why Do Capacity Building?</Link></li>
                    <li><Link to="/about/what-is-capacity-building" style={{color: "var(--pal-main)"}}>What is Capacity Building?</Link></li>
                    <li><Link to="/about/phases-of-capacity-building" style={{color: "var(--pal-main)"}}>Phases of Capacity Building</Link></li>
                </ul>
            </div>
        ]
    );
}

function OurGoals() {
    addDefs(
        {
            "SYS": <span><MentorTalk />Many programs, initiatives, and interventions aim at changing individuals; systemic change goes beyond individuals as the site of intervention and focus instead on changing all (or most) parts of an entire system. The idea is that individuals are shaped by the systems we inhabit; without changing those systems, it is actually quite difficult for individuals to sustain changes. Changes entire systems can also increase the scale of change as it supports change in every individual within the system, rather than only those targeted by a specific program, initiative, or intervention.</span>
        }
    );

    return (
        [
            "Our Goals",
            <div>
                <div>We’re here to share resources for teams who want to build capacity for <Def tag="SYS">systemic change</Def>. Imagine the
                    good that can happen if we share what we know with those who have some interest in systemic change,
                    prefer collaboration over isolation, and have an opportunity to organize others?</div>
                <div>If you had a mentor - these are the things they would tell you.</div>
            </div>
        ]
    );
}

function OurAudience() {
    addDefs(
        {
            "CM": <span><MentorHappy/>To learn more about what being a changemaker means and how to become one, check out <Link target="_blank" rel="noopener noreferrer" to="https://www.ashoka.org/en-us/story/what-does-change-maker-mean">Ashoka's website!</Link></span>
        }
    );

    return (
        [
            "Our Audience",
            <div>
                <div>Often budding <Def tag="CM">changemakers</Def> are not trained as facilitators or as
                    faculty developers or as researchers.</div>
                <ul>
                    <li>If you are an academic whose entire career (and possibly life, it may feel) has centered around
                        and
                        rewarded being an expert and, at times, yielding to those who are, this guide is for you.
                    </li>
                    <li>If you are a researcher who is doing capacity building with colleagues, but your training and
                        experience have centered around doing research and teaching students, this guide is for you.
                    </li>
                    <li>If you are working within a nonprofit and are concerned with maintaining relationships while
                        being
                        pressed to achieve outcomes efficiently, this guide is for you.
                    </li>
                    <li>If you are in a funding agency and want some ideas of collaborative practices to encourage
                        grantees
                        to consider, this guide is for you.
                    </li>
                    <li>If you think information on collaborative capacity building could be useful for a goal you have,
                        this
                        guide is for you.
                    </li>
                </ul>
            </div>
        ]
    );
}

function WhyDo() {
    addDefs(
        {
            "INS": <span><MentorNeutral/>Institutional change is one type of systemic change in which the goal is to shift an entire institution (e.g., a university, a non-profit organization, a governing body) to adopt new goals, use a new set of practices, or change the culture.</span>,
            "EXP": <span><MentorAttention/>It's amazing how much we experience without being aware of what, exactly, is happening and why! When our environments change, the influences are often indirect and far from our own position within the institution, making it difficult to perceive while we are experiencing it.</span>
        }
    );

    return (
        [
            "Why Do Capacity Building?",
            <div>
                <div><Def tag="INS">Institutional change</Def> is complex and often it is <Def tag="EXP">experienced</Def> passively. It is not something we have a
                    good intuitive understanding of until we consciously examine our assumptions, experiences, and
                    contexts through the lenses of change. Why are things the way they are? Who benefits - and who is
                    not benefiting? Are there better ways to reach our goals?</div>

                <div>Choosing to engage in capacity building is an investment in long-term success. It allows you a level
                    of protection against unknown future challenges, particularly those that require people to feel
                    empowered to problem solve in a creative way.</div>
            </div>
        ]
    );
}

function WhatIsCB() {
    addDefs(
        {
            "HELD": <span><MentorHappy/>Just like the saying, "the whole is greater than the sum of its parts" - we may each be a part of a group's capacity, but the whole group collectively holds more capacity than any individuals' set of contributions to the team.</span>
        }
    );

    return (
        [
            "What is Capacity Building?",
            <div>
                <div>Capacity can be amorphous. It is both <Def tag="HELD">individually and collectively held</Def> and constantly in flux. When
                    we talk about capacity, we include everything that allows us to reach our objectives. This can
                    include resources like funding and labor; it also includes knowledge and how we share meaning.</div>
                <div>Capacity in our institutions is really held in the people, so your capacity building process needs to
                    support the development of people within the contexts that matter to them. That inherently is going
                    to be more dynamic, contextualized, and individualized than staffing a predetermined set of tasks.
                    The questions become, How do you create a process for people that makes them want to come engage in
                    this work and that can connect them to each other? How do you gather and provide the resources that
                    sustain their ability to advance this work within their context, their values, and zone of
                    influence?</div>
            </div>,
            <div>
                When you are building capacity within people for an organization, you need to create the space for capacity to look many different ways, to be greater as a whole than in individuals, and to be fully inclusive and participatory. This is especially the case if you are grappling with entrenched issues in education (e.g., improving instruction, systemic change) and seeking novel solutions: there has to be enough space and play within your design to allow for unanticipated emergent findings and for people in the process to make their own meaning.
            </div>
        ]
    );
}

function Phases() {

    return (
        [
            "Phases of Capacity Building",
            <div>
                <div>Like many well-planned initiatives, we can think about three phases of capacity building: planning,
                    doing, and extending. This guide is organized by phase to provide insights that are suited to
                    wherever you are in your process:</div>

                <ol><li><Link to="/planning" style={{color: "var(--pal-yellow)"}}>Planning capacity building</Link></li>
                    <li><Link to="/doing" style={{color: "var(--pal-red)"}}>Doing capacity building</Link></li>
                    <li><Link to="/extending" style={{color: "var(--pal-violet)"}}>Extending capacity building</Link></li></ol>

                <div>Feel free to engage in learning about all of the phases or to dive in to the one that fits your
                    current needs!</div>

            </div>
        ]
    );
}

About.makeDirectory = function() {
    return sn_topic("About", About, setQuestionsColor("blue"), "About Capacity Building", [
        sn("Our Goals", OurGoals),
        sn("Our Audience", OurAudience),
        sn("Why Do Capacity Building", WhyDo),
        sn("What is Capacity Building", WhatIsCB),
        sn("Phases of Capacity Building", Phases)
    ]);
}

export default About;
