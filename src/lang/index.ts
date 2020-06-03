import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en_message from "./en/message.json";

import "moment/locale/id";

// add lazy load for languages
const resources = {
  en: {
    translation: {
      lng: "English",
      locale: "en",
      message: en_message,
    },
  },
  id: {
    translation: {
      lng: "Bahasa Indonesia",
      locale: "id",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
