import React from "react";
import "./AboutMe.css";
import MySkills from "../Skills/Skills";
import ContactIcon from "../../components/Contact/ContactIcon";
import Accordian from "../../components/Accordian/Accordian";
import ContactData from "../../data/ContactData";
import experienceData from "../../data/ExperienceData";

function AboutMe() {
  return (
    <section id="AboutMe" className="about-me">
      <div className="my-intro card">
        <h3 className="card-title">About Me</h3>
        <p>
          Hi, I’m Zen Yee — a Fullstack Developer specializing in Node.js,
          Express, and PostgreSQL. I build end-to-end systems that connect
          multiple software platforms and enable smooth data flows. I’m
          passionate about creating efficient and maintainable backend systems
          that solve real-world problems.
        </p>
        <div className="contact-container">
          <p>I am open for opportunities, feel free to contact me:</p>
          <div>
            {ContactData.map((x) => {
              return (
                <ContactIcon
                  key={x.id}
                  link={x.link}
                  target={x.target}
                  rel={x.rel}
                  icon={x.imgurl}
                  alt={x.alt}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="my-skills card">
        <h3 className="card-title">Skills</h3>
        <MySkills />
      </div>
      <div className="my-education card">
        <h3 className="card-title">Education</h3>
        <p>
          Bachelor's of Manufacturing Engineering with Management | Universiti
          Sains Malaysia
        </p>
        <p>CGPA 3.61</p>
      </div>
      <div className="my-experiences card">
        <h3 className="card-title">Experiences</h3>
        <Accordian items={experienceData} defaultOpen="01" />
      </div>
    </section>
  );
}

export default AboutMe;
