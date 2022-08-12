import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FacultyAdd() {
  const [data, setData] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (params.FacultyId > 0) {
      fetch(
        "https://62da4f3c9eedb699636ae6d7.mockapi.io/Faculty/" +
          params.FacultyId,
        {
          method: "GET"
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, []);
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col" align="center">
            <div
              class="card text-center "
              style={{ backgroundColor: "fade(#FFFFFF, 50%)" }}
            >
              <div class="card-header">ADD FACULTY</div>
              <div class="card-body">
                <form>
                  <div class="form-row">
                    <div class="form-group col">
                      <label for="inputEmail4">Faculty Name&nbsp;:&nbsp;</label>
                      <input
                        type="textbox"
                        value={data.FacultyName}
                        onChange={(e) => {
                          setData({ ...data, FacultyName: e.target.value });
                        }}
                      ></input>
                    </div>
                    <div class="form-group col">
                      <label for="inputPassword4">Img&nbsp;:&nbsp;</label>
                      <input
                        type="textbox"
                        value={data.FacultyImg}
                        onChange={(e) => {
                          setData({ ...data, FacultyImg: e.target.value });
                        }}
                      ></input>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col">
                      <label for="inputEmail4">Experience&nbsp;:&nbsp;</label>
                      <input
                        type="textbox"
                        value={data.FacultyExperienceInYears}
                        onChange={(e) => {
                          setData({
                            ...data,
                            FacultyExperienceInYears: e.target.value
                          });
                        }}
                      ></input>
                    </div>
                    <div class="form-group col">
                      <label for="inputEmail4">Mambership&nbsp;:&nbsp;</label>
                      <input
                        type="textbox"
                        value={data.FacultyMambership}
                        onChange={(e) => {
                          setData({
                            ...data,
                            FacultyMambership: e.target.value
                          });
                        }}
                      ></input>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col">
                      <label for="inputEmail4">Designation&nbsp;:&nbsp;</label>
                      <input
                        value={data.FacultyDesignation}
                        type="textbox"
                        onChange={(e) => {
                          setData({
                            ...data,
                            FacultyDesignation: e.target.value
                          });
                        }}
                      ></input>
                    </div>
                    <div class="form-group col">
                      <label for="inputPassword4">Education&nbsp;:&nbsp;</label>
                      <input
                        value={data.FacultyHighestEducation}
                        type="textbox"
                        onChange={(e) => {
                          setData({
                            ...data,
                            FacultyHighestEducation: e.target.value
                          });
                        }}
                      ></input>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="inputEmail4">
                        FacultyProfileDescription&nbsp;:&nbsp;
                      </label>
                      <textarea
                        value={data.FacultyProfileDescription}
                        onChange={(e) => {
                          setData({
                            ...data,
                            FacultyProfileDescription: e.target.value
                          });
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col"></div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col">
                      <label for="inputEmail4">Email&nbsp;:&nbsp;</label>
                      <input
                        type="textbox"
                        value={data.FacultyEmailAddress}
                        onChange={(e) => {
                          setData({
                            ...data,
                            FacultyEmailAddress: e.target.value
                          });
                        }}
                      ></input>
                    </div>
                    <div class="form-group col">
                      <label for="inputPassword4">Seating&nbsp;:&nbsp;</label>
                      <input
                        value={data.FacultySeating}
                        type="textbox"
                        onChange={(e) => {
                          setData({ ...data, FacultySeating: e.target.value });
                        }}
                      ></input>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col">
                      <label for="inputPassword4">Number&nbsp;:&nbsp;</label>
                      <input
                        type="textbox"
                        value={data.FacultyMobileNumber}
                        onChange={(e) => {
                          setData({
                            ...data,
                            FacultyMobileNumber: e.target.value
                          });
                        }}
                      ></input>
                    </div>
                    <div class="form-group col">
                      <label for="inputPassword4">
                        Specialization&nbsp;:&nbsp;
                      </label>
                      <input
                        value={data.FacultyAreaSpecialization}
                        type="textbox"
                        onChange={(e) => {
                          setData({
                            ...data,
                            FacultyAreaSpecialization: e.target.value
                          });
                        }}
                      ></input>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col">
                      <label for="inputEmail4">Subjects&nbsp;:&nbsp;</label>
                      <input
                        type="textbox"
                        value={data.FacultySubjectsTaught}
                        onChange={(e) => {
                          setData({
                            ...data,
                            FacultySubjectsTaught: e.target.value
                          });
                        }}
                      ></input>
                    </div>
                    <div class="form-group col">
                      <label for="inputPassword4">Pin&nbsp;:&nbsp;</label>
                      <input
                        type="textbox"
                        value={data.FacultyPin}
                        onChange={(e) => {
                          setData({
                            ...data,
                            FacultyPin: e.target.value
                          });
                        }}
                      ></input>
                    </div>
                  </div>
                </form>
              </div>
              <div class="card-footer text-muted">
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => {
                    if (params.FacultyId > 0) {
                      fetch(
                        "https://62da4f3c9eedb699636ae6d7.mockapi.io/Faculty/",
                        {
                          method: "PUT",
                          body: JSON.stringify(data),
                          headers: {
                            "Content-Type": "application/json"
                          }
                        }
                      ).then((res) => {
                        navigate("/Allfaculty");
                      });
                    } else {
                      fetch(
                        "https://62da4f3c9eedb699636ae6d7.mockapi.io/Faculty/",
                        {
                          method: "POST",
                          body: JSON.stringify(data),
                          headers: {
                            "Content-type": "application/json"
                          }
                        }
                      ).then((res) => {
                        navigate("/Allfaculty");
                      });
                    }
                  }}
                >
                  {params.FacultyId > 0 && "Edit  "}
                  {!(params.FacultyId > 0) && "Add  "} FACUTY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
