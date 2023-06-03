import React from "react";

export default function ProfessionalExp() {
  return (
    <div>
      <div>
        <label for="company">Company/organisation name</label>
        <input id="company" type="text" />
      </div>
      <div>
        <label>Designation</label>
        <input type="text" />
      </div>
      <div>
        <label>Location</label>
        <input type="text" />
      </div>
      <div>
        <label>Tenure</label>
        <input type="number" />
      </div>
      <div>
        <label>Write About Your Experience</label>
        <textarea />
      </div>
    </div>
  );
}
