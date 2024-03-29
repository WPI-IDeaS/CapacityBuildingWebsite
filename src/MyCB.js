/**
 * "My Capacity Building" worksheet view
 */

import "./myCB.css"
import {getQuestionsData} from "./QuestionsManager";
import {getResponse, pageHasResponses} from "./UserDataManager";

import PrintIcon from "./images/icons/print.svg";
import {HelpPopupButton} from "./DefinitionManager";

// Small print-then-close script to attach to our print window.
// Run by the window itself to guarantee css loads first.
const printScript = `
    <script>
        window.print();
        window.close();
    </script>
`;

/**
 * Print the capacity building worksheet in a popup dialogue.
 */
function printCB() {
    const printContent = document.getElementById("cb-printable");
    const printWindow = window.open('', '', 'left=0,top=0,width=900,height=1000,toolbar=0,scrollbars=0,status=0');

    printWindow.document.write('<html lang="en"><head><title>Print Your Capacity Building</title>')

    printWindow.document.write('<link rel="preconnect" href="https://fonts.googleapis.com">');
    printWindow.document.write('<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin>');
    printWindow.document.write('<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@200;300;400;500;600&display=swap" rel="stylesheet">');

    // We have to access the printing style from public since React won't give it an accessible path from src
    printWindow.document.write('<link rel="stylesheet" href="' + process.env.PUBLIC_URL + '/myCBPrinting.css" type="text/css"/>')

    printWindow.document.write('</head><body>')
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write(printScript);
    printWindow.document.write('</body></html>');

    printWindow.document.close();

    printWindow.focus();
}

/**
 * Responses entry for one questions panel.
 *
 * @param data an object from localStorage containing a question's page ID, page title, list of questions (text and
 * response), and preferred header color
 */
function MyCBEntry({data}) {
    let index = 1;
    if (!pageHasResponses(data.pageId)) return "";

    return (
        <div>
            <div className="cb-head" style={{color: "var(--pal-" + data.color + ")", backgroundColor: "color-mix(in srgb, var(--pal-" + data.color + ") var(--pal-blend3), var(--pal-white))"}}>
                <b>{data.title}</b><br/>
                Questions to Consider
            </div>
            {data.questionBoxes.map((q) => {
                const resp = getResponse(data.pageId, q.id);
                if (resp == null) return "";

                return (
                    <div key={index++}>
                        <div className="cb-question-content">
                            <i>{q.text}</i>
                        </div>
                        <div className="cb-response-content">
                            {resp}
                        </div>
                        <br/>
                    </div>
                );
            })}
            <br/>
        </div>
    );
}

/**
 * My Capacity Building worksheet page with blurred backdrop. Meant to overlay the content window.
 *
 * @param children extraneous elements to inject inside (such as a close button from a previous page)
 */
function MyCB({children}) {
    let index = 1;
    return (
        <div className="cb-filter definitions-bound">
            <div className="cb-sheet">
                <div id="cb-printable" className="cb-sheet-inner">
                    {getQuestionsData().map((d) => <MyCBEntry key={index++} data={d}/>)}
                </div>
            </div>
            <button onClick={printCB} title="Print Your Capacity Building">
                <img src={PrintIcon} alt="Printer"/>
            </button>
            <br/>
            <HelpPopupButton defId="help_mycb" helpContent={<span>This page contains your compiled thoughts on capacity building, available for reference or to print! Use the button above to bring up a print dialogue.</span>} />
            {children}
        </div>
    );
}

export default MyCB;