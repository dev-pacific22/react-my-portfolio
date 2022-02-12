import { testimonialsData } from "../../data";
import "./testimonials.scss";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {testimonialsData.map((item) => (
          <div className={item?.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" alt="" className="left" />
              <img className="user" src={item?.img} alt="" />
              <img className="right" src={item?.icon} alt="" />
            </div>
            <div className="center">{item?.desc}</div>
            <div className="bottom">
              <h3> {item?.name} </h3>
              <h4> {item?.title} </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
