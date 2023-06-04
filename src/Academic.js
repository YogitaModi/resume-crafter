import React, { useContext } from "react";
import profileContext from "./profileContext";

export default function Academic() {
  const pro = useContext(profileContext);

  return (
    <div>
      <div className="academic">
        <label>University</label>
        <input type="text" value={pro.university} onChange={pro.updateUni} />
      </div>
      <div className="academic">
        <label>Starts</label>
        <input
          min={2010}
          type="number"
          value={pro.startYear}
          onChange={pro.updateStart}
        />{" "}
        - <label>Ends</label>
        <input
          min={2000}
          type="number"
          value={pro.endYear}
          onChange={pro.updateEnd}
        />
      </div>
      <div className="academic">
        <label htmlFor="qualification">Qualification</label>
        <input
          id="qualification"
          type="text"
          value={pro.qualification}
          onChange={pro.updateQualification}
        />
      </div>
    </div>
  );
}
