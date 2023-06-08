import React, { useContext } from "react";
import profileContext from "./profileContext";
export default function Alert(props) {
  const showAlert = useContext(profileContext);
  return (
    showAlert.alert && (
      <div>
        <div className="alert alert-dark" role="alert">
          Resume Displayed Below
        </div>
      </div>
    )
  );
}
