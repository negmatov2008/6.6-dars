import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">THE PLANETS</h1>
      <div className="links">
        <NavLink className={"link"} to={"/"}>MERCURY</NavLink>
        <NavLink className={"link"} to={"/venus"}>VENUS</NavLink>
        <NavLink className={"link"} to={"/earth"}>EARTH</NavLink>
        <NavLink className={"link"} to={"/mars"}>MARS</NavLink>
        <NavLink className={"link"} to={"/jupeter"}>JUPITER</NavLink>
        <NavLink className={"link"} to={"/saturan"}>SATURAN</NavLink>
        <NavLink className={"link"} to={"/urans"}>URANS</NavLink>
        <NavLink className={"link"} to={"/neptune"}>NEPTUNE</NavLink>
      </div>
    </div>
  );
}

export default Navbar;

/* <div className="page">
      <div className="img"></div>
      <h1>Joziko Randall</h1>
      <h6>GitHub,United Kingdom</h6>
      <ul className="menu">
        <li>
          <NavLink className="link" to="/">
            GitHub
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/mentor">
            Frontend Mentor
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/linkdln">
            Linkdln
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/twiter">
            Twiter
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/instagram">
            Instagram
          </NavLink>
        </li>
      </ul>
    </div> */
