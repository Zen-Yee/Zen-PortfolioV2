import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";
import SkillData from "../../data/SkillData";

function MySkills() {
  return (
    <div className="logo-container">
      {SkillData.map((x) => (
        <SkillCard key={x.id} imgurl={x.imgurl} alt={x.alt} />
      ))}
    </div>
  );
}

export default MySkills;
