import { useTranslation } from "react-i18next";
import css3 from "../../../assets/images/css3.png";
import demo_ui_1 from "../../../assets/images/demo_ui_1.png";
import github from "../../../assets/images/github.png";
import html5 from "../../../assets/images/html5.png";
import javascript from "../../../assets/images/javascript.png";
import { ImageSticker } from "../../ui";

export const DemoUILogin: React.FC = () => {
    const { t } = useTranslation();

    return (
        <li>
            <div className="mb-2 grid gap-2 sm:grid-cols-[auto_1fr]">
                <div>
                    <h3>{t("app_2_title")}</h3>
                    <p className="text-sm">{t("app_2_subtitle")}</p>
                </div>
                <div className="col-span-full flex items-center justify-around gap-4 xs:col-span-1 xs:justify-end">
                    <img
                        title="CSS3"
                        src={css3}
                        alt="CSS3 logo"
                        className="sticker aspect-square h-8 transition-all hover:scale-105"
                    />
                    <img
                        title="HTML5"
                        src={html5}
                        alt="HTML5 logo"
                        className="sticker aspect-square h-8 transition-all hover:scale-105"
                    />
                    <img
                        title="JavaScript"
                        src={javascript}
                        alt="JavaScript logo"
                        className="sticker aspect-square h-8 transition-all hover:scale-105"
                    />
                    <img
                        title="GitHub"
                        src={github}
                        alt="GitHub logo"
                        className="sticker aspect-square h-8 transition-all hover:scale-105"
                    />
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <p className="t text-justify">{t("app_2_desc")}</p>
                <ImageSticker
                    src={demo_ui_1}
                    alt={`Demo UI - ${t("screenshot")}`}
                    className="mt-2"
                />
            </div>
        </li>
    );
};
