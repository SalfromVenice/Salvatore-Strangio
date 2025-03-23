import { RocketLaunch } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import adobe from "../../assets/images/adobe.ico";
import netlify from "../../assets/images/netlify.png";
import rails from "../../assets/images/rails.png";
import railway from "../../assets/images/railway.ico";
import react from "../../assets/images/react.svg";
import typescript from "../../assets/images/typescript.png";

export const ProjectsSection = () => {
    const { t } = useTranslation();

    return (
        <div className="mx-auto h-fit max-w-[35rem]">
            <h2 className="t uppercase">{t("projects")}</h2>
            <ul className="pt-8 xs:pt-12">
                <li className="">
                    <div className="grid grid-cols-[auto_auto_1fr] gap-2">
                        <h3>{t("app_1_title")}</h3>
                        <a
                            className="peer flex items-center gap-2 text-xs underline-offset-4 transition-all hover:text-accent-light hover:underline hover:drop-shadow-light dark:hover:text-accent-dark dark:hover:drop-shadow-dark"
                            href="https://sal-todo-app.netlify.app/"
                            target="_blank"
                        >
                            link
                            <RocketLaunch size={18} />
                        </a>
                        <div className="col-span-full flex items-center justify-around gap-4 xs:col-span-1 xs:justify-end">
                            <img
                                src={rails}
                                alt="Ruby on Rails logo"
                                className="sticker aspect-square h-6 transition-all hover:scale-105"
                            />
                            <img
                                src={railway}
                                alt="Railway logo"
                                className="sticker aspect-square h-6 transition-all hover:scale-105"
                            />
                            <img
                                src={react}
                                alt="React logo"
                                className="sticker aspect-square h-6 transition-all hover:scale-105"
                            />
                            <img
                                src={typescript}
                                alt="TypeScript logo"
                                className="sticker aspect-square h-6 transition-all hover:scale-105"
                            />
                            <img
                                src={adobe}
                                alt="Adobe logo"
                                className="sticker aspect-square h-6 transition-all hover:scale-105"
                            />
                            <img
                                src={netlify}
                                alt="Netlify logo"
                                className="sticker aspect-square h-6 transition-all hover:scale-105"
                            />
                        </div>
                    </div>
                    <p className="t text-justify">{t("app_1_desc")}</p>
                </li>
            </ul>
        </div>
    );
};
