import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from '../locales/en/en.json';
import jaTranslation from '../locales/ja/ja.json';

i18n
.use(initReactI18next)
.init({
    resources:{
        en:{
            translation: enTranslation,
        },
        ja:{
            translation: jaTranslation,
        },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation:{
        escapeValue: false,
    },
});

export default i18n;