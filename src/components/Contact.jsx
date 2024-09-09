import { Typography } from "@material-tailwind/react";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

export default function Contact() {
  return (
    <section>
      <footer className="container-contact w-full">
        <div className="card-contact flex flex-col items-center text-center gap-y-6 p-8">
          <p className="text-white">¡Gracias por pasar, no dudes en contactarme!</p>
          <ul
            className="flex flex-col items-center gap-y-4"
            id="lista-de-enlaces"
          >
            <div className="flex flex-col items-center gap-y-4">
              <li className="flex items-center gap-x-2">
                <a
                  href="https://www.github.com/ZoeG00"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-x-2 text-white"
                >
                  <VscGithub size={24} />
                  <p>GitHub</p>
                </a>
              </li>
              <li className="flex items-center gap-x-2">
                <a
                  href="https://www.linkedin.com/in/zoeg00"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-x-2 text-white"
                >
                  <BsLinkedin size={24} />
                  <p>LinkedIn</p>
                </a>
              </li>
            </div>
            <li>
              <Typography as="p" color="white" className="title-contact">
                Teléfono: +54 2634937329
              </Typography>
            </li>
            <li>
              <Typography as="p" color="white" className="title-contact">
                email: zoeguzman.ok@gmail.com
              </Typography>
            </li>
          </ul>
          <p className="text-white mt-4">&copy; 2024 Zoe Guzman Portfolio</p>
        </div>
      </footer>
    </section>
  );
}
