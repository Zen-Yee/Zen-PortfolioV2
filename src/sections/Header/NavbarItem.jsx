import React from "react";

function NavBarItem(props) {
  return <a href={`#${props.link}`}>{props.title}</a>;
}

export default NavBarItem;
