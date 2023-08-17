/**
 * Accessibility option gizmos.
 */

import React, {useState} from "react";

import "./AccessibilityControl.css"
import {getAccessibilitySetting, setAccessibilitySetting, setAccessibleStyles} from "./UserDataManager";

/**
 * Flexbox for each control row.
 * @param children items in row.
 */
function AccessibilityControlBox({children}) {
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            {children}
        </div>
    );
}

/**
 * Binary toggle for an accessibility setting.
 *
 * @param setting localStorage accessibility object key to change.
 * @param title friendly name for the setting.
 */
export function AccessibilityCheckbox({setting, title}) {
    let [settingState, changeSettingState] = useState(getAccessibilitySetting(setting));

    function change() {
        setAccessibilitySetting(setting, !settingState);
        changeSettingState(!settingState);
        setAccessibleStyles();
    }

    return (
        <AccessibilityControlBox>
            <div className="accessibility-title" style={{flex: 1}}>{title}</div>
            <div className="form-check form-switch accessibility-toggle-outer">
                <input id={setting} className="accessibility-toggle form-check-input" type="checkbox" role="switch" checked={settingState} onChange={change} onClick={change}/>
            </div>
        </AccessibilityControlBox>
    )
}

/**
 * Adjustable range slider for an accessibility setting.
 *
 * @param setting localStorage accessibility object key to change.
 * @param title friendly name for the setting.
 * @param min minimum selectable value.
 * @param max maximum selectable value.
 * @param labelFn formatter function for the label (takes a raw number, outputs a string or similar)
 */
export function AccessibilitySlider({setting, title, min, max, labelFn= (v) => v}) {
    let [settingState, changeSettingState] = useState(getAccessibilitySetting(setting));

    function change(e) {
        setAccessibilitySetting(setting, e.target.value);
        changeSettingState(e.target.value);
        setAccessibleStyles();
    }

    return (
        <AccessibilityControlBox>
            <div className="accessibility-title" style={{flex: 2}}>{title}</div>
            <div className="accessibility-title" style={{flex: 1, textAlign: "right", marginRight: "15px"}}>{labelFn(settingState)}</div>
            <input style={{flex: 3}} min={min} max={max} type="range" className="form-range accessibility-slide" value={settingState} onChange={change}/>
        </AccessibilityControlBox>
    )
}