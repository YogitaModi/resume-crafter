import React from "react";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import profileContext from "./profileContext";

export default function Skill() {
  const skills = useContext(profileContext);

  const AddingAction = () => {
    if (skills.skill !== "") {
      skills.setSkillTag([
        ...skills.skilltag,
        { id: uuidv4(), value: skills.skill },
      ]);

      skills.setSkill("");
    }

    console.log(skills.skilltag);
  };
  const deleteAction = (e) => {
    const deletevalue = e.target.getAttribute("data-id");
    const newArrr = skills.skilltag.filter(
      (Element) => Element.id !== deletevalue
    );
    skills.setSkillTag(newArrr);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={skills.skill}
          onChange={(e) => {
            skills.setSkill(e.target.value);
          }}
        />

        <button onClick={AddingAction}>Add Skill</button>
        {skills.skilltag.map((Element) => (
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
