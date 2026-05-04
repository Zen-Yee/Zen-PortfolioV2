import React, { useState } from "react";
import "./Accordian.css";

function AccordianItem(props) {
  return (
    <div className="accordian-item">
      <div className="accordian-title">
        <button onClick={props.onToggle}>{props.isOpen ? "▲" : "▼"}</button>
        <div>
          <h4>
            {props.position} | {props.company}
          </h4>
          <h5>{props.period}</h5>
        </div>
      </div>
      <div className={`accordian-description ${props.isOpen ? "" : "hidden"}`}>
        <ul>
          {props.responsibilities.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default AccordianItem;
