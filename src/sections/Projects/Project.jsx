import React from "react";
import "./Project.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectData from "../../data/ProjectData";

function Projects() {
  return (
    <section id="Project" className="project">
      <h1 className="sec-title">Projects</h1>
      <div className="project-container">
        {ProjectData.map((x) => {
          return (
            <ProjectCard
              key={x.id}
              imgurl={x.imgUrl}
              projectTitle={x.projectTitle}
              projectDescription={x.projectDescription}
              projectTechStack={x.projectTechStack}
              projectLiveSite={x.projectLiveSite}
              projectGitHub={x.projectGitHub}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
