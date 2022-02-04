import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Pacific
          </a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+91 7709588XXX</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>dev.pacific22@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <h2> Menu </h2>
        </div>
      </div>
    </div>
  );
}
