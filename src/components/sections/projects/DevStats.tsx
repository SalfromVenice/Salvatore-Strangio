import { useTranslation } from "react-i18next";
import devStats_dark_1 from "../../../assets/images/devStats_dark_1.png";
import devStats_dark_2 from "../../../assets/images/devStats_dark_2.png";
import devStats_light_1 from "../../../assets/images/devStats_light_1.png";
import devStats_light_2 from "../../../assets/images/devStats_light_2.png";
import rails from "../../../assets/images/rails.png";
import react from "../../../assets/images/react.svg";
import render from "../../../assets/images/render.png";
import typescript from "../../../assets/images/typescript.png";
import vite from "../../../assets/images/vite.svg";
import { useIsThemeDark } from "../../../utils/useIsThemeDark";
import { DemoBtn, ImageSticker } from "../../ui";

export const DevStats: React.FC = () => {
    const { t } = useTranslation();
    const isThemeDark = useIsThemeDark();

    let img1 = devStats_light_1;
    let img2 = devStats_light_2;

    if (isThemeDark) {
        img1 = devStats_dark_1;
        img2 = devStats_dark_2;
    }

    return (
        <li>
            <div className="mb-2 grid gap-2 sm:grid-cols-[auto_1fr]">
                <div className="flex items-center gap-4">
                    <h3>{t("app_3_title")}</h3>
                    <DemoBtn link="https://dev-stats.onrender.com/" />
                </div>
                <div className="col-span-full flex items-center justify-around gap-4 xs:col-span-1 xs:justify-end">
                    <img
                        src={vite}
                        alt="vite logo"
                        className="sticker -mr-1 aspect-square h-6 transition-all hover:scale-105"
                    />
                    <img
                        src={react}
                        alt="react logo"
                        className="sticker aspect-square h-6 transition-all hover:scale-105"
                    />
                    <img
                        src={typescript}
                        alt="typescript logo"
                        className="sticker aspect-square h-6 transition-all hover:scale-105"
                    />
                    <img
                        src={rails}
                        alt="rails logo"
                        className="sticker aspect-square h-6 transition-all hover:scale-105"
                    />
                    <img
                        src={render}
                        alt="render logo"
                        className="sticker -mx-2 aspect-square h-9 transition-all hover:scale-105"
                    />
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <p className="t text-justify">{t("app_3_desc")}</p>
                <div className="space-y-4 pt-2">
                    <ImageSticker src={img1} alt="dev-stast screenshot" />
                    <ImageSticker src={img2} alt="dev-stast screenshot" />
                </div>
            </div>
        </li>
    );
};
