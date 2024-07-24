// src/components/MyComponent.jsx
import React  from 'react';
import { Translate, withLocalize } from 'react-localize-redux';
//import { LanguageContext } from '../contexts/LanguageContext';

const onMissingTranslation = ({ translationId, languageCode }) => {
    return `Missing translation for ${translationId} in ${languageCode}`;
};

const MyComponent = () => {

  return (
    <div>
      <Translate id="hello" options={{ onMissingTranslation }} /> {/* Displays "Hello" in the active language */}
      <br />
      <Translate id="goodbye" /> {/* Displays "Goodbye" in the active language */} 

      <br />
    </div>
  );
};

export default withLocalize(MyComponent);