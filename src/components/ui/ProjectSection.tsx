import { useTranslation } from "react-i18next";
import { ImageSticker } from "./ImageSticker";

type Img = { title: string; src: string; alt: string };

interface Props {
    title: string;
    subtitle?: string;
    description: string;
    technologies: Img[];
    screenshots: Img[];
}

export const ProjectSection: React.FC<Props> = ({
    title,
    subtitle,
    description,
    technologies,
    screenshots,
}) => {
    const { t } = useTranslation();

    return (
        <li>
            <div className="mb-2 grid gap-2 sm:grid-cols-[auto_1fr]">
                <div>
                    <h3>{t(title)}</h3>
                    {subtitle && <p className="text-sm">{t(subtitle)}</p>}
                </div>
                <div className="col-span-full flex items-center justify-around gap-4 xs:col-span-1 xs:justify-end">
                    {technologies.map(({ title, src, alt }) => (
                        <img
                            key={src}
                            title={title}
                            src={src}
                            alt={alt}
                            className={`sticker aspect-square ${subtitle ? "h-8" : "h-6"} transition-all hover:scale-105`}
                        />
                    ))}
                </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <p className="t text-justify">{t(description)}</p>
                <div className="space-y-4 pt-2">
                    {screenshots.map(({ src }) => (
                        <ImageSticker
                            key={src}
                            src={src}
                            alt={`${t(title)} - ${t("screenshot")}`}
                            className="mt-2"
                        />
                    ))}
                </div>
            </div>
        </li>
    );
};
