import profileContext from "./profileContext";
import { useState } from "react";
import React from "react";

export default function ProfileState(props) {
  const [fName, setFName] = useState("Yogita");
  const [lName, setLName] = useState("Modi");
  const [designation, setDesignation] = useState();
  const [location, setLocation] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [website, setWebsite] = useState();
  const [about, setAbout] = useState();
  const [university, setUniversity] = useState();
  const [qualification, setQualification] = useState();
  const [startYear, setStartYear] = useState();
  const [endYear, setEndYear] = useState();
  const [company, setCompany] = useState();
  const [companyLoc, setCompanyLoc] = useState();
  const [companyTenure, setCompanyTenure] = useState();
  const [companyDesig, setCompanyDesig] = useState();
  const [companyExp, setCompanyExp] = useState();
  const [projectTitle, setProjectTitle] = useState();
  const [projectDescription, setProjectDescription] = useState();
  const [projectTenure, setProjectTenure] = useState();
  const [projectUrl, setProjectUrl] = useState();

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

  return (
    <profileContext.Provider
      value={{
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
      }}
    >
      {props.children}
    </profileContext.Provider>
  );
}
