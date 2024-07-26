import React, { useEffect, useState } from 'react';
import { LocalizeProvider, withLocalize } from 'react-localize-redux';
import _ from 'lodash';
import translations from '../translations'; // Assuming all translations are exported from an index file in translations directory

const LocalizeWrapper = ({ initialize, addTranslationForLanguage, children }) => {
  const [localizeInitialized, setLocalizeInitialized] = useState(false);

  useEffect(() => {
    console.log('initialize function:', initialize); // Add this log
    console.log('addTranslationForLanguage function:', addTranslationForLanguage); // Add this log
    if (!localizeInitialized) {
      initialize({
        languages: [
          { name: "English", code: "en" },
          { name: "French", code: "fr" },
        ],
        options: { renderToStaticMarkup: false }
      });

      _.forEach(translations, (translation, language) => {
        addTranslationForLanguage(translation, language);
      });

      setTimeout(() => setLocalizeInitialized(true), 10);
    }
  }, [localizeInitialized, initialize, addTranslationForLanguage]);

  if (!localizeInitialized) return null;

  return <>{children}</>;
};

const LocalizeWrapperWithLocalize = withLocalize(LocalizeWrapper);

const LocalizeProviderWrapper = ({ children }) => (
  <LocalizeProvider>
    <LocalizeWrapperWithLocalize>
      {children}
    </LocalizeWrapperWithLocalize>
  </LocalizeProvider>
);

export { LocalizeProviderWrapper, LocalizeWrapper };