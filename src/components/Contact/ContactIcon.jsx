import React from "react";
import "./ContactIcon.css";

function ContactIcon(props) {
  return (
    <a href={props.link} target={props.target} rel={props.rel}>
      <img className="contact-icon" src={props.icon} alt={props.imgAlt} />
    </a>
  );
}

export default ContactIcon;
