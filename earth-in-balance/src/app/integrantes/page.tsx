import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import pedro from "@/img/pedro.jpg";
import marcos from "@/img/marcos.jpg";
import heitor from "@/img/HeitorOrtega.png";

export default function Time() {
  return (
    <main className="w-[90%] mx-auto my-5">
      <div className="text-center">
        <div className="text-center">
          <h2 className="text-black font-bold text-2xl">INTEGRANTES</h2>

          <div className="flex justify-center flex-wrap gap-5 mt-10 mb-5">
            <div className="bg-black text-white shadow-md p-5 rounded-lg w-full sm:w-[calc(33.333%-20px)] text-center flex flex-col items-center">
              <Image
                src={pedro}
                alt="Pedro Cardoso"
                width={100}
                height={100}
                className="rounded-full mb-2"
              />
              <h4>Pedro Henrique Cardoso</h4>
              <p>RM: 555160</p>
              <p>Scrum Master/Product Owner</p>
              <div className="social-links mt-2 flex gap-4">
                <a
                  href="https://github.com/Cardoso2626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 text-2xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 text-2xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="bg-black text-white shadow-md p-5 rounded-lg w-full sm:w-[calc(33.333%-20px)] text-center flex flex-col items-center">
              <Image
                src={heitor}
                alt="Heitor Ortega"
                width={100}
                height={100}
                className="rounded-full mb-2"
              />
              <h4>Heitor Ortega</h4>
              <p>RM: 557825</p>
              <p>Full Stack Developer</p>
              <div className="social-links mt-2 flex gap-4">
                <a
                  href="https://github.com/HeitorOrtega"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 text-2xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 text-2xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="bg-black text-white shadow-md p-5 rounded-lg w-full sm:w-[calc(33.333%-20px)] text-center flex flex-col items-center">
              <Image
                src={marcos}
                alt="Marcos Lourenço"
                width={100}
                height={100}
                className="rounded-full mb-2"
              />
              <h4>Marcos Lourenço</h4>
              <p>RM: 556496</p>
              <p>Full Stack Developer</p>
              <div className="social-links mt-2 flex gap-4">
                <a
                  href="https://github.com/MarcosVini22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 text-2xl"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-300 text-2xl"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <a
              href="https://github.com/Cardoso2626/gs_front"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-2 px-5 bg-black text-white rounded transition duration-300 ease-in-out hover:bg-[#79f53f]"
            >
              Repositório no GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
