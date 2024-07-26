import { useCallback } from 'react';

export const useLocalize = (initialize, addTranslationForLanguage) => {
  const handleLanguageChange = useCallback((setActiveLanguage, language) => {
    setActiveLanguage(language);
  }, []);

  return { handleLanguageChange };
};