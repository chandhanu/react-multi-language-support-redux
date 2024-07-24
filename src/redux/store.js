// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import { localizeReducer, initialize, setActiveLanguage, addTranslationForLanguage } from 'react-localize-redux';
import rootReducer from './index';
import { renderToStaticMarkup } from 'react-dom/server';
import enTranslations from '../translations/en.json';
import frTranslations from '../translations/fr.json';

const translations_map = {
    en: enTranslations,
    fr: frTranslations,
    // Add more languages here if needed.
};

const reducer = combineReducers({
    ...rootReducer,
    locale: localizeReducer,
});

const store = createStore(reducer);

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

export const loadTranslations = (lang) => {
    try {
        console.log('Loaded translations for', lang, translations_map[lang]);
        if (!translations_map[lang]) {
            throw new Error(`Missing translations for language: ${lang}`);
        }
        store.dispatch(addTranslationForLanguage(translations_map[lang], lang));
    } catch (error) {
        console.error('Error loading translations:', error);
    }
};

export { setActiveLanguage };
export default store;
