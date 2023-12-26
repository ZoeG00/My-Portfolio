import React from 'react';
import { TiHome } from 'react-icons/ti';
import { TbUserCode, TbMailFilled } from 'react-icons/tb';
import { BiLogoReact } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import "../App.css";

export default function Menu() {
  const location = useLocation();

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
        <CSSTransition
          in={location.pathname === '/'}
          timeout={300}
          className="fade"
          unmountOnExit
        >
          <Link to="/">
            <div className="floating-button">
              <TiHome />
            </div>
          </Link>
        </CSSTransition>
        <div className="element-container">
          <CSSTransition
            in={location.pathname === '/sobre-mi'}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <Link to="/sobre-mi" className="float-element tooltip-left">
              <TbUserCode />
              <p className="flex justify-start nav-titles">Sobre mí</p>
            </Link>
          </CSSTransition>
          <CSSTransition
            in={location.pathname === '/proyectos'}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <Link to="/proyectos" className="float-element">
              <BiLogoReact />
              <p className="nav-titles">Proyectos</p>
            </Link>
          </CSSTransition>
          <CSSTransition
            in={location.pathname === '/contacto'}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <Link to="/contacto" className="float-element">
              <TbMailFilled />
              <p className="nav-titles">Contacto</p>
            </Link>
          </CSSTransition>
        </div>
      </div>
    </>
  );
}
