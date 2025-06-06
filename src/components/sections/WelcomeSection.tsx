import { useTranslation } from "react-i18next";
import { dayTime } from "../../utils/utils-helpers";
import { Button } from "../ui";
import me from "../../assets/images/me.png";

export const WelcomeSection = () => {
    const { t } = useTranslation();
    const greetings = ["g_night", "g_day", "g_noon", "g_night"];
    const greet = greetings[dayTime()];
    const marginFE = t("lang") === "it" ? "md:ml-6" : "md:ml-10";

    const scrollIntoSection = (targetId: string) => {
        const target = document.getElementById(targetId);
        target?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <>
            <div className="mx-auto w-full max-w-[35rem]">
                <img
                    src={me}
                    alt="memoji of me"
                    className="float-right -mt-6 h-24 animate-fade-in-slide-left drop-shadow-light transition-transform hover:scale-105 xs:-mt-4 xs:mr-14 xs:h-26 sm:mr-12 sm:h-30 md:mr-20 md:h-32 dark:drop-shadow-dark"
                />
                <h2 className="t animate-fade-in-slide-right">{t(greet)},</h2>
                <span className="flex animate-fade-in-slide-right items-baseline gap-2">
                    <h2 className="t whitespace-nowrap">{t("i_am")}</h2>
                    <h1 className="t text-accent-light drop-shadow-light transition-transform hover:scale-105 dark:text-accent-dark dark:drop-shadow-dark">
                        Salvatore
                    </h1>
                </span>
                <p className={`t ${marginFE} animate-fade-in-slide-right`}>
                    <span className="align-top leading-5">{"<"}</span>
                    <b> FRONTEND DEVELOPER </b>
                    <span className="align-top leading-5">{"/>"}</span>
                </p>
                <q className="t animate-fade-in-slide-right">{t("about_me")}</q>
            </div>
            <div className="mt-12 grid animate-fade-in-slide-up gap-6 xs:mt-24 xs:grid-cols-2">
                <Button
                    text={t("contact")}
                    onClick={() => scrollIntoSection("contact_me")}
                    className="mx-auto py-4 xs:mr-0"
                    width="150px"
                />
                <Button
                    text={t("to_projects")}
                    onClick={() => scrollIntoSection("projects")}
                    className="mx-auto py-4 xs:ml-0"
                    width="150px"
                />
            </div>
        </>
    );
};
