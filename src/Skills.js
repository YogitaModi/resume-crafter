import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Skills() {
  const [skill, setSkill] = useState("type and enter");
  let [skilltag, setSkillTag] = useState([]);

  const AddingAction = () => {
    if (skill !== "") {
      setSkillTag([...skilltag, { id: uuidv4(), value: skill }]);
      setSkill("");
    }
  };
  const deleteAction = (e) => {
    const deletevalue = e.target.getAttribute("data-id");
    const newArrr = skilltag.filter((Element) => Element.id !== deletevalue);
    setSkillTag(newArrr);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={skill}
          onChange={(e) => {
            setSkill(e.target.value);
          }}
        />

        <button onClick={AddingAction}>Add Skill</button>
        {skilltag.map((Element) => (
          <div key={uuidv4()}>
            <span key={Element.id}>{Element.value}</span>
            <button onClick={deleteAction} data-id={Element.id}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
