let i18n;

if (process.env.NODE_ENV === 'test') {
  i18n = require('./i18n-test').default;
} else {
  i18n = require('./i18n').default;
}

export default i18n;
