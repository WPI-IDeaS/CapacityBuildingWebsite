/**
 * Major routing endpoints.
 */

import React from 'react';
import {Xwrapper} from "react-xarrows";
import MindMap from "./MindMap";
import Sidebar from "./Sidebar";
import BodyCardStack from "./BodyCardStack";

import './Sketch3.css';
import {setPalette} from "./ColorManager";
import BottomDrawer from "./BottomDrawer";

/**
 * Homepage with a mind map-style directory.
 */
export function Home() {
    setPalette("green");

    return (<div className="App-nobar">
        <div className='titlefloat'>
            <div><div style={{fontSize: 60}}>WPI IDeaS Guide to</div>
                <span style={{fontWeight: "bold"}}>Capacity Building</span></div>
        </div>
        <br/>
        <div style={{fontSize: "x-large", float: "right"}}>
            Click on any of the nodes below to get started... or click the + to see what's in each section first!
        </div>
        <Xwrapper>
            <MindMap/>
        </Xwrapper>
    </div>);
}

/**
 * Content page with surrounding tools.
 * Content window generally plays host to a BodyCardStack but can be supplied with a different element.
 *
 * @param content content to display in the window; will be wrapped in individual cards if it is a list.
 * @param bigTitle title to show in the top right.
 * @param prev page before this one in the directory, if any.
 * @param next page after this one in the directory, if any.
 */
export function ContentPage({content, bigTitle, prev, next}) {
    function titleBubble(title) {
        return (<span className='titleshape'>
            <div className='titleshape-blurb'>
                {title}
            </div>
        </span>);
    }

    let contentDisplay;
    if (Array.isArray(content)) {
        contentDisplay = BodyCardStack(content[0], content.slice(1), 0, prev, next);
    }
    else {
        contentDisplay = content;
    }

    return (<div className="App">
        <Sidebar/>
        {titleBubble(bigTitle)}
        <div className='app-shadow'>
            {contentDisplay}
        </div>
        <BottomDrawer/>
    </div>);
}