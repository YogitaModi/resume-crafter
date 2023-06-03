import React from "react";

export default function Profile() {
  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label htmlFor="designation">Current Designation</label>
        <input id="designation" type="text" />
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" />
      </div>
      <div>
        <label htmlFor="e-mail">E-mail</label>
        <input id="e-mail" type="text" />
      </div>
      <div>
        <label htmlFor="contact">Phone No.</label>
        <input id="contact" type="number" required />
      </div>
      <div>
        <label htmlFor="website">Website</label>
        <input id="website" type="text" />
      </div>
    </div>
  );
}
