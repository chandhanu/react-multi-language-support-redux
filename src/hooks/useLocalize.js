import { useState, useEffect } from 'react';

export const useLocalize = (initialize, addTranslationForLanguage) => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!initialized) {
            const languages = [
                { name: 'English', code: 'en' },
                { name: 'French', code: 'fr' }
            ];

            initialize({
                languages,
                translation: require('../translations/en.json'),
                options: { renderToStaticMarkup: false }
            });

            addTranslationForLanguage(require('../translations/fr.json'), 'fr');
            setInitialized(true);
        }
    }, [initialize, addTranslationForLanguage, initialized]);

    const handleLanguageChange = (setActiveLanguage, language) => {
        setActiveLanguage(language);
    };

    return { handleLanguageChange };
};