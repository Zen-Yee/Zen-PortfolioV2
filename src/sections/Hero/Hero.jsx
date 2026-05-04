import React from "react";
import "./Hero.css";
import RoundedButton from "../../components/RoundedButton/RoundedButton";
import Avatar from "../../components/Avatar/Avatar";

function Hero() {
  return (
    <section id="Home" className="layout-hori-2 Hero">
      <div>
        <h1 className="Title">Hi, I'm Zen.</h1>
        <h2 className="SubHeader">
          Software Developer
          <br />
          React • Node.js • PostgreSQL • JavaScript
        </h2>
        <p>
          I focus on building reliable full-stack systems with clean
          architecture, secure authentication, and smooth user experiences.
        </p>
        <a href="/assets/YEE QIAN HUI-resume.pdf" download>
          <RoundedButton Text="Download Resume" />
        </a>
      </div>
      <div>
        <div className="avatar-container">
          <Avatar imgURL="/assets/IMG_6545.png" imgAlt="Image of Myself" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
