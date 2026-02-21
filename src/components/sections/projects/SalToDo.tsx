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
import { ImageSticker, ProjectSection } from "../../ui";

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
        <ProjectSection
            title={"app_1_title"}
            description={"app_1_desc"}
            technologies={[
                {
                    title: "Ruby on Rails",
                    src: rails,
                    alt: "Ruby on Rails Logo",
                },
                {
                    title: "Railway",
                    src: railway,
                    alt: "Railway Logo",
                },
                {
                    title: "React",
                    src: react,
                    alt: "React Logo",
                },
                {
                    title: "TypeScript",
                    src: typescript,
                    alt: "TypeScript Logo",
                },
                {
                    title: "Adobe",
                    src: adobe,
                    alt: "Adobe Logo",
                },
                {
                    title: "Netlify",
                    src: netlify,
                    alt: "Netlify Logo",
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
