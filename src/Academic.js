import React from "react";

export default function Academic() {
  return (
    <div>
      <div>
        <label>University</label>
        <input type="text" />
      </div>
      <div>
        <label>Starts</label>
        <input min={2010} type="number" /> - <label>Ends</label>
        <input min={2000} type="number" />
      </div>
      <div>
        <label htmlFor="qualification">Qualification</label>
        <input id="qualification" type="text" />
      </div>
    </div>
  );
}
