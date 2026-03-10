import rails from "../../../assets/images/rails.png";
import react from "../../../assets/images/react.svg";
import tokyo_dark_1 from "../../../assets/images/tokyo_dark_1.png";
import tokyo_dark_2 from "../../../assets/images/tokyo_dark_2.png";
import tokyo_light_1 from "../../../assets/images/tokyo_light_1.png";
import tokyo_light_2 from "../../../assets/images/tokyo_light_2.png";
import typescript from "../../../assets/images/typescript.png";
import vite from "../../../assets/images/vite.svg";
import { useIsThemeDark } from "../../../utils/useIsThemeDark";
import { ProjectSection } from "../../ui";

export const TokyoEvents: React.FC = () => {
    const isThemeDark = useIsThemeDark();

    let img_1 = tokyo_light_1;
    let img_2 = tokyo_light_2;

    if (isThemeDark) {
        img_1 = tokyo_dark_1;
        img_2 = tokyo_dark_2;
    }

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
                    src: img_1,
                    alt: "",
                },
                {
                    title: "",
                    src: img_2,
                    alt: "",
                },
            ]}
        />
    );
};
