import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import pedro from "@/img/pedro.jpg";
import marcos from "@/img/marcos.jpg";
import heitor from "@/img/HeitorOrtega.png";

export default function Time() {
  return (
    <main className="w-[90%] mx-auto my-5">
      <div className="text-center">
        <h2 className="text-black font-bold text-3xl">Integrantes</h2>

        <div className="flex justify-center flex-wrap gap-8 mt-10 mb-10">
          {/* Card do Pedro */}
          <div className="bg-black text-white shadow-md p-5 rounded-lg w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] text-center flex flex-col items-center">
            <Image
              src={pedro}
              alt="Pedro Cardoso"
              width={100}
              height={100}
              className="rounded-full mb-3"
            />
            <h4 className="text-lg font-bold">Pedro Henrique Cardoso</h4>
            <p>RM: 555160</p>
            <p>Scrum Master/Product Owner</p>
            <div className="social-links mt-3 flex gap-5">
              <a
                href="https://github.com/Cardoso2626"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-900 hover:text-gray-300 text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-saraiva-36b7702a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-900 hover:text-gray-300 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Card do Heitor */}
          <div className="bg-black text-white shadow-md p-5 rounded-lg w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] text-center flex flex-col items-center">
            <Image
              src={heitor}
              alt="Heitor Ortega"
              width={100}
              height={100}
              className="rounded-full mb-3"
            />
            <h4 className="text-lg font-bold">Heitor Ortega</h4>
            <p>RM: 557825</p>
            <p>Full Stack Developer</p>
            <div className="social-links mt-3 flex gap-5">
              <a
                href="https://github.com/HeitorOrtega"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-900 hover:text-gray-300 text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/heitor-ortega-silva-84b1aa2b6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-900 hover:text-gray-300 text-2xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Card do Marcos */}
          <div className="bg-black text-white shadow-md p-5 rounded-lg w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-20px)] text-center flex flex-col items-center">
            <Image
              src={marcos}
              alt="Marcos Lourenço"
              width={100}
              height={100}
              className="rounded-full mb-3"
            />
            <h4 className="text-lg font-bold">Marcos Lourenço</h4>
            <p>RM: 556496</p>
            <p>Full Stack Developer</p>
            <div className="social-links mt-3 flex gap-5">
              <a
                href="https://github.com/MarcosVini222"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-900 hover:text-gray-300 text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/marcos-vinicius-santos-louren%C3%A7o-45936526a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-900 hover:text-gray-300 text-2xl"
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
            className="inline-block py-3 px-6 bg-black text-white rounded-md text-lg transition duration-300 ease-in-out hover:bg-[hsl(126,28%,35%)]"
          >
            Repositório no GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
