import React, { useState, useEffect } from 'react';
import './Sketch3.css';


class sndObject {
  constructor(label, link, childObjs) {
    this.label = label;
    this.link = link;
    this.children = childObjs;
  }
}

const sidenavDirectory = [
  sbi("About", "-link-", [
    sbi("What is Capacity Building?", "-link-"),
    sbi("Why do Capacity Building?", "-link-")
  ]),
  sbi("Principles", "-link-", [
    sbi("Humility", "-link-"),
    sbi("Center the People", "-link-"),
    sbi("Focus on Design, Not Outcomes", "-link-"),
    sbi("Trust the Team", "-link-")
  ]),
  sbi("Phases", "-link-", [
    sbi("Planning", "-link-", [
      sbi("Choosing Capacity Building Over Staffing a Change Project", "-link-"),
      sbi("Allocating Resources and Budgeting", "-link-"),
      sbi("Building Your Team", "-link-")
    ]),
    sbi("Doing", "-link-"),
    sbi("Extending", "-link-")
  ]),
];

function sbi(label, link, childObjs=null) {
  return new sndObject(label, link, childObjs);
}

function sbAcc(item, id, parentId) {
  let childItems = sbProcessChildren(item.children, id);

  let drop = "";
  if(item.children != null) {
    drop = <button className="accordion-button sidenav-accdropdown collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse_" + id} aria-expanded="false" aria-controls={"collapse_" + id}></button>;
  }
  else {
    drop = <div className="sidenav-accdropdown"></div>;
  }

  return (
    <div className="accordion-item sidenav-accitem" key={id}>
      <h2 className="accordion-header sidenav-acchead" id={"heading_" + id}>
        {drop}
        <a href={item.link}>{item.label} - {id}</a>
      </h2>
      <div id={"collapse_" + id} className="accordion-collapse collapse" aria-labelledby={"heading_" + id} data-bs-parent={"#sideNavAccordion_" + parentId}>
        <div className="accordion-body sidenav-accbody">
          <div className="accordion sidenav-acc" id={"sideNavAccordion_" + id}>
            {childItems}
          </div>
        </div>
      </div>
    </div>
  );
}

function sbProcessChildren(children, id) {
  const items = [];
  const connector = id == ""? "" : ".";
  if(children != null) {
    let index = 1;
    for(const child of children) {
      items.push(sbAcc(child, id + connector + index++, id));
    }
  }

  return items;
}

function makeDirectory() {

}

function makeDirectoryHelper() {

}

function Sidebar() {
  return (
    <div className="App-sidenav">
      <div className="accordion" id="sideNavAccordion_">
        {sbProcessChildren(sidenavDirectory, "")}
      </div>
    </div>
  );
}

export default Sidebar;
