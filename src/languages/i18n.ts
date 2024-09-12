import i18next from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import english from './english'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: english,
    },
    react: {
      useSuspense: false,
    },
    supportedLngs: ['en', 'es'],
    detection: {
      order: ['navigator'],
    },
  })
export default i18next
