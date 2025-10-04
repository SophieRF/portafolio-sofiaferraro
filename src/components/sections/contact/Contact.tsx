import { FaWhatsapp } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { CopyText } from "./CopyText"

export const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#4C5B5C] to-[#5C7070] bg-clip-text text-transparent text-center">
                    {" "}
                    Contacto
                </h2>
                <div className="flex flex-col gap-4">
                    <span className="inline-flex items-center gap-2">
                        <SiGmail color="#F54927" /> 
                        <CopyText text="sofiaferraro2110@gmail.com" />
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <FaWhatsapp color="#348713"/> 
                        <CopyText text="0261 2181666" />
                    </span>
                </div>

            </div>
        </section>
    )
}
