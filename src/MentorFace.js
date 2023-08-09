import React from 'react';
import "./MentorFace.css"

export function MentorTalk() {
    return(
        <svg className="mentor-face" width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="41" cy="41" r="41" fill="var(--pal-font)"/>
            <circle cx="23.5" cy="30.5" r="9.5" fill="var(--pal-main)"/>
            <circle cx="57" cy="31" r="10" fill="var(--pal-main)"/>
            <path d="M23.9343 55.4438C23.5759 55.3535 23.1969 55.4683 22.9488 55.7422C22.7007 56.0162 22.6239 56.4047 22.7492 56.7524C23.7348 59.4882 27.5457 65.2405 35.115 67.2686C42.692 69.2989 49.5104 66.092 52.0255 64.2011C52.3335 63.9696 52.481 63.5818 52.4049 63.2042C52.3288 62.8265 52.0425 62.5262 51.6689 62.4321L23.9343 55.4438Z" fill="var(--pal-main)" stroke="var(--pal-main)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}