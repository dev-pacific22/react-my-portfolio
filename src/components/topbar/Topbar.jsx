import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, toggleMenu }) {
  return (
    <div className={"topbar " + (menuOpen && "active")} id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Pacific
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+91 7709588XXX</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>dev.pacific22@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => toggleMenu()}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
