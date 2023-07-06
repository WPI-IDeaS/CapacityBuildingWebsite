import React, { useState, useEffect } from 'react';
import './Sketch3.css';

import questionmark from './icons/questionmark.png';
import check from './icons/check.png';
import scale from './icons/scale.png';
import clipboard from './icons/clipboard.png';
import Sidebar from './Sidebar';


const defMap = {
  "PRESCRIPTIVE": <span>This is a sample definition. This is a sample definition. This is a sample definition. This is a sample definition. This is a sample definition. This is a sample definition. This is a sample definition. This is a sample definition.</span>,
  "NORMS": <span>Short explanation</span>,
  "NEW_DEF": <span>This is another definition!!!</span>,
  "NEW": <span>Hi Kimberly!!!</span>
};

const definables = [];
const definitionBubbles = [];
const bubbleMap = {};
var defsActive = false;

function titleBubble(title) {
  return (
    <span className='titleshape'>
      <span className='titleshape-box'>
        <div className='titleshape-blurb'>
          {title}
        </div>
        <svg width="50px" className='titleshape-styled'>
          <polygon points="0,0 20,0 20,70 0,90"/>
        </svg>
      </span>
    </span>
  );
}

function titleFloat(title) {
  return (
    <div className='titlefloat'>
      <div className='titlefloat-box'>
        {title}
      </div>
    </div>
  );
}

function defBubble(tag) {
  return (
    <div className='definition' data-def-tag={tag} key={tag}>
      <span className='def-box'>
        <div className='def-blurb'>
          {defMap[tag.toUpperCase()]}
          <div className='def-button' onClick={closeBubble} data-def-tag={tag}>
            OK!
          </div>
        </div>
      </span>
    </div>
  );
}

function defHover(e) {
  if(defsActive) {
    e.target.className = 'definable-hovered';
  }
}

function defUnHover(e) {
  if(defsActive) {
    e.target.className = 'definable';
  }
}

function closeBubble(e) {
  const toHide = bubbleMap[e.target.dataset.defTag];
  toHide.className = 'definition';
}

function activateDef(def) {
  def.className = 'definable';
}

function deactivateDef(def) {
  def.className = 'definable-inactive';
}

function toggleAllDefs() {
  if(defsActive) {
    definables.forEach(deactivateDef);
    defsActive = false;
  }
  else {
    definables.forEach(activateDef);
    defsActive = true;
  }
}

function addDef(def) {
  definables.push(def);
}

function addDefBubble(def) {
  bubbleMap[def.dataset.defTag] = def;
}

function defClick(e) {
  if(defsActive) {
    e.target.className = 'definable-hovered';
    const toShow = bubbleMap[e.target.dataset.defTag];
    toShow.className = 'definition-hovered';
    //e.target.parentElement.children[1].className = 'definition-hovered';

    var offsets = e.target.getBoundingClientRect();
    var up = offsets.top + offsets.bottom / 2;
    var right = offsets.right;
  }
}

function makeDef(text, tag) {
  return (
    <span>
      <span className='definable-inactive' onClick={defClick} onMouseOver={defHover} onMouseLeave={defUnHover} data-def-tag={tag}>
        {text}
      </span>
    </span>
  );
}

function makeAllDefBubbles() {
  const jsxArray = [];
  
  for(const [k, v] of Object.entries(defMap)) {
    jsxArray.push(
      defBubble(k)
    );
  }
  return jsxArray;
}


// PAGES -----------------------------------------------------------------------------------------

function Sketch() {
  return (
    Planning()
  );
}

function Directory() {
  return (
    <div className="App-nobar">
      <div className='titlefloat'>
        Directory
      </div>
    </div>
  );
}

function Questions() {
  return (
    <div className="App-nobar">
      {titleFloat("Questions to Consider")}
      <span className='questionsbutton'>
        foo
      </span>
      <span className='questionsbutton'>
        foo
      </span>
      <span className='questionsbutton'>
        foo
      </span>
      <span className='questionsbutton'>
        foo
      </span>
    </div>
  );
}

