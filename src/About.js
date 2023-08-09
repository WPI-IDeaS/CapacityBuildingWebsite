import React, {useState, useEffect} from 'react';
import {sn, sn_topic} from "./SiteNode";

function About() {
    return (
        [
            "About",
            <div>
                About
            </div>,
            <div>
                About 2
            </div>
        ]
    );
}

function OurGoals() {
    return (
        [
            "Our Goals",
            <div>
                Goals
            </div>,
            <div>
                Goals 2
            </div>
        ]
    );
}

function OurAudience() {
    return (
        [
            "Our Audience",
            <div>
                Aud
            </div>,
            <div>
                Goals 2
            </div>
        ]
    );
}

About.makeDirectory = function() {
    return sn_topic("About", About, "blue", "About Capacity Building", [
        sn("Our Goals", OurGoals),
        sn("Our Audience", OurAudience),
        sn("Why Do Capacity Building", "-link-"),
        sn("What is Capacity Building", "-link-"),
        sn("Phases of Capacity Building", "-link-")
    ]);
}

export default About;
