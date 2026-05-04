import React from "react";
import NavBarItem from "./NavbarItem";

function NavBar() {
  return (
    <div className="navbar">
      <NavBarItem title="Home" link="Home" />
      <NavBarItem title="About Me" link="AboutMe" />
      <NavBarItem title="Projects" link="Project" />
      <a className="hidden">
        <img className="navIcon hidden" src="./Assets/Navbar/menu.png" />
      </a>
    </div>
  );
}

export default NavBar;
