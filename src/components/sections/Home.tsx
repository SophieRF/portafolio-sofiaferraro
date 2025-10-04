export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative">

            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#254441] to-[#43AA8B] bg-clip-text text-transparent leading-right">
                    Sofia Ferraro
                </h1>

                <p className="text-[#22333B] text-lg mb-8 max-w-4xl mx-auto">
                    ¡Hola! Soy Sofi, desarrolladora web Full-stack recién egresada de la Universidad Tecnológica Nacional en la Tecnicatura Universitaria en Programación. Me gusta crear aplicaciones intuitivas, armónicas y de buena estética. Mis principales cualidades son la organización y el trabajo metódico y ordenado.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="#projects"
                        className="bg-[#347766] text-gray-100 py-3 px-6 rounded font-medium transition relativa overflow-hidden 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                        Ver Proyectos
                    </a>

                    <a
                        href="#contact"
                        className="border border-[#347766] text-[#22333B] py-3 px-6 rounded font-medium transition-all duration-200 
                        hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-[#bec9a8]">
                        Contactarme
                    </a>
                </div>
            </div>
        </section>
    )
}
