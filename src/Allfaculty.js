import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Allfaculty() {
  let [faculties, setFaculties] = useState([]);

  useEffect(() => {
    fetch("https://62da4f3c9eedb699636ae6d7.mockapi.io/Faculty")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFaculties(res);
      });
  }, []);

  let Facultyarr = faculties.map((fac) => {
    return (
      <>
        {/* <Link to={"../faculty/" + fac.FacultyId}>
          <h1>{fac.FacultyName}</h1>
        </Link> */}

        <div class="col-md-4">
          <div
            class="card-body"
            style={{
              paddingBottom: "10px",
              backgroundColor: "white",
              borderRadius: "20px",
              opacity: ".8"
            }}
          >
            <Link to={"../faculty/" + fac.FacultyId}>
              <h5 class="card-title">Prof.{fac.FacultyName}</h5>{" "}
            </Link>

            <hr style={{ backgroundColor: "white", width: "80%" }} />
          </div>
        </div>
        <br />
      </>
    );
  });
  return (
    <div class="container">
      {" "}
      <div class="row">{Facultyarr}</div>
      <br />
    </div>
  );
}
export default Allfaculty;
