import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* <Link to="./">Home</Link>&nbsp;
       <Link to="./Allfaculty">all faculty</Link> */}

      {/* <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="" width="30" height="30" class="d-inline-block align-top" alt=""></img>
    Bootstrap
  </a>
</nav> */}
      <div class="container ">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="navbar-brand" href="#" style={{ fontWeight: "900" }}>
            <span style={{ color: "red" }}>DARSHAN</span> UNIVERSITY
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <form class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <div class="nav-link" href="#" style={{ fontWeight: "900" }}>
                  <Link to="./">HOME</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <span class="sr-only">(current)</span>
                </div>
              </li>
              <li class="nav-item">
                <div class="nav-link" href="#" style={{ fontWeight: "900" }}>
                  {" "}
                  <Link to="./Allfaculty">ALL FACULTY </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              </li>
              <li class="nav-item">
                <div class="nav-link" href="#" style={{ fontWeight: "900" }}>
                  {" "}
                  <Link to="./Faculty/add">ADD FACULTY </Link>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </div>
              </li>
            </ul>
          </form>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active"></li>
              <li class="nav-item"></li>
              <li class="nav-item"></li>
            </ul>
          </div>
        </nav>
      </div>
      <br />
      <br />
    </>
  );
}
export default Header;
