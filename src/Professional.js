import React from "react";
import profileContext from "./profileContext";
import { useContext, useState } from "react";

export default function ProfessionalExp() {
  const exp = useContext(profileContext);
  const [profession, setProfession] = useState({
    name: "",
    designation: "",
    tenure: "",
    location: "",
    experience: "",
  });
  const onChange = (e) => {
    setProfession({ ...profession, [e.target.name]: e.target.value });
  };
  const submitHandle = () => {
    exp.updateCompany(profession);
  };
  return (
    <div>
      <div className="profession">
        <label htmlFor="company">Company/organisation name</label>
        <input
          id="company"
          type="text"
          value={exp.company.name}
          name="name"
          onChange={onChange}
        />
      </div>
      <div className="profession">
        <label>Designation</label>
        <input
          type="text"
          //   value={exp.company.designation}
          onChange={onChange}
          name="designation"
        />
      </div>
      <div className="profession">
        <label>Location</label>
        <input
          type="text"
          //   value={exp.company.location}
          onChange={onChange}
          name="location"
        />
      </div>
      <div className="profession">
        <label>Tenure</label>
        <input
          type="text"
          //   value={exp.company.tenure}
          onChange={onChange}
          name="tenure"
        />
      </div>
      <div className="profession">
        <label>Write About Your Experience</label>
        <textarea
          //   value={exp.company.experience}
          onChange={onChange}
          name="experience"
        />
      </div>
      <button onClick={submitHandle}>submit value</button>
    </div>
  );
}
