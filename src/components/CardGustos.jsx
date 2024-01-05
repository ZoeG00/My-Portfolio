import { IoGameController } from "react-icons/io5";
import { FaChessPawn } from "react-icons/fa";
import { FaGuitar } from "react-icons/fa6";
import { PiMicrophoneStageDuotone } from "react-icons/pi";
import { CgGym } from "react-icons/cg";
import { GiSpellBook } from "react-icons/gi";

export default function CardGustos() {
  return (
    <>
      <div className="container-sobre-mi mx-16 tercer-card">
        <div className="card">
          <div className="slide slide1">
            <img
              src="https://i.ibb.co/BjFCnZx/Dise-o-sin-t-tulo-3.png"
              alt="hobbies"
              className="rounded"
            />
          </div>
          <div className="slide slide2">
            <div className="icon-container">
              <div className="font-bold text-xl mb-2 mt-6">Hobbies</div>
              <div className="icon-group">
                <icon>
                  <IoGameController
                    className="icon-item"
                    color="aqua"
                    size={44}
                  />
                </icon>
                <icon>
                  <FaChessPawn className="icon-item" color="white" size={44} />
                </icon>
                <icon>
                  <FaGuitar className="icon-item" color="black" size={44} />
                </icon>
                <icon>
                  <PiMicrophoneStageDuotone
                    className="icon-item"
                    color="red"
                    size={44}
                  />
                </icon>
                <icon>
                  <CgGym className="icon-item" color="grey" size={44} />
                </icon>
                <icon>
                  <GiSpellBook
                    className="icon-item"
                    color="lightgreen"
                    size={44}
                  />
                </icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
