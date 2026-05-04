import React from "react";
import "./Avatar.css";

function Avatar(props) {
  return (
    <div>
      <img className="avatar-img" src={props.imgURL} alt={props.imgAlt} />
    </div>
  );
}

export default Avatar;
