import React from "react";
import "./ProjectCard.css";
import LinkText from "../../components/LinkText";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={props.imgurl} />
      </div>
      <div className="project-description">
        <h3>{props.projectTitle}</h3>
        <p>{props.projectTechStack}</p>
        <div className="link-container">
          <LinkText Link={props.projectLiveSite} Text="Live Site" />
          <LinkText Link={props.projectGitHub} Text="GitHub" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
