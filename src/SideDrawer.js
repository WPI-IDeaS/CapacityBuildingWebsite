import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import "./SideDrawer.css"

import {IconHorizontalCaret as Caret, IconMindMap} from "./PaletteIcons";

function SideDrawer() {
    return (
        <div>
            <div className="mini-drawer">
                <div className="mini-drawer-handle" title="Show/hide home button" data-bs-toggle="collapse" data-bs-target="#collapseMiniDrawer"
                     aria-expanded="false" aria-controls="collapseMiniDrawer">
                    <div className="caret">
                        <Caret/>
                    </div>
                </div>
                <div className="collapse collapse-horizontal" id="collapseMiniDrawer">
                    <div className="mini-drawer-content-wrapper">
                        <div className="mini-drawer-content">
                            <Link to="/" title="Return to content map">
                                <IconMindMap/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideDrawer;