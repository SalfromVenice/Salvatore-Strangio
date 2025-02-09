import { Translate } from "@phosphor-icons/react";
import {
    getAvailableLanguages,
    handleTranslate,
} from "../../utils/translation-helpers";
import { useState } from "react";

export const LangSelect = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const options: string[] = getAvailableLanguages();

    const languages: { [key: string]: string } = {
        en: "english",
        it: "italiano",
        ja: "日本語",
    };

    const openMenu = () => {
        setIsOpen(true);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
    const toggleMenu = () => {
        if (isOpen) {
            closeMenu();
            return;
        }
        openMenu();
        return;
    };

    return (
        <div
            className="relative my-auto cursor-pointer"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
        >
            <button
                onClick={toggleMenu}
                className="cursor-pointer rounded-md border border-accent-light/50 bg-primary-light/15 p-2 hover:border-accent-light hover:shadow-light focus:outline-none focus-visible:outline-none dark:border-accent-dark/30 dark:bg-primary-dark/10 dark:hover:border-accent-dark dark:hover:shadow-dark"
            >
                <Translate />
            </button>
            <div
                className={`absolute right-0 z-10 w-fit overflow-hidden rounded-md border-accent-light/50 bg-primary-light/85 transition-all duration-300 ${isOpen ? "block h-24 border px-4 py-2 backdrop-blur-xs" : "h-0 border-0"} hover:border-accent-light hover:shadow-light dark:border-accent-dark/30 dark:bg-primary-dark/85 dark:hover:border-accent-dark dark:hover:shadow-dark`}
            >
                {options.map((lng) => (
                    <p
                        key={lng}
                        onClick={() => handleTranslate(lng)}
                        className="underline-offset-2 transition-all duration-300 hover:scale-105 hover:text-accent-light hover:underline dark:hover:text-accent-dark"
                    >
                        {languages[lng] ?? lng}
                    </p>
                ))}
            </div>
        </div>
    );
};
