import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from '../source/en/translation.json'
import ru from '../source/ru/translation.json'

i18n
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      resources: {
         ru: {
            translation: ru,
         },
         en: {
            translation: en,
         },
      },
      fallbackLng: 'ru',
      whitelist: ['ru', 'en'],
      debug: false,
      detection: {
         order: ['localStorage', 'cookie'],
         caches: ['localStorage', 'cookie'],
      },
      interpolation: {
         escapeValue: false,
      },
   })
export default i18n
