import React, {useState, useEffect} from 'react';
import {Xwrapper} from "react-xarrows";
import MindMap from "./MindMap";
import Sidebar from "./Sidebar";
import BodyCardStack from "./BodyCardStack";

import './Sketch3.css';
import {setPalette} from "./ColorManager";
import {useLocation} from "react-router-dom";
import {addBookmark, clearBookmarks} from "./UserDataManager";
import BottomDrawer from "./BottomDrawer";

export function Home() {
    setPalette("green");

    return (<div className="App-nobar">
        <div className='titlefloat'>
            Directory
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
            <BottomDrawer/>
        </div>
    </div>);
}