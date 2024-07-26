import React from 'react';
import { withLocalize, Translate } from 'react-localize-redux';
import { useLocalize } from './hooks/useLocalize';
import ExampleComponent from './components/ExampleComponent';

const AppComponent = ({ initialize, addTranslationForLanguage, setActiveLanguage }) => {
  const { handleLanguageChange } = useLocalize(initialize, addTranslationForLanguage);

  return (
    <div>
      <h1><Translate id="hello" /></h1>
      <h1><Translate id="goodbye" /></h1>
      <button onClick={() => handleLanguageChange(setActiveLanguage, 'en')}>English</button>
      <button onClick={() => handleLanguageChange(setActiveLanguage, 'fr')}>French</button>
      <ExampleComponent />
    </div>
  );
};

const App = withLocalize(AppComponent);

export default App;