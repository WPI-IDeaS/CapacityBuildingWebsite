import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";

import {addBookmark,isBookmarked, removeBookmark} from "./UserDataManager";
import {IconAccessibility, IconAddBookmark, IconBookmarksList, IconMyCB, IconRemoveBookmark} from "./PaletteIcons";
import {getOrderedFriendlyBookmarks} from "./Directory";

import "./BottomDrawer.css"

import Caret from "./images/icons/caret.svg"

function CentralScrollPanel() {

}

function BottomDrawer() {
    const currentPath = useLocation().pathname;
    const [bookmarkSolidState, setBookmarkSolid] = useState(isBookmarked(currentPath));
    const [showSavedPagesState, setShowSavedPages] = useState(false);

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
        setShowSavedPages(!showSavedPagesState);
    }

    useEffect(() => {
        setBookmarkSolid(isBookmarked(currentPath));
    }, [currentPath])

    let marksIndex = 0;
    return (
        <div>
            <div className="drawer">
                <div className="drawer-handle" data-bs-toggle="collapse" data-bs-target="#collapseDrawer"
                     aria-expanded="false" aria-controls="collapseDrawer">
                    <img className="caret" src={Caret} alt="Toggle drawer"/>
                </div>
                <div className="collapse" id="collapseDrawer">
                    <div className="drawer-content">
                        <button title="Your Capacity Building">
                            <IconMyCB/>
                        </button>
                        <button title={bookmarkSolidState ? "Remove from Saved Pages" : "Save this Page"}
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
                        <button title="Accessibility Settings">
                            <IconAccessibility/>
                        </button>
                    </div>
                </div>
            </div>
            <div id="saved-pages-panel" className="central-scroll-panel" style={{display: showSavedPagesState? "flex" : "none"}}>

                <div className="panel-title">
                    Saved Pages
                </div>
                <div className="panel-scroll">
                    <br/>
                    {getOrderedFriendlyBookmarks().map((e) =>
                        <div key={marksIndex++} className="bookmarks-entry">
                            <Link to={e.link}>{e.mainTitle}</Link>
                        </div>
                    )}
                    <br/>
                </div>

            </div>
        </div>
    );
}

export default BottomDrawer;