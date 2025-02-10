import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n.use(HttpBackend) // Carica traduzioni da file JSON
    .use(LanguageDetector) // Rileva la lingua del browser
    .use(initReactI18next) // Inizializza react-i18next
    .init({
        fallbackLng: "en", // Lingua di default
        debug: true, // Mostra log di debug (disattiva in produzione)
        interpolation: {
            escapeValue: false, // React già gestisce la protezione contro XSS
        },
    });

export default i18n;
