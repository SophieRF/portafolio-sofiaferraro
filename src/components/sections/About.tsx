export const About = () => {

  const frontendSkills = [
    "React",
    "TypeScript",
    "Tailwind - CSS",
    "Vite",
    "Redux Toolkit",
    "Zustand",
    "Dart",
    "Flutter"
  ];
  const backendSkills = [
    "Java",
    "SpringBoot",
    "Node.js",
    "MySQL",
    "MongoDB",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#4C5B5C] to-[#5C7070] bg-clip-text text-transparent text-center">
          Sobre Mi
        </h2>

        <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-800 text-center mb-4">
            Desarrolladora Full Stack, con experiencia en construcción de aplicaciones web con MERN stack y React + SpringBoot 
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl text-[#FF715B] font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d8ebb1] text-gray-700 py-1 px-3 rounded-ee-2xl text-sm 
                  hover:bg-[rgba(188,237,9,0.61)] hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl text-[#FF715B] font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#d8ebb1] text-gray-700 py-1 px-3 rounded-ee-2xl text-sm 
                  hover:bg-[rgba(188,237,9,0.85)] hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

            <div className="p-6 rounded-xl border hover:-translate-y-1 transition-all">
              <h3 className="text-xl text-[#FF715B] font-bold mb-4">
                🏫 Formación
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-z">
                <li>
                  <strong>Bootcamp de desarrollo de aplicaciones con Flutter</strong> - Código Facilito (2023-2024)
                </li>
                <li>
                  <strong>Tecnicatura Universitaria en Programación</strong> - Universidad Técnica Nacional (2023-2025)
                </li>
              </ul>
            </div>

        </div>
      </div>
    </section>
  )
}
