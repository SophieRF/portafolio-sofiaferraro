import { useEffect } from "react";

interface NavBarProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavBar = ({ menuOpen, setMenuOpen }: NavBarProps) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-gray-700"
          >
            sofia<span className="text-[#DB504A]">.ferraro</span>
          </a>

          <div
            className="text-gray-600 w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-800 hover:text-[#FF715B] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-[#FF715B] transition-colors"
            >
              Sobre mi
            </a>
            <a
              href="#projects"
              className="text-gray-800 hover:text-[#FF715B] transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-[#FF715B] transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
