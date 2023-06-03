import React from "react";

export default function Academic() {
  return (
    <div>
      <div className="academic">
        <label>University</label>
        <input type="text" />
      </div>
      <div className="academic">
        <label>Starts</label>
        <input min={2010} type="number" /> - <label>Ends</label>
        <input min={2000} type="number" />
      </div>
      <div className="academic">
        <label htmlFor="qualification">Qualification</label>
        <input id="qualification" type="text" />
      </div>
    </div>
  );
}
