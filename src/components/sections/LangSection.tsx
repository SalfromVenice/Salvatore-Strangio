import { useTranslation } from "react-i18next";
import jp from "../../assets/images/logos/jp.png";
import it from "../../assets/images/logos/it.png";
import uk from "../../assets/images/logos/uk.png";

export const LangSection = () => {
    const { t } = useTranslation();

    return (
        <div id="lang_section" className="mx-auto h-fit max-w-[35rem]">
            <h2 className="t uppercase">{t("lang")}</h2>
            <ul className="mx-auto mt-12 grid w-fit justify-between gap-x-14 gap-y-4 pl-12 md:w-full md:grid-cols-[auto_auto_auto]">
                <li className="relative">
                    <img
                        src={it}
                        alt="Italian flag"
                        width={25}
                        className="sticker absolute bottom-0 -left-10 -rotate-12 transition-transform hover:-rotate-4"
                    />
                    {t("native")}
                </li>
                <li className="relative">
                    <img
                        src={uk}
                        alt="Union Jack flag"
                        width={25}
                        className="sticker absolute bottom-0 -left-10 -rotate-12 transition-transform hover:-rotate-4"
                    />
                    {t("good")}
                </li>
                <li className="relative">
                    <img
                        src={jp}
                        alt="Japan flag"
                        width={25}
                        className="sticker absolute bottom-0 -left-10 -rotate-12 transition-transform hover:-rotate-4"
                    />
                    {t("very_bg")}
                </li>
            </ul>
        </div>
    );
};
