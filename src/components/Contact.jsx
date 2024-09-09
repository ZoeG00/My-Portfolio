import { Typography } from "@material-tailwind/react";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

export default function Contact() {
  return (
    <section>
      <div className="blob"></div>
      <footer className="container-contact w-full">
        <div className="card-contact flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between p-8">
          <p>¡Gracias por pasar, no dudes en contactarme!</p>
          <ul
            className="flex flex-wrap items-center gap-y-2 gap-x-8"
            id="lista-de-enlaces"
          >
            <div className="subtitle">
              <li>
                <a
                  href="https://www.github.com/ZoeG00"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VscGithub size={24} />
                  <p>GitHub</p>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/zoeg00"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin size={24} />
                  <p>Linkedin</p>
                </a>
              </li>
            </div>
            <li>
              <Typography as="a" color="white" className="title-contact">
               Teléfono: +54 2634937329
              </Typography>
            </li>
            <li>
              <Typography as="a" color="white" className="title-contact">
               email: zoeguzman.ok@gmail.com
              </Typography>
            </li>
          </ul>
          <p className="text-white title-contact">
            &copy; 2024 Zoe Guzman Portfolio
          </p>
        </div>
      </footer>
    </section>
  );
}
