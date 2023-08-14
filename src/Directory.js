import {BrowserRouter as Router, Routes, Route, useParams, createHashRouter, RouterProvider} from "react-router-dom";
import About from "./About";
import Principles from "./Principles";
import Planning from "./Planning";
import Doing from "./Doing";
import Extending from "./Extending";

import {Home, ContentPage} from "./Master";
import {setPalette} from "./ColorManager";
import {getBookmarks} from "./UserDataManager";

// LEAVE TRUE IF DEPLOYING TO GH PAGES
const USE_HASH = false;

export function CapacityRouter() {
    if (USE_HASH) {
        const router = createHashRouter([
            {
                path: "/*",
                element: <CapacityRouterRoutes />,
            }
        ]);
        return (
            <RouterProvider router={router}/>
        );
    }

    return (
        // PRODUCTION VERSION
        <Router>
            <CapacityRouterRoutes/>
        </Router>
    );
}


export const siteDirectory = [
    About.makeDirectory(),
    Principles.makeDirectory(),
    Planning.makeDirectory(),
    Doing.makeDirectory(),
    Extending.makeDirectory()
];

function CapacityRouterRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:section/*" element={<BroadCapacityRouterHelper />} />
        </Routes>
    );
}

function findNodeByLinkIn(parent, link) {
    const linkLower = link.toLowerCase();
    for (let i in parent) {
        if (parent[i].link == linkLower) {
            return parent[i];
        }
    }
    return undefined;
}

function BroadCapacityRouterHelper() {
    const {section} = useParams();

    const node = findNodeByLinkIn(siteDirectory, section)
    if (node === undefined) return "WRONG";

    setPalette(node.color);
    return (
        <Routes>
            <Route path="/" element={<ContentPage content={node.contentFn()} bigTitle={node.bigTitle} prev={node.previousSectionLink} next={node.nextSectionLink} />} />
            <Route path="/:section/*" element={<CapacityRouterHelper currentNode={node} bigTitle={node.bigTitle} />} />
        </Routes>
    );
}

function CapacityRouterHelper({currentNode, bigTitle}) {
    const {section} = useParams();

    //console.log("looking for: " + section)
    //console.log(currentNode)
    const node = findNodeByLinkIn(currentNode.children, section)
    if (node === undefined) return "WRONG";

    return (
        <Routes>
            <Route path="/" element={<ContentPage content={typeof node.contentFn === 'string'? [node.contentFn, ""] : node.contentFn()} bigTitle={bigTitle} prev={node.previousSectionLink} next={node.nextSectionLink} />} />
            <Route path="/:section/*" element={<CapacityRouterHelper currentNode={node} bigTitle={bigTitle} />} />
        </Routes>
    );
}

function expandLinksHelper(directory, pathSoFar) {
    let lastNode = null;
    for (const node of directory) {
        node.expandedLink = pathSoFar + "/" + node.link;

        if (lastNode != null) {
            lastNode.nextSectionLink = node.expandedLink;
            node.previousSectionLink = lastNode.expandedLink;
        }
        if (node.children != null) {
            expandLinksHelper(node.children, node.expandedLink)
        }

        lastNode = node;
    }
}

function expandAllLinks() {
    expandLinksHelper(siteDirectory, "")
}

export function getOrderedFriendlyBookmarks() {
    const marks = getBookmarks();
    const friendlyMarks = [];

    function traverseForBookmarks(dir, pathSoFar) {
        for (const node of dir) {
            if (marks.includes(node.expandedLink.substring(1))) {
                friendlyMarks.push(
                    {
                        mainTitle: node.label,
                        subPath: pathSoFar,
                        link: node.expandedLink
                    }
                );
            }

            if (node.children != null) {
                traverseForBookmarks(node.children, (pathSoFar == ""? "": (pathSoFar + " > ")) + node.label)
            }
        }
    }

    traverseForBookmarks(siteDirectory, "");
    return friendlyMarks;
}

expandAllLinks();