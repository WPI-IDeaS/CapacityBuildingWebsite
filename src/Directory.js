/**
 * Directory manager for handling routing and keeping track of the page tree.
 */

import {BrowserRouter as Router, createHashRouter, Route, RouterProvider, Routes, useParams} from "react-router-dom";
import About from "./About";
import Principles from "./Principles";
import Planning from "./Planning";
import Doing from "./Doing";
import Extending from "./Extending";
import {ContentPage, Home} from "./Master";
import {setPalette} from "./ColorManager";
import {getBookmarks, setAccessibleStyles} from "./UserDataManager";
import {useEffect} from "react";

// LEAVE TRUE IF DEPLOYING TO GH PAGES
const USE_HASH = true;

// Site directory: makeDirectory creates the subtree for each depth 1 page
export const siteDirectory = [
    About.makeDirectory(),
    Principles.makeDirectory(),
    Planning.makeDirectory(),
    Doing.makeDirectory(),
    Extending.makeDirectory()
];

/**
 * Main router element for navigation. Leads into a recursive routing system.
 */
export function CapacityRouter() {
    useEffect(() => {
        setAccessibleStyles();
    }, [])

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

/**
 * Routes for distinguishing between the homepage and attempts to reach content pages
 */
function CapacityRouterRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:section/*" element={<BroadCapacityRouterHelper />} />
        </Routes>
    );
}

/**
 * Get node corresponding to this link fragment, if any, within the given list of nodes
 *
 * @param dirs list of nodes to look through.
 * @param link link to match.
 * @returns {undefined|*} the matched node, if any.
 */
function findNodeByLinkIn(dirs, link) {
    const linkLower = link.toLowerCase();
    for (let i in dirs) {
        if (dirs[i].link == linkLower) {
            return dirs[i];
        }
    }
    return undefined;
}

/**
 * Recursive routes helper for navigating tree.
 * Initial routes, and gleans some information from the broad section (e.g. for setting the top right title)
 */
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

/**
 * Recursive routes helper for navigating tree beyond depth 1.
 *
 * @param currentNode current node in navigation.
 * @param bigTitle broad section title to pass down.
 */
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

/**
 * Recursively builds expanded links for all in a list.
 *
 * @param directory list of nodes to iterate though.
 * @param pathSoFar path constructed thus far (to add on to).
 */
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

/**
 * Adds "expanded" full path links to the tree for all nodes.
 */
function expandAllLinks() {
    expandLinksHelper(siteDirectory, "")
}

/**
 * Traverses directory and cross references with user data to make an ordered list of their bookmarks.
 *
 * @returns {*[]} a list of shorthand bookmark objects (with title, formatted path, and link) in directory order.
 */
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