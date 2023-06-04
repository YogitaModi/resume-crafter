import React from "react";
import { useContext } from "react";
import profileContext from "./profileContext";

export default function Projects() {
  const proj = useContext(profileContext);
  return (
    <div>
      <div className="project">
        <label>Project Title</label>
        <input
          type="text"
          value={proj.projectTitle}
          onChange={proj.updateProjectitle}
        />
      </div>
      <div className="project">
        <label>GitHub URl</label>
        <input
          type="text"
          value={proj.projectUrl}
          onChange={proj.updateProjectUrl}
        />
      </div>
      <div className="project">
        <label>Tenure</label>
        <input
          type="text"
          value={proj.projectTenure}
          onChange={proj.updateProjectTenure}
        />
      </div>
      <div className="project">
        <label>Description</label>
        <textarea
          value={proj.projectDescription}
          onChange={proj.updateProjectDescription}
        />
      </div>
    </div>
  );
}
// title tenure description url
