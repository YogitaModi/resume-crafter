import React from "react";
import Profile from "./Profile";
import About from "./About";
import Academic from "./Academic";
import ProfessionalExp from "./ProfessionalExp";
import Projects from "./Projects";
import Skills from "./Skills";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./resume.css";
import profileContext from "./profileContext";
import { useContext } from "react";

export default function Resume(props) {
  const resum = useContext(profileContext);
  let [educationTime, setEducationTime] = useState([]);
  let [professionTime, setProfessionTime] = useState([]);
  let [projectTime, setProjectTime] = useState([]);

  //  adding section handler
  const addingSection = (evt) => {
    const type = evt.target.getAttribute("data-id");

    if (type === "education") {
      setEducationTime([
        ...educationTime,
        { id: uuidv4(), value: Math.random() },
      ]);
    } else if (type === "profession") {
      setProfessionTime([
        ...professionTime,
        { id: uuidv4(), value: Math.random() },
      ]);
    } else if (type === "project") {
      setProjectTime([...projectTime, { id: uuidv4(), value: Math.random() }]);
    }
  };

  // deleteing section handler
  const removingSection = (evt) => {
    let dtype = evt.target.getAttribute("datatype");
    if (dtype === "educations") {
      const deleted = evt.target.getAttribute("data-id");
      const newarr = educationTime.filter((value) => value.id !== deleted);

      setEducationTime(newarr);
    } else if (dtype === "projects") {
      const deletepro = evt.target.getAttribute("data-id");
      let newarr = projectTime.filter((value) => value.id !== deletepro);

      setProjectTime(newarr);
    } else if (dtype === "professions") {
      const deletepro = evt.target.getAttribute("data-id");
      let newarr = professionTime.filter((value) => value.id !== deletepro);

      setProfessionTime(newarr);
    }
  };
  return (
    <div>
      <p className="tag-line">
        <strong>Start editing and build effective resume</strong>
      </p>
      <div className="resume">
        {/* div for personal informtion */}

        <div id="profile-section">
          <h1>Introduction</h1>
          <Profile />
        </div>
        <hr className="horizontal-line" />

        {/* div for about */}
        <div id="about-section">
          <h1>About</h1>
          <About />
        </div>

        {/* div for education informtion */}
        <hr className="horizontal-line" />
        <div id="education-section">
          <h1>Education</h1>
          <Academic />
          <button data-id="education" onClick={addingSection}>
            Add Section
          </button>
          {educationTime.map((value) => (
            <div key={uuidv4()}>
              <Academic />
              <button onClick={addingSection} data-id="education">
                Add Section
              </button>
              <button
                onClick={removingSection}
                data-id={value.id}
                datatype="educations"
              >
                Remove Section
              </button>
            </div>
          ))}
        </div>

        {/* div for experience informtion */}
        <hr className="horizontal-line" />
        <div id="experience-section">
          <h1>Experience</h1>
          <ProfessionalExp />
          <button data-id="profession" onClick={addingSection}>
            Add section
          </button>
          {professionTime.map((value) => (
            <div key={uuidv4()}>
              <ProfessionalExp />
              <button onClick={addingSection} data-id="profession">
                Add Section
              </button>
              <button
                onClick={removingSection}
                data-id={value.id}
                datatype="professions"
              >
                Remove Section
              </button>
            </div>
          ))}
        </div>

        {/* div for project informtion */}
        <hr className="horizontal-line" />
        <div id="project-section">
          <h1>Project</h1>
          <Projects />
          <button data-id="project" onClick={addingSection}>
            Add section
          </button>
          {projectTime.map((value) => (
            <div key={uuidv4()}>
              <Projects />
              <button onClick={addingSection} data-id="project">
                Add Section
              </button>
              <button
                onClick={removingSection}
                data-id={value.id}
                datatype="projects"
              >
                Remove Section
              </button>
            </div>
          ))}
        </div>

        {/* div for skills */}
        <hr className="horizontal-line" />
        <div id="skill-section">
          <h1>Skills</h1>
          <Skills />
        </div>

        <p>Click the submit details</p>
        <button onClick={resum.updateSend}>Done</button>
      </div>
    </div>
  );
}
