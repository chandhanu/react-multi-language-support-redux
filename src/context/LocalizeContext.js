// src/context/LocalizeContext.js
import React, { useEffect, useState } from 'react';
import { LocalizeProvider, withLocalize } from 'react-localize-redux';
import _ from 'lodash';
import translations from '../translations';
import { getLocalizeOptions } from '../translations/config';

const LocalizeWrapper = ({ initialize, addTranslationForLanguage, children }) => {
  const [localizeInitialized, setLocalizeInitialized] = useState(false);

  useEffect(() => {
    if (!localizeInitialized) {
      initialize(getLocalizeOptions(['en', 'fr', 'es']));

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

export const LocalizeProviderWrapper = ({ children }) => (
  <LocalizeProvider>
    <LocalizeWrapperWithLocalize>{children}</LocalizeWrapperWithLocalize>
  </LocalizeProvider>
);