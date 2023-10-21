import { Typography } from "@material-tailwind/react";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

export default function Footer() {
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
    </footer>
  );
}
