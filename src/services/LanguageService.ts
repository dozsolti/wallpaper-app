import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import en from "../translations/en.json";
import hu from "../translations/hu.json";
import StorageService, { STORAGE_KEYS } from "./StorageService";

class LanguageService {
  async init() {
    i18n.use(initReactI18next).init({
      compatibilityJSON: "v3",
      resources: {
        en,
        hu,
      },
      lng:
        (await StorageService.getItem(STORAGE_KEYS.LANGUAGE)) ||
        Localization.locale ||
        "en",
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
  }

  setLanguage(lang: string) {
    i18n.changeLanguage(lang);
    StorageService.setItem(STORAGE_KEYS.LANGUAGE, lang);
  }
  t(label: string) {
    return i18n.t(label);
  }

  get currentLanguage() {
    return i18n.language;
  }
  get languages() {
    return Object.entries(i18n.store.data).map(([lang, labels]) => {
      const translation: any = labels.translation;
      return { id: lang, name: translation.languageName ?? lang };
    });
  }
}
export default new LanguageService();
