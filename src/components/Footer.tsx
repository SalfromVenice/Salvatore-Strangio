import { MapPinLine } from "@phosphor-icons/react";

export const Footer = () => {
    return (
        <footer className="absolute bottom-0.5 left-1/2 flex -translate-x-1/2 items-center gap-1 text-sm whitespace-nowrap sm:bottom-1 sm:text-base">
            © 2025 Salvatore Strangio -
            <a
                href="https://www.google.com/maps/place/45.4338,12.3382/@45.4338,12.3382,12z"
                target="_blank"
                className="flex gap-1 underline-offset-3 transition-all hover:text-accent-light hover:underline dark:hover:text-accent-dark"
            >
                <MapPinLine size={18} className="translate-y-0.75" />
                Venice, Italy
            </a>
        </footer>
    );
};
