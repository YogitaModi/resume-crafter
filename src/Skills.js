import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Skills() {
  const [skill, setSkill] = useState();
  let [skilltag, setSkillTag] = useState([]);
  const setSkillValue = (e) => {
    setSkill(e.target.value);
  };
  const AddingAction = () => {
    if (skill !== "") {
      setSkillTag([...skilltag, { id: uuidv4(), value: skill }]);
      setSkill("");
      console.log(skilltag);
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
        <input type="text" value={skill} onChange={setSkillValue} />

        <button onClick={AddingAction}>Add Skill</button>
        {skilltag.map((Element) => (
          <div>
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
