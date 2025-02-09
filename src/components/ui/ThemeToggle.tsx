import { MoonStars, Sun } from "@phosphor-icons/react";
import { useState } from "react";
import { handleThemeChange } from "../../utils/theme-helpers";

export const ThemeToggle = () => {
    const [state, setState] = useState<boolean>(false);

    const handleClick = () => {
        setState((prev) => !prev);
        handleThemeChange();
    };

    return (
        <div
            className="my-auto h-6 w-10 cursor-pointer rounded-full border border-accent-light/50 bg-primary-light/15 p-0.25 hover:border-accent-light hover:shadow-light focus:outline-none focus-visible:outline-none dark:border-accent-dark/30 dark:bg-primary-dark/10 dark:hover:border-accent-dark dark:hover:shadow-dark"
            onClick={handleClick}
        >
            <div
                className={`grid aspect-square h-5 place-content-center rounded-full transition-all duration-500 ${state ? "translate-x-4" : "translate-x-0 -rotate-90"} `}
            >
                <Sun
                    className={`transition-opacity ${state ? "hidden opacity-0" : ""}`}
                />
                <MoonStars
                    className={`transition-opacity ${state ? "" : "hidden opacity-0"}`}
                />
            </div>
        </div>
    );
};
