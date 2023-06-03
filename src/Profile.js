import React from "react";
import "./resume.css";
import { useState } from "react";

export default function Profile() {
  const [name, setName] = useState();
  const [designation, setDesignation] = useState();
  const [location, setLocation] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [website, setWebsite] = useState();

  return (
    <div>
      <div className="profile name">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="profile designation">
        <label htmlFor="designation">Current Designation</label>
        <input
          id="designation"
          type="text"
          value={designation}
          onChange={(e) => {
            setDesignation(e.target.value);
          }}
        />
      </div>
      <div className="profile location">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
      </div>
      <div className="profile email">
        <label htmlFor="e-mail">E-mail</label>
        <input
          id="e-mail"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="profile contact">
        <label htmlFor="contact">Phone No.</label>
        <input
          id="contact"
          type="number"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        />
      </div>
      <div className="profile website">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          value={website}
          onChange={(e) => {
            setWebsite(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
