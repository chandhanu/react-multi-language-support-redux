import _ from 'lodash';

// Add any new languages here
const languageOptions = [
  { name: 'English', code: 'en' },
  { name: 'French', code: 'fr' },
  { name: 'Spanish', code: 'es' }, // Example of adding a new language
];

const getLocalizeOptions = (languages) => ({
  languages: _.map(languages, (code) => ({ code, name: _.find(languageOptions, { code }).name })),
  options: {
    renderToStaticMarkup: false,
  },
});

export { getLocalizeOptions };