import { useState } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const listFolio = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "react-native",
      title: "React Native",
    },
    {
      id: "android",
      title: "Android",
    },
    {
      id: "ios",
      title: "iOS",
    },
    {
      id: "flutter",
      title: "Flutter",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {listFolio.map((item) => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/content/soccer.jpg" alt="" />
          <h3>GDPR Consent App</h3>
        </div>
        <div className="item">
          <img src="assets/content/soccer.jpg" alt="" />
          <h3>GDPR Consent App</h3>
        </div>
        <div className="item">
          <img src="assets/content/soccer.jpg" alt="" />
          <h3>GDPR Consent App</h3>
        </div>
        <div className="item">
          <img src="assets/content/soccer.jpg" alt="" />
          <h3>GDPR Consent App</h3>
        </div>
        <div className="item">
          <img src="assets/content/soccer.jpg" alt="" />
          <h3>GDPR Consent App</h3>
        </div>
        <div className="item">
          <img src="assets/content/soccer.jpg" alt="" />
          <h3>GDPR Consent App</h3>
        </div>
      </div>
    </div>
  );
}
