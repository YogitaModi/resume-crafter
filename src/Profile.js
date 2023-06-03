import React from "react";
import "./resume.css";

export default function Profile() {
  return (
    <div>
      <div className="profile name">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div className="profile designation">
        <label htmlFor="designation">Current Designation</label>
        <input id="designation" type="text" />
      </div>
      <div className="profile location">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" />
      </div>
      <div className="profile email">
        <label htmlFor="e-mail">E-mail</label>
        <input id="e-mail" type="text" />
      </div>
      <div className="profile contact">
        <label htmlFor="contact">Phone No.</label>
        <input id="contact" type="number" required />
      </div>
      <div className="profile website">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" />
      </div>
    </div>
  );
}
