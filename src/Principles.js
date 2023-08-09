import React, {useState, useEffect} from 'react';
import {sn, sn_topic} from "./SiteNode";

function Principles() {
    return (
        [
            "Principles",
            <div>
                About
            </div>,
            <div>
                About 2
            </div>
        ]
    );
}

Principles.makeDirectory = function() {
    return sn_topic("Principles", Principles, "green", "The Guiding Principles", [
        sn("Humility", "-link-"),
        sn("Center the People", "-link-"),
        sn("Focus on Design, Not Outcomes", "-link-"),
        sn("Trust the Team", "-link-")
    ]);
}

export default Principles;