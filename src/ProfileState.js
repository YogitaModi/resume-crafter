import profileContext from "./profileContext";
import { useState } from "react";
import React from "react";

export default function ProfileState(props) {
  const v = "type";
  const [fName, setFName] = useState(v);
  const [lName, setLName] = useState(v);
  const [designation, setDesignation] = useState(v);
  const [location, setLocation] = useState(v);
  const [email, setEmail] = useState(v);
  const [phone, setPhone] = useState(v);
  const [linkdein, setLinkdein] = useState(v);
  const [github, setGitHub] = useState(v);
  const [about, setAbout] = useState(v);
  const [university, setUniversity] = useState(v);
  const [qualification, setQualification] = useState(v);
  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();
  const [company, setCompany] = useState(v);
  const [companyLoc, setCompanyLoc] = useState(v);
  const [companyTenure, setCompanyTenure] = useState(v);
  const [companyDesig, setCompanyDesig] = useState(v);
  const [companyExp, setCompanyExp] = useState(v);
  const [projectTitle, setProjectTitle] = useState(v);
  const [projectDescription, setProjectDescription] = useState(v);
  const [projectTenure, setProjectTenure] = useState(v);
  const [projectUrl, setProjectUrl] = useState(v);
  const [alert, setAlert] = useState(false);
  const [skill, setSkill] = useState("type and enter");
  let [skilltag, setSkillTag] = useState([]);

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
  const updateLinkdein = (e) => {
    setLinkdein(e.target.value);
  };
  const updateGitHub = (e) => {
    setGitHub(e.target.value);
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
  const updateCompany = (e) => {
    setCompany(e.target.value);
  };
  const updateCompanyLoc = (e) => {
    setCompanyLoc(e.target.value);
  };
  const updateCompanyTenure = (e) => {
    setCompanyTenure(e.target.value);
  };
  const updateCompanyExp = (e) => {
    setCompanyExp(e.target.value);
  };
  const updateCompanyDesig = (e) => {
    setCompanyDesig(e.target.value);
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
  const updateAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
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
        linkdein,
        github,
        about,
        updateAbout,
        updateDesi,
        updateEmail,
        updatePhone,
        updateLoc,
        updateLinkdein,
        updateGitHub,

        university,
        updateUni,
        qualification,
        startYear,
        endYear,
        updateQualification,
        updateStart,
        updateEnd,
        company,
        companyDesig,
        companyExp,
        companyLoc,
        companyTenure,
        updateCompany,
        updateCompanyLoc,
        updateCompanyTenure,
        updateCompanyExp,
        updateCompanyDesig,
        projectTitle,
        projectDescription,
        projectTenure,
        projectUrl,
        updateProjectitle,
        updateProjectDescription,
        updateProjectTenure,
        updateProjectUrl,
        alert,
        updateAlert,
        skill,
        setSkill,
        skilltag,
        setSkillTag,
      }}
    >
      {props.children}
    </profileContext.Provider>
  );
}
