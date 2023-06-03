import React from "react";

export default function Profile() {
  return (
    <div>
      <div>
        <label for="name">Name</label>
        <input id="name" type="text" />
      </div>
      <div>
        <label for="designation">Current Designation</label>
        <input id="designation" type="text" />
      </div>
      <div>
        <label for="location">Location</label>
        <input type="text" id="location" />
      </div>
      <div>
        <label for="e-mail">E-mail</label>
        <input id="e-mail" type="text" />
      </div>
      <div>
        <label for="contact">Phone No.</label>
        <input id="contact" type="number" required />
      </div>
      <div>
        <label for="website">Website</label>
        <input id="website" type="text" />
      </div>
    </div>
  );
}
