import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Quikko!",
      cart: "My Cart",
      search: "Search for stationery...",
      categories: "Categories",
    },
  },
  fr: {
    translation: {
      welcome: "Bienvenue à Quikko!",
      cart: "Mon panier",
      search: "Rechercher des fournitures...",
      categories: "Catégories",
    },
  },
  hi: {
    translation: {
      welcome: "क्विक्को में आपका स्वागत है!",
      cart: "मेरा कार्ट",
      search: "स्टेशनरी खोजें...",
      categories: "श्रेणियाँ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
