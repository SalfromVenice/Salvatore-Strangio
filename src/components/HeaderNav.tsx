// import wave from "../assets/images/wave.png";
import { LangSelect, ThemeToggle } from "./ui";

export const HeaderNav = () => {
    return (
        <nav className="absolute top-2 right-1/2 z-10 grid w-fit min-w-xs translate-x-1/2 animate-fade-in-slide-down grid-cols-[1fr_auto_1fr_auto_auto] gap-2 rounded-xl border border-accent-light/50 bg-primary-light/15 p-4 shadow-light backdrop-blur-xs sm:top-9 dark:border-accent-dark/30 dark:bg-primary-dark/10 dark:shadow-dark">
            <div className="my-auto h-0.25 max-w-xs min-w-0 bg-accent-light dark:bg-accent-dark" />
            <h1 className="!font-questrial leading-none text-accent-light drop-shadow-light dark:text-accent-dark dark:drop-shadow-dark">
                Sal
            </h1>
            {/* <img
                    src={wave}
                    alt="Origami Kanagawa wave logo"
                    width={70}
                    className="sticker"
                /> */}

            <div className="my-auto h-0.25 max-w-xs min-w-0 bg-accent-light dark:bg-accent-dark" />

            <ThemeToggle />
            <LangSelect />
        </nav>
    );
};
