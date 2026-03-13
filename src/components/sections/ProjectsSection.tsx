import {
    CaretLeftIcon,
    CaretRightIcon,
    CircleIcon,
} from "@phosphor-icons/react";
import { useId, useState } from "react";
import { useTranslation } from "react-i18next";
import { DemoUILogin, DevStats, SalToDo, TokyoEvents } from "./projects";

type AnimationState =
    | "slide-in-left"
    | "slide-in-right"
    | "slide-out-left"
    | "slide-out-right"
    | "idle";

export const ProjectsSection = () => {
    const { t } = useTranslation();
    const projects = [
        <TokyoEvents />,
        <SalToDo />,
        <DemoUILogin />,
        <DevStats />,
    ];

    const [currentProject, setCurrentProject] = useState<number>(1);
    const [animation, setAnimation] = useState<AnimationState>("idle");

    function handleClick(direction: "prev" | "next") {
        const isNext = direction === "next";

        setAnimation(isNext ? "slide-out-left" : "slide-out-right");

        setTimeout(() => {
            setCurrentProject((prev) => prev + (isNext ? 1 : -1));
            setAnimation(isNext ? "slide-in-left" : "slide-in-right");

            setTimeout(() => setAnimation("idle"), 300);
        }, 350);
    }

    const animationClass: Record<AnimationState, string> = {
        idle: "",
        "slide-in-left": "animate-fade-in-slide-left",
        "slide-in-right": "animate-fade-in-slide-right",
        "slide-out-left": "animate-fade-out-slide-left",
        "slide-out-right": "animate-fade-out-slide-right",
    };

    return (
        <div id="projects" className="mx-auto h-fit max-w-140">
            <h2 className="t uppercase">{t("projects")}</h2>
            <div className="flex justify-center gap-2">
                {projects.map((_, i) => {
                    const key = useId();
                    return (
                        <CircleIcon
                            key={key}
                            size={8}
                            weight={currentProject === i ? "fill" : "bold"}
                            className={`${
                                currentProject === i
                                    ? "scale-125 text-accent-light dark:text-accent-dark"
                                    : ""
                            } transition-all`}
                        />
                    );
                })}
            </div>
            <div className="relative">
                {projects[currentProject - 1] && (
                    <div
                        onClick={() => handleClick("prev")}
                        className="absolute top-40 right-full cursor-pointer rounded-full border border-accent-light/50 bg-primary-light/15 p-2 shadow-light backdrop-blur-xs transition-all hover:scale-110 hover:bg-accent-light/10 md:right-[calc(100%+1rem)] lg:right-[calc(100%+2rem)] dark:border-accent-dark/30 dark:bg-primary-dark/10 dark:shadow-dark dark:hover:bg-accent-dark/10"
                    >
                        <CaretLeftIcon size={28} />
                    </div>
                )}
                <div className={`w-full ${animationClass[animation]}`}>
                    {projects[currentProject]}
                </div>
                {projects[currentProject + 1] && (
                    <div
                        id="current-project"
                        onClick={() => handleClick("next")}
                        className="absolute top-40 left-full cursor-pointer rounded-full border border-accent-light/50 bg-primary-light/15 p-2 shadow-light backdrop-blur-xs transition-all hover:scale-110 hover:bg-accent-light/10 md:left-[calc(100%+1rem)] lg:left-[calc(100%+2rem)] dark:border-accent-dark/30 dark:bg-primary-dark/10 dark:shadow-dark dark:hover:bg-accent-dark/10"
                    >
                        <CaretRightIcon size={28} />
                    </div>
                )}
            </div>
            <hr className="border-accent-light dark:border-accent-dark" />
        </div>
    );
};
