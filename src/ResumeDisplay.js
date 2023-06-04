import { useState, useEffect, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import "./skill.css";
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
      back.company &&
      back.about &&
      back.university &&
      back.qualification &&
      back.endYear &&
      back.startYear &&
      back.companyLoc &&
      back.companyTenure &&
      back.companyDesig &&
      back.companyExp &&
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
      const company = back.company;
      const about = back.about;
      const university = back.university;
      const qualification = back.qualification;
      const endYear = back.endYear;
      const startYear = back.startYear;
      const companyLoc = back.companyLoc;
      const companyTenure = back.companyTenure;
      const companyDesig = back.companyDesig;
      const companyExp = back.companyExp;
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
      <button onClick={Adding}>View Resume</button>

      {data.map((item) => (
        <div key={item.id} id="bground">
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
              margin: "5px",
            }}
          >
            {item.fname[0]}
            {item.lname[0]}
          </div>
          <h1>
            {item.fName}
            {item.lName}
          </h1>
          <h4>{item.designation}</h4>
          <span>{item.location}</span> | <span>{item.email}</span> |
          <span>{item.phone}</span>
          <p>{item.website}</p>
          <hr />
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
      ))}
    </div>
  );
}
