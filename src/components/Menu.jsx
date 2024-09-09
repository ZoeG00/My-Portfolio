import { TiHome } from "react-icons/ti";
import { TbUserCode, TbMailFilled } from "react-icons/tb";
import { BiLogoReact } from "react-icons/bi";
import { Link } from "react-router-dom";

import "../App.css";

export default function Menu() {
  return (
    <>
      <div>
        <a
          aria-label="Chat on WhatsApp"
          href="https://wa.me/542634937329"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="Chat on WhatsApp"
            id="wtsp-button"
            src="https://i.ibb.co/wCZxZ1M/Whats-App-Button-Green-Small.png"
            width="20%"
          />
        </a>
      </div>
      <div className="floating-container">
        <Link to="/">
          <div className="floating-button">
            <TiHome />
          </div>
        </Link>
        <div className="element-container">
          <Link to="/sobre-mi" className="float-element tooltip-left">
            <TbUserCode className="icono-menu" size={34} />
            <p className="flex justify-start nav-titles">Sobre mí</p>
          </Link>
          <Link to="/proyectos" className="float-element">
            <BiLogoReact className="icono-menu" size={34} />
            <p className="nav-titles">Proyectos</p>
          </Link>
          <Link to="/contacto" className="float-element">
            <TbMailFilled className="icono-menu" size={34} />
            <p className="nav-titles">Contacto</p>
          </Link>
        </div>
      </div>
    </>
  );
}
