import React from 'react';

const blend1 = "color-mix(in srgb, var(--pal-main) var(--pal-blend1), var(--pal-white))";
const blend2 = "color-mix(in srgb, var(--pal-main) var(--pal-blend2), var(--pal-white))";
const blend3 = "color-mix(in srgb, var(--pal-main) var(--pal-blend3), var(--pal-white))";

export function IconMyCB() {
    return(
        <svg height="100%" viewBox="0 0 95 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="95" height="114.487" rx="7" fill={blend1}/>
            <path d="M17.0508 40.1924H76.7303" stroke={blend2} strokeWidth="4" strokeLinecap="round"/>
            <path d="M17.0508 98.6543H76.7303" stroke={blend2} strokeWidth="4" strokeLinecap="round"/>
            <path d="M17.0508 59.6797H76.7303" stroke={blend2} strokeWidth="4" strokeLinecap="round"/>
            <path d="M17.0508 79.167H76.7303" stroke={blend2} strokeWidth="4" strokeLinecap="round"/>
            <rect x="23.1406" y="10.9619" width="48.7179" height="13.3974" rx="6.69872" fill={blend3}/>
        </svg>
    );
}

export function IconBookmarksList() {
    return(
        <svg height="100%" viewBox="0 0 86 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 22H83.069V101.655L54.0612 80.2096L22 101.655V22Z" fill={blend3} stroke={blend3} strokeWidth="4" strokeLinejoin="round"/>
            <path d="M12 12H73.069V91.6552L44.0612 70.2096L12 91.6552V12Z" fill={blend2} stroke={blend2} strokeWidth="4" strokeLinejoin="round"/>
            <path d="M2 2H63.069V81.6552L34.0612 60.2096L2 81.6552V2Z" fill={blend1} stroke={blend1} strokeWidth="4" strokeLinejoin="round"/>
        </svg>
    );
}

export function IconAddBookmark() {
    return(
        <svg height="100%" viewBox="0 0 79 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H76V98L41.325 72.4231L3 98V3Z" fill={blend3} stroke={blend2} strokeWidth="6" strokeLinejoin="round"/>
            <path d="M18 12H62V70L41.1 54.3846L18 70V12Z" fill={blend3} stroke={blend2} strokeWidth="6" strokeLinejoin="round"/>
        </svg>
    );
}

export function IconRemoveBookmark() {
    return(
        <svg height="100%" viewBox="0 0 79 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H76V98L41.325 72.4231L3 98V3Z" fill={blend2} stroke={blend2} strokeWidth="6" strokeLinejoin="round"/>
            <path d="M18 12H62V70L41.1 54.3846L18 70V12Z" fill={blend1} stroke={blend1} strokeWidth="6" strokeLinejoin="round"/>
        </svg>
    );
}

