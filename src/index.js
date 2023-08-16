import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {CapacityRouter} from './Directory';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <style id="accessible-styling-dyslexia">
            {
                `
                    *::before {
                        font-family: OpenDyslexic, sans-serif !important;
                    }
                    *::after {
                        font-family: OpenDyslexic, sans-serif !important;
                    }
                    * {
                        font-family: OpenDyslexic, sans-serif !important;
                    }
                `
            }
        </style>
        <style id="accessible-styling-animations">
            {
                `
                    *::before {
                        transition: none !important;
                    }
                    *::after {
                        transition: none !important;
                    }
                    * {
                        transition: none !important;
                    }
                `
            }
        </style>
        <CapacityRouter/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
