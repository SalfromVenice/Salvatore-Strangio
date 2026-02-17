import i18n from "../i18n";
import { handleLangChange, updateHTMLLang } from "./text-helpers";

const languageFiles = import.meta.glob("/public/locales/*/translation.json");

export const getAvailableLanguages = () => {
    return Object.keys(languageFiles)
        .map((filePath) => {
            const match = filePath.match(/\/locales\/(.*?)\/translation.json/);
            return match ? match[1] : "";
        })
        .filter(Boolean);
};

export const handleTranslate = (lang: string) => {
    updateHTMLLang(lang);
    handleLangChange();
    setTimeout(() => {
        i18n.changeLanguage(lang);
    }, 375);
};
