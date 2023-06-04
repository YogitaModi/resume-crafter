import React, { useContext } from "react";

import profileContext from "./profileContext";
import "./resume.css";

export default function Display() {
  const pro = useContext(profileContext);

  return (
    <div id="bground">
      <div
        style={{
          width: "70px",
          height: "60px",
          backgroundColor: "#212426",
          fontWeight: "bolder",
          color: "white",
          fontSize: "40px",
          textAlign: "center",
          padding: "2px",
          margin: "5px",
        }}
      >
        {pro.fName[0]}
        {pro.lName[0]}
      </div>
      <h1>
        {pro.fName || "name"}
        {pro.lName}
      </h1>
      <h4>{pro.designation || "designation"}</h4>
      <span>{pro.location || "location"}</span> | <span>{pro.email}</span> |
      <span>{pro.phone || "contact info"}</span>
      <p>{pro.website || " website"}</p>
      <hr />
      <h1>About</h1>
      <p>{pro.about}</p>
      <hr />
      <h1>Education</h1>
      <h3>{pro.university || "will be diplayes when you edit"}</h3>
      <span>{pro.startYear}</span> - <span>{pro.endYear}</span>
      <h5>{pro.qualification}</h5>
      <hr />
      <h1>Experience</h1>
      <h3>{pro.company}</h3>
      <p>{pro.companyLoc}</p>
      <h4>{pro.companyDesig}</h4>
      <h5>{pro.companyTenure}</h5>
      <p>{pro.companyExp}</p>
      <hr />
      <h1>Project</h1>
      <h3>{pro.projectTitle}</h3>
      <p>{pro.projectUrl}</p>
      <p>{pro.projectTenure}</p>
      <p>{pro.projectDescription}</p>
    </div>
  );
}
