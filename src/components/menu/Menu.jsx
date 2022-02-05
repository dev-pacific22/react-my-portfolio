import "./menu.scss";

export default function Menu({ menuOpen, toggleMenu }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => toggleMenu()}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => toggleMenu()}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => toggleMenu()}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => toggleMenu()}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => toggleMenu()}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
