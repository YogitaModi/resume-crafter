import profileContext from "./profileContext";
import { useState } from "react";
import React from "react";

export default function ResumeState(props) {
  const professionalValue = [
    {
      name: "name",
      location: "location",
      designation: "designation",
      tenure: "tenure",
      experience: "experience",
    },
  ];
  const v = "type";
  const [fName, setFName] = useState(v);
  const [lName, setLName] = useState(v);
  const [designation, setDesignation] = useState(v);
  const [location, setLocation] = useState(v);
  const [email, setEmail] = useState(v);
  const [phone, setPhone] = useState(v);
  const [website, setWebsite] = useState(v);
  const [about, setAbout] = useState(v);
  const [university, setUniversity] = useState(v);
  const [qualification, setQualification] = useState(v);
  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();
  const [company, setCompany] = useState(professionalValue);

  const [projectTitle, setProjectTitle] = useState(v);
  const [projectDescription, setProjectDescription] = useState(v);
  const [projectTenure, setProjectTenure] = useState(v);
  const [projectUrl, setProjectUrl] = useState(v);

  // connecting to backend
  let [sending, setSend] = useState(false);
  const updateSend = () => {
    let respond = window.confirm("done editing");
    if (respond && fName !== "" && lName !== "") {
      setSend(true);
    } else {
      setSend(false);
    }
  };

  const updateFName = (e) => {
    setFName(e.target.value);
  };
  const updateLName = (e) => {
    setLName(e.target.value);
  };
  const updateLoc = (e) => {
    setLocation(e.target.value);
  };
  const updateDesi = (e) => {
    setDesignation(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePhone = (e) => {
    setPhone(e.target.value);
  };
  const updateWebsite = (e) => {
    setWebsite(e.target.value);
  };

  const updateAbout = (e) => {
    setAbout(e.target.value);
  };
  const updateUni = (e) => {
    setUniversity(e.target.value);
  };
  const updateQualification = (e) => {
    setQualification(e.target.value);
  };
  const updateStart = (e) => {
    setStartYear(e.target.value);
  };
  const updateEnd = (e) => {
    setEndYear(e.target.value);
  };
  const updateCompany = ({
    name,
    designation,
    tenure,
    experience,
    location,
  }) => {
    setCompany(
      professionalValue.push({
        name: name,
        designation: designation,
        location: location,
        experience: experience,
        tenure: tenure,
      })
    );
  };

  const updateProjectitle = (e) => {
    setProjectTitle(e.target.value);
  };
  const updateProjectDescription = (e) => {
    setProjectDescription(e.target.value);
  };
  const updateProjectTenure = (e) => {
    setProjectTenure(e.target.value);
  };
  const updateProjectUrl = (e) => {
    setProjectUrl(e.target.value);
  };

  return (
    <profileContext.Provider
      value={{
        sending,
        updateSend,
        fName,
        lName,
        updateFName,
        updateLName,
        designation,
        location,
        email,
        phone,
        website,
        about,
        updateAbout,
        updateDesi,
        updateEmail,
        updatePhone,
        updateLoc,
        updateWebsite,

        university,
        updateUni,
        qualification,
        startYear,
        endYear,
        updateQualification,
        updateStart,
        updateEnd,
        company,

        updateCompany,

        projectTitle,
        projectDescription,
        projectTenure,
        projectUrl,
        updateProjectitle,
        updateProjectDescription,
        updateProjectTenure,
        updateProjectUrl,
      }}
    >
      {props.children}
    </profileContext.Provider>
  );
}
