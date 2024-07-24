// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { localizeReducer, initialize, setActiveLanguage, addTranslationForLanguage } from 'react-localize-redux'; 
import { thunk } from 'redux-thunk'; // Use named import for thunk
import rootReducer from './index';
import { renderToStaticMarkup } from 'react-dom/server';
import enTranslations from '../translations/en.json';
import frTranslations from '../translations/fr.json';

const translations_map = {
    en: enTranslations,
    fr: frTranslations,
    // Add more languages here if needed
};

const reducer = combineReducers({
  ...rootReducer,
  locale: localizeReducer,
});

//const store = createStore(reducer, applyMiddleware(thunk));
const store = createStore(reducer, applyMiddleware(thunk));

// Initialize languages with renderToStaticMarkup
store.dispatch(initialize({
    languages: [
        { name: 'English', code: 'en' },
        { name: 'French', code: 'fr' },
        // { name: 'Spanish', code: 'es' } // Uncomment if Spanish translations are available
    ],
    options: {
        renderToStaticMarkup,
        defaultLanguage: 'en',
    }
}));

// Load translation data dynamically
const loadTranslations = (lang) => {
  return (dispatch) => {
    try {
      console.log('Loaded translations for', lang, translations_map[lang]);
      dispatch(addTranslationForLanguage(translations_map[lang], lang));
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  };
};

// Set the default active language and load its translations
const activeLanguage = 'en'; // Default active language
store.dispatch(setActiveLanguage(activeLanguage));
store.dispatch(loadTranslations(activeLanguage));

export { loadTranslations, setActiveLanguage };
export default store;
