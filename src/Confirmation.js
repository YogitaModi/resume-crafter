import React, { useState } from "react";
import Display from "./Display";
import Resume from "./Resume";

export default function Confirmation() {
  const [vissible, setVissible] = useState(false);
  const [editDisplay, setEditDisplay] = useState(true);
  function show_confirm() {
    let r = window.confirm("Press the button");
    if (r === true) {
      setVissible(true);
      setEditDisplay(false);
    } else {
      setVissible(false);
      setEditDisplay(true);
    }
  }
  return (
    <div>
      {editDisplay && <Resume />}
      <p>
        <strong>Click on the button is editing is done</strong>
      </p>
      <button onClick={show_confirm}>Create Resume</button>
      {vissible && <Display />}
    </div>
  );
}
