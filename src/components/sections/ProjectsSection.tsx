import { useTranslation } from "react-i18next";
import { DemoUILogin, DevStats, SalToDo } from "./projects";

export const ProjectsSection = () => {
    const { t } = useTranslation();

    return (
        <div id="projects" className="mx-auto h-fit max-w-[35rem]">
            <h2 className="t uppercase">{t("projects")}</h2>
            <ul className="space-y-8 pt-8 xs:pt-12">
                <SalToDo />
                <hr className="border-accent-light dark:border-accent-dark" />
                <DemoUILogin />
                <hr className="border-accent-light dark:border-accent-dark" />
                <DevStats />
            </ul>
        </div>
    );
};
