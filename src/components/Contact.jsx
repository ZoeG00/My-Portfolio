import { Typography } from "@material-tailwind/react";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

export default function Contact() {
  return (
    <footer className="w-full p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        <img
          src="https://i.ibb.co/MNPx72S/logo2.png"
          alt="logo"
          width={150}
          height={50}
        />
        <ul
          className="flex flex-wrap items-center gap-y-2 gap-x-8"
          id="lista-de-enlaces"
        >
          <div id="networks">
            <li>
              <a
                href="https://www.github.com/ZoeG00"
                target="_blank"
                rel="noreferrer"
              >
                <VscGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/zoeg00"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
            </li>
          </div>
          <li>
            <Typography
              as="a"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              +54 2634937329
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              zgsolucionesdigitales@gmail.com
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50 " />
      <p className="text-black">&copy; 2023 Soluciones Digitales</p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#42d1f5" fillOpacity="1" d="M0,32L40,74.7C80,117,160,203,240,208C320,213,400,139,480,138.7C560,139,640,213,720,234.7C800,256,880,224,960,202.7C1040,181,1120,171,1200,138.7C1280,107,1360,53,1400,26.7L1440,0L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    </footer>
    
  );
}
