import { useTranslation } from "react-i18next";
import adobe from "../../../assets/images/adobe.ico";
import netlify from "../../../assets/images/netlify.png";
import rails from "../../../assets/images/rails.png";
import railway from "../../../assets/images/railway.ico";
import react from "../../../assets/images/react.svg";
import todos_dark_1 from "../../../assets/images/todos_dark_1.png";
import todos_dark_2 from "../../../assets/images/todos_dark_2.png";
import todos_light_1 from "../../../assets/images/todos_light_1.png";
import todos_light_2 from "../../../assets/images/todos_light_2.png";
import typescript from "../../../assets/images/typescript.png";
import { useIsThemeDark } from "../../../utils/useIsThemeDark";
import { ImageSticker } from "../../ui";

export const SalToDo: React.FC = () => {
    const { t } = useTranslation();
    const isThemeDark = useIsThemeDark();

    let img_1 = todos_light_1;
    let img_2 = todos_light_2;

    if (isThemeDark) {
        img_1 = todos_dark_1;
        img_2 = todos_dark_2;
    }

    return (
        <li>
            <div className="mb-2 grid gap-2 sm:grid-cols-[auto_1fr]">
                <h3>{t("app_1_title")}</h3>
                {/* <a
                    className="peer flex items-center gap-2 text-xs underline-offset-4 transition-all hover:text-accent-light hover:underline hover:drop-shadow-light dark:hover:text-accent-dark dark:hover:drop-shadow-dark"
                    href="https://sal-todo-app.netlify.app/"
                    target="_blank"
                >
                    link
                    <RocketLaunch size={18} />
                </a> */}
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
            <div className="grid gap-4 md:grid-cols-2">
                <p className="t text-justify">{t("app_1_desc")}</p>
                <div className="space-y-4 pt-2">
                    <ImageSticker src={img_1} alt="todo app screenshot" />
                    <ImageSticker src={img_2} alt="todo app screenshot" />
                </div>
            </div>
        </li>
    );
};