function Planning() {
  var hasCollected = false;
  useEffect(() => {
    if(!hasCollected) {
      const defables = document.getElementsByClassName('definable-inactive');
      for(const d of defables) {
        addDef(d);
      }
      const defs = document.getElementsByClassName('definition');
      for(const d of defs) {
        addDefBubble(d);
      }

      hasCollected = true;
    }
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <header className="App-header">
      </header>
      {makeAllDefBubbles()}
      {/*titleBubble("Planning Capacity Building")*/}
      <div className='mentor' onClick={toggleAllDefs}>

      </div>
      <div className='app-shadow'>
        <br />
        <br />
        <br />
        <br />
        <br />
        This drawing is a metaphor of the choice we are presented with as leaders of capacity building change efforts. Often we are asked to bring together a group of people to build capacity for a systemic change effort at our institutions or organization. As a leader, we often feel a need to clearly define the scope of the work, to preemptively articulate a logic model or sequential stepwise process, to answer the questions presented, to assign roles, to manage the people in the process, to define short-term and long-term outcomes, and so on. These instincts are reasonable because they reflect {makeDef("strong, often unquestioned cultural norms", "NORMS")}. Such approaches often present themselves as “good” project management or “effective” leadership, but there are tensions and tradeoffs that can be intentionally and proactively considered. While each of these existing tools can be leveraged to good end at particular times, they also constrain possibilities that can undermine long term capacity building.<br/><br/>
        Our goal is to support practitioners in understanding when and why to use these common methods to staff and when to use the other tools we present here. This understanding can allow us to maximize our choices. Sometimes what we really want to do is to create a more spacious container and achieve other goals of capacity building that include and go beyond task completion. This section tackles this initial decision in capacity building efforts.<br/><br/>
        Beliefs (<b>conscious and unconscious</b>) {makeDef("that uphold prescriptive, control-based approaches", "PRESCRIPTIVE")}:
        <ul>
          <li>I am going to build the capacity of others to see things the way I do or to achieve this predetermined outcome I have identified.</li>

          <li>Outcomes need to be {makeDef("predetermined", "NEW_DEF")} and managed to achieve them. I need to start with the end product and get everyone focused on that (i.e., the next proposal, the strategic plan, the reorganized department); they need the end product in mind and this work is not valuable if we do not get to the “end.”</li>

          <li>Achieving that end is more {makeDef("important", "NEW")} than examining our assumptions, more important than learning about ourselves and our work, more important than allowing people to contribute to a shared vision. We’re being paid to achieve this objective.</li>

          <li>There is too much risk in allowing people choice and voice in processes; they want direction and limited options.</li>

          <li>How it feels and is facilitated doesn’t matter or is auxiliary; let's just get the work done.</li>

          <li>It is more time efficient and is good project management to be more structured and directive and hold people accountable.</li>
        </ul>
        The internal team at WPI began with determining whether we were interested in capacity building or in accomplishing a set of predetermined tasks. We implicity started from a place of genuine inquiry–what is possible if we learned together? We didn’t want to grow as a Center alone. We wanted to build a community around this work to advance project-based learning. We recognized we needed time to explore how we each got to this place in the field of higher education and what theory and scholarship exists around organizational and systemic change. However, these were not tightly articulated objectives - they were slightly amorphous directions we thought we might want to take.<br/><br/>
        We are all adults who are interested in this work, who have different experiences, and work in different contexts. Not one of us “knew” how to do systemic or institutional change. Each of us had been part of organizations and reform efforts and experienced change, even if we had not formally studied this topic. We did not want to feel like there was one way to get anywhere. We did not want to be micromanaged. We wanted to explore the territory with a bit of a map and be able to connect and learn together in our shared inquiry. This made the choice between capacity building and staffing a change effort easy and instinctual for us.<br/><br/>
        In Western, academic, capitalist, white culture, there is a level of comfort with hierarchical leadership, with directive process, with GANTT charts, SMART goals, logic models, theories of change, and tight project management around clear objectives and known outcomes. We associate these things with credibility. They give us legitimacy when we use them. We expect people in leadership roles to lay out the plan and direction and to hold us accountable for the work. There is also a cultural norm around using groups and collaboration for labor sharing rather than collective exploration, power sharing, and co-creation. There is a cultural norm around assuming we can solve complex systemic issues, where much of the system is subversive but held in cultural norms and mental models we are not even entirely aware of, in really short time frames.<br/><br/>
        So naturally, there is resistance to things like capacity building which are ambiguous, developmental, and process-oriented. You will receive push back as a facilitator in sharing ownership and in asking people to return to a space of exploration and learning. Your credibility will questioned. Rely on the power of relationships to share ownership and the emergent goals and outcomes will be worth the work.<br/><br/>
        If you wrote the grant or are the chair of the committee or otherwise find yourself designated as the lead of a systemic change effort, resist the opportunity to take complete ownership of the effort, of answering the question, of solving the problem. Instead of thinking, “Okay, I have to figure out how we scale project-based learning at community colleges” and taking ownership of the project, reframe the objective to “Could we explore how each of us can meaningfully participate in a shared inquiry around this topic?” or “What does this mean to each of you and where is the work most present and engaging for you?” Systemic change efforts are characteristically not able to be designed or solved by one person–it is not your job so don’t try to take on that responsibility. It is a subtle shift and largely unconscious, but it really matters.<br/><br/>
        If you decide it is your job to answer this question, you are not allowing for there to be shared ownership and a lot of ‘answers’ to the question. This doesn’t mean you do not hold a larger vision for this work or that you do not provide structure. It means you set the tone from the beginning that this is collectively owned and its success is predicated on co-creation and collaboration.<br/><br/>
      </div>
    </div>
  );
}

export default Sketch;
