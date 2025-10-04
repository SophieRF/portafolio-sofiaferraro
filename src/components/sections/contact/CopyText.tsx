import { useState } from "react";

interface CopyTextProps {
    text: string;
}

export const CopyText: React.FC<CopyTextProps> = ({ text }) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (e) {
            console.error("Error al copiar al portapapeles: ", e);
        }
    };

    return (
  <div>
            <button
                onClick={handleCopy}
                className={`hover:cursor-pointer ${copied ? "text-gray-700" : "text-gray-700 hover:text-[#FF715B]"}`}
            >
                {text}
            </button>
            {copied && <span className="ml-2 text-[#99C73F]">Copiado!</span>}
        </div>
    );
}
