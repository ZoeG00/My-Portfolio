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
          src="../src/assets/img/WhatsAppButtonGreenSmall.svg" 
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
          </p>
          <p className="float-element">
            <BiLogoReact />
          </p>
          <p className="float-element">
            <TbMailFilled />
          </p>
        </div>
      </div>
    </>
  );
}
