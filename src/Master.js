import React, {useState, useEffect} from 'react';
import {Xwrapper} from "react-xarrows";
import MindMap from "./MindMap";
import Sidebar from "./Sidebar";
import BodyCardStack from "./BodyCardStack";

import './Sketch3.css';
import {setPalette} from "./ColorManager";
import {useLocation} from "react-router-dom";
import {addBookmark, clearBookmarks, getAllAccessibility} from "./UserDataManager";
import BottomDrawer from "./BottomDrawer";

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