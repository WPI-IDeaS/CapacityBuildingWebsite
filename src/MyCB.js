import "./myCB.css"
import {getQuestionsData} from "./QuestionsManager";
import {getResponse, pageHasResponses} from "./UserDataManager";

function MyCBEntry({data}) {
    let index = 1;
    if (!pageHasResponses(data.pageId)) return "";

    return (
        <div>
            <div className="cb-head" style={{color: "var(--pal-" + data.color + ")", backgroundColor: "color-mix(in srgb, var(--pal-" + data.color + ") var(--pal-blend3), var(--pal-white))"}}>
                <b>{data.title}</b><br/>
                Questions to Consider
            </div>
            {data.questionBoxes.map((q) =>
                <div key={index++}>
                    <div className="cb-question-content">
                        <i>{q.text}</i>
                    </div>
                    <div className="cb-response-content">
                        {getResponse(data.pageId, q.id)}
                    </div>
                    <br/>
                </div>
            )}
        </div>
    );
}

function MyCB() {
    let index = 1;
    return (
        <div className="cb-filter">
            <div className="cb-sheet">
                <div className="cb-sheet-inner">
                    {getQuestionsData().map((d) => <MyCBEntry key={index++} data={d}/>)}
                </div>
            </div>
        </div>
    );
}

export default MyCB;