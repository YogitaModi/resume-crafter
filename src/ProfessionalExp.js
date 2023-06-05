import React from "react";
import profileContext from "./profileContext";
import { useContext } from "react";

export default function ProfessionalExp() {
  const exp = useContext(profileContext);
  return (
    <div>
      <div className="profession">
        <label htmlFor="company">Company/organisation name</label>
        <input
          id="company"
          type="text"
          value={exp.company}
          onChange={exp.updateCompany}
        />
      </div>
      <div className="profession">
        <label>Designation</label>
        <input
          type="text"
          value={exp.companyDesig}
          onChange={exp.updateCompanyDesig}
        />
      </div>
      <div className="profession">
        <label>Location</label>
        <input
          type="text"
          value={exp.companyLoc}
          onChange={exp.updateCompanyLoc}
        />
      </div>
      <div className="profession">
        <label>Tenure</label>
        <input
          type="text"
          value={exp.companyTenure}
          onChange={exp.updateCompanyTenure}
        />
      </div>
      <div className="profession">
        <label>Write About Your Experience</label>
        <textarea value={exp.companyExp} onChange={exp.updateCompanyExp} />
      </div>
    </div>
  );
}
