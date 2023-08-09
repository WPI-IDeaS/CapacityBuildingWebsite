import React, {useState, useEffect} from 'react';
import {sn, sn_topic} from "./SiteNode";

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

function Normative() {
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

function Container() {
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

function VsStaffingTradeoffs() {
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

function TipStructure() {
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

function VsStaffingWhatMattered() {
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

function TensionsResistance() {
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

function TipOwnership() {
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

function VsStaffingQuestions() {
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

Planning.makeDirectory = function() {
    return sn_topic("Planning", Planning, "yellow", "Planning Capacity Building", [
        sn("Building Capacity vs. Staffing", VsStaffing, [
            sn("Normative Beliefs", Normative),
            sn("Designing a Container", Container),
            sn("Tradeoffs and Tensions", VsStaffingTradeoffs),
            sn("Tip: How Much Structure?", TipStructure),
            sn("What Mattered for Us", VsStaffingWhatMattered),
            sn("Tensions: The Resistance", TensionsResistance),
            sn("Tip: Sharing Ownership", TipOwnership),
            sn("Questions to Consider", VsStaffingQuestions)
        ]),
        sn("Allocating Resources and Budgeting", "-link-", [
            sn("Tip: Sources of Resources", "-link-"),
            sn("What Mattered for Us", "-link-"),
            sn("Common Design Failures", "-link-"),
            sn("Questions to Consider", "-link-")
        ]),
        sn("Building Your Team", "-link-", [
            sn("Tradeoffs and Tensions", "-link-"),
            sn("What Mattered for Us", "-link-"),
            sn("Common Design Failures", "-link-"),
            sn("Questions to Consider", "-link-")
        ])
    ]);
}

export default Planning;