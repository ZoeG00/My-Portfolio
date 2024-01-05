import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss, SiChakraui, SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { FaSquareGit } from "react-icons/fa6";

export default function CardTech() {
  return (
    <>
      <div className="container-sobre-mi mx-16 segunda-card">
        <div className="card">
          <div className="slide slide1">
            <img src="https://i.ibb.co/QFZFPy0/Dise-o-sin-t-tulo-6.png" alt='tech' className="rounded" />
          </div>
          <div className="slide slide2">
            <div className="icon-container">
              <div className="font-bold text-xl mt-6">Tecnologías</div>
              <div className="icon-group">
              <icon className="text-base mb-2">
                <TiHtml5 className="icon-item" color="yellow" size={44} />
              </icon>
              <icon>
                <IoLogoCss3 className="icon-item" color="blue" size={44} />
              </icon>
              <icon>
              <TbBrandJavascript className="icon-item" color="yellow" size={44}/>
              </icon>
              <icon>
              <FaReact className="icon-item" color="aqua" size={44}/>
              </icon>
              <icon>
              <BsFillBootstrapFill className="icon-item" color="darkviolet" size={40}/>
              </icon>
              <icon>
              <SiTailwindcss className="icon-item" color="aqua" size={40}/>
              </icon>
              <icon>
              <SiChakraui className="icon-item" color="lightgreen" size={40}/>
              </icon>
              <icon>
              <FaPhp className="icon-item" color="darkviolet" size={44}/>
              </icon>
              <icon>
              <SiMysql className="icon-item" color="white" size={44}/>
              </icon>
              <icon>
              <FaSquareGit className="icon-item" color="red" size={44}/>
              </icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
