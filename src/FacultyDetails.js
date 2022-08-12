import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function FacultyDetails() {
  let params = useParams();
  const [faculty, setfaculty] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      "https://62da4f3c9eedb699636ae6d7.mockapi.io/Faculty/" + params.FacultyId
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setfaculty(res);
      });
  }, []);

  return (
    <>
      <div class="container">
        <div style={{ marginLeft: "15px" }}>
          <div class="row">
            <div class="col-md-3">
              <div
                class="card--fuild"
                style={{
                  backgroundColor: "white",
                  borderRadius: "20px",
                  boxShadow: " 0 4px 4px 3px rgb(0 0 0 / 0.2)"
                }}
              >
                <div
                  class="card"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    opacity: ".7",
                    borderRadius: "10px",
                    boxShadow: " 0 4px 4px 3px rgb(0 0 0 / 0.2)"
                  }}
                >
                  <h3 style={{ fontWeight: "900" }}>Details</h3>
                </div>

                <img
                  class="card-img-top"
                  src={faculty.FacultyImg}
                  alt="Card image cap"
                  style={{ padding: "10px" }}
                ></img>
                <div class="card-body">
                  <h4
                    class="card-title"
                    style={{ fontWeight: "900" }}
                    align="center"
                  >
                    {faculty.FacultyName}
                  </h4>

                  <h6
                    class="card-title"
                    style={{ color: "greenyellow" }}
                    align="center"
                  >
                    {faculty.FacultyDesignation}
                  </h6>
                  <hr />
                  <h5
                    class="card-title"
                    align="center"
                    style={{ opacity: ".6" }}
                  >
                    {faculty.FacultyHighestEducation}
                  </h5>
                  <hr />
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <h6 style={{ fontSize: "12px" }}>Experiance</h6>
                        <button
                          type="button"
                          class="btn btn-info"
                          style={{ fontSize: "10px", opacity: ".6" }}
                        >
                          {faculty.FacultyExperienceInYears}+years
                        </button>
                      </div>

                      <div class="col">
                        <h6 style={{ fontSize: "12px" }}>Working since</h6>
                        <button
                          type="button"
                          class="btn btn-light"
                          style={{ fontSize: "10px" }}
                        >
                          {faculty.FacultyWorkingSince}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              &nbsp;
              <div
                class="card text-white bg-dark mb-3"
                style={{ maxWidth: " 18rem", opacity: ".9" }}
              >
                <div class="card-body">
                  <div class="row">
                    <div class="col">
                      <input
                        type="button"
                        class="btn btn-danger"
                        align="center"
                        onClick={() => {
                          fetch(
                            "https://62da4f3c9eedb699636ae6d7.mockapi.io/Faculty/" +
                              params.FacultyId,
                            {
                              method: "DELETE"
                            }
                          ).then((res) => {
                            navigate("/allfaculty");
                          });
                        }}
                        value="DELETE"
                      ></input>
                    </div>
                    <div class="col">
                      <input
                        type="button"
                        class="btn btn-warning"
                        align="center"
                        onClick={() => {
                          navigate("/Faculty/edit/" + params.FacultyId);
                        }}
                        value="EDIT"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="container-fuild">
                <div
                  class="card"
                  style={{
                    width: "98%",

                    borderRadius: "10px",
                    boxShadow: " 0 4px 4px 3px rgb(0 0 0 / 0.2)"
                  }}
                >
                  <div
                    class="card"
                    style={{
                      opacity: ".7",
                      backgroundColor: "black",
                      color: "white",
                      borderRadius: "10px",
                      boxShadow: " 0 4px 4px 3px rgb(0 0 0 / 0.2)"
                    }}
                  >
                    <h3 style={{ fontWeight: "900" }}>Profile</h3>
                  </div>

                  <div class="card-body">
                    <p class="card-text">{faculty.FacultyProfileDescription}</p>
                  </div>
                  <h6 style={{ paddingLeft: "10rem" }}>
                    <span>Area of Specialization</span> &nbsp; &nbsp;
                    <span class="card-text" style={{ fontSize: "13px" }}>
                      {faculty.FacultyAreaSpecialization}
                    </span>
                  </h6>
                  <br />
                  <h6 style={{ paddingLeft: "10rem" }}>
                    <span>Subjects Taught</span> &nbsp; &nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="card-text" style={{ fontSize: "13px" }}>
                      {faculty.FacultySubjectsTaught}
                    </span>
                  </h6>
                  <br />
                  <h6 style={{ paddingLeft: "10rem" }}>
                    <span>Faculty MamaberShip</span> &nbsp; &nbsp; &nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="card-text" style={{ fontSize: "13px" }}>
                      {faculty.FacultyMambership}
                    </span>
                  </h6>
                </div>
                <br />
                <div
                  class="card"
                  style={{
                    width: "98%",

                    borderRadius: "10px",
                    boxShadow: " 0 4px 4px 3px rgb(0 0 0 / 0.2)"
                  }}
                >
                  <div
                    class="card"
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      opacity: ".7",
                      borderRadius: "10px",
                      boxShadow: " 0 4px 4px 3px rgb(0 0 0 / 0.2)"
                    }}
                  >
                    <h3 style={{ fontWeight: "900" }}>Contect</h3>
                  </div>

                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h6 style={{ alignContent: "center" }}>
                          &#128222;&nbsp;&nbsp; MO(1): &nbsp;&nbsp;
                          {faculty.FacultyMobileNumber}
                        </h6>
                      </div>
                    </div>
                    <hr style={{ backgroundColor: "white" }} />

                    <div class="row">
                      <div class="col">
                        <h6 style={{ alignContent: "center" }}>
                          &#128231; &nbsp;{faculty.FacultyEmailAddress}
                        </h6>
                      </div>
                    </div>
                    <hr style={{ backgroundColor: "white" }} />

                    <div class="row">
                      <div class="col">
                        <h6 style={{ alignContent: "center" }}>
                          &#8982; &nbsp;{faculty.FacultyPin}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default FacultyDetails;
