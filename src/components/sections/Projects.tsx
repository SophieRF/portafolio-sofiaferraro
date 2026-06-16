import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import SprintScreen from "../../assets/SprintScreen.png";
import WebCeramica from "../../assets/WebCeramica.png";
import GestorProductos from "../../assets/GestorProductos.png";
import HeroesApp from "../../assets/HeroesApp.png";
import Ecommerce from "../../assets/Ecommerce.png";
import Cocktelia from "../../assets/Cocktelia.png";
import { useState } from "react";

export const Projects = () => {

  const [ceramicaExpanded, setCeramicaExpanded] = useState(false);
  const [ecommerceExpanded, setEcommerceExpanded] = useState(false);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-[#4C5B5C] to-[#5C7070] bg-clip-text text-transparent text-center">
          {" "}
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 gap-6">

          {/* WEB EMPRENDIMIENTO CERÁMICA */}
          <div className="rounded-xl border border-gray-300 hover:-translate-y-1
         hover:border-[#BCED09] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition h-full flex flex-col">

            <div>
              <img
                className="rounded-xl rounded-b-none"
                src={WebCeramica}
                alt="Web Emprendimiento de cerámica"
              />
            </div>

            <div className="p-3 flex flex-col flex-1">

              <div className="flex group flex-col">
                <h3 className="text-xl text-gray-700 font-bold mb-2">
                  WebSite de Emprendimiento
                </h3>
                <p className="text-gray-500 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-400">
                  Web personalizada para emprendimiento de piezas cerámicas, con catálogo de productos, información del emprendimiento y carrito de compras. Proyecto individual.
                </p>
              </div>

              <div className="flex gap-2 justify-center items-center mb-2">
                <div
                  className={`flex flex-wrap gap-2 justify-center items-center 
                    ${!ceramicaExpanded ? "max-h-[4.5rem] overflow-hidden" : ""}`}
                >
                  {["React", "TypeScript", "Tailwind-CSS", "Zustand", "Node.js", "Axios", "MongoDB", "Express", "JWT", "WatsApp Click-to-chat"]
                    .slice(0, ceramicaExpanded ? undefined : 6)
                    .map((tech, key) => (
                      <span
                        key={key}
                        className="bg-[#d8ebb1] hover:bg-[rgba(188,237,9,0.61)] text-gray-700 py-1 px-3 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                </div>

                <div>
                  <span
                    onClick={() => setCeramicaExpanded(!ceramicaExpanded)}
                    className="w-6 h-6 rounded-full bg-[#d8ebb1] hover:bg-[rgba(188,237,9,0.61)] text-gray-700 hover:cursor-pointer flex items-center justify-center mr-2"
                  >
                    {ceramicaExpanded ? "−" : "+"}
                  </span>
                </div>
              </div>

              <div className="flex flex-row gap-4 justify-center items-center mt-auto">
                <a
                  href="https://github.com/SophieRF/WebHorneraDeBarro-front"
                  className="text-[#344141] hover:text-[#ff6750] transition-colors pt-2"
                >
                  <FaGithub size={32} />
                </a>
                <a
                  href="https://webhornera.netlify.app/"
                  className="text-[#344141] hover:text-[#ff6750] transition-colors pt-2"
                >
                  <FaGlobe size={30} />
                </a>
              </div>
            </div>
          </div>

          {/*E-COMMERCE*/}
          <div className="rounded-xl border border-gray-300 hover:-translate-y-1
         hover:border-[#BCED09] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition h-full flex flex-col">

            <div>
              <img
                className="rounded-xl rounded-b-none"
                src={Ecommerce}
                alt="E-commerce"
              />
            </div>

            <div className="p-3 flex flex-col flex-1">
              <div className="flex flex-col flex-1 group max-h-36 hover:max-h-[500px] overflow-hidden transition-all duration-300">
                <h3 className="text-xl text-gray-700 font-bold mb-2">E-commerce Indumentaria</h3>
                <p className="text-gray-500 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-400">
                  E-commerce de indumentaria con login, panel admin y funciones clave de tienda online. Desarrollada en la Tecnicatura en Programación - UTN.
                </p>
              </div>

              <div className="mb-2 flex flex-row gap-2 justify-center items-center">
                <div
                  className={`flex flex-wrap gap-2 justify-center items-center ${!ecommerceExpanded ? "max-h-[4.5rem] overflow-hidden" : ""
                    }`}>
                  {["React", "TypeScript", "Tailwind-CSS", "Java", "SpringBoot", "MySQL", "Redux Toolkit", "Axios", "JWT", "MercadoPago SDK"]
                    .slice(0, ecommerceExpanded ? undefined : 6)
                    .map((tech, key) => (
                      <span
                        key={key}
                        className="bg-[#d8ebb1] hover:bg-[rgba(188,237,9,0.61)] text-gray-700 py-1 px-3 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
                <div>
                  <span
                    onClick={() => setEcommerceExpanded(!ecommerceExpanded)}
                    className="w-6 h-6 rounded-full bg-[#d8ebb1] hover:bg-[rgba(188,237,9,0.61)] text-gray-700 hover:cursor-pointer flex items-center justify-center mr-2"
                  >
                    {ecommerceExpanded ? "−" : "+"}
                  </span>
                </div>

              </div>

              <div className="flex justify-center items-center mt-auto">

                <a href="https://github.com/Fix404/Final-metodologia-frontend.git"
                  className="text-[#344141] hover:text-[#ff6750] transition-colors pt-4">

                  <FaGithub size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* TO-DO APP */}
          <div className="rounded-xl border border-gray-300 hover:-translate-y-1
         hover:border-[#BCED09] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition h-full flex flex-col">

            <div>
              <img
                className="rounded-xl rounded-b-none"
                src={SprintScreen}
                alt="ToDo App"
              />
            </div>

            <div className="p-3 flex flex-col flex-1">

              <div className="flex flex-col">
                <h3 className="text-xl text-gray-700 font-bold mb-2">
                  To-Do List App
                </h3>
                <p className="text-gray-500 mb-4">
                  Aplicación web para la gestión de tareas y sprints, desarrollada en la Tecnicatura en Programación - UTN.
                </p>
              </div>


              <div className="flex justify-center flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "CSS", "Node.js", "Zustand"].map((tech, key) => (
                  <span
                    className="bg-[#d8ebb1] text-gray-700 py-1 px-3 rounded-full text-sm 
                   hover:bg-[rgba(188,237,9,0.61)] hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center items-center mt-auto">
                <a
                  href="https://github.com/SophieRF/Proyecto_ToDoList_Reactors.git"
                  className="text-[#344141] hover:text-[#ff6750] transition-colors pt-2"
                >
                  <FaGithub size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* HEROES APP */}
          <div className="rounded-xl border border-gray-300 hover:-translate-y-1
hover:border-[#BCED09] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition h-full flex flex-col">

            <div>
              <img
                className="rounded-xl rounded-b-none"
                src={HeroesApp}
                alt="Heores App"
              />
            </div>

            <div className="p-3 flex flex-col flex-1">
              <div className="flex flex-col group max-h-36 hover:max-h-[500px] overflow-hidden transition-all duration-300">
                <h3 className="text-xl text-gray-700 font-bold mb-2">Heroes App</h3>
                <p className="text-gray-500 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-400">
                  Galería de héroes filtrable por Marvel o DC, con detalles específicos de cada personaje. Desarrollada en la Tecnicatura en Programación - UTN.
                </p>
              </div>

              <div className="flex justify-center flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Node.js", "Redux", "CSS"].map((tech, key) => (
                  <span
                    className="bg-[#d8ebb1] text-gray-700 py-1 px-3 rounded-full text-sm 
                   hover:bg-[rgba(188,237,9,0.61)] hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center items-center mt-auto">

                <a href="https://github.com/SophieRF/heroesApp.git"
                  className="text-[#344141] hover:text-[#ff6750] transition-colors pt-2"
                >
                  <FaGithub size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* GESTOR COMERCIAL */}
          <div className="rounded-xl border border-gray-300 hover:-translate-y-1
         hover:border-[#BCED09] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition h-full flex flex-col">

            <div>
              <img
                className="rounded-xl rounded-b-none"
                src={GestorProductos}
                alt="Gestor Comercial"
              />
            </div>

            <div className="p-3 flex flex-col flex-1">
              <div className="flex flex-col flex-1 group max-h-36 hover:max-h-[500px] overflow-hidden transition-all duration-300">
                <h3 className="text-xl text-gray-700 font-bold mb-2">Gestor Comercial</h3>
                <p className="text-gray-500 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-400">
                  Aplicación web para gestionar comercios, sus sucursales, productos y categorías asociadas.
                  Desarrollada en la Tecnicatura en Programación - UTN.
                </p>
              </div>

              <div className="flex justify-center flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Node.js", "Redux", "CSS - Bootstrap"].map((tech, key) => (
                  <span
                    className="bg-[#d8ebb1] text-gray-700 py-1 px-3 rounded-full text-sm 
            hover:bg-[rgba(188,237,9,0.61)] hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center items-center mt-auto">
                <a
                  href="https://github.com/Fix404/Proyecto_final_SustanciaX.git"
                  className="text-[#344141] hover:text-[#ff6750] transition-colors pt-2"
                >
                  <FaGithub size={32} />
                </a>
              </div>
            </div>
          </div>

          {/*COCKTELIA*/}
          <div className="rounded-xl border border-gray-300 hover:-translate-y-1
         hover:border-[#BCED09] hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition h-full flex flex-col">

            <div>
              <img
                className="w-full h-56 sm:h-80 md:h-46 lg:h-34 object-cover rounded-xl rounded-b-none"
                src={Cocktelia}
                alt="Cocktelia"
              />
            </div>

            <div className="p-3 flex flex-col flex-1">
              <div className="flex flex-col flex-1 group max-h-36 hover:max-h-[500px] overflow-hidden transition-all duration-300">
                <h3 className="text-xl text-gray-700 font-bold mb-2">Cocktelia</h3>
                <p className="text-gray-500 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-400">
                  App mobile - Recetario de cócteles. Proyecto final del Bootcamp "Desarrollo de aplicaciones con Flutter" - Código Facilito
                </p>
              </div>

              <div className="flex justify-center flex-wrap gap-2 mb-4">
                {["Dart", "Flutter", "Andriod Studio", "Emulador Android"].map((tech, key) => (
                  <span
                    className="bg-[#d8ebb1] text-gray-700 py-1 px-3 rounded-full text-sm 
            hover:bg-[rgba(188,237,9,0.61)] hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    key={key}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center items-center mt-auto">
                <a
                  href="https://github.com/SophieRF/Cocktelia.git"
                  className="text-[#344141] hover:text-[#ff6750] transition-colors pt-2"
                >
                  <FaGithub size={32} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
