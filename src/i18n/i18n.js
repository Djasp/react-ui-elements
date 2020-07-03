import i18n from 'i18next';
import XHR from 'i18next-xhr-backend';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';

export default i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    load: 'languageOnly',
    fallbackLng: {
      'en-US': ['en'],
      'en-GB': ['en']
    },
    debug: false,
    keySeparator: '##',
    ns: ['uielements'],
    defaultNS: 'uielements',
    backend: {
      backends: [
        // primary
        LocalStorageBackend,
        // fallback
        XHR
      ],
      backendOptions: [{
        /* below options */
      }, {
        // xhr load path for my own fallback
        loadPath: '../dist/locales/{{lng}}/{{ns}}.json'
      }]
    },
    interpolation: {
      // not needed for react!!
      escapeValue: false,
      formatSeparator: ',',
      format: function (value, format) {
        if (format === 'uppercase') {
          return value.toUpperCase();
        }
        return value;
      }
    },
    react: {
      wait: false
    }
  });
