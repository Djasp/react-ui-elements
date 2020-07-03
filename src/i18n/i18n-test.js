import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

export default i18n
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: {
        translation: {
          'key': 'test'
        }
      }
    },
    react: {
      // globally set to wait for loaded translations in translate hoc
      wait: true,
      // exposes namespace on data-i18next-options to be used in eg. locize-editor
      // exposeNamespace: true,
      nsMode: 'fallback'
    },
    // have a common namespace used around the full app
    ns: ['uielements'],
    defaultNS: 'uielements',
    saveMissing: false,

    interpolation: {
      // not needed for react!!
      escapeValue: false
    }
  });
