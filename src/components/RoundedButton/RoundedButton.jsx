import React from "react";
import "./RoundedButton.css";

function RoundedButton(props) {
  return <button className="rounded-button">{props.Text}</button>;
}

export default RoundedButton;
