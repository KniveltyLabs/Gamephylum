import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import cn from "./cn.json";
import en from "./en.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en,
      },
      cn: {
        translation: cn,
      },
    },
    lng: localStorage.getItem("lang") || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
