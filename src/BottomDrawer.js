import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";

import {addBookmark,isBookmarked, removeBookmark} from "./UserDataManager";
import {IconAccessibility, IconAddBookmark, IconBookmarksList, IconMyCB, IconRemoveBookmark} from "./PaletteIcons";
import {getOrderedFriendlyBookmarks} from "./Directory";

import "./BottomDrawer.css"

import Caret from "./images/icons/caret.svg"
import MyCB from "./MyCB";

function CentralScrollPanel() {

}

function BottomDrawer() {
    const currentPath = useLocation().pathname;
    const [bookmarkSolidState, setBookmarkSolid] = useState(isBookmarked(currentPath));
    const [showPanelState, setShownPanel] = useState("");

    function toggleBookmark() {
        if (bookmarkSolidState) {
            removeBookmark(currentPath);
            setBookmarkSolid(false);
            document.querySelector("[data-page-save-query-path=\"" + currentPath + "\"]").style.display = "none";
        }
        else {
            addBookmark(currentPath);
            setBookmarkSolid(true);
            document.querySelector("[data-page-save-query-path=\"" + currentPath + "\"]").style.display = "block";
        }
    }

    function toggleSavedPages() {
        if (showPanelState == "bookmarks") {
            setShownPanel("");
        }
        else {
            setShownPanel("bookmarks");
        }
    }

    function toggleResponses() {
        if (showPanelState == "responses") {
            setShownPanel("");
        }
        else {
            setShownPanel("responses");
        }
    }

    function toggleAccessibility() {
        if (showPanelState == "accessibility") {
            setShownPanel("");
        }
        else {
            setShownPanel("accessibility");
        }
    }

    function closePanel() {
        if (showPanelState == "responses") return;
        setShownPanel("");
    }

    useEffect(() => {
        setBookmarkSolid(isBookmarked(currentPath));
    }, [currentPath])

    let marksIndex = 0;
    return (
        <div>
            <div className="drawer">
                <div className="drawer-handle" title="Show/hide toolbox" data-bs-toggle="collapse" data-bs-target="#collapseDrawer"
                     aria-expanded="false" aria-controls="collapseDrawer" onClick={closePanel}>
                    <img className="caret" src={Caret} alt="Toggle drawer"/>
                </div>
                <div className="collapse" id="collapseDrawer">
                    <div className="drawer-content">
                        <button title="Your Capacity Building" onClick={toggleResponses}>
                            <IconMyCB/>
                        </button>
                        <button title={bookmarkSolidState ? "Remove from Saved Pages" : "Save this page"}
                                onClick={toggleBookmark}>
                            {
                                bookmarkSolidState ?
                                    <IconRemoveBookmark/>
                                    :
                                    <IconAddBookmark/>
                            }
                        </button>
                        <button title="Your Saved Pages" onClick={toggleSavedPages}>
                            <IconBookmarksList/>
                        </button>
                        <button title="Accessibility settings">
                            <IconAccessibility/>
                        </button>
                    </div>
                </div>
            </div>
            <div id="saved-pages-panel" className="central-scroll-panel" style={{display: showPanelState=="bookmarks"? "flex" : "none"}}>

                <div className="panel-title">
                    Saved Pages
                </div>
                <div className="panel-scroll">
                    <br/>
                    {getOrderedFriendlyBookmarks().map((e) =>
                        <Link to={e.link} key={marksIndex++} className="bookmarks-entry">
                            {e.mainTitle}
                            <div style={{fontSize: "small"}}>
                                {e.subPath}
                            </div>
                        </Link>
                    )}
                    <br/>
                </div>

            </div>
            <div style={{position: "fixed", width: "100%", height: "100%", top: 0, left: 0, display: showPanelState=="responses"? "block" : "none"}}>
                <MyCB></MyCB>
            </div>
        </div>
    );
}

export default BottomDrawer;