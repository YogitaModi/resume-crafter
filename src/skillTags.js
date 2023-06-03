import React from "react";

export default function skillTags(props) {
  let values = props.skillTags;
  const deleteSkill = props.skillTags.filter((element) => {
    element.id !== parseInt(element.id);
  });
  values = deleteSkill;

  return (
    <div>
      {values.forEach((element) => {
        <span id="skilltag" key={element.id}>
          {element.skillvalue}
        </span>;
        <button onClick={deleteSkill}>X</button>;
      })}
    </div>
  );
}
