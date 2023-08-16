import React, {useEffect, useState} from 'react';
//import './Sketch3.css';
import './MindMap.css';
import {siteDirectory} from './Directory';
import Xarrow, {useXarrow} from "react-xarrows";
import {Link} from "react-router-dom";
import {MindMapCore} from "./PaletteIcons";

function MindMap() {
    const updateXarrow = useXarrow();

    let [tranCt, setTranCt] = useState(0);
    useEffect(() => {
        const onTransitionStart = (event) => (setTranCt(tranCt + 1));
        const onTransitionEnd = (event) => (setTranCt(tranCt - 1));

        window.addEventListener('transitionstart', onTransitionStart);
        window.addEventListener('transitionend', onTransitionEnd);

        const updateArrows = setInterval(() => {
            if (tranCt > 0) {
                updateXarrow()
            }
        }, 50)

        return () => {
            window.removeEventListener('transitionstart', onTransitionStart);
            window.addEventListener('transitionend', onTransitionEnd);
            clearInterval(updateArrows);
        }
    });

    const depthLimit = 3;

    let posDepth = 0;
    let negDepth = 0;
    let cols = [
        [
            <div className="bubble major-text-xl" key="MAIN" id="MAIN">
                <MindMapCore/>
            </div>
        ]
    ];

    function dptIdx(isNeg, depth) {
        return (isNeg ? -1 * depth : depth) + negDepth;
    }

    function handleExpanderClick(e) {
        const toggleThese = document.getElementsByClassName(e.target.dataset.classToClose);

        let index = dptIdx(e.target.dataset.countDir === "true", Number(e.target.dataset.countIndex));
        index = index + (e.target.dataset.countDir === "true"? -1:1)

        if(e.target.dataset.isClosed == "true") {
            for (let i = 0; i < toggleThese.length; i++) {
                toggleThese[i].classList.remove("thinned");
            }

            e.target.dataset.isClosed = "false";
            e.target.classList.add("open-expander")

            const col = document.getElementsByClassName("close-with-col" + index)[0];
            col.classList.remove("thinned");
        }
        else {
            for (let i = 0; i < toggleThese.length; i++) {
                toggleThese[i].classList.add("thinned");

                const subExps = toggleThese[i].querySelectorAll(".open-expander")
                if (subExps.length > 0) {
                    for (const exp of subExps) {
                        exp.click();
                    }
                }
            }

            e.target.dataset.isClosed = "true";
            e.target.classList.remove("open-expander");

            const col = document.getElementsByClassName("close-with-col" + index)[0];
            const thinnedList = col.querySelectorAll(":scope > :not(.thinned)");
            //console.log(thinnedList);
            if(thinnedList.length === 0) {
                col.classList.add("thinned");
            }
        }

        updateXarrow();
    }

    function traverseDir(dir, isNeg, depth, color, lastPoint, parentId, id, extraMargin = false, titleStyle = false) {
        if (isNeg) {
            if (depth > negDepth) {
                negDepth++;
                cols.unshift([]);
            }
        } else {
            if (depth > posDepth) {
                posDepth++;
                cols.push([]);
            }
        }

        // Add row to a column
        const addTo = dptIdx(isNeg, depth);

        let expander = "";
        if (dir.children !== null && depth < depthLimit) {
            if (isNeg) {
                expander = (
                    <div className='expander bubble-expander-left' id={"expander-" + id} onClick={handleExpanderClick}
                         data-class-to-close={"close-with-" + id} data-count-index={depth} data-count-dir={isNeg}  data-is-closed="true">
                        <svg height="24" width="28">
                            <line x1="16" y1="12" x2="28" y2="12" style={{stroke: "var(--pal-" + color + ")", strokeWidth: 2}} />
                            <circle cx="12" cy="12" r="12" fill={"var(--pal-" + color + ")"} />
                            <line className={"minus-vertical"} x1="12" y1="18" x2="12" y2="6" style={{stroke: "var(--pal-cream)", strokeWidth: 2, strokeLinecap: "round"}} />
                            <line x1="6" y1="12" x2="18" y2="12" style={{stroke: "var(--pal-cream)", strokeWidth: 2, strokeLinecap: "round"}} />
                        </svg>
                    </div>
                );
            } else {
                expander = (
                    <div className='expander bubble-expander-right' id={"expander-" + id} onClick={handleExpanderClick}
                         data-class-to-close={"close-with-" + id} data-count-index={depth} data-count-dir={isNeg}  data-is-closed="true">
                        <svg height="24" width="28">
                            <line x1="0" y1="12" x2="12" y2="12" style={{stroke: "var(--pal-" + color + ")", strokeWidth: 2}} />
                            <circle cx="16" cy="12" r="12" fill={"var(--pal-" + color + ")"} />
                            <line className={"minus-vertical"} x1="16" y1="18" x2="16" y2="6" style={{stroke: "var(--pal-cream)", strokeWidth: 2, strokeLinecap: "round"}} />
                            <line x1="10" y1="12" x2="22" y2="12" style={{stroke: "var(--pal-cream)", strokeWidth: 2, strokeLinecap: "round"}} />
                        </svg>
                    </div>
                );
            }
        }

        let connector = "";
        if (parentId === "MAIN") {
            connector = (
                <div className="arrow-holder">
                    <Xarrow
                        start={"arrow-connector-" + color}
                        end={id}
                        endAnchor={["right", "left"]}
                        showHead={false}
                        strokeWidth={2}
                        lineColor={"var(--pal-" + color + ")"}
                    />
                </div>
            );
        } else {
            connector = (
                <div className="arrow-holder">
                    <Xarrow
                        start={"expander-" + parentId}
                        end={id}
                        startAnchor={["right", "left"]}
                        endAnchor={["right", "left"]}
                        showHead={false}
                        strokeWidth={2}
                        lineColor={"var(--pal-" + color + ")"}
                    />
                </div>
            );
        }

        //console.log((isNeg? "-":"") + depth + " (index " + addTo + ")");
        cols[addTo].push(
            <div className={"f-row close-with-" + parentId + (extraMargin ? " double-top-margin" : "") + (parentId == "MAIN"? "":" thinned")} key={id}
                 style={{flex: (dir.children !== null ? dir.children.length : 1)}}>
                {isNeg? expander:""}
                <div className={"bubble close-with-" + parentId + (titleStyle ? " major-text" : "") + (parentId == "MAIN"? "":" thinned")} id={id}
                     style={{background: "color-mix(in srgb, var(--pal-" + color + ") var(--pal-blend" + depth +"), var(--pal-white))", overflow: "visible"}}>
                    <div className="text-fix">
                        <Link to={dir.expandedLink}>{dir.label}</Link>
                    </div>
                    {connector}
                </div>
                {isNeg? "":expander}
            </div>
        );

        if (dir.children !== null && depth < depthLimit) {
            let isFirst = true;
            let initId = 1;
            for (const node in dir.children) {
                traverseDir(dir.children[node], isNeg, depth + 1, (dir.children[node].color !== null ? dir.children[node].color : color), null, id, id + "." + initId++, isFirst);
                isFirst = false;
            }
        }
    }

    function createMap() {
        let thisOneNeg = true;
        let initId = 1;
        for (const node in siteDirectory) {
            traverseDir(siteDirectory[node], thisOneNeg, 1, siteDirectory[node].color, null, "MAIN", "" + initId++, false, true);
            thisOneNeg = !thisOneNeg;
        }

        const result = [];
        let idInc = 0;
        for (const col in cols) {
            result.push(
                <div key={"col_" + idInc} className={'f-col close-with-col' + idInc++ + ((col < 2 || col > 4)? " thinned":"")}>
                    {cols[col]}
                </div>
            );
        }
        return result;
    }

    return (
        <div id="container">
            {createMap()}
        </div>
    );
}

export default MindMap;
