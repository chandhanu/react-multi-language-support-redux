import _ from 'lodash';

const languageOptions = [
  { name: 'English', code: 'en' },
  { name: 'French', code: 'fr' },
];

const getLocalizeOptions = (languages) => ({
  languages: _.map(languages, (code) => ({ code, name: _.find(languageOptions, { code }).name })),
  options: {
    renderToStaticMarkup: false,
  },
});

export { getLocalizeOptions };