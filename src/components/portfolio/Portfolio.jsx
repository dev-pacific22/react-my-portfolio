import { useState, useEffect } from "react";
import { portfolioListData } from "../../data";
import PortfolioList from "../portfoliolist/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let selectedProjects = portfolioListData.find(
      (item) => item.id === selected
    ).projects;
    setProjects(selectedProjects);
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {portfolioListData.map((item) => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {projects?.map((item) => {
          return (
            <div className="item">
              <img src={item?.img} alt="" />
              <h3>{item?.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
