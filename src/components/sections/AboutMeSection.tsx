import { useTranslation } from "react-i18next";
import bip from "../../assets/images/bip.png";
import lw from "../../assets/images/leWagon.svg";
import jp from "../../assets/images/jp.png";
import i18n from "../../i18n";

export const AboutMeSection = () => {
    const { t } = useTranslation();

    return (
        <div
            id="about_me"
            className="mx-auto h-fit max-w-[35rem] animate-fade-in-slide-up"
        >
            <h2 className="t uppercase">
                {t("about")}
                <span
                    className={
                        i18n.language.includes("ja")
                            ? "text-xs xxs:whitespace-pre xs:text-sm"
                            : "hidden"
                    }
                >
                    {t("jp_extra")}
                </span>
            </h2>
            <span className="relative">
                <p className="t pt-8 text-justify xs:pt-12">
                    {t("more_about_1")}
                    <span className="text-transparent opacity-0">_____</span>
                </p>
                <a href="https://www.bip-group.com/" target="_blank">
                    <img
                        src={bip}
                        alt="bip logo"
                        width={50}
                        className="sticker absolute right-0 -bottom-2 -rotate-12 transition-transform hover:-rotate-4"
                    />
                </a>
            </span>
            <span className="relative">
                <p className="t pt-8 text-justify xs:pt-12">
                    {t("more_about_2")}
                </p>
                <a href="https://www.lewagon.com/" target="_blank">
                    <img
                        src={lw}
                        alt="leWagon logo"
                        width={50}
                        className="sticker absolute -bottom-3 -left-14 -rotate-12 transition-transform hover:-rotate-18"
                    />
                </a>
            </span>
            <span className="relative">
                <p className="t pt-8 text-justify xs:pt-12">
                    {t("more_about_3")}
                    <span className="text-transparent opacity-0">___</span>
                </p>
                <img
                    src={jp}
                    alt="Japan flag"
                    width={50}
                    className="sticker absolute -right-8 -bottom-5 -rotate-12 transition-transform hover:-rotate-4"
                />
            </span>
        </div>
    );
};
