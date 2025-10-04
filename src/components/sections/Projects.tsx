import { FaGithub } from "react-icons/fa";
import SprintScreen from "../../assets/SprintScreen.png";
import GestorProductos from "../../assets/GestorProductos.png";
import HeroesApp from "../../assets/HeroesApp.png";
import Ecommerce from "../../assets/Ecommerce.png";
import Cocktelia from "../../assets/Cocktelia.png";

export const Projects = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

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

              <div className="flex flex-col flex-1 group max-h-36 hover:max-h-[500px] overflow-hidden transition-all duration-300">
                <h3 className="text-xl text-gray-700 font-bold mb-2">
                  To-Do List App
                </h3>
                <p className="text-gray-500 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-400">
                  Aplicación web para la gestión de tareas y sprints, desarrollada en la Tecnicatura en Programación - UTN.
                </p>
              </div>


              <div className="flex justify-center flex-wrap gap-2 mb-4">
                {["React", "TypeScript", "Node.js", "Zustand", "CSS", "Json-server"].map((tech, key) => (
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
              <div className="flex flex-col flex-1 group max-h-36 hover:max-h-[500px] overflow-hidden transition-all duration-300">
                <h3 className="text-xl text-gray-700 font-bold mb-2">Heroes App</h3>
                <p className="text-gray-500 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-400">
                  Galería de héroes filtrable por Marvel o DC, con detalles específicos de cada personaje.                  Desarrollada en la Tecnicatura en Programación - UTN.
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
                <a
                  href="https://github.com/SophieRF/heroesApp.git"
                  className="text-[#344141] hover:text-[#ff6750] transition-colors pt-2"
                >
                  <FaGithub size={32} />
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

              <div className="flex justify-center flex-wrap gap-2 mb-4">
                {["React - TS", "Redux Toolkit", "Axios", "Tailwind-CSS", "MercadoPago SDK", "JWT", "Java", "SpringBoot", "MySQL"].map((tech, key) => (
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
                  href="https://github.com/Fix404/Final-metodologia-frontend.git"
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
                className="w-full h-36 object-cover rounded-xl rounded-b-none"
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
