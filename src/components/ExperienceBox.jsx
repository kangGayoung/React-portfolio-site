import React from "react";
import data from "../assets/data/SkillsData";
import "../components/style/skillsBox.scss";
import { FaBuilding } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

export default function ExperienceBox() {
  const experienceList = data.experienceList.map((list, idx) => (
    <li key={idx}>
      <div className="icon">
        <FaBuilding />
      </div>
      <span className="time">{list.period}</span>
      <h4>
        {list.company}
        <span className="place">{list.position}</span>
      </h4>
      <p>{list.explain}</p>
    </li>
  ));

  const educationList = data.educationList.map((list, idx) => (
    <li key={idx}>
      <div className="icon">
        <FaGraduationCap />
      </div>
      <span className="time">{list.period}</span>
      <h4>
        {list.position}
        <span className="place">{list.company}</span>
      </h4>
      <p>{list.explain}</p>
    </li>
  ));

  return (
    <div className="experience_wrapper">
      <div className="experience">
        <ul>{experienceList}</ul>
      </div>
      <div className="education">
        <ul>{educationList}</ul>
      </div>
    </div>
  );
}
