import { createI18n } from "vue-i18n";
import zh from "./zh.json";
import en from "./en.json";

const i18n = createI18n<false>({
  legacy: false,
  locale: localStorage.getItem("lang") || "zh",
  fallbackLocale: "zh",
  messages: {
    zh: zh,
    en: en,
  },
});

export default i18n;
