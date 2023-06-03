import React from "react";

export default function ProfessionalExp() {
  return (
    <div>
      <div className="profession">
        <label htmlFor="company">Company/organisation name</label>
        <input id="company" type="text" />
      </div>
      <div className="profession">
        <label>Designation</label>
        <input type="text" />
      </div>
      <div className="profession">
        <label>Location</label>
        <input type="text" />
      </div>
      <div className="profession">
        <label>Tenure</label>
        <input type="number" />
      </div>
      <div className="profession">
        <label>Write About Your Experience</label>
        <textarea />
      </div>
    </div>
  );
}
