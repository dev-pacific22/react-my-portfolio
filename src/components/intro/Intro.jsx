import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { GitHub, LinkedIn } from "@material-ui/icons";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["React Native", "Android", "iOS", "Flutter"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={"assets/profile-pic.png"} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Bhagwat Karankar</h1>
          <h3>
            Mobile app developer with <span ref={textRef} />
          </h3>
          <div className="linkContainer">
            <a
              href="https://in.linkedin.com/in/bhagwat-karankar-720147126"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="icon" style={{ fill: "#0a66c2" }} />
            </a>
            <a
              href="https://github.com/dev-pacific22"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="icon" style={{ fill: "#323232" }} />
            </a>

            <a href="https://stackoverflow.com/users/3045099/bhagwat-k">
              <img
                src="https://stackexchange.com/users/flair/3653534.png"
                width="150"
                height="50"
                alt="profile for Bhagwat K at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                title="profile for Bhagwat K at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
              />
            </a>
          </div>
        </div>
        <a className="downArrow" href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
