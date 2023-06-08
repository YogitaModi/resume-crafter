import React from "react";
import { useLocation } from "react-router-dom";

export default function NotesBar() {
  const location = useLocation();
  return (
    <div>
      <p className="tag-line">
        <strong>
          {location.pathname === "/display-resume"
            ? "Fill your details on create resume page and click the below button to view and Download the resume"
            : location.pathname === "/create-resume"
            ? "Start editing and build effective resume"
            : " Use this Resume Crafter and build your own resume and kick start your journey"}
        </strong>
      </p>
    </div>
  );
}
