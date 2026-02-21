import rails from "../../../assets/images/rails.png";
import react from "../../../assets/images/react.svg";
import tokyo_events_1 from "../../../assets/images/tokyo_events_1.png";
import tokyo_events_2 from "../../../assets/images/tokyo_events_2.png";
import typescript from "../../../assets/images/typescript.png";
import vite from "../../../assets/images/vite.svg";
import { ProjectSection } from "../../ui";

export const TokyoEvents = () => {
    return (
        <ProjectSection
            title={"app_4_title"}
            description={"app_4_desc"}
            technologies={[
                {
                    title: "Vite",
                    src: vite,
                    alt: "Vite logo",
                },
                {
                    title: "React",
                    src: react,
                    alt: "React logo",
                },
                {
                    title: "TypeScript",
                    src: typescript,
                    alt: "TypeScript logo",
                },
                {
                    title: "Ruby on Rails",
                    src: rails,
                    alt: "Ruby on Rails logo",
                },
            ]}
            screenshots={[
                {
                    title: "",
                    src: tokyo_events_1,
                    alt: "",
                },
                {
                    title: "",
                    src: tokyo_events_2,
                    alt: "",
                },
            ]}
        />
    );
};
