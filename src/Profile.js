import React, { useContext } from "react";
import "./resume.css";

import profileContext from "./profileContext";

export default function Profile(props) {
  const pro = useContext(profileContext);

  return (
    <div>
      <div className="profile fname">
        <label htmlFor="name">First Name</label>
        <input
          id="name"
          type="text"
          value={pro.fName}
          onChange={pro.updateFName}
        />
      </div>
      <div className="profile lname">
        <label htmlFor="name">Last Name</label>
        <input
          id="name"
          type="text"
          value={pro.lName}
          onChange={pro.updateLName}
        />
      </div>
      <div className="profile designation">
        <label htmlFor="designation">Current Designation</label>
        <input
          id="designation"
          type="text"
          value={pro.designation}
          onChange={pro.updateDesi}
        />
      </div>
      <div className="profile location">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={pro.location}
          onChange={pro.updateLoc}
        />
      </div>
      <div className="profile email">
        <label htmlFor="e-mail">E-mail</label>
        <input
          id="e-mail"
          type="text"
          value={pro.email}
          onChange={pro.updateEmail}
        />
      </div>
      <div className="profile contact">
        <label htmlFor="contact">Phone No.</label>
        <input
          id="contact"
          type="number"
          value={pro.phone}
          onChange={pro.updatePhone}
        />
      </div>
      <div className="profile Git">
        <label htmlFor="github">GitHub</label>
        <input
          id="github"
          type="text"
          value={pro.github}
          onChange={pro.updateGitHub}
        />
      </div>
      <div className="profile lindein">
        <label htmlFor="linkdein">Linkdein</label>
        <input
          id="linkdein"
          type="text"
          value={pro.linkdein}
          onChange={pro.updateLinkdein}
        />
      </div>
    </div>
  );
}
// updateDesi,
// updateEmail,
// updatePhone,
// updateLoc,
// updateWebsite,
// updateName,
