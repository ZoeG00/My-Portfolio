import { TiHome } from "react-icons/ti";
import { TbUserCode, TbMailFilled } from "react-icons/tb";
import { BiLogoReact } from "react-icons/bi";

export default function Menu() {
  return (
    <>
      <div>
        <a 
        aria-label="Chat on WhatsApp" 
        href="https://wa.me/542634937329"
        target="_blank" rel="noreferrer"
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
        <div className="floating-button">
          <TiHome />
        </div>
        <div className="element-container">
          <p className="float-element tooltip-left">
            <TbUserCode />
            <p className='flex justify-start nav-titles'>Sobre mí</p>
          </p>
          <p className="float-element">
            <BiLogoReact />
            <p className='nav-titles'>Proyectos</p>
          </p>
          <p className="float-element">
            <TbMailFilled />
             <p className='nav-titles'>Contacto</p>
          </p>
        </div>
      </div>
    </>
  );
}
