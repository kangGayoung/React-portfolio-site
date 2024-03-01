import React from "react";
import data from "../assets/data/SkillsData";
import "./style/skillsBox.scss";

export default function SkillsBox(props) {
  const skillsList = data.skillList.map((list, idx) => (
    <div className="skill_list" key={idx}>
      <div className="skill_label">
        {list.icon}
        <p>: {list.label}</p>
      </div>

      <ul className="skill_detail">
        {list.detail.map((detail, idx) => (
          <li key={idx}>{detail}</li>
        ))}
      </ul>
    </div>
  ));
  return <div className="skills_box">{skillsList}</div>;
}
