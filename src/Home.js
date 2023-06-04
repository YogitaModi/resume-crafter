import React from "react";
import "./App.css";
import profileContext from "./profileContext";
import { useContext } from "react";

export default function Home() {
  const hdisp = useContext(profileContext);
  const style1 = {
    width: "250px",
    height: "60px",
    backgroundColor: "blue",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
  };
  return (
    <div
      className="home-page"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "70px",
          height: "60px",
          backgroundColor: "#212426",
          fontWeight: "bolder",
          color: "white",
          fontSize: "40px",
          textAlign: "center",
          padding: "2px",
        }}
      >
        {hdisp.fName[0]}
        {hdisp.lName[0]}
      </div>
      <div style={style1}>
        <h1>
          {hdisp.fName}
          {hdisp.lName}
        </h1>
      </div>
    </div>
  );
}
