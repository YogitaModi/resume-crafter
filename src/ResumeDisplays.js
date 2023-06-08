import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import "./resume.css";
import profileContext from "./profileContext";

export default function ResumeDisplay() {
  const back = useContext(profileContext);

  const [data, setData] = useState([]);
  // Loading initial data from the server
  useEffect(function () {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  function Adding() {
    if (
      back.fName &&
      back.lName &&
      back.location &&
      back.designation &&
      back.phone &&
      back.email &&
      back.company.name &&
      back.about &&
      back.university &&
      back.qualification &&
      back.endYear &&
      back.startYear &&
      back.company.location &&
      back.company.tenure &&
      back.company.designation &&
      back.company.experience &&
      back.projectTitle &&
      back.projectTenure &&
      back.projectDescription &&
      back.projectUrl
    ) {
      const fname = back.fName;
      const lname = back.lName;
      const location = back.location;
      const designation = back.designation;
      const phone = back.phone;
      const email = back.email;
      const company = back.company.name;
      const about = back.about;
      const university = back.university;
      const qualification = back.qualification;
      const endYear = back.endYear;
      const startYear = back.startYear;
      const companyLoc = back.company.location;
      const companyTenure = back.company.tenure;
      const companyDesig = back.company.designation;
      const companyExp = back.company.experience;
      const projectTitle = back.projectTitle;
      const projectTenure = back.projectTenure;
      const projectDescription = back.projectDescription;
      const projectUrl = back.projectUrl;
      // console.log(fname, lname, location, designation, phone, email);

      fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: uuidv4(),
          fname,
          lname,
          location,
          designation,
          phone,
          email,
          company,
          about,
          university,
          qualification,
          endYear,
          startYear,
          companyLoc,
          companyTenure,
          companyDesig,
          companyExp,
          projectTitle,
          projectTenure,
          projectDescription,
          projectUrl,
        }),
      })
        .then((res) => res.json())
        .then((newData) => setData([...data, newData]));
      // .finally(() => {
      //   evt.target.value = "";
      // });
    }
  }

  // Deleting data from the server using a DELETE request
  function deleteName(evt) {
    const idnum = evt.target.getAttribute("data-id");
    fetch(`/api/${idnum}`, {
      method: "DELETE",
    }).then(() => {
      const newData = data.filter((item) => item.id !== idnum);
      setData(newData);
    });
  }
  return (
    <div>
      <p className="tag-line">
        <strong>
          Fill your details on create resume page and click the below button to
          view the resume
        </strong>
      </p>
      <div className="bground">
        <h1 style={{ marginTop: "15px", color: "whitesmoke", padding: "10px" }}>
          Resume Gallery
        </h1>

        <button
          onClick={Adding}
          style={{
            color: "white",
            backgroundColor: "green",
            borderRadius: "8px",
            marginTop: "20px",
            height: "60px",
            border: "none",
          }}
        >
          <strong>Click me to View Resume</strong>
        </button>

        {data.map((item) => (
          <div key={item.id} id="resume-bg">
            <div className="left-side">
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "whitesmoke",
                  fontWeight: "bolder",
                  color: " #00032b",
                  fontSize: "50px",

                  padding: "2px",
                  margin: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.fname[0]}
                {item.lname[0]}
              </div>
              <h1>
                {item.fname}
                {item.lname}
              </h1>
              <h4>{item.designation}</h4>
              <span>{item.location}</span> | <span>{item.email}</span> |
              <span>{item.phone}</span>
              <p>{item.website}</p>
            </div>
            <div className="right-side">
              <h1>About</h1>
              <p>{item.about}</p>
              <hr />
              <h1>Education</h1>
              <h3>{item.university}</h3>
              <span>{item.startYear}</span> - <span>{item.endYear}</span>
              <h5>{item.qualification}</h5>
              <hr />
              <h1>Experience</h1>
              <h3>{item.company}</h3>
              <p>{item.companyLoc}</p>
              <h4>{item.companyDesig}</h4>
              <h5>{item.companyTenure}</h5>
              <p>{item.companyExp}</p>
              <hr />
              <h1>Project</h1>
              <h3>{item.projectTitle}</h3>
              <p>{item.projectUrl}</p>
              <p>{item.projectTenure}</p>
              <p>{item.projectDescription}</p>
              <button onClick={deleteName} data-id={item.id}>
                Delete Resume
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}