export function IconAccessibility() {
    return(
        <svg height="100%" viewBox="0 0 117 117" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="59" cy="59" r="48" fill={blend1} stroke={blend1} strokeWidth="4"/>
            <rect x="49" width="19" height="22" rx="5" fill={blend1}/>
            <rect x="49" y="93" width="19" height="24" rx="5" fill={blend1}/>
            <rect y="68" width="19" height="22" rx="5" transform="rotate(-90 0 68)" fill={blend1}/>
            <rect x="93" y="68" width="19" height="24" rx="5" transform="rotate(-90 93 68)" fill={blend1}/>
            <rect x="23.832" y="106.562" width="18.9429" height="24.1442" rx="5" transform="rotate(-135 23.832 106.562)" fill={blend1}/>
            <rect x="90.6445" y="39.752" width="18.9429" height="22.5151" rx="5" transform="rotate(-135 90.6445 39.752)" fill={blend1}/>
            <rect x="106.562" y="93.168" width="18.9429" height="22.5815" rx="5" transform="rotate(135 106.562 93.168)" fill={blend1}/>
            <rect x="40.0918" y="26.6973" width="18.9429" height="22.995" rx="5" transform="rotate(135 40.0918 26.6973)" fill={blend1}/>
            <path d="M62.5247 44.2083C60.7616 44.686 58.9493 43.628 58.4769 41.8452C58.0044 40.0624 59.0508 38.2299 60.8139 37.7522L85.8387 30.9721C87.6019 30.4944 89.4141 31.5524 89.8866 33.3352C90.359 35.1179 89.3127 36.9504 87.5495 37.4281L62.5247 44.2083Z" fill={blend3}/>
            <path d="M29.4504 37.4283C27.6873 36.9506 26.641 35.1181 27.1134 33.3353C27.5859 31.5525 29.3981 30.4945 31.1613 30.9722L56.1861 37.7524C57.9492 38.2301 58.9956 40.0625 58.5231 41.8453C58.0507 43.6281 56.2384 44.6861 54.4753 44.2084L29.4504 37.4283Z" fill={blend3}/>
            <path d="M52.6467 74.8561C50.729 74.8561 49.1745 73.2842 49.1745 71.3452L49.1745 39.7468C49.1745 37.8078 50.729 36.2359 52.6467 36.2359H64.2207C66.1384 36.2359 67.693 37.8078 67.693 39.7468V71.3452C67.693 73.2842 66.1384 74.8561 64.2207 74.8561H52.6467Z" fill={blend3}/>
            <path d="M42.4268 92.4617C41.805 94.8081 43.1821 97.2199 45.5026 97.8486C47.8232 98.4773 50.2084 97.0849 50.8302 94.7385L57.6647 68.9472C58.2865 66.6008 56.9094 64.189 54.5889 63.5603C52.2683 62.9316 49.8831 64.324 49.2613 66.6704L42.4268 92.4617Z" fill={blend3}/>
            <path d="M65.6719 94.7389C66.2937 97.0853 68.6789 98.4778 70.9995 97.849C73.32 97.2203 74.6971 94.8085 74.0753 92.4621L67.2408 66.6708C66.619 64.3244 64.2338 62.932 61.9132 63.5607C59.5927 64.1894 58.2156 66.6012 58.8374 68.9476L65.6719 94.7389Z" fill={blend3}/>
            <path d="M67.693 23.3625C67.693 28.5332 63.5475 32.7249 58.4337 32.7249C53.32 32.7249 49.1745 28.5332 49.1745 23.3625C49.1745 18.1917 53.32 14 58.4337 14C63.5475 14 67.693 18.1917 67.693 23.3625Z" fill={blend3}/>
        </svg>
    );
}

export function IconMindMap() {
    return (
        <svg height="100%" viewBox="0 0 114 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M74 29.9828C75.3532 30.1709 78.0597 28.8922 78.0597 22.2735C78.0597 15.6547 80.6866 14 82 14" stroke={blend2} strokeWidth="3"/>
            <path d="M74 30.0129C75.3532 29.8719 78.0597 30.8308 78.0597 35.7949C78.0597 40.759 80.6866 42 82 42" stroke={blend2} strokeWidth="3"/>
            <rect x="82" y="4" width="32" height="18" rx="3" fill={blend1}/>
            <path d="M40 29.9796C38.6468 30.2029 35.9403 28.6845 35.9403 20.8247C35.9403 12.9649 33.3134 11 32 11" stroke={blend2} strokeWidth="3"/>
            <path d="M40 30.0064C38.6468 29.9359 35.9403 30.4154 35.9403 32.8975C35.9403 35.3795 33.3134 36 32 36" stroke={blend2} strokeWidth="3"/>
            <rect y="51" width="32" height="19" rx="3" fill={blend1}/>
            <path d="M40 30.0343C38.6468 29.6583 35.9403 32.2155 35.9403 45.4531C35.9403 58.6906 33.3134 62 32 62" stroke={blend2} strokeWidth="3"/>
            <rect x="82" y="36" width="32" height="18" rx="3" fill={blend1}/>
            <rect y="27" width="32" height="16" rx="3" fill={blend1}/>
            <rect width="32" height="19" rx="3" fill={blend1}/>
            <rect x="40" y="22" width="34" height="20" rx="3" fill={blend1}/>
        </svg>
    );
}

export function IconHorizontalCaret() {
    return (
        <svg height="100%" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.21459 14L-5.79012e-08 23.1445L4.8927 28L19 14L4.8927 -5.83449e-08L-2.75995e-07 4.85549L9.21459 14Z" fill={blend1}/>
        </svg>
    );
}