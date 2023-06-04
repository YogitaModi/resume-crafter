import React from "react";
import profileContext from "./profileContext";
import { useContext } from "react";

export default function About() {
  const ab = useContext(profileContext);
  return (
    <div>
      <div className="about">
        <textarea
          value={ab.about}
          onChange={ab.updateAbout}
          minLength={"5000px"}
        />
      </div>
    </div>
  );
}
