import "./myCB.css"
import {getQuestionsData} from "./QuestionsManager";
import {getResponse, pageHasResponses} from "./UserDataManager";

const printScript = `
    <script>
        window.print();
        window.close();
    </script>
`;

function printCB() {
    const printContent = document.getElementById("cb-printable");
    const printWindow = window.open('', '', 'left=0,top=0,width=900,height=1000,toolbar=0,scrollbars=0,status=0');

    printWindow.document.write('<html lang="en"><head><title>Print Your Capacity Building</title>')

    // Link to the CSS stylesheet
    printWindow.document.write('<link rel="preconnect" href="https://fonts.googleapis.com">');
    printWindow.document.write('<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin>');
    printWindow.document.write('<link href="https://fonts.googleapis.com/css2?family=Lexend:wght@200;300;400;500;600&display=swap" rel="stylesheet">');

    printWindow.document.write('<link rel="stylesheet" href="' + process.env.PUBLIC_URL + '/myCBPrinting.css" type="text/css"/>')

    printWindow.document.write('</head><body>')
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write(printScript);
    printWindow.document.write('</body></html>');

    printWindow.document.close();

    printWindow.focus();
}

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

function MyCB() {
    let index = 1;
    return (
        <div className="cb-filter">
            <div className="cb-sheet" onClick={printCB}>
                <div id="cb-printable" className="cb-sheet-inner">
                    {getQuestionsData().map((d) => <MyCBEntry key={index++} data={d}/>)}
                </div>
            </div>
        </div>
    );
}

export default MyCB;