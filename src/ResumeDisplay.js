import { useState, useEffect, useContext, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import ReactToPrint from "react-to-print";
import "./resume.css";
import profileContext from "./profileContext";
import Watermark from "@uiw/react-watermark";

export default function ResumeDisplay() {
  const back = useContext(profileContext);
  const componentRef = useRef();

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
      back.linkdein &&
      back.github &&
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
      const github = back.github;
      const linkdein = back.linkdein;
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
          linkdein,
          github,
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
    back.updateAlert();
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
    <div id="bground">
      <div>
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
            marginBottom: "10px",
          }}
        >
          <strong>View Resume</strong>
        </button>

        {data.map((item) => (
          <>
            <ReactToPrint
              trigger={() => (
                <button
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    borderRadius: "8px",
                    marginTop: "20px",
                    height: "60px",
                    border: "none",
                    marginBottom: "10px",
                    marginLeft: "10px",
                  }}
                >
                  <strong>Print Resume</strong>
                </button>
              )}
              content={() => componentRef.current}
            />

            <div
              key={item.id}
              id="resume-bg"
              ref={componentRef}
              className="container"
            >
              <div className="left-side">
                <div
                  style={{
                    width: "270px",
                    height: "200px",
                    backgroundColor: "whitesmoke",
                    fontWeight: "bolder",
                    color: " #00032b",
                    fontSize: "100px",

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
                <h1 className="my-3 ">
                  <span className=" mx-1">{item.fname}</span>
                  <span>{item.lname}</span>
                </h1>
                <h4 className="my-3">{item.designation}</h4>
                <span className="my-3">
                  <i
                    class="fa-solid fa-location-dot mx-3"
                    style={{ color: "#54e8f2" }}
                  ></i>

                  {item.location}
                </span>{" "}
                <span className="my-3">
                  {" "}
                  <i class="fa-regular fa-envelope mx-3"></i>
                  {item.email}
                </span>
                <span className="my-3">
                  {" "}
                  <i
                    class="fa-solid fa-phone mx-3"
                    style={{ color: "#6e9ccf" }}
                  ></i>
                  {item.phone}
                </span>
                <p className="my-3">
                  <i class="fa-brands fa-linkedin mx-3"></i>
                  {item.linkdein}
                </p>
                <p className="my-3">
                  <i class="fa-brands fa-github mx-3"></i>
                  {item.github}
                </p>
              </div>
              <div className="right-side">
                <h3>ABOUT</h3>
                <p>{item.about}</p>
                <hr />
                <h3>EDUCATION</h3>
                <h5>{item.university}</h5>
                <span>{item.startYear}</span> - <span>{item.endYear}</span>
                <h5>{item.qualification}</h5>
                <hr />
                <h3>EXPERIENCE</h3>
                <h5>{item.company}</h5>
                <p>{item.companyLoc}</p>
                <h5>{item.companyDesig}</h5>
                <h5>{item.companyTenure}</h5>
                <p>{item.companyExp}</p>
                <hr />
                <h3>PROJECTS</h3>
                <h5>{item.projectTitle}</h5>
                <p>{item.projectUrl}</p>
                <p>{item.projectTenure}</p>
                <p>{item.projectDescription}</p>
                <div
                  className="container"
                  style={{
                    backgroundColor: "gray",
                    width: "580px",
                    height: "25px",
                    position: "relative",
                    top: "40px",
                    padding: "5px",
                    fontWeight: "bolder",
                    color: "whitesmoke",
                  }}
                >
                  <p>
                    <strong>
                      copyright &copy; Resume Crafter by YOGITA MODI
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={deleteName}
                data-id={item.id}
                style={{
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: "8px",
                  marginTop: "20px",
                  height: "60px",
                  border: "none",
                  marginBottom: "10px",
                }}
                className="container col-md-2"
              >
                <strong>Delete Resume</strong>
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
