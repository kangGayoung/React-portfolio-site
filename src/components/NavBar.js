import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaTasks, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlip(true);
    }, 1000);
    return () => setFlip(false);
  });

  return (
    <div className={["nav_wrapper", `${flip ? "on" : ""}`].join(" ")}>
      <ul>
        <li>
          <Link to="/">
            <span>HOME</span>
            <FaHome className="nav_icon" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>ABOUT</span>
            <FaUser className="nav_icon" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <span>PROJECT</span>
            <FaTasks className="nav_icon" />
          </Link>
        </li>
        <li>
          <Link to="https://github.com/kangGayoung" target="_blank">
            <span>GITHUB</span>
            <FaGithub className="nav_icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
