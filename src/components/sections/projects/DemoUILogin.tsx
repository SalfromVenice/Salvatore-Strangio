import css3 from "../../../assets/images/css3.png";
import demo_ui_1 from "../../../assets/images/demo_ui_1.png";
import github from "../../../assets/images/github.png";
import html5 from "../../../assets/images/html5.png";
import javascript from "../../../assets/images/javascript.png";
import { ProjectSection } from "../../ui";

export const DemoUILogin: React.FC = () => {
    return (
        <ProjectSection
            title={"app_2_title"}
            description={"app_2_desc"}
            technologies={[
                {
                    title: "CSS3",
                    src: css3,
                    alt: "CSS3 logo",
                },
                {
                    title: "HTML5",
                    src: html5,
                    alt: "HTML5 logo",
                },
                {
                    title: "JavaScript",
                    src: javascript,
                    alt: "JavaScript logo",
                },
                {
                    title: "GitHub",
                    src: github,
                    alt: "GitHub logo",
                },
            ]}
            screenshots={[
                {
                    title: "",
                    src: demo_ui_1,
                    alt: "",
                },
            ]}
        />
    );
};
