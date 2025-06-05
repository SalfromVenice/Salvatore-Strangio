import { useState } from "react";
import { createPortal } from "react-dom";

type PropsT = {
    src: string;
    alt?: string;
    className?: string;
};

export const ImageSticker: React.FC<PropsT> = ({ src, alt, className }) => {
    const [modalSrc, setModalSrc] = useState<string | null>(null);

    return (
        <div>
            <img
                src={src}
                alt={alt}
                className={`sticker cursor-zoom-in border-4 border-white transition-transform hover:scale-[101%] ${className}`}
                onClick={() => setModalSrc(src)}
            />
            {modalSrc && (
                <ImageModal src={modalSrc} onClose={() => setModalSrc(null)} />
            )}
        </div>
    );
};

type ModalPropsT = {
    src: string;
    onClose: () => void;
};

export const ImageModal: React.FC<ModalPropsT> = ({ src, onClose }) => {
    const portalRoot = document.getElementById("portal-root");
    if (!portalRoot) return;

    return createPortal(
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0,0,0,0.8)",
                display: "grid",
                placeContent: "center",
                zIndex: 9999,
                cursor: "zoom-out",
            }}
        >
            <img
                src={src}
                alt="full size"
                className="sticker max-h-[90vh] max-w-[90vw] border-4 border-white"
            />
        </div>,
        portalRoot,
    );
};
