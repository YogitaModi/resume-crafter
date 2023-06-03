import React from "react";
import Profile from "./Profile";
import About from "./About";
import Academic from "./Academic";
import ProfessionalExp from "./ProfessionalExp";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Resume() {
  return (
    <div>
      <div id="profile">
        <h1>Introduction</h1>
        <Profile />
      </div>
      <div id="about">
        <About />
      </div>
      <div>
        <h1>Education</h1>
        <Academic />
      </div>
      <div>
        <h1>Experience</h1>
        <ProfessionalExp />
      </div>
      <div>
        <h1>Project</h1>
        <Projects />
      </div>
      <div>
        <h1>Skills</h1>
        <Skills />
      </div>
    </div>
  );
}
