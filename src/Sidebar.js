import React, {useEffect} from 'react';
import './Sketch3.css';
import {siteDirectory} from './Directory';
import {Link, useLocation} from "react-router-dom";
import {Collapse} from '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import {isBookmarked} from "./UserDataManager";

import Bookmark from './images/icons/bookmark.svg'
import search from "./images/icons/search.png";
import SideDrawer from "./SideDrawer";

function sbAcc(item, id, parentId, url) {
    const useParent = false;

    let childItems = sbProcessChildren(item.children, id, url);

    const beOpen = url.includes(item.expandedLink);
    //console.log(url + ", " + item.expandedLink + "; " + beOpen)

    let drop = "";
    if(item.children !== null) {
        drop = <button className={"accordion-button sidenav-accdropdown" + (beOpen? "":" collapsed")} type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_" + id} aria-expanded={beOpen? "true":"false"} aria-controls={"collapse_" + id}></button>;
    }
    else {
        drop = <div className="sidenav-accdropdown"></div>;
    }

    let bookmarker = <img className="sidenav-bookmark" src={Bookmark} alt="Bookmark" width={12} data-page-save-query-path={item.expandedLink} style={{display: isBookmarked(item.expandedLink)? "block":"none"}}/>;

    return (
        <div className="accordion-item sidenav-accitem" key={id}>
            <b className="accordion-header sidenav-acchead" id={"heading_" + id}>
                {drop}
                <Link style={{fontWeight: parentId == ""? 700:500}} to={item.expandedLink}>{item.label}</Link>
                {bookmarker}
            </b>
            <div id={"collapse_" + id} className={"accordion-collapse collapse" + (beOpen? " show":"")} aria-labelledby={"heading_" + id} data-bs-parent={useParent? ("#sideNavAccordion_" + parentId):""}>
                <div className="accordion-body sidenav-accbody">
                    <div className="accordion sidenav-acc" id={"sideNavAccordion_" + id}>
                        {childItems}
                    </div>
                </div>
            </div>
        </div>
    );
}

function sbProcessChildren(children, id, url) {
    const items = [];
    const connector = id === ""? "" : ".";
    if(children !== null) {
        let index = 1;
        for(const child of children) {
            items.push(sbAcc(child, id + connector + index++, id, url));
        }
    }

    return items;
}

function meetsSearchterm(content, term) {
    if (term == "") return false;
    return content.includes(term);
}

function searchHelper(currentAcc, sch) {
    let openParent = false;
    for (const child of currentAcc.children) {
        const cont = child.querySelector("a");
        const coll = child.querySelector(".collapse");
        const collBS = Collapse.getInstance(coll);
        console.log(collBS);
        if (meetsSearchterm(cont.innerHTML.toLowerCase(), sch)) {
            cont.classList.add("search-selected");
            openParent = true;
        }
        else {
            cont.classList.remove("search-selected");
        }

        const nextAcc = coll.querySelector('.sidenav-acc');
        if (nextAcc != null && nextAcc.children.length > 0) {
            if (searchHelper(nextAcc, sch)) {
                collBS.show();
                openParent = true;
            }
            else {
                collBS.hide();
            }
        }
    }

    return openParent;
}

function searchBar(e) {
    const sch = e.target.value.toLowerCase();
    //console.log(sch);

    const topAcc = document.getElementById('sideNavAccordion_');
    topAcc.classList.add("animations-disabled");

    if (sch == "") {
        topAcc.classList.remove("mid-search");
    }
    else {
        topAcc.classList.add("mid-search");
    }

    searchHelper(topAcc, sch);
}

function putNavAnimationBack() {
    const topAcc = document.getElementById('sideNavAccordion_');
    topAcc.classList.remove("animations-disabled");
}

function Sidebar() {
    useEffect(() => {
        for (const acc of document.querySelectorAll(".collapse")) {
            new Collapse(acc, {
                toggle: false
            });
        }
    }, []);

    const pathRn = useLocation().pathname;

    return (
        <div className="App-sidenav">
            <SideDrawer/>
            <div className="sidenav-title">
                Quick Access
                <div className="search">
                    <img src={search} height="27px" style={{float: "left", filter: "var(--pal-icon-filter)"}}/>
                    <input onKeyUp={searchBar} onBlur={putNavAnimationBack} type="text" name="search" placeholder="Search sections..." />
                </div>
            </div>
            <div className="left-scroll-outer">
                <div className="left-scroll-inner">
                    <br/>
                    <div className="accordion sidenav-top-acc" id="sideNavAccordion_">
                        {sbProcessChildren(siteDirectory, "", pathRn)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
