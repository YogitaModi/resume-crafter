import React from "react";
import { useState } from "react";
import { v4 } from "uuid";

export default function Skills() {
  const skillArr = [];
  const [skill, setSkill] = useState();
  const setSkillValue = (e) => {
    setSkill(e.target.value);
    if ((e.key = "Enter" && skill.length !== 0)) {
      skillArr.push({ id: v4(), skillvalue: skill });
    }
  };
  return (
    <div>
      <div>
        <input type="text" value={skill} onChange={setSkillValue} />
      </div>
    </div>
  );
}
