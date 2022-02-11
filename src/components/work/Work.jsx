import { useState } from "react";
import { worksData } from "../../data";
import "./work.scss";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(2);

  const handleClick = (type) => {
    if (type === "left") {
      setCurrentSlide(
        currentSlide > 0 ? currentSlide - 1 : worksData.length - 1
      );
    }
    if (type === "right") {
      setCurrentSlide(
        currentSlide < worksData.length - 1 ? currentSlide + 1 : 0
      );
    }
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {worksData.map((item) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imageContainer">
                    <img src={item?.icon} alt="" />
                  </div>
                  <h2>{item?.title}</h2>
                  <p>{item?.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={item?.img} alt=""></img>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